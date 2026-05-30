'use client';
//React
import { useEffect, useState ,Fragment } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';


//print utils
import { exportTableToExcel } from '../../../MosyUtils/exportToExcel';
import { mosyPrintToPdf } from '../../../MosyUtils/hiveUtils';


//access control
import {MosyAccessControl} from "../../UiControl/MosyAccessControl"
import {MosyUIGuard } from "../../UiControl/MosyUiGuard"
import { MosySecureFilterEngine  } from "../../DataControl/MosyFilterEngine";
import { mosyBtoa, mosyUpdateUrlParam } from "../../../MosyUtils/hiveUtils";



//custom utils
import { deleteUrlParam, magicTrimText, mosyUrlParam, mosyFormatDateOnly , mosyFormatDateTime, mosyTonum , mosyToggleSelectAllTblRows , mosySelectTblRows } from '../../../MosyUtils/hiveUtils';
import { mosyFilterUrl } from '../../DataControl/MosyFilterEngine';

//list components
import {
  MosySmartDropdownActions,
  AddNewButton,
  MosyActionButton,
  MosyGridRowOptions,
  MosyPaginationUi,
  DeleteButton,
  MosyImageViewer
} from '../../UiControl/componentControl';

import MosySnackWidget from '../../../MosyUtils/MosySnackWidget';

//data
import { loadMessagesListData, popDeleteDialog, InteprateMessagesEvent  } from '../dataControl/MessagesRequestHandler';

//state management
import { useMessagesState } from '../dataControl/MessagesStateManager';

import logo from '../../../img/logo/logo.png'; // outside public!

//large text
import ReactMarkdown from 'react-markdown';

//routes manager
///handle routes
import { getApiRoutes } from '../../AppRoutes/apiRoutesHandler';

//custom fuctions
//import {  } from '../../AppCore/coreUtils';

// Use default base root (/)
const apiRoutes = getApiRoutes();
// ════════════════════════════════════════════════════════════════
// LIST PAGE FUNCTION IMPORTS
// ════════════════════════════════════════════════════════════════
// Imports from failed-messages.jsx
import {
  filterFailedMessages
} from '../logicControl/failed-messages';

// Imports from requests-automapper.jsx
import {
  viewRequests
} from '../../requests/logicControl/requests-automapper';

// Imports from staff-automapper.jsx
import {
  viewStaff
} from '../../staff/logicControl/staff-automapper';



//export list



///component access control key
export const MOSY_ACCESS_KEY = "VIEW_MESSAGES";

//live data list component

export default function MessagesList({ dataIn = {}, dataOut = {} }) {
  
  //incoming data in from parent
  const {
    customQueryStr = "",
    customProfilePath="./profile",
    showDataControlSections = true,
    parentUseEffectKey = "",
    parentStateSetters=null,
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey}
  
  //manage Messages states
  const [stateItem, stateItemSetters] = useMessagesState(settersOverrides);
  
  const localEventSignature = stateItem.localEventSignature
  const snackMessage = stateItem.snackMessage
  const snackOnDone = stateItem.snackOnDone
  
  //use route navigation system if need be
  const router = useRouter();
  
  useEffect(() => {
    
    const snackUrlAlert = mosyUrlParam("snack_alert")
    if(snackUrlAlert)
    {
      stateItemSetters.setSnackMessage(snackUrlAlert)
    }
    
    const customFilter = {
      
      ...customQueryStr,
      ...MosySecureFilterEngine("messages"),
      
    }
    
    
    loadMessagesListData(customFilter, stateItemSetters);
    
  }, [localEventSignature]);
  
  
  
  function moduleFilterManager(action = "")
  {
    
    
    if(action === "search"){
      
      //reset pagination
      mosyUpdateUrlParam(
        "qmessages_page",
        "1"
      );
      
      //set url params
      mosyFilterUrl({tableName:"messages", keyword:stateItem.messagesQuerySearchStr, reload:false})
      
      // clear input
      document.getElementById(
        "txt_messages"
      ).value = "";
      
    }
    
    if(action === "refresh")
    {
      //empty Search String
      stateItemSetters.setMessagesQuerySearchStr("");
      
      //reset pagination
      mosyUpdateUrlParam(
        "qmessages_page",
        "1"
      );
      
      
      //delete search param var
      deleteUrlParam("qmessages")
      deleteUrlParam("messages_mosyfilter")
      
      // clear input
      document.getElementById(
        "txt_messages"
      ).value = "";
      
      //refresh list
      loadMessagesListData(customQueryStr, stateItemSetters);
      
    }
    
    //refresh sign
    stateItemSetters.setLocalEventSignature(Date.now())
    
  }
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className={`col-md-12  p-0 m-0  ${showDataControlSections && ("main_list_container")}  `} style={{marginTop: "0px", paddingBottom: "0px"}}>
      <form method="post" onSubmit={()=>{mosyFilterUrl({tableName:"messages", keyword:stateItem.messagesQuerySearchStr})}} encType="multipart/form-data">
      
      {showDataControlSections && (<div className="row justify-content-end col-md-12 text-right pt-3 pb-3 data_list_section ml-0 mr-0 mb-3 border-bottom pr-0 pl-0" id="">
        <div className="col-md-6 p-0 text-left pt-3 hive_list_title">
          <h6 className="text-muted"><b> Messages </b></h6>
        </div>
        <div className="col-md-6 p-0 text-right hive_list_search_tray">
          <input type="text" id="txt_messages" name="txt_messages" className="custom-search-input form-control" placeholder="Search in Messages "
          onChange={(e) => stateItemSetters.setMessagesQuerySearchStr(e.target.value)}
          />
          <button className="custom-search-botton" id="qmessages_btn" name="qmessages_btn" type="button" onClick={() => moduleFilterManager("search")}><i className="fa fa-search mr-1"></i> Go </button>
        </div>
        <div className="col-md-12 pt-5 p-0 hive_list_search_divider" id=""></div>
        <div className="row justify-content-end m-0 p-0 col-md-12 hive_list_action_btn_tray" id="">
          <div className="col-md-5 d-none p-0 text-left hive_list_nav_left_ribbon" id="">
          </div>
          <div className="col-md-12 p-0 hive_list_nav_right_ribbon" id="">
            {/*--<navgation_buttons/>--*/}
            
            <MosyActionButton
            source="MessagesProfile"
            action="messages_DataMapQCol_filterFailedMessages_btn"
            label="Failed Messages"
            icon="exclamation-circle"
            
            onClick={()=>{
              
              filterFailedMessages({
                
                customQueryStr : customQueryStr,
                
                stateItemSetters: stateItemSetters,
                
                colName: "delivery_status",
                
                colVal: "Failed",
                
                tableName: "messages",
                
              })
              
            }}
            />
            
            
            <AddNewButton src="MessagesList" link={customProfilePath} label="New Messages" icon="plus-circle" />
            <div
            className="cpointer medium_btn border border_set btn-white hive_list_nav_refresh ml-3"
            
            onClick={() => moduleFilterManager("refresh")}
            >
            <i className="fa fa-refresh mr-1"></i> Refresh
          </div>
        </div>
      </div>
    </div> )}
    
    
    <div className="table-responsive  data-tables bottom_tbl_handler">
      
      
      <div className="text-left m-0 p-0 col-md-12">
        <div className="ml-2 cpointer badge btn_neo p-2 rounded badge-primary mb-3 tbl_print_btn"
        onClick={() => {mosyPrintToPdf({elemId : "messages_print_card", defaultTitle:"Messages"})}}
        >
        <i className="fa fa-print "></i> Print List
      </div>
      <div className="cpointer p-2 ml-2 badge rounded border border_set badge-whte mb-3 tbl_print_to_excel_btn"
      
      onClick={() => exportTableToExcel("messages_data_table", "Messages.xlsx")}
      >
      <i className="fa fa-arrow-right "></i> Export to excel
    </div>
  </div>
  <div className="col-md-12 m-0 p-0" id="messages_print_card">
    <table className="table table-hover  text-left printTarget" id="messages_data_table">
      <thead className="text-uppercase">
        <tr>
          <th scope="col">#</th>
          
          <th scope="col"><b>Request Number</b></th>
          <th scope="col"><b>Full Name</b></th>
          <th scope="col"><b>Message Type</b></th>
          <th scope="col"><b>Recipient</b></th>
          <th scope="col"><b>Message Body</b></th>
          <th scope="col"><b>Delivery Status</b></th>
          <th scope="col"><b>Sent On</b></th>
          
        </tr>
        
      </thead>
      <tbody>
        {stateItem.messagesLoading ? (
          <tr>
            <th scope="col">#</th>
            <td colSpan="8" className="text-muted">
              <h5 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-spinner fa-spin"></i> Loading Messages ...</h5>
            </td>
          </tr>
        ) : stateItem.messagesListData?.length > 0 ? (
          stateItem.messagesListData.map((listmessages_result, index) => {
            
            
            
            return(
              <Fragment key={`_row_${listmessages_result.primkey}`}>
                <tr key={listmessages_result.primkey}>
                  <td>
                    <div className="table_cell_dropdown">
                      <div className="table_cell_dropbtn">
                        
                        <b>{listmessages_result.row_count}</b></div>
                        <div className="table_cell_dropdown-content">
                          <MosySmartDropdownActions
                          tblName="messages"
                          setters={{
                            
                            childStateSetters: stateItemSetters,
                            parentStateSetters: parentStateSetters
                            
                          }}
                          
                          attributes={`${listmessages_result.primkey}:${customProfilePath}:false`}
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          
                          />
                          
                          <MosyGridRowOptions
                          src="MessagesList"
                          action="_request_details"
                          label=" Request Details"
                          icon="list "
                          dataIn={() => viewRequests({childCol:`recordId`,parentColVal:listmessages_result.request_id,parentName:listmessages_result.message_type})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                          <MosyGridRowOptions
                          src="MessagesList"
                          action="_staff_details"
                          label=" Staff Details"
                          icon="list "
                          dataIn={() => viewStaff({childCol:`recordId`,parentColVal:listmessages_result.staff_id,parentName:listmessages_result.message_type})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                        </div>
                      </div>
                    </td>
                    
                    <td scope="col"><span title={listmessages_result.request_id}>{magicTrimText(listmessages_result._requests_request_number_request_id, 70)}</span></td>
                    <td scope="col"><span title={listmessages_result.staff_id}>{magicTrimText(listmessages_result._staff_full_name_staff_id, 70)}</span></td>
                    <td scope="col"><span title={listmessages_result.message_type}>{magicTrimText(listmessages_result.message_type, 70)}</span></td>
                    <td scope="col"><span title={listmessages_result.recipient}>{magicTrimText(listmessages_result.recipient, 70)}</span></td>
                    <td scope="col"><span>
                      <ReactMarkdown>
                        
                        {magicTrimText(listmessages_result.message_body, 70)}
                        
                      </ReactMarkdown>
                    </span></td>
                    <td scope="col"><span title={listmessages_result.delivery_status}>{magicTrimText(listmessages_result.delivery_status, 70)}</span></td>
                    <td scope="col"><span title={listmessages_result.sent_on}>{mosyFormatDateTime(listmessages_result.sent_on)}</span></td>
                    
                  </tr>
                  
                  
                </Fragment>)
                
              })
              
            ) : (
              
              <tr><td colSpan="8" className="text-muted">
                
                
                <div className="col-md-12 text-center mt-4">
                  <h6 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-search"></i> Sorry, no messages records found</h6>
                  
                  <AddNewButton src="MessagesList"  link={customProfilePath} label="New Messages" icon="plus-circle" />
                  <div className="col-md-12 pt-5 " id=""></div>
                </div>
              </td></tr>
              
            )}
            
            <tr className="bg-light">
              <th></th>
              
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              
            </tr>
          </tbody>
          
        </table>
      </div>
      <MosyPaginationUi
      src="MessagesList"
      tblName="messages"
      totalPages={stateItem.messagesListPageCount}
      stateItemSetters={stateItemSetters}
      />
    </div>
    
    
  </form>
  {/* snack notifications -- */}
  {snackMessage &&(
    <MosySnackWidget
    content={snackMessage}
    duration={5000}
    type="custom"
    onDone={() => {
      stateItemSetters.setSnackMessage("");
      stateItem.snackOnDone(); // Run whats inside onDone
      deleteUrlParam("snack_alert")
    }}
    
    />)}
    {/* snack notifications -- */}
  </div>
);

}

