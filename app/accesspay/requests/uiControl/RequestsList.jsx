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
import { loadRequestsListData, popDeleteDialog, InteprateRequestsEvent  } from '../dataControl/RequestsRequestHandler';

//state management
import { useRequestsState } from '../dataControl/RequestsStateManager';

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
// Imports from pending-requests.jsx
import {
  filterPendingRequests
} from '../logicControl/pending-requests';

// Imports from approved-requests.jsx
import {
  filterApprovedRequests
} from '../logicControl/approved-requests';

// Imports from outstanding-requests.jsx
import {
  filterOutstandingRequests
} from '../logicControl/outstanding-requests';

// Imports from staff-automapper.jsx
import {
  viewStaff
} from '../../staff/logicControl/staff-automapper';

// Imports from approvals-automapper.jsx
import {
  viewApprovals
} from '../../approvals/logicControl/approvals-automapper';

// Imports from disbursements-automapper.jsx
import {
  viewDisbursements
} from '../../disbursements/logicControl/disbursements-automapper';

// Imports from payments-automapper.jsx
import {
  viewPayments
} from '../../payments/logicControl/payments-automapper';

// Imports from messages-automapper.jsx
import {
  viewMessages
} from '../../messages/logicControl/messages-automapper';



//export list



///component access control key
export const MOSY_ACCESS_KEY = "VIEW_REQUESTS";

//live data list component

export default function RequestsList({ dataIn = {}, dataOut = {} }) {
  
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
  
  //manage Requests states
  const [stateItem, stateItemSetters] = useRequestsState(settersOverrides);
  
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
      ...MosySecureFilterEngine("requests"),
      
    }
    
    
    loadRequestsListData(customFilter, stateItemSetters);
    
  }, [localEventSignature]);
  
  
  // Compute amount_requested totals
  const sumrequests_amount_requested = stateItem.requestsListData?.reduce(
    (sum, row) => sum + Number(row.amount_requested || 0),
    0
  );
  
  // Compute amount_approved totals
  const sumrequests_amount_approved = stateItem.requestsListData?.reduce(
    (sum, row) => sum + Number(row.amount_approved || 0),
    0
  );
  
  // Compute current_balance totals
  const sumrequests_current_balance = stateItem.requestsListData?.reduce(
    (sum, row) => sum + Number(row.current_balance || 0),
    0
  );
  
  
  function moduleFilterManager(action = "")
  {
    
    
    if(action === "search"){
      
      //reset pagination
      mosyUpdateUrlParam(
        "qrequests_page",
        "1"
      );
      
      //set url params
      mosyFilterUrl({tableName:"requests", keyword:stateItem.requestsQuerySearchStr, reload:false})
      
      // clear input
      document.getElementById(
        "txt_requests"
      ).value = "";
      
    }
    
    if(action === "refresh")
    {
      //empty Search String
      stateItemSetters.setRequestsQuerySearchStr("");
      
      //reset pagination
      mosyUpdateUrlParam(
        "qrequests_page",
        "1"
      );
      
      
      //delete search param var
      deleteUrlParam("qrequests")
      deleteUrlParam("requests_mosyfilter")
      
      // clear input
      document.getElementById(
        "txt_requests"
      ).value = "";
      
      //refresh list
      loadRequestsListData(customQueryStr, stateItemSetters);
      
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
      <form method="post" onSubmit={()=>{mosyFilterUrl({tableName:"requests", keyword:stateItem.requestsQuerySearchStr})}} encType="multipart/form-data">
      
      {showDataControlSections && (<div className="row justify-content-end col-md-12 text-right pt-3 pb-3 data_list_section ml-0 mr-0 mb-3 border-bottom pr-0 pl-0" id="">
        <div className="col-md-6 p-0 text-left pt-3 hive_list_title">
          <h6 className="text-muted"><b> Requests </b></h6>
        </div>
        <div className="col-md-6 p-0 text-right hive_list_search_tray">
          <input type="text" id="txt_requests" name="txt_requests" className="custom-search-input form-control" placeholder="Search in Requests "
          onChange={(e) => stateItemSetters.setRequestsQuerySearchStr(e.target.value)}
          />
          <button className="custom-search-botton" id="qrequests_btn" name="qrequests_btn" type="button" onClick={() => moduleFilterManager("search")}><i className="fa fa-search mr-1"></i> Go </button>
        </div>
        <div className="col-md-12 pt-5 p-0 hive_list_search_divider" id=""></div>
        <div className="row justify-content-end m-0 p-0 col-md-12 hive_list_action_btn_tray" id="">
          <div className="col-md-5 d-none p-0 text-left hive_list_nav_left_ribbon" id="">
          </div>
          <div className="col-md-12 p-0 hive_list_nav_right_ribbon" id="">
            {/*--<navgation_buttons/>--*/}
            
            <MosyActionButton
            source="RequestsProfile"
            action="requests_DataMapQCol_filterPendingRequests_btn"
            label="Pending Requests"
            icon="clock-o"
            
            onClick={()=>{
              
              filterPendingRequests({
                
                customQueryStr : customQueryStr,
                
                stateItemSetters: stateItemSetters,
                
                colName: "request_status",
                
                colVal: "Pending",
                
                tableName: "requests",
                
              })
              
            }}
            />
            <MosyActionButton
            source="RequestsProfile"
            action="requests_DataMapQCol_filterApprovedRequests_btn"
            label="Approved Requests"
            icon="check-circle"
            
            onClick={()=>{
              
              filterApprovedRequests({
                
                customQueryStr : customQueryStr,
                
                stateItemSetters: stateItemSetters,
                
                colName: "request_status",
                
                colVal: "Approved",
                
                tableName: "requests",
                
              })
              
            }}
            />
            <MosyActionButton
            source="RequestsProfile"
            action="requests_DataMapQCol_filterOutstandingRequests_btn"
            label="Outstanding Advances"
            icon="exclamation-circle"
            
            onClick={()=>{
              
              filterOutstandingRequests({
                
                customQueryStr : customQueryStr,
                
                stateItemSetters: stateItemSetters,
                
                colName: "current_balance_above",
                
                colVal: "0",
                
                tableName: "requests",
                
              })
              
            }}
            />
            
            
            <AddNewButton src="RequestsList" link={customProfilePath} label="New Requests" icon="plus-circle" />
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
        onClick={() => {mosyPrintToPdf({elemId : "requests_print_card", defaultTitle:"Requests"})}}
        >
        <i className="fa fa-print "></i> Print List
      </div>
      <div className="cpointer p-2 ml-2 badge rounded border border_set badge-whte mb-3 tbl_print_to_excel_btn"
      
      onClick={() => exportTableToExcel("requests_data_table", "Requests.xlsx")}
      >
      <i className="fa fa-arrow-right "></i> Export to excel
    </div>
  </div>
  <div className="col-md-12 m-0 p-0" id="requests_print_card">
    <table className="table table-hover  text-left printTarget" id="requests_data_table">
      <thead className="text-uppercase">
        <tr>
          <th scope="col">#</th>
          
          <th scope="col"><b>Full Name</b></th>
          <th scope="col"><b>Request Number</b></th>
          <th scope="col"><b>Amount Requested</b></th>
          <th scope="col"><b>Request Reason</b></th>
          <th scope="col"><b>Amount Approved</b></th>
          <th scope="col"><b>Current Balance</b></th>
          <th scope="col"><b>Requested On</b></th>
          
        </tr>
        
      </thead>
      <tbody>
        {stateItem.requestsLoading ? (
          <tr>
            <th scope="col">#</th>
            <td colSpan="8" className="text-muted">
              <h5 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-spinner fa-spin"></i> Loading Requests ...</h5>
            </td>
          </tr>
        ) : stateItem.requestsListData?.length > 0 ? (
          stateItem.requestsListData.map((listrequests_result, index) => {
            
            
            
            return(
              <Fragment key={`_row_${listrequests_result.primkey}`}>
                <tr key={listrequests_result.primkey}>
                  <td>
                    <div className="table_cell_dropdown">
                      <div className="table_cell_dropbtn">
                        
                        <b>{listrequests_result.row_count}</b></div>
                        <div className="table_cell_dropdown-content">
                          <MosySmartDropdownActions
                          tblName="requests"
                          setters={{
                            
                            childStateSetters: stateItemSetters,
                            parentStateSetters: parentStateSetters
                            
                          }}
                          
                          attributes={`${listrequests_result.primkey}:${customProfilePath}:false`}
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          
                          />
                          
                          <MosyGridRowOptions
                          src="RequestsList"
                          action="_staff_details"
                          label=" Staff Details"
                          icon="list "
                          dataIn={() => viewStaff({childCol:`recordId`,parentColVal:listrequests_result.staff_id,parentName:listrequests_result.request_number})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                          <MosyGridRowOptions
                          src="RequestsList"
                          action="_approval_history"
                          label=" Approval History"
                          icon="list "
                          dataIn={() => viewApprovals({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                          <MosyGridRowOptions
                          src="RequestsList"
                          action="_disbursement_records"
                          label=" Disbursement Records"
                          icon="list "
                          dataIn={() => viewDisbursements({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                          <MosyGridRowOptions
                          src="RequestsList"
                          action="_recovery_records"
                          label=" Recovery Records"
                          icon="list "
                          dataIn={() => viewPayments({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                          <MosyGridRowOptions
                          src="RequestsList"
                          action="_messages"
                          label=" Messages"
                          icon="list "
                          dataIn={() => viewMessages({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})}   // only runs on click now
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          />
                        </div>
                      </div>
                    </td>
                    
                    <td scope="col"><span title={listrequests_result.staff_id}>{magicTrimText(listrequests_result._staff_full_name_staff_id, 70)}</span></td>
                    <td scope="col"><span title={listrequests_result.request_number}>{magicTrimText(listrequests_result.request_number, 70)}</span></td>
                    <td scope="col"><span>{mosyTonum(listrequests_result.amount_requested)}</span></td>
                    <td scope="col"><span>
                      <ReactMarkdown>
                        
                        {magicTrimText(listrequests_result.request_reason, 70)}
                        
                      </ReactMarkdown>
                    </span></td>
                    <td scope="col"><span>{mosyTonum(listrequests_result.amount_approved)}</span></td>
                    <td scope="col"><span>{mosyTonum(listrequests_result.current_balance)}</span></td>
                    <td scope="col"><span title={listrequests_result.requested_on}>{mosyFormatDateTime(listrequests_result.requested_on)}</span></td>
                    
                  </tr>
                  
                  
                </Fragment>)
                
              })
              
            ) : (
              
              <tr><td colSpan="8" className="text-muted">
                
                
                <div className="col-md-12 text-center mt-4">
                  <h6 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-search"></i> Sorry, no requests records found</h6>
                  
                  <AddNewButton src="RequestsList"  link={customProfilePath} label="New Requests" icon="plus-circle" />
                  <div className="col-md-12 pt-5 " id=""></div>
                </div>
              </td></tr>
              
            )}
            
            <tr className="bg-light">
              <th></th>
              
              <th scope="col"><b></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b><span>{mosyTonum(sumrequests_amount_requested)}</span></b></th>
              <th scope="col"><b></b></th>
              <th scope="col"><b><span>{mosyTonum(sumrequests_amount_approved)}</span></b></th>
              <th scope="col"><b><span>{mosyTonum(sumrequests_current_balance)}</span></b></th>
              <th scope="col"><b></b></th>
              
            </tr>
          </tbody>
          
        </table>
      </div>
      <MosyPaginationUi
      src="RequestsList"
      tblName="requests"
      totalPages={stateItem.requestsListPageCount}
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

