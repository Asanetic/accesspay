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
import { inteprateApprovalsFormAction, approvalsProfileData , popDeleteDialog, InteprateApprovalsEvent } from '../dataControl/ApprovalsRequestHandler';

//state management
import { useApprovalsState } from '../dataControl/ApprovalsStateManager';

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
// Imports from approve-record.jsx
import {
  approveRecord
} from '../logicControl/approve-record';

// Imports from reject-record.jsx
import {
  rejectApprovalRecord
} from '../logicControl/reject-record';

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
export const MOSY_ACCESS_KEY = "MANAGE_APPROVALS";

//live data detial / profile component

export default function ApprovalsProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="ApprovalsMainProfilePage",
    parentProfileItemId = "ApprovalsProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Approvals states
  const [stateItem, stateItemSetters] = useApprovalsState(settersOverrides);
  const approvalsNode = stateItem.approvalsNode
  
  // -- basic states --//
  const paramApprovalsUptoken  = stateItem.approvalsUptoken
  const approvalsActionStatus = stateItem.approvalsActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setApprovalsNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postApprovalsFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateApprovalsFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postApprovalsFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("ApprovalsProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    approvalsProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  //setRequestsCustomProfileQuery Script
  const setRequestsCustomProfileQuery = stateItemSetters.setRequestsCustomProfileQuery;
  const requestsCustomProfileQuery =  stateItem.requestsCustomProfileQuery;
  
  useEffect(() => {
    if (approvalsNode?.primkey && setRequestsCustomProfileQuery) {
      
      const query = {recordId:btoa(approvalsNode?.request_id)    };
      
      const tokenUrl = mosyUrlParam("requests_dataNode")
      
      if(!tokenUrl)
      {
        setRequestsCustomProfileQuery(query);
      }
      
    }
  }, [approvalsNode, setRequestsCustomProfileQuery]);
  
  //setStaffCustomProfileQuery Script
  const setStaffCustomProfileQuery = stateItemSetters.setStaffCustomProfileQuery;
  const staffCustomProfileQuery =  stateItem.staffCustomProfileQuery;
  
  useEffect(() => {
    if (approvalsNode?.primkey && setStaffCustomProfileQuery) {
      
      const query = {recordId:btoa(approvalsNode?.staff_id)        };
      
      const tokenUrl = mosyUrlParam("staff_dataNode")
      
      if(!tokenUrl)
      {
        setStaffCustomProfileQuery(query);
      }
      
    }
  }, [approvalsNode, setStaffCustomProfileQuery]);
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="ApprovalsProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postApprovalsFormData} encType="multipart/form-data" id="approvals_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  approvalsNode?.primkey ? (
                    
                    <span>{`Approvals / ${approvalsNode?.staff_id}`}</span>
                    
                  ) : customProfileData?.ApprovalsTitle ? (
                    
                    <span>{customProfileData.ApprovalsTitle}</span>
                    
                  ) : (
                    
                    <span>New Approvals</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramApprovalsUptoken && (
                    <DeleteButton
                    src="ApprovalsMainProfilePage"
                    tableName="approvals"
                    uptoken={paramApprovalsUptoken}
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
                
                
                
                {paramApprovalsUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="ApprovalsProfile"
                  action="approvals_DataMap_approveRecord_btn"
                  label="Approve Record"
                  icon="check-circle"
                  
                  onClick={()=>{
                    
                    approveRecord({
                      
                      title: `Approve approval record`,
                      
                      component: ApprovalsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "approvals",
                      
                      destTable: "approvals",
                      
                      fieldsetstr: 'approval_status|Approved',
                      
                      profileDataNode: approvalsNode,
                      
                      dataInterpreter: InteprateApprovalsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="ApprovalsProfile"
                  action="approvals_DataMap_rejectApprovalRecord_btn"
                  label="Reject Record"
                  icon="times-circle"
                  
                  onClick={()=>{
                    
                    rejectApprovalRecord({
                      
                      title: `Reject approval record`,
                      
                      component: ApprovalsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "approvals",
                      
                      destTable: "approvals",
                      
                      fieldsetstr: 'approval_status|Rejected',
                      
                      profileDataNode: approvalsNode,
                      
                      dataInterpreter: InteprateApprovalsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="ApprovalsProfile"
                  action="view_request_details_profile_action_btn"
                  label="View Request Details"
                  icon="list"
                  
                  onClick={()=>{
                    
                    viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})
                    
                  }}
                  />
                  <MosyActionButton
                  source="ApprovalsProfile"
                  action="view_staff_details_profile_action_btn"
                  label="View Staff Details"
                  icon="list"
                  
                  onClick={()=>{
                    
                    viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})
                    
                  }}
                  />
                </>
              )}
              
              {paramApprovalsUptoken && showNavigationIsle && (
                <>
                
                <DeleteButton
                src="ApprovalsMainProfilePage"
                tableName="approvals"
                uptoken={paramApprovalsUptoken}
                stateItemSetters={stateItemSetters}
                parentStateSetters={parentStateSetters}
                router={router}
                onDelete={popDeleteDialog}
                />
                
                
                <AddNewButton
                src="ApprovalsMainProfilePage"
                tableName="approvals"
                link="./profile"
                label="New Approvals"
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
                  parentTable="approvals"
                  inputName="_requests_request_number_request_id"
                  hiddenInputName="request_id"
                  valueField="record_id"
                  displayField="request_number"
                  label="Request Number"
                  defaultValue={{ record_id: approvalsNode?.request_id || "", request_number: approvalsNode?._requests_request_number_request_id || "" }}
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
                  parentTable="approvals"
                  inputName="_staff_full_name_staff_id"
                  hiddenInputName="staff_id"
                  valueField="record_id"
                  displayField="full_name"
                  label="Full Name"
                  defaultValue={{ record_id: approvalsNode?.staff_id || "", full_name: approvalsNode?._staff_full_name_staff_id || "" }}
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
                  module="approvals"
                  field="approval_level"
                  label="Approval Level"
                  value={approvalsNode?.approval_level || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="approvals"
                  field="approved_by"
                  label="Approved By"
                  value={approvalsNode?.approved_by || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="approvals"
                  field="approval_action"
                  label="Approval Action"
                  value={approvalsNode?.approval_action || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="approvals"
                  field="approval_comments"
                  label="Approval Comments"
                  value={approvalsNode?.approval_comments || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="textarea"
                  cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
                  />
                  
                  
                  <MosySmartField
                  module="approvals"
                  field="approved_on"
                  label="Approved On"
                  value={approvalsNode?.approved_on || ""}
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
                    <label >Approval Status</label>
                    
                    <select name="approval_status" id="approval_status" className="form-control">
                      <option  value={approvalsNode?.approval_status || ""}>{approvalsNode?.approval_status || "Select Approval Status"}</option>
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                      
                    </select>
                  </div>
                  
                  
                  <MosySmartField
                  module="approvals"
                  field="created_at"
                  label="Created At"
                  value={approvalsNode?.created_at || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="datetime-local"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <input className="form-control" id="updated_at" name="updated_at" value={approvalsNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
                  
                </div>
                
                <div className="col-md-12 text-center">
                  <SubmitButtons
                  src="ApprovalsMainProfilePage"
                  tblName="approvals"
                  extraClass="optional-custom-class"
                  
                  />
                </div>
              </div></div>
              {/*    Input cells section isle      */}
            </div>
            
            <section className="hive_control">
              <input type="hidden" id="approvals_dataNode" name="approvals_dataNode" value={paramApprovalsUptoken}/>
              <input type="hidden" id="approvals_mosy_action" name="approvals_mosy_action" value={approvalsActionStatus}/>
            </section>
            
            
          </div>
          
        </form>
        
        
        <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
          {/*<hive_mini_list/>*/}
          
          {approvalsNode?.primkey && (
            <MosyProfileSection
            title={`Request Details`}
            source="approvals_RequestsProfile"
            component={RequestsProfile}
            table="approvals"
            key={`RequestsProfile-${localEventSignature}`}
            dataIn={{
              
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              customQueryStr : requestsCustomProfileQuery,
              hostParent : "ApprovalsProfile",
              parentProfileItemId : activeScrollId,
              customProfileData : {
                _approvals_approval_level_record_id:approvalsNode?.approval_level,
                record_id:approvalsNode?.request_id
              }
              
            }}
            
            dataOut={{
              
              setChildDataOut: InteprateRequestsEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
              
            }}
            />
            
          )}
          {approvalsNode?.primkey && (
            <MosyProfileSection
            title={`Staff Details`}
            source="approvals_StaffProfile"
            component={StaffProfile}
            table="approvals"
            key={`StaffProfile-${localEventSignature}`}
            dataIn={{
              
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              customQueryStr : staffCustomProfileQuery,
              hostParent : "ApprovalsProfile",
              parentProfileItemId : activeScrollId,
              customProfileData : {
                _approvals_approval_level_record_id:approvalsNode?.approval_level,
                record_id:approvalsNode?.staff_id
              }
              
            }}
            
            dataOut={{
              
              setChildDataOut: InteprateStaffEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
              
            }}
            />
            
          )}
          
          
          {approvalsNode?.primkey && (
            <MosyProfileSection
            viewAllLink={`../requests/list?approvals_mosyfilter=${btoa(`{recordId:btoa(approvalsNode?.request_id)    }`)}`}
            title={`Request Details`}
            source="approvals_RequestsList"
            component={RequestsList}
            table="approvals"
            key={`RequestsList-${localEventSignature}`}
            dataIn={{
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              showDataControlSections:false,
              customQueryStr : {recordId:btoa(approvalsNode?.request_id)    },
              customProfilePath:"../requests/profile"
              
            }}
            
            dataOut={{
              setChildDataOut: InteprateRequestsEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
            }}
            />
          )}
          
          {approvalsNode?.primkey && (
            <MosyProfileSection
            viewAllLink={`../staff/list?approvals_mosyfilter=${btoa(`{recordId:btoa(approvalsNode?.staff_id)        }`)}`}
            title={`Staff Details`}
            source="approvals_StaffList"
            component={StaffList}
            table="approvals"
            key={`StaffList-${localEventSignature}`}
            dataIn={{
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              showDataControlSections:false,
              customQueryStr : {recordId:btoa(approvalsNode?.staff_id)        },
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

