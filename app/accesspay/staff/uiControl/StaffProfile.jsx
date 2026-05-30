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
import { inteprateStaffFormAction, staffProfileData , popDeleteDialog, InteprateStaffEvent } from '../dataControl/StaffRequestHandler';

//state management
import { useStaffState } from '../dataControl/StaffStateManager';

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
import {InteprateApprovalsEvent} from '../../approvals/dataControl/ApprovalsRequestHandler';
import ApprovalsList from '../../approvals/uiControl/ApprovalsList';
import {InteprateDisbursementsEvent} from '../../disbursements/dataControl/DisbursementsRequestHandler';
import DisbursementsList from '../../disbursements/uiControl/DisbursementsList';
import {IntepratePaymentsEvent} from '../../payments/dataControl/PaymentsRequestHandler';
import PaymentsList from '../../payments/uiControl/PaymentsList';
import {InteprateMessagesEvent} from '../../messages/dataControl/MessagesRequestHandler';
import MessagesList from '../../messages/uiControl/MessagesList';
import RequestsProfile from '../../requests/uiControl/RequestsProfile';
import ApprovalsProfile from '../../approvals/uiControl/ApprovalsProfile';
import DisbursementsProfile from '../../disbursements/uiControl/DisbursementsProfile';
import PaymentsProfile from '../../payments/uiControl/PaymentsProfile';
import MessagesProfile from '../../messages/uiControl/MessagesProfile';
// ════════════════════════════════════════════════════════════════
// PROFILE PAGE FUNCTION IMPORTS
// ════════════════════════════════════════════════════════════════
// Imports from activate-staff.jsx
import {
  activateStaff
} from '../logicControl/activate-staff';

// Imports from record-advance.jsx
import {
  recordAdvance
} from '../logicControl/record-advance';

// Imports from suspend-staff.jsx
import {
  suspendStaff
} from '../logicControl/suspend-staff';

// Imports from adjust-limit.jsx
import {
  adjustAdvanceLimit
} from '../logicControl/adjust-limit';

// Imports from requests-automapper.jsx
import {
  viewRequests
} from '../../requests/logicControl/requests-automapper';

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
export const MOSY_ACCESS_KEY = "MANAGE_STAFF";

//live data detial / profile component

export default function StaffProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="StaffMainProfilePage",
    parentProfileItemId = "StaffProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Staff states
  const [stateItem, stateItemSetters] = useStaffState(settersOverrides);
  const staffNode = stateItem.staffNode
  
  // -- basic states --//
  const paramStaffUptoken  = stateItem.staffUptoken
  const staffActionStatus = stateItem.staffActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setStaffNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postStaffFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateStaffFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postStaffFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("StaffProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    staffProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  //setRequestsCustomProfileQuery Script
  const setRequestsCustomProfileQuery = stateItemSetters.setRequestsCustomProfileQuery;
  const requestsCustomProfileQuery =  stateItem.requestsCustomProfileQuery;
  
  useEffect(() => {
    if (staffNode?.primkey && setRequestsCustomProfileQuery) {
      
      const query = {staffId:btoa(staffNode?.record_id)    };
      
      const tokenUrl = mosyUrlParam("requests_dataNode")
      
      if(!tokenUrl)
      {
        setRequestsCustomProfileQuery(query);
      }
      
    }
  }, [staffNode, setRequestsCustomProfileQuery]);
  
  //setApprovalsCustomProfileQuery Script
  const setApprovalsCustomProfileQuery = stateItemSetters.setApprovalsCustomProfileQuery;
  const approvalsCustomProfileQuery =  stateItem.approvalsCustomProfileQuery;
  
  useEffect(() => {
    if (staffNode?.primkey && setApprovalsCustomProfileQuery) {
      
      const query = {staffId:btoa(staffNode?.record_id)        };
      
      const tokenUrl = mosyUrlParam("approvals_dataNode")
      
      if(!tokenUrl)
      {
        setApprovalsCustomProfileQuery(query);
      }
      
    }
  }, [staffNode, setApprovalsCustomProfileQuery]);
  
  //setDisbursementsCustomProfileQuery Script
  const setDisbursementsCustomProfileQuery = stateItemSetters.setDisbursementsCustomProfileQuery;
  const disbursementsCustomProfileQuery =  stateItem.disbursementsCustomProfileQuery;
  
  useEffect(() => {
    if (staffNode?.primkey && setDisbursementsCustomProfileQuery) {
      
      const query = {staffId:btoa(staffNode?.record_id)            };
      
      const tokenUrl = mosyUrlParam("disbursements_dataNode")
      
      if(!tokenUrl)
      {
        setDisbursementsCustomProfileQuery(query);
      }
      
    }
  }, [staffNode, setDisbursementsCustomProfileQuery]);
  
  //setPaymentsCustomProfileQuery Script
  const setPaymentsCustomProfileQuery = stateItemSetters.setPaymentsCustomProfileQuery;
  const paymentsCustomProfileQuery =  stateItem.paymentsCustomProfileQuery;
  
  useEffect(() => {
    if (staffNode?.primkey && setPaymentsCustomProfileQuery) {
      
      const query = {staffId:btoa(staffNode?.record_id)                };
      
      const tokenUrl = mosyUrlParam("payments_dataNode")
      
      if(!tokenUrl)
      {
        setPaymentsCustomProfileQuery(query);
      }
      
    }
  }, [staffNode, setPaymentsCustomProfileQuery]);
  
  //setMessagesCustomProfileQuery Script
  const setMessagesCustomProfileQuery = stateItemSetters.setMessagesCustomProfileQuery;
  const messagesCustomProfileQuery =  stateItem.messagesCustomProfileQuery;
  
  useEffect(() => {
    if (staffNode?.primkey && setMessagesCustomProfileQuery) {
      
      const query = {staffId:btoa(staffNode?.record_id)                    };
      
      const tokenUrl = mosyUrlParam("messages_dataNode")
      
      if(!tokenUrl)
      {
        setMessagesCustomProfileQuery(query);
      }
      
    }
  }, [staffNode, setMessagesCustomProfileQuery]);
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="StaffProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postStaffFormData} encType="multipart/form-data" id="staff_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  staffNode?.primkey ? (
                    
                    <span>{`Staff / ${staffNode?.staff_number}`}</span>
                    
                  ) : customProfileData?.StaffTitle ? (
                    
                    <span>{customProfileData.StaffTitle}</span>
                    
                  ) : (
                    
                    <span>New Staff</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramStaffUptoken && (
                    <DeleteButton
                    src="StaffMainProfilePage"
                    tableName="staff"
                    uptoken={paramStaffUptoken}
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
                
                
                
                {paramStaffUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="StaffProfile"
                  action="staff_DataMap_activateStaff_btn"
                  label="Activate Staff"
                  icon="check-circle"
                  
                  onClick={()=>{
                    
                    activateStaff({
                      
                      title: `Activate {{full_name}} staff member`,
                      
                      component: StaffProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "staff",
                      
                      destTable: "staff",
                      
                      fieldsetstr: 'staff_status|Active',
                      
                      profileDataNode: staffNode,
                      
                      dataInterpreter: InteprateStaffEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="StaffProfile"
                  action="staff_DataMap_recordAdvance_btn"
                  label="Record Advance"
                  icon="money"
                  
                  onClick={()=>{
                    
                    recordAdvance({
                      
                      title: `Record advance request`,
                      
                      component: RequestsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "staff",
                      
                      destTable: "requests",
                      
                      fieldsetstr: "staff:full_name|record_id:staff_id,requests:request_number|request_number:'1000'",
                      
                      profileDataNode: staffNode,
                      
                      dataInterpreter: InteprateStaffEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="StaffProfile"
                  action="staff_DataMap_suspendStaff_btn"
                  label="Suspend Staff"
                  icon="pause"
                  
                  onClick={()=>{
                    
                    suspendStaff({
                      
                      title: `Suspend {{full_name}} staff member`,
                      
                      component: StaffProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "staff",
                      
                      destTable: "staff",
                      
                      fieldsetstr: 'staff_status|Suspended',
                      
                      profileDataNode: staffNode,
                      
                      dataInterpreter: InteprateStaffEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="StaffProfile"
                  action="staff_DataMap_adjustAdvanceLimit_btn"
                  label="Adjust Limit"
                  icon="money"
                  
                  onClick={()=>{
                    
                    adjustAdvanceLimit({
                      
                      title: `Adjust advance limit`,
                      
                      component: StaffProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "staff",
                      
                      destTable: "staff",
                      
                      fieldsetstr: 'advance_limit|,limit_adjustment_reason|',
                      
                      profileDataNode: staffNode,
                      
                      dataInterpreter: InteprateStaffEvent
                      
                    })
                    
                  }}
                  />
                  
                  <div className="position-relative d-inline-block mr-2">
                    
                    <MosyActionButton
                    source="StaffProfile"
                    action="more_profile_action_btn"
                    label="More..."
                    icon="ellipsis-v"
                    
                    onClick={(e)=>{
                      
                      const node = document.getElementById("Staff_more_profile_actions");
                      
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
                    id="Staff_more_profile_actions"
                    
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
                        staffNode?.primkey ? (
                          
                          <span>{`Staff / ${staffNode?.staff_number}`}</span>
                          
                        ) : customProfileData?.StaffTitle ? (
                          
                          <span>{customProfileData.StaffTitle}</span>
                          
                        ) : (
                          
                          <span>New Staff</span>
                          
                        )}
                        - advanced options
                        
                      </h6>
                      
                      <button
                      type="button"
                      aria-label="Close"
                      
                      onClick={()=>{
                        document.getElementById("Staff_more_profile_actions").style.display = "none";
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
                    document.getElementById("Staff_more_profile_actions").style.display = "none";
                  }}
                  >
                  
                  <div className="row m-0 align-items-center">
                    
                    
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="StaffProfile"
                      action="view_advance_requests_profile_action_btn"
                      label="View Advance Requests"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="StaffProfile"
                      action="view_approval_records_profile_action_btn"
                      label="View Approval Records"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="StaffProfile"
                      action="view_disbursements_profile_action_btn"
                      label="View Disbursements"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="StaffProfile"
                      action="view_recoveries_profile_action_btn"
                      label="View Recoveries"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})
                        
                      }}
                      />
                    </div>
                    <div className="col-auto p-1">
                      
                      <MosyActionButton
                      source="StaffProfile"
                      action="view_messages_profile_action_btn"
                      label="View Messages"
                      icon="list"
                      
                      onClick={()=>{
                        
                        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})
                        
                      }}
                      />
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          </>
        )}
        
        {paramStaffUptoken && showNavigationIsle && (
          <>
          
          <DeleteButton
          src="StaffMainProfilePage"
          tableName="staff"
          uptoken={paramStaffUptoken}
          stateItemSetters={stateItemSetters}
          parentStateSetters={parentStateSetters}
          router={router}
          onDelete={popDeleteDialog}
          />
          
          
          <AddNewButton
          src="StaffMainProfilePage"
          tableName="staff"
          link="./profile"
          label="New Staff"
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
            
            <MosySmartField
            module="staff"
            field="full_name"
            label="Full Name"
            value={staffNode?.full_name || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="staff"
            field="staff_number"
            label="Staff Number"
            value={staffNode?.staff_number || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="staff"
            field="phone_number"
            label="Phone Number"
            value={staffNode?.phone_number || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="staff"
            field="email_address"
            label="Email Address"
            value={staffNode?.email_address || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label className="d-none">Department</label>
              
              <SmartDropdown
              apiEndpoint={apiRoutes.staff.base}
              idField="primkey"
              labelField="department"
              inputName="department"
              label="Department"
              onSelect={(val) => console.log('Selected:', val)}
              defaultValue={staffNode?.department || ""}
              />
            </div>
            
            
            <MosySmartField
            module="staff"
            field="position"
            label="Position"
            value={staffNode?.position || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="staff"
            field="advance_limit"
            label="Advance Limit"
            value={staffNode?.advance_limit || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
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
            module="staff"
            field="current_outstanding_balance"
            label="Current Outstanding Balance"
            value={staffNode?.current_outstanding_balance || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="text"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <div className="form-group col-md-4 hive_data_cell ">
              <label >Staff Status</label>
              
              <select name="staff_status" id="staff_status" className="form-control">
                <option  value={staffNode?.staff_status || ""}>{staffNode?.staff_status || "Select Staff Status"}</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
                
              </select>
            </div>
            
            
            <MosySmartField
            module="staff"
            field="registered_on"
            label="Registered On"
            value={staffNode?.registered_on || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <MosySmartField
            module="staff"
            field="created_at"
            label="Created At"
            value={staffNode?.created_at || ""}
            onChange={handleInputChange}
            context={{ hostParent: hostParent  }}
            inputOverrides={{}}
            type="datetime-local"
            cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
            />
            
            
            <input className="form-control" id="updated_at" name="updated_at" value={staffNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
            
          </div>
          
          <div className="col-md-12 text-center">
            <SubmitButtons
            src="StaffMainProfilePage"
            tblName="staff"
            extraClass="optional-custom-class"
            
            />
          </div>
        </div></div>
        {/*    Input cells section isle      */}
      </div>
      
      <section className="hive_control">
        <input type="hidden" id="staff_dataNode" name="staff_dataNode" value={paramStaffUptoken}/>
        <input type="hidden" id="staff_mosy_action" name="staff_mosy_action" value={staffActionStatus}/>
      </section>
      
      
    </div>
    
  </form>
  
  
  <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
    {/*<hive_mini_list/>*/}
    
    {staffNode?.primkey && (
      <MosyProfileSection
      title={`Advance Requests`}
      source="staff_RequestsProfile"
      component={RequestsProfile}
      table="staff"
      key={`RequestsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : requestsCustomProfileQuery,
        hostParent : "StaffProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _staff_full_name_staff_id:staffNode?.full_name,
          staff_id:staffNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateRequestsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {staffNode?.primkey && (
      <MosyProfileSection
      title={`Approval Records`}
      source="staff_ApprovalsProfile"
      component={ApprovalsProfile}
      table="staff"
      key={`ApprovalsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : approvalsCustomProfileQuery,
        hostParent : "StaffProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _staff_full_name_staff_id:staffNode?.full_name,
          staff_id:staffNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateApprovalsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {staffNode?.primkey && (
      <MosyProfileSection
      title={`Disbursements`}
      source="staff_DisbursementsProfile"
      component={DisbursementsProfile}
      table="staff"
      key={`DisbursementsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : disbursementsCustomProfileQuery,
        hostParent : "StaffProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _staff_full_name_staff_id:staffNode?.full_name,
          staff_id:staffNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateDisbursementsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {staffNode?.primkey && (
      <MosyProfileSection
      title={`Recoveries`}
      source="staff_PaymentsProfile"
      component={PaymentsProfile}
      table="staff"
      key={`PaymentsProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : paymentsCustomProfileQuery,
        hostParent : "StaffProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _staff_full_name_staff_id:staffNode?.full_name,
          staff_id:staffNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: IntepratePaymentsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    {staffNode?.primkey && (
      <MosyProfileSection
      title={`Messages`}
      source="staff_MessagesProfile"
      component={MessagesProfile}
      table="staff"
      key={`MessagesProfile-${localEventSignature}`}
      dataIn={{
        
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        customQueryStr : messagesCustomProfileQuery,
        hostParent : "StaffProfile",
        parentProfileItemId : activeScrollId,
        customProfileData : {
          _staff_full_name_staff_id:staffNode?.full_name,
          staff_id:staffNode?.record_id
        }
        
      }}
      
      dataOut={{
        
        setChildDataOut: InteprateMessagesEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
        
      }}
      />
      
    )}
    
    
    {staffNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../requests/list?staff_mosyfilter=${btoa(`{staffId:btoa(staffNode?.record_id)    }`)}`}
      title={`Advance Requests`}
      source="staff_RequestsList"
      component={RequestsList}
      table="staff"
      key={`RequestsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {staffId:btoa(staffNode?.record_id)    },
        customProfilePath:"../requests/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateRequestsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {staffNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../approvals/list?staff_mosyfilter=${btoa(`{staffId:btoa(staffNode?.record_id)        }`)}`}
      title={`Approval Records`}
      source="staff_ApprovalsList"
      component={ApprovalsList}
      table="staff"
      key={`ApprovalsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {staffId:btoa(staffNode?.record_id)        },
        customProfilePath:"../approvals/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateApprovalsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {staffNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../disbursements/list?staff_mosyfilter=${btoa(`{staffId:btoa(staffNode?.record_id)            }`)}`}
      title={`Disbursements`}
      source="staff_DisbursementsList"
      component={DisbursementsList}
      table="staff"
      key={`DisbursementsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {staffId:btoa(staffNode?.record_id)            },
        customProfilePath:"../disbursements/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: InteprateDisbursementsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {staffNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../payments/list?staff_mosyfilter=${btoa(`{staffId:btoa(staffNode?.record_id)                }`)}`}
      title={`Recoveries`}
      source="staff_PaymentsList"
      component={PaymentsList}
      table="staff"
      key={`PaymentsList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {staffId:btoa(staffNode?.record_id)                },
        customProfilePath:"../payments/profile"
        
      }}
      
      dataOut={{
        setChildDataOut: IntepratePaymentsEvent,
        setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
      }}
      />
    )}
    
    {staffNode?.primkey && (
      <MosyProfileSection
      viewAllLink={`../messages/list?staff_mosyfilter=${btoa(`{staffId:btoa(staffNode?.record_id)                    }`)}`}
      title={`Messages`}
      source="staff_MessagesList"
      component={MessagesList}
      table="staff"
      key={`MessagesList-${localEventSignature}`}
      dataIn={{
        parentStateSetters : stateItemSetters,
        parentUseEffectKey : localEventSignature,
        showNavigationIsle:false,
        showDataControlSections:false,
        customQueryStr : {staffId:btoa(staffNode?.record_id)                    },
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

