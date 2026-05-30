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
import { inteprateDisbursementsFormAction, disbursementsProfileData , popDeleteDialog, InteprateDisbursementsEvent } from '../dataControl/DisbursementsRequestHandler';

//state management
import { useDisbursementsState } from '../dataControl/DisbursementsStateManager';

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
export const MOSY_ACCESS_KEY = "MANAGE_DISBURSEMENTS";

//live data detial / profile component

export default function DisbursementsProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="DisbursementsMainProfilePage",
    parentProfileItemId = "DisbursementsProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Disbursements states
  const [stateItem, stateItemSetters] = useDisbursementsState(settersOverrides);
  const disbursementsNode = stateItem.disbursementsNode
  
  // -- basic states --//
  const paramDisbursementsUptoken  = stateItem.disbursementsUptoken
  const disbursementsActionStatus = stateItem.disbursementsActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setDisbursementsNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postDisbursementsFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateDisbursementsFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postDisbursementsFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("DisbursementsProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    disbursementsProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  //setRequestsCustomProfileQuery Script
  const setRequestsCustomProfileQuery = stateItemSetters.setRequestsCustomProfileQuery;
  const requestsCustomProfileQuery =  stateItem.requestsCustomProfileQuery;
  
  useEffect(() => {
    if (disbursementsNode?.primkey && setRequestsCustomProfileQuery) {
      
      const query = {recordId:btoa(disbursementsNode?.request_id)    };
      
      const tokenUrl = mosyUrlParam("requests_dataNode")
      
      if(!tokenUrl)
      {
        setRequestsCustomProfileQuery(query);
      }
      
    }
  }, [disbursementsNode, setRequestsCustomProfileQuery]);
  
  //setStaffCustomProfileQuery Script
  const setStaffCustomProfileQuery = stateItemSetters.setStaffCustomProfileQuery;
  const staffCustomProfileQuery =  stateItem.staffCustomProfileQuery;
  
  useEffect(() => {
    if (disbursementsNode?.primkey && setStaffCustomProfileQuery) {
      
      const query = {recordId:btoa(disbursementsNode?.staff_id)        };
      
      const tokenUrl = mosyUrlParam("staff_dataNode")
      
      if(!tokenUrl)
      {
        setStaffCustomProfileQuery(query);
      }
      
    }
  }, [disbursementsNode, setStaffCustomProfileQuery]);
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="DisbursementsProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postDisbursementsFormData} encType="multipart/form-data" id="disbursements_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  disbursementsNode?.primkey ? (
                    
                    <span>{`Disbursements / ${disbursementsNode?.staff_id}`}</span>
                    
                  ) : customProfileData?.DisbursementsTitle ? (
                    
                    <span>{customProfileData.DisbursementsTitle}</span>
                    
                  ) : (
                    
                    <span>New Disbursements</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramDisbursementsUptoken && (
                    <DeleteButton
                    src="DisbursementsMainProfilePage"
                    tableName="disbursements"
                    uptoken={paramDisbursementsUptoken}
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
                
                
                
                {paramDisbursementsUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="DisbursementsProfile"
                  action="view_request_details_profile_action_btn"
                  label="View Request Details"
                  icon="list"
                  
                  onClick={()=>{
                    
                    viewRequests({childCol:`recordId`,parentColVal:disbursementsNode.request_id,parentName:disbursementsNode.disbursement_number})
                    
                  }}
                  />
                  <MosyActionButton
                  source="DisbursementsProfile"
                  action="view_staff_details_profile_action_btn"
                  label="View Staff Details"
                  icon="list"
                  
                  onClick={()=>{
                    
                    viewStaff({childCol:`recordId`,parentColVal:disbursementsNode.staff_id,parentName:disbursementsNode.disbursement_number})
                    
                  }}
                  />
                </>
              )}
              
              {paramDisbursementsUptoken && showNavigationIsle && (
                <>
                
                <DeleteButton
                src="DisbursementsMainProfilePage"
                tableName="disbursements"
                uptoken={paramDisbursementsUptoken}
                stateItemSetters={stateItemSetters}
                parentStateSetters={parentStateSetters}
                router={router}
                onDelete={popDeleteDialog}
                />
                
                
                <AddNewButton
                src="DisbursementsMainProfilePage"
                tableName="disbursements"
                link="./profile"
                label="New Disbursements"
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
                  parentTable="disbursements"
                  inputName="_requests_request_number_request_id"
                  hiddenInputName="request_id"
                  valueField="record_id"
                  displayField="request_number"
                  label="Request Id"
                  defaultValue={{ record_id: disbursementsNode?.request_id || "", request_number: disbursementsNode?._requests_request_number_request_id || "" }}
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
                  parentTable="disbursements"
                  inputName="_staff_full_name_staff_id"
                  hiddenInputName="staff_id"
                  valueField="record_id"
                  displayField="full_name"
                  label="Staff Id"
                  defaultValue={{ record_id: disbursementsNode?.staff_id || "", full_name: disbursementsNode?._staff_full_name_staff_id || "" }}
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
                  module="disbursements"
                  field="disbursement_number"
                  label="Disbursement Number"
                  value={disbursementsNode?.disbursement_number || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="amount_disbursed"
                  label="Amount Disbursed"
                  value={disbursementsNode?.amount_disbursed || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="reference_number"
                  label="Reference Number"
                  value={disbursementsNode?.reference_number || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label className="d-none">Payment Method</label>
                    
                    <SmartDropdown
                    apiEndpoint={apiRoutes.disbursements.base}
                    idField="primkey"
                    labelField="payment_method"
                    inputName="payment_method"
                    label="Payment Method"
                    onSelect={(val) => console.log('Selected:', val)}
                    defaultValue={disbursementsNode?.payment_method || ""}
                    />
                  </div>
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="disbursement_notes"
                  label="Disbursement Notes"
                  value={disbursementsNode?.disbursement_notes || ""}
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
                  module="disbursements"
                  field="disbursed_by"
                  label="Disbursed By"
                  value={disbursementsNode?.disbursed_by || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="disbursed_on"
                  label="Disbursed On"
                  value={disbursementsNode?.disbursed_on || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="disbursement_status"
                  label="Disbursement Status"
                  value={disbursementsNode?.disbursement_status || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <MosySmartField
                  module="disbursements"
                  field="created_at"
                  label="Created At"
                  value={disbursementsNode?.created_at || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="datetime-local"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <input className="form-control" id="updated_at" name="updated_at" value={disbursementsNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
                  
                </div>
                
                <div className="col-md-12 text-center">
                  <SubmitButtons
                  src="DisbursementsMainProfilePage"
                  tblName="disbursements"
                  extraClass="optional-custom-class"
                  
                  />
                </div>
              </div></div>
              {/*    Input cells section isle      */}
            </div>
            
            <section className="hive_control">
              <input type="hidden" id="disbursements_dataNode" name="disbursements_dataNode" value={paramDisbursementsUptoken}/>
              <input type="hidden" id="disbursements_mosy_action" name="disbursements_mosy_action" value={disbursementsActionStatus}/>
            </section>
            
            
          </div>
          
        </form>
        
        
        <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
          {/*<hive_mini_list/>*/}
          
          {disbursementsNode?.primkey && (
            <MosyProfileSection
            title={`Request Details`}
            source="disbursements_RequestsProfile"
            component={RequestsProfile}
            table="disbursements"
            key={`RequestsProfile-${localEventSignature}`}
            dataIn={{
              
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              customQueryStr : requestsCustomProfileQuery,
              hostParent : "DisbursementsProfile",
              parentProfileItemId : activeScrollId,
              customProfileData : {
                _disbursements_disbursement_number_record_id:disbursementsNode?.disbursement_number,
                record_id:disbursementsNode?.request_id
              }
              
            }}
            
            dataOut={{
              
              setChildDataOut: InteprateRequestsEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
              
            }}
            />
            
          )}
          {disbursementsNode?.primkey && (
            <MosyProfileSection
            title={`Staff Details`}
            source="disbursements_StaffProfile"
            component={StaffProfile}
            table="disbursements"
            key={`StaffProfile-${localEventSignature}`}
            dataIn={{
              
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              customQueryStr : staffCustomProfileQuery,
              hostParent : "DisbursementsProfile",
              parentProfileItemId : activeScrollId,
              customProfileData : {
                _disbursements_disbursement_number_record_id:disbursementsNode?.disbursement_number,
                record_id:disbursementsNode?.staff_id
              }
              
            }}
            
            dataOut={{
              
              setChildDataOut: InteprateStaffEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
              
            }}
            />
            
          )}
          
          
          {disbursementsNode?.primkey && (
            <MosyProfileSection
            viewAllLink={`../requests/list?disbursements_mosyfilter=${btoa(`{recordId:btoa(disbursementsNode?.request_id)    }`)}`}
            title={`Request Details`}
            source="disbursements_RequestsList"
            component={RequestsList}
            table="disbursements"
            key={`RequestsList-${localEventSignature}`}
            dataIn={{
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              showDataControlSections:false,
              customQueryStr : {recordId:btoa(disbursementsNode?.request_id)    },
              customProfilePath:"../requests/profile"
              
            }}
            
            dataOut={{
              setChildDataOut: InteprateRequestsEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
            }}
            />
          )}
          
          {disbursementsNode?.primkey && (
            <MosyProfileSection
            viewAllLink={`../staff/list?disbursements_mosyfilter=${btoa(`{recordId:btoa(disbursementsNode?.staff_id)        }`)}`}
            title={`Staff Details`}
            source="disbursements_StaffList"
            component={StaffList}
            table="disbursements"
            key={`StaffList-${localEventSignature}`}
            dataIn={{
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              showDataControlSections:false,
              customQueryStr : {recordId:btoa(disbursementsNode?.staff_id)        },
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

