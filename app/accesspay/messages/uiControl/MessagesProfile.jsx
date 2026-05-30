'use client';

//React
import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
//access control
import {MosyAccessControl} from "../../UiControl/MosyAccessControl"
import {MosyUIGuard } from "../../UiControl/MosyUiGuard"


//components
import { MosyAlertCard, MosyNotify ,closeMosyModal } from  '../../../MosyUtils/ActionModals';
import MosySnackWidget from '../../../MosyUtils/MosySnackWidget';

//basic utils
import { mosyScrollTo , deleteUrlParam, mosyFormInputHandler,mosyUrlParam ,mosyTonum  } from '../../../MosyUtils/hiveUtils';

//data control and processors
import { inteprateMessagesFormAction, messagesProfileData , popDeleteDialog, InteprateMessagesEvent } from '../dataControl/MessagesRequestHandler';

//state management
import { useMessagesState } from '../dataControl/MessagesStateManager';

//profile components
import {
  SubmitButtons,
  AddNewButton,
  LiveSearchDropdown,
  MosySmartField,
  MosyActionButton,
  SmartDropdown,
  DeleteButton ,
  MosyImageViewer,
  MosyFileUploadButton
} from '../../UiControl/componentControl';

//def logo
import logo from '../../../img/logo/logo.png'; // outside public!

import MosyHtmlEditor from '../../../MosyUtils/htmlEditor'

//routes manager
///handle routes
import { getApiRoutes } from '../../AppRoutes/apiRoutesHandler';

// Use default base root (/)
const apiRoutes = getApiRoutes();

import {InteprateRequestsEvent} from '../../requests/dataControl/RequestsRequestHandler';
import RequestsList from '../../requests/uiControl/RequestsList';
import {InteprateStaffEvent} from '../../staff/dataControl/StaffRequestHandler';
import StaffList from '../../staff/uiControl/StaffList';
import RequestsProfile from '../../requests/uiControl/RequestsProfile';
import StaffProfile from '../../staff/uiControl/StaffProfile';
// ════════════════════════════════════════════════════════════════
// PROFILE PAGE FUNCTION IMPORTS
// ════════════════════════════════════════════════════════════════
// Imports from resend-message.jsx
import {
  resendMessage
} from '../logicControl/resend-message';

// Imports from mark-delivered.jsx
import {
  markDelivered
} from '../logicControl/mark-delivered';

// Imports from failed-message.jsx
import {
  markFailedMessage
} from '../logicControl/failed-message';

// Imports from requests-automapper.jsx
import {
  viewRequests
} from '../../requests/logicControl/requests-automapper';

// Imports from staff-automapper.jsx
import {
  viewStaff
} from '../../staff/logicControl/staff-automapper';



// export profile

//import minilist component manager
import { MosyProfileSection} from '../../UiControl/dataMapUiControl';


///component access control key
export const MOSY_ACCESS_KEY = "MANAGE_MESSAGES";

//live data detial / profile component

export default function MessagesProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="MessagesMainProfilePage",
    parentProfileItemId = "MessagesProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Messages states
  const [stateItem, stateItemSetters] = useMessagesState(settersOverrides);
  const messagesNode = stateItem.messagesNode
  
  // -- basic states --//
  const paramMessagesUptoken  = stateItem.messagesUptoken
  const messagesActionStatus = stateItem.messagesActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setMessagesNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postMessagesFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateMessagesFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postMessagesFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("MessagesProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    messagesProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  //setRequestsCustomProfileQuery Script
  const setRequestsCustomProfileQuery = stateItemSetters.setRequestsCustomProfileQuery;
  const requestsCustomProfileQuery =  stateItem.requestsCustomProfileQuery;
  
  useEffect(() => {
    if (messagesNode?.primkey && setRequestsCustomProfileQuery) {
      
      const query = {recordId:btoa(messagesNode?.request_id)    };
      
      const tokenUrl = mosyUrlParam("requests_dataNode")
      
      if(!tokenUrl)
      {
        setRequestsCustomProfileQuery(query);
      }
      
    }
  }, [messagesNode, setRequestsCustomProfileQuery]);
  
  //setStaffCustomProfileQuery Script
  const setStaffCustomProfileQuery = stateItemSetters.setStaffCustomProfileQuery;
  const staffCustomProfileQuery =  stateItem.staffCustomProfileQuery;
  
  useEffect(() => {
    if (messagesNode?.primkey && setStaffCustomProfileQuery) {
      
      const query = {recordId:btoa(messagesNode?.staff_id)        };
      
      const tokenUrl = mosyUrlParam("staff_dataNode")
      
      if(!tokenUrl)
      {
        setStaffCustomProfileQuery(query);
      }
      
    }
  }, [messagesNode, setStaffCustomProfileQuery]);
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="MessagesProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postMessagesFormData} encType="multipart/form-data" id="messages_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  messagesNode?.primkey ? (
                    
                    <span>{`Messages / ${messagesNode?.staff_id}`}</span>
                    
                  ) : customProfileData?.MessagesTitle ? (
                    
                    <span>{customProfileData.MessagesTitle}</span>
                    
                  ) : (
                    
                    <span>New Messages</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramMessagesUptoken && (
                    <DeleteButton
                    src="MessagesMainProfilePage"
                    tableName="messages"
                    uptoken={paramMessagesUptoken}
                    stateItemSetters={stateItemSetters}
                    parentStateSetters={parentStateSetters}
                    
                    onDelete={popDeleteDialog}
                    />
                  )}
                </div>)}</>
              </h3>
              {/*    Title isle      */}
              
              
              
              {/*    Navigation isle      */}
              <><div className="row justify-content-end m-0 p-0 col-md-12  p-3  hive_profile_navigation " id="">
                <div className="col-md-4 text-left p-0 hive_profile_nav_back_to_list_tray" id="">
                  
                  {showNavigationIsle && (
                    <>
                    <Link href={backToList} className="text-info hive_profile_nav_back_to_list "><i className="fa fa-arrow-left"></i> Back to list</Link>
                  </>
                )}
                
              </div>
              <div className="col-md-8 p-0 text-right hive_profile_nav_add_new_tray" id="">
                
                
                
                {paramMessagesUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="MessagesProfile"
                  action="messages_DataMap_resendMessage_btn"
                  label="Resend Message"
                  icon="paper-plane"
                  
                  onClick={()=>{
                    
                    resendMessage({
                      
                      title: `Resend notification`,
                      
                      component: MessagesProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "messages",
                      
                      destTable: "messages",
                      
                      fieldsetstr: 'delivery_status|Pending',
                      
                      profileDataNode: messagesNode,
                      
                      dataInterpreter: InteprateMessagesEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="MessagesProfile"
                  action="messages_DataMap_markDelivered_btn"
                  label="Mark Delivered"
                  icon="check-circle"
                  
                  onClick={()=>{
                    
                    markDelivered({
                      
                      title: `Mark message delivered`,
                      
                      component: MessagesProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "messages",
                      
                      destTable: "messages",
                      
                      fieldsetstr: 'delivery_status|Delivered',
                      
                      profileDataNode: messagesNode,
                      
                      dataInterpreter: InteprateMessagesEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="MessagesProfile"
                  action="messages_DataMap_markFailedMessage_btn"
                  label="Mark Failed"
                  icon="times-circle"
                  
                  onClick={()=>{
                    
                    markFailedMessage({
                      
                      title: `Mark message failed`,
                      
                      component: MessagesProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "messages",
                      
                      destTable: "messages",
                      
                      fieldsetstr: 'delivery_status|Failed',
                      
                      profileDataNode: messagesNode,
                      
                      dataInterpreter: InteprateMessagesEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="MessagesProfile"
                  action="view_request_details_profile_action_btn"
                  label="View Request Details"
                  icon="list"
                  
                  onClick={()=>{
                    
                    viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})
                    
                  }}
                  />
                  
                  <div className="position-relative d-inline-block mr-2">
                    
                    <MosyActionButton
                    source="MessagesProfile"
                    action="more_profile_action_btn"
                    label="More..."
                    icon="ellipsis-v"
                    
                    onClick={(e)=>{
                      
                      const node = document.getElementById("Messages_more_profile_actions");
                      
                      if(node.style.display === "block")
                      {
                        node.style.display = "none";
                      }
                      else
                      {
                        const rect = e.currentTarget.getBoundingClientRect();
                        
                        node.style.top = (rect.bottom + 8) + "px";
                        
                        node.style.display = "block";
                      }
                      
                    }}
                    />
                    
                    <div
                    id="Messages_more_profile_actions"
                    
                    style={{
                      display:"none",
                      position:"fixed",
                      left:"10%",
                      top:"20%",
                      width:"80%",
                      zIndex:"3",
                      borderRadius:"16px",
                      boxShadow:"0 8px 32px rgba(0,0,0,0.18)",
                      overflow:"hidden"
                    }}
                    
                    className="bg-white border p-0"
                    >
                    
                    <div
                    className="d-flex align-items-center justify-content-between px-3 py-2 btn-primary"
                    style={{ borderBottom:"1px solid #e5e7eb" }}
                    >
                    
                    <h6 className="m-0 fw-bold" style={{ fontSize:"0.95rem" }}>
                      
                      <i
                      className="fa fa-grid mr-2"
                      style={{ color:"#6c757d" }}
                      ></i>
                      
                      
                      {
                        messagesNode?.primkey ? (
                          
                          <span>{`Messages / ${messagesNode?.staff_id}`}</span>
                          
                        ) : customProfileData?.MessagesTitle ? (
                          
                          <span>{customProfileData.MessagesTitle}</span>
                          
                        ) : (
                          
                          <span>New Messages</span>
                          
                        )}
                        - advanced options
                        
                      </h6>
                      
                      <button
                      type="button"
                      aria-label="Close"
                      
                      onClick={()=>{
                        document.getElementById("Messages_more_profile_actions").style.display = "none";
                      }}
                      
                      style={{
                        background:"none",
                        border:"none",
                        cursor:"pointer",
                        padding:"4px 8px",
                        borderRadius:"8px",
                        fontSize:"1.1rem",
                        color:"#6c757d"
                      }}
                      >
                      
                      <i className="fa fa-times text-light"></i>
                      
                    </button>
                    
                  </div>
                  
                  <div
                  className="p-3"
                  
                  onClick={()=>{
                    document.getElementById("Messages_more_profile_actions").style.display = "none";
                  }}
                  >
                  
                  <div className="row m-0 align-items-center">
                    
                    
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="MessagesProfile"
                      action="view_staff_details_profile_action_btn"
                      label="View Staff Details"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})
                        
                      }}
                      />
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          </>
        )}
        
        {paramMessagesUptoken && showNavigationIsle && (
          <>
          
          <DeleteButton
          src="MessagesMainProfilePage"
          tableName="messages"
          uptoken={paramMessagesUptoken}
          stateItemSetters={stateItemSetters}
          parentStateSetters={parentStateSetters}
          router={router}
          onDelete={popDeleteDialog}
          />
          
          
          <AddNewButton
          src="MessagesMainProfilePage"
          tableName="messages"
          link="./profile"
          label="New Messages"
          icon="plus-circle" />
        </>
      )}
      
    </div>
  </div></>
  <div className="col-md-12 pt-4 p-0 hive_profile_navigation_divider d-lg-none" id=""></div>
  {/*    Navigation isle      */}
  <div className="row justify-content-center m-0 p-0 col-md-12" id="">
    {/*    Image section isle      */}
    
    {/*    Image section isle      */}
    
    {/*  //-------------    main content starts here  ------------------------------ */}
    
    
    
    <div className="col-md-12 row justify-content-center m-0  p-0">
      {/*    Input cells section isle      */}
      <div className="col-md-12 row p-0 justify-content-center p-0 m-0">
        <div className="col-md-12 bg-white border border_set shadow-md p-4 mb-4 hive_form_section  ">
          <h5 className="col-md-12 row p-2 justify-content-center p-0 m-0">
            <div className="col-md-3 bg-dark mb-3 mb-lg-0 mt-lg-3" style={{height: "1px"}}></div>
            <div className="col-md-5 text-center">Basic Information</div>
            <div className="col-md-4 bg-dark mt-3" style={{height: "1px"}}></div>
          </h5>
          
          <div className="col-md-12 pt-3 p-0" id=""></div>
          
          <div className="row justify-content-start col-md-12 p-0 m-0 ">
            <LiveSearchDropdown
            apiEndpoint={apiRoutes.requests.base}
            tblName="requests"
            parentTable="messages"
            inputName="_requests_request_number_request_id"
            hiddenInputName="request_id"
            valueField="record_id"
            displayField="request_number"
            label="Request Number"
            defaultValue={{ record_id: messagesNode?.request_id || "", request_number: messagesNode?._requests_request_number_request_id || "" }}
            onSelect={(id) => console.log("Just the ID:", id)}
            onSelectFull={(dataRes) =>  console.log("Data seleted")}
            onInputChange={handleInputChange}
            defaultColSize={`col-md-4 hive_data_cell  hive_data_cell ${
              customProfileData?.request_id
              ? 'd-none'
              : ''
            }`}
            context={{hostParent : hostParent}}
            />
            <LiveSearchDropdown
            apiEndpoint={apiRoutes.staff.base}
            tblName="staff"
            parentTable="messages"
            inputName="_staff_full_name_staff_id"
            hiddenInputName="staff_id"
            valueField="record_id"
            displayField="full_name"
            label="Full Name"
            defaultValue={{ record_id: messagesNode?.staff_id || "", full_name: messagesNode?._staff_full_name_staff_id || "" }}
            onSelect={(id) => console.log("Just the ID:", id)}
            onSelectFull={(dataRes) =>  console.log("Data seleted")}
            onInputChange={handleInputChange}
            defaultColSize={`col-md-4 hive_data_cell  hive_data_cell ${
              customProfileData?.staff_id
              ? 'd-none'
              : ''
            }`}
            context={{hostParent : hostParent}}
            />
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label className="d-none">Message Type</label>
              
              <SmartDropdown
              apiEndpoint={apiRoutes.messages.base}
              idField="primkey"
              labelField="message_type"
              inputName="message_type"
              label="Message Type"
              onSelect={(val) => console.log('Selected:', val)}
              defaultValue={messagesNode?.message_type || ""}
              />
            </div>
            
            
            <MosySmartField
            module="messages"
            field="recipient"
            label="Recipient"
            value={messagesNode?.recipient || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="messages"
            field="message_body"
            label="Message Body"
            value={messagesNode?.message_body || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="textarea"
            cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
            />
            
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label >Delivery Status</label>
              
              <select name="delivery_status" id="delivery_status" className="form-control">
                <option  value={messagesNode?.delivery_status || ""}>{messagesNode?.delivery_status || "Select Delivery Status"}</option>
                <option>Pending</option>
                <option>Sent</option>
                <option>Delivered</option>
                <option>Failed</option>
                
              </select>
            </div>
            
            
            <MosySmartField
            module="messages"
            field="sent_on"
            label="Sent On"
            value={messagesNode?.sent_on || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
          </div>
          
        </div>
        
        <div className="col-md-12 bg-white border border_set shadow-md p-4 mb-4 hive_form_section  ">
          <h5 className="col-md-12 row p-2 justify-content-center p-0 m-0">
            <div className="col-md-3 bg-dark mb-3 mb-lg-0 mt-lg-3" style={{height: "1px"}}></div>
            <div className="col-md-5 text-center"></div>
            <div className="col-md-4 bg-dark mt-3" style={{height: "1px"}}></div>
          </h5>
          
          <div className="col-md-12 pt-3 p-0" id=""></div>
          
          <div className="row justify-content-start col-md-12 p-0 m-0 ">
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label >Message Status</label>
              
              <select name="message_status" id="message_status" className="form-control">
                <option  value={messagesNode?.message_status || ""}>{messagesNode?.message_status || "Select Message Status"}</option>
                <option>Draft</option>
                <option>Pending</option>
                <option>Sent</option>
                <option>Delivered</option>
                <option>Failed</option>
                
              </select>
            </div>
            
            
            <MosySmartField
            module="messages"
            field="created_at"
            label="Created At"
            value={messagesNode?.created_at || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <input className="form-control" id="updated_at" name="updated_at" value={messagesNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
            
          </div>
          
          <div className="col-md-12 text-center">
            <SubmitButtons
            src="MessagesMainProfilePage"
            tblName="messages"
            extraClass="optional-custom-class"
            
            />
          </div>
        </div></div>
        {/*    Input cells section isle      */}
      </div>
      
      <section className="hive_control">
        <input type="hidden" id="messages_dataNode" name="messages_dataNode" value={paramMessagesUptoken}/>
        <input type="hidden" id="messages_mosy_action" name="messages_mosy_action" value={messagesActionStatus}/>
      </section>
      
      
    </div>
    
  </form>
  
  
  <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
    {/*<hive_mini_list/>*/}
    
    {messagesNode?.primkey && (
      <MosyProfileSection
      title={`Request Details`}
      source="messages_RequestsProfile"
      component={RequestsProfile}
      table="messages"
      key={`RequestsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : requestsCustomProfileQuery,
        hostParent : "MessagesProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _messages_message_type_record_id:messagesNode?.message_type,
          record_id:messagesNode?.request_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateRequestsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {messagesNode?.primkey && (
      <MosyProfileSection
      title={`Staff Details`}
      source="messages_StaffProfile"
      component={StaffProfile}
      table="messages"
      key={`StaffProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : staffCustomProfileQuery,
        hostParent : "MessagesProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _messages_message_type_record_id:messagesNode?.message_type,
          record_id:messagesNode?.staff_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateStaffEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    
    
    {messagesNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../requests/list?messages_mosyfilter=${btoa(`{recordId:btoa(messagesNode?.request_id)    }`)}`}
      title={`Request Details`}
      source="messages_RequestsList"
      component={RequestsList}
      table="messages"
      key={`RequestsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {recordId:btoa(messagesNode?.request_id)    },
        customProfilePath:"../requests/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateRequestsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {messagesNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../staff/list?messages_mosyfilter=${btoa(`{recordId:btoa(messagesNode?.staff_id)        }`)}`}
      title={`Staff Details`}
      source="messages_StaffList"
      component={StaffList}
      table="messages"
      key={`StaffList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {recordId:btoa(messagesNode?.staff_id)        },
        customProfilePath:"../staff/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateStaffEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
  </div>
</div>
</div>


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
  
  
  {/* ================== End Feature Section========================== ------*/}
</div>

);

}

