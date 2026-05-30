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
import { inteprateRequestsFormAction, requestsProfileData , popDeleteDialog, InteprateRequestsEvent } from '../dataControl/RequestsRequestHandler';

//state management
import { useRequestsState } from '../dataControl/RequestsStateManager';

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

import {InteprateStaffEvent} from '../../staff/dataControl/StaffRequestHandler';
import StaffList from '../../staff/uiControl/StaffList';
import {InteprateApprovalsEvent} from '../../approvals/dataControl/ApprovalsRequestHandler';
import ApprovalsList from '../../approvals/uiControl/ApprovalsList';
import {InteprateDisbursementsEvent} from '../../disbursements/dataControl/DisbursementsRequestHandler';
import DisbursementsList from '../../disbursements/uiControl/DisbursementsList';
import {IntepratePaymentsEvent} from '../../payments/dataControl/PaymentsRequestHandler';
import PaymentsList from '../../payments/uiControl/PaymentsList';
import {InteprateMessagesEvent} from '../../messages/dataControl/MessagesRequestHandler';
import MessagesList from '../../messages/uiControl/MessagesList';
import StaffProfile from '../../staff/uiControl/StaffProfile';
import ApprovalsProfile from '../../approvals/uiControl/ApprovalsProfile';
import DisbursementsProfile from '../../disbursements/uiControl/DisbursementsProfile';
import PaymentsProfile from '../../payments/uiControl/PaymentsProfile';
import MessagesProfile from '../../messages/uiControl/MessagesProfile';
// ════════════════════════════════════════════════════════════════
// PROFILE PAGE FUNCTION IMPORTS
// ════════════════════════════════════════════════════════════════
// Imports from approve-l1.jsx
import {
  approveLevel1
} from '../logicControl/approve-l1';

// Imports from approve-l2.jsx
import {
  approveLevel2
} from '../logicControl/approve-l2';

// Imports from reject-request.jsx
import {
  rejectRequest
} from '../logicControl/reject-request';

// Imports from add-payment.jsx
import {
  addPayment
} from '../logicControl/add-payment';

// Imports from add-disbursement.jsx
import {
  addDisbursement
} from '../logicControl/add-disbursement';

// Imports from mark-paid.jsx
import {
  markRequestPaid
} from '../logicControl/mark-paid';

// Imports from clear-request.jsx
import {
  clearAdvanceRequest
} from '../logicControl/clear-request';

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



// export profile

//import minilist component manager
import { MosyProfileSection} from '../../UiControl/dataMapUiControl';


///component access control key
export const MOSY_ACCESS_KEY = "MANAGE_REQUESTS";

//live data detial / profile component

export default function RequestsProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="RequestsMainProfilePage",
    parentProfileItemId = "RequestsProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Requests states
  const [stateItem, stateItemSetters] = useRequestsState(settersOverrides);
  const requestsNode = stateItem.requestsNode
  
  // -- basic states --//
  const paramRequestsUptoken  = stateItem.requestsUptoken
  const requestsActionStatus = stateItem.requestsActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setRequestsNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postRequestsFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateRequestsFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postRequestsFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("RequestsProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    requestsProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  //setStaffCustomProfileQuery Script
  const setStaffCustomProfileQuery = stateItemSetters.setStaffCustomProfileQuery;
  const staffCustomProfileQuery =  stateItem.staffCustomProfileQuery;
  
  useEffect(() => {
    if (requestsNode?.primkey && setStaffCustomProfileQuery) {
      
      const query = {recordId:btoa(requestsNode?.staff_id)    };
      
      const tokenUrl = mosyUrlParam("staff_dataNode")
      
      if(!tokenUrl)
      {
        setStaffCustomProfileQuery(query);
      }
      
    }
  }, [requestsNode, setStaffCustomProfileQuery]);
  
  //setApprovalsCustomProfileQuery Script
  const setApprovalsCustomProfileQuery = stateItemSetters.setApprovalsCustomProfileQuery;
  const approvalsCustomProfileQuery =  stateItem.approvalsCustomProfileQuery;
  
  useEffect(() => {
    if (requestsNode?.primkey && setApprovalsCustomProfileQuery) {
      
      const query = {requestId:btoa(requestsNode?.record_id)        };
      
      const tokenUrl = mosyUrlParam("approvals_dataNode")
      
      if(!tokenUrl)
      {
        setApprovalsCustomProfileQuery(query);
      }
      
    }
  }, [requestsNode, setApprovalsCustomProfileQuery]);
  
  //setDisbursementsCustomProfileQuery Script
  const setDisbursementsCustomProfileQuery = stateItemSetters.setDisbursementsCustomProfileQuery;
  const disbursementsCustomProfileQuery =  stateItem.disbursementsCustomProfileQuery;
  
  useEffect(() => {
    if (requestsNode?.primkey && setDisbursementsCustomProfileQuery) {
      
      const query = {requestId:btoa(requestsNode?.record_id)            };
      
      const tokenUrl = mosyUrlParam("disbursements_dataNode")
      
      if(!tokenUrl)
      {
        setDisbursementsCustomProfileQuery(query);
      }
      
    }
  }, [requestsNode, setDisbursementsCustomProfileQuery]);
  
  //setPaymentsCustomProfileQuery Script
  const setPaymentsCustomProfileQuery = stateItemSetters.setPaymentsCustomProfileQuery;
  const paymentsCustomProfileQuery =  stateItem.paymentsCustomProfileQuery;
  
  useEffect(() => {
    if (requestsNode?.primkey && setPaymentsCustomProfileQuery) {
      
      const query = {requestId:btoa(requestsNode?.record_id)                };
      
      const tokenUrl = mosyUrlParam("payments_dataNode")
      
      if(!tokenUrl)
      {
        setPaymentsCustomProfileQuery(query);
      }
      
    }
  }, [requestsNode, setPaymentsCustomProfileQuery]);
  
  //setMessagesCustomProfileQuery Script
  const setMessagesCustomProfileQuery = stateItemSetters.setMessagesCustomProfileQuery;
  const messagesCustomProfileQuery =  stateItem.messagesCustomProfileQuery;
  
  useEffect(() => {
    if (requestsNode?.primkey && setMessagesCustomProfileQuery) {
      
      const query = {requestId:btoa(requestsNode?.record_id)                    };
      
      const tokenUrl = mosyUrlParam("messages_dataNode")
      
      if(!tokenUrl)
      {
        setMessagesCustomProfileQuery(query);
      }
      
    }
  }, [requestsNode, setMessagesCustomProfileQuery]);
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="RequestsProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postRequestsFormData} encType="multipart/form-data" id="requests_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  requestsNode?.primkey ? (
                    
                    <span>{`Requests / ${requestsNode?.request_number}`}</span>
                    
                  ) : customProfileData?.RequestsTitle ? (
                    
                    <span>{customProfileData.RequestsTitle}</span>
                    
                  ) : (
                    
                    <span>New Requests</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramRequestsUptoken && (
                    <DeleteButton
                    src="RequestsMainProfilePage"
                    tableName="requests"
                    uptoken={paramRequestsUptoken}
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
                
                
                
                {paramRequestsUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="RequestsProfile"
                  action="requests_DataMap_approveLevel1_btn"
                  label="Approve Level 1"
                  icon="check-circle"
                  
                  onClick={()=>{
                    
                    approveLevel1({
                      
                      title: `Approve request level 1`,
                      
                      component: RequestsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "requests",
                      
                      destTable: "requests",
                      
                      fieldsetstr: 'request_status|Approved L1',
                      
                      profileDataNode: requestsNode,
                      
                      dataInterpreter: InteprateRequestsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="RequestsProfile"
                  action="requests_DataMap_approveLevel2_btn"
                  label="Approve Level 2"
                  icon="check-circle"
                  
                  onClick={()=>{
                    
                    approveLevel2({
                      
                      title: `Approve request level 2`,
                      
                      component: RequestsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "requests",
                      
                      destTable: "requests",
                      
                      fieldsetstr: 'request_status|Approved L2',
                      
                      profileDataNode: requestsNode,
                      
                      dataInterpreter: InteprateRequestsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="RequestsProfile"
                  action="requests_DataMap_rejectRequest_btn"
                  label="Reject Request"
                  icon="times-circle"
                  
                  onClick={()=>{
                    
                    rejectRequest({
                      
                      title: `Reject request`,
                      
                      component: RequestsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "requests",
                      
                      destTable: "requests",
                      
                      fieldsetstr: 'request_status|Rejected',
                      
                      profileDataNode: requestsNode,
                      
                      dataInterpreter: InteprateRequestsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="RequestsProfile"
                  action="requests_DataMap_addPayment_btn"
                  label="Record Recovery"
                  icon="undo"
                  
                  onClick={()=>{
                    
                    addPayment({
                      
                      title: `Record Recovery Payment`,
                      
                      component: PaymentsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "requests",
                      
                      destTable: "payments",
                      
                      fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id",
                      
                      profileDataNode: requestsNode,
                      
                      dataInterpreter: InteprateRequestsEvent
                      
                    })
                    
                  }}
                  />
                  
                  <div className="position-relative d-inline-block mr-2">
                    
                    <MosyActionButton
                    source="RequestsProfile"
                    action="more_profile_action_btn"
                    label="More..."
                    icon="ellipsis-v"
                    
                    onClick={(e)=>{
                      
                      const node = document.getElementById("Requests_more_profile_actions");
                      
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
                    id="Requests_more_profile_actions"
                    
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
                        requestsNode?.primkey ? (
                          
                          <span>{`Requests / ${requestsNode?.request_number}`}</span>
                          
                        ) : customProfileData?.RequestsTitle ? (
                          
                          <span>{customProfileData.RequestsTitle}</span>
                          
                        ) : (
                          
                          <span>New Requests</span>
                          
                        )}
                        - advanced options
                        
                      </h6>
                      
                      <button
                      type="button"
                      aria-label="Close"
                      
                      onClick={()=>{
                        document.getElementById("Requests_more_profile_actions").style.display = "none";
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
                    document.getElementById("Requests_more_profile_actions").style.display = "none";
                  }}
                  >
                  
                  <div className="row m-0 align-items-center">
                    
                    
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="requests_DataMap_addDisbursement_btn"
                      label="Disburse Funds"
                      icon="money"
                      
                      onClick={()=>{
                        
                        addDisbursement({
                          
                          title: `Create Disbursement`,
                          
                          component: DisbursementsProfile,
                          
                          stateitemsetters: stateItemSetters,
                          
                          parentTable: "requests",
                          
                          destTable: "disbursements",
                          
                          fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id,requests:amount_approved|amount_disbursed",
                          
                          profileDataNode: requestsNode,
                          
                          dataInterpreter: InteprateRequestsEvent
                          
                        })
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="requests_DataMap_markRequestPaid_btn"
                      label="Mark Paid"
                      icon="money"
                      
                      onClick={()=>{
                        
                        markRequestPaid({
                          
                          title: `Mark request paid`,
                          
                          component: RequestsProfile,
                          
                          stateitemsetters: stateItemSetters,
                          
                          parentTable: "requests",
                          
                          destTable: "requests",
                          
                          fieldsetstr: 'request_status|Paid',
                          
                          profileDataNode: requestsNode,
                          
                          dataInterpreter: InteprateRequestsEvent
                          
                        })
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="requests_DataMap_clearAdvanceRequest_btn"
                      label="Clear Advance"
                      icon="check-circle"
                      
                      onClick={()=>{
                        
                        clearAdvanceRequest({
                          
                          title: `Clear advance request`,
                          
                          component: RequestsProfile,
                          
                          stateitemsetters: stateItemSetters,
                          
                          parentTable: "requests",
                          
                          destTable: "requests",
                          
                          fieldsetstr: 'request_status|Cleared',
                          
                          profileDataNode: requestsNode,
                          
                          dataInterpreter: InteprateRequestsEvent
                          
                        })
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="view_staff_details_profile_action_btn"
                      label="View Staff Details"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="view_approval_history_profile_action_btn"
                      label="View Approval History"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="view_disbursement_records_profile_action_btn"
                      label="View Disbursement Records"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewDisbursements({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="view_recovery_records_profile_action_btn"
                      label="View Recovery Records"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="RequestsProfile"
                      action="view_messages_profile_action_btn"
                      label="View Messages"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})
                        
                      }}
                      />
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          </>
        )}
        
        {paramRequestsUptoken && showNavigationIsle && (
          <>
          
          <DeleteButton
          src="RequestsMainProfilePage"
          tableName="requests"
          uptoken={paramRequestsUptoken}
          stateItemSetters={stateItemSetters}
          parentStateSetters={parentStateSetters}
          router={router}
          onDelete={popDeleteDialog}
          />
          
          
          <AddNewButton
          src="RequestsMainProfilePage"
          tableName="requests"
          link="./profile"
          label="New Requests"
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
            apiEndpoint={apiRoutes.staff.base}
            tblName="staff"
            parentTable="requests"
            inputName="_staff_full_name_staff_id"
            hiddenInputName="staff_id"
            valueField="record_id"
            displayField="full_name"
            label="Full Name"
            defaultValue={{ record_id: requestsNode?.staff_id || "", full_name: requestsNode?._staff_full_name_staff_id || "" }}
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
            
            <MosySmartField
            module="requests"
            field="request_number"
            label="Request Number"
            value={requestsNode?.request_number || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="amount_requested"
            label="Amount Requested"
            value={requestsNode?.amount_requested || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="request_reason"
            label="Request Reason"
            value={requestsNode?.request_reason || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="textarea"
            cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
            />
            
            
            <MosySmartField
            module="requests"
            field="amount_approved"
            label="Amount Approved"
            value={requestsNode?.amount_approved || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="current_balance"
            label="Current Balance"
            value={requestsNode?.current_balance || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="requested_on"
            label="Requested On"
            value={requestsNode?.requested_on || ""}
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
            
            <MosySmartField
            module="requests"
            field="approved_on"
            label="Approved On"
            value={requestsNode?.approved_on || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="paid_on"
            label="Paid On"
            value={requestsNode?.paid_on || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="requests"
            field="cleared_on"
            label="Cleared On"
            value={requestsNode?.cleared_on || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label >Request Status</label>
              
              <select name="request_status" id="request_status" className="form-control">
                <option  value={requestsNode?.request_status || ""}>{requestsNode?.request_status || "Select Request Status"}</option>
                <option>Pending</option>
                <option>Approved L1</option>
                <option>Approved L2</option>
                <option>Rejected</option>
                <option>Paid</option>
                <option>Partially Cleared</option>
                <option>Cleared</option>
                
              </select>
            </div>
            
            
            <MosySmartField
            module="requests"
            field="request_remarks"
            label="Request Remarks"
            value={requestsNode?.request_remarks || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="textarea"
            cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
            />
            
            
            <MosySmartField
            module="requests"
            field="created_at"
            label="Created At"
            value={requestsNode?.created_at || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <input className="form-control" id="updated_at" name="updated_at" value={requestsNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
            
          </div>
          
          <div className="col-md-12 text-center">
            <SubmitButtons
            src="RequestsMainProfilePage"
            tblName="requests"
            extraClass="optional-custom-class"
            
            />
          </div>
        </div></div>
        {/*    Input cells section isle      */}
      </div>
      
      <section className="hive_control">
        <input type="hidden" id="requests_dataNode" name="requests_dataNode" value={paramRequestsUptoken}/>
        <input type="hidden" id="requests_mosy_action" name="requests_mosy_action" value={requestsActionStatus}/>
      </section>
      
      
    </div>
    
  </form>
  
  
  <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
    {/*<hive_mini_list/>*/}
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      title={`Staff Details`}
      source="requests_StaffProfile"
      component={StaffProfile}
      table="requests"
      key={`StaffProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : staffCustomProfileQuery,
        hostParent : "RequestsProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _requests_request_number_record_id:requestsNode?.request_number,
          record_id:requestsNode?.staff_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateStaffEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {requestsNode?.primkey && (
      <MosyProfileSection
      title={`Approval History`}
      source="requests_ApprovalsProfile"
      component={ApprovalsProfile}
      table="requests"
      key={`ApprovalsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : approvalsCustomProfileQuery,
        hostParent : "RequestsProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _requests_request_number_request_id:requestsNode?.request_number,
          request_id:requestsNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateApprovalsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {requestsNode?.primkey && (
      <MosyProfileSection
      title={`Disbursement Records`}
      source="requests_DisbursementsProfile"
      component={DisbursementsProfile}
      table="requests"
      key={`DisbursementsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : disbursementsCustomProfileQuery,
        hostParent : "RequestsProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _requests_request_number_request_id:requestsNode?.request_number,
          request_id:requestsNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateDisbursementsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {requestsNode?.primkey && (
      <MosyProfileSection
      title={`Recovery Records`}
      source="requests_PaymentsProfile"
      component={PaymentsProfile}
      table="requests"
      key={`PaymentsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : paymentsCustomProfileQuery,
        hostParent : "RequestsProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _requests_request_number_request_id:requestsNode?.request_number,
          request_id:requestsNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: IntepratePaymentsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {requestsNode?.primkey && (
      <MosyProfileSection
      title={`Messages`}
      source="requests_MessagesProfile"
      component={MessagesProfile}
      table="requests"
      key={`MessagesProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : messagesCustomProfileQuery,
        hostParent : "RequestsProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _requests_request_number_request_id:requestsNode?.request_number,
          request_id:requestsNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateMessagesEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../staff/list?requests_mosyfilter=${btoa(`{recordId:btoa(requestsNode?.staff_id)    }`)}`}
      title={`Staff Details`}
      source="requests_StaffList"
      component={StaffList}
      table="requests"
      key={`StaffList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {recordId:btoa(requestsNode?.staff_id)    },
        customProfilePath:"../staff/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateStaffEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../approvals/list?requests_mosyfilter=${btoa(`{requestId:btoa(requestsNode?.record_id)        }`)}`}
      title={`Approval History`}
      source="requests_ApprovalsList"
      component={ApprovalsList}
      table="requests"
      key={`ApprovalsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {requestId:btoa(requestsNode?.record_id)        },
        customProfilePath:"../approvals/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateApprovalsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../disbursements/list?requests_mosyfilter=${btoa(`{requestId:btoa(requestsNode?.record_id)            }`)}`}
      title={`Disbursement Records`}
      source="requests_DisbursementsList"
      component={DisbursementsList}
      table="requests"
      key={`DisbursementsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {requestId:btoa(requestsNode?.record_id)            },
        customProfilePath:"../disbursements/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateDisbursementsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../payments/list?requests_mosyfilter=${btoa(`{requestId:btoa(requestsNode?.record_id)                }`)}`}
      title={`Recovery Records`}
      source="requests_PaymentsList"
      component={PaymentsList}
      table="requests"
      key={`PaymentsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {requestId:btoa(requestsNode?.record_id)                },
        customProfilePath:"../payments/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: IntepratePaymentsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {requestsNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../messages/list?requests_mosyfilter=${btoa(`{requestId:btoa(requestsNode?.record_id)                    }`)}`}
      title={`Messages`}
      source="requests_MessagesList"
      component={MessagesList}
      table="requests"
      key={`MessagesList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {requestId:btoa(requestsNode?.record_id)                    },
        customProfilePath:"../messages/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateMessagesEvent,
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

