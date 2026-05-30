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
import { inteprateSettingsFormAction, settingsProfileData , popDeleteDialog, InteprateSettingsEvent } from '../dataControl/SettingsRequestHandler';

//state management
import { useSettingsState } from '../dataControl/SettingsStateManager';

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


// ════════════════════════════════════════════════════════════════
// PROFILE PAGE FUNCTION IMPORTS
// ════════════════════════════════════════════════════════════════
// Imports from activate-settings.jsx
import {
  activateSettings
} from '../logicControl/activate-settings';

// Imports from disable-settings.jsx
import {
  disableSettings
} from '../logicControl/disable-settings';



// export profile


///component access control key
export const MOSY_ACCESS_KEY = "MANAGE_SETTINGS";

//live data detial / profile component

export default function SettingsProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    backToList="./list",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="SettingsMainProfilePage",
    parentProfileItemId = "SettingsProfileTray"
    
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey,   activeScrollId : parentProfileItemId}
  
  //manage Settings states
  const [stateItem, stateItemSetters] = useSettingsState(settersOverrides);
  const settingsNode = stateItem.settingsNode
  
  // -- basic states --//
  const paramSettingsUptoken  = stateItem.settingsUptoken
  const settingsActionStatus = stateItem.settingsActionStatus
  const snackMessage = stateItem.snackMessage
  const activeScrollId = stateItem.activeScrollId
  
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setSettingsNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postSettingsFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateSettingsFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postSettingsFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      //focus on this form on submission
      stateItemSetters.setActiveScrollId("SettingsProfileTray")
      mosyScrollTo(activeScrollId)
      
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    settingsProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo(activeScrollId)
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  
  //access control managemant
  const [allowed, setAllowed] = useState(null);
  
  useEffect(() => {
    setAllowed(MosyAccessControl(MOSY_ACCESS_KEY));
  }, []);
  
  if (allowed === null) return null;
  if (!allowed) return <MosyUIGuard />;
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="SettingsProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-12 rounded text-left p-2 mb-0  bg-white ">
        <div className={` profile_container col-md-12 m-0 p-0  ${showNavigationIsle &&("pr-lg-4 pl-lg-4 m-0")}`}>
          <form onSubmit={postSettingsFormData} encType="multipart/form-data" id="settings_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                
                {
                  settingsNode?.primkey ? (
                    
                    <span>{`Settings / ${settingsNode?.default_currency}`}</span>
                    
                  ) : customProfileData?.SettingsTitle ? (
                    
                    <span>{customProfileData.SettingsTitle}</span>
                    
                  ) : (
                    
                    <span>New Settings</span>
                    
                  )}
                  
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  {paramSettingsUptoken && (
                    <DeleteButton
                    src="SettingsMainProfilePage"
                    tableName="settings"
                    uptoken={paramSettingsUptoken}
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
                
                
                
                {paramSettingsUptoken && (
                  <>
                  
                  <MosyActionButton
                  source="SettingsProfile"
                  action="settings_DataMap_activateSettings_btn"
                  label="Activate Settings"
                  icon="cog"
                  
                  onClick={()=>{
                    
                    activateSettings({
                      
                      title: `Activate system settings`,
                      
                      component: SettingsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "settings",
                      
                      destTable: "settings",
                      
                      fieldsetstr: 'system_status|Active',
                      
                      profileDataNode: settingsNode,
                      
                      dataInterpreter: InteprateSettingsEvent
                      
                    })
                    
                  }}
                  />
                  <MosyActionButton
                  source="SettingsProfile"
                  action="settings_DataMap_disableSettings_btn"
                  label="Disable Settings"
                  icon="cog"
                  
                  onClick={()=>{
                    
                    disableSettings({
                      
                      title: `Disable system settings`,
                      
                      component: SettingsProfile,
                      
                      stateitemsetters: stateItemSetters,
                      
                      parentTable: "settings",
                      
                      destTable: "settings",
                      
                      fieldsetstr: 'system_status|Inactive',
                      
                      profileDataNode: settingsNode,
                      
                      dataInterpreter: InteprateSettingsEvent
                      
                    })
                    
                  }}
                  />
                </>
              )}
              
              {paramSettingsUptoken && showNavigationIsle && (
                <>
                
                <DeleteButton
                src="SettingsMainProfilePage"
                tableName="settings"
                uptoken={paramSettingsUptoken}
                stateItemSetters={stateItemSetters}
                parentStateSetters={parentStateSetters}
                router={router}
                onDelete={popDeleteDialog}
                />
                
                
                <AddNewButton
                src="SettingsMainProfilePage"
                tableName="settings"
                link="./profile"
                label="New Settings"
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
                  module="settings"
                  field="approval_levels"
                  label="Approval Levels"
                  value={settingsNode?.approval_levels || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label className="d-none">Default Currency</label>
                    
                    <SmartDropdown
                    apiEndpoint={apiRoutes.settings.base}
                    idField="primkey"
                    labelField="default_currency"
                    inputName="default_currency"
                    label="Default Currency"
                    onSelect={(val) => console.log('Selected:', val)}
                    defaultValue={settingsNode?.default_currency || ""}
                    />
                  </div>
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >Sms Notifications</label>
                    
                    <select name="sms_notifications" id="sms_notifications" className="form-control">
                      <option  value={settingsNode?.sms_notifications || ""}>{settingsNode?.sms_notifications || "Select Sms Notifications"}</option>
                      <option>Yes</option>
                      <option>No</option>
                      
                    </select>
                  </div>
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >Email Notifications</label>
                    
                    <select name="email_notifications" id="email_notifications" className="form-control">
                      <option  value={settingsNode?.email_notifications || ""}>{settingsNode?.email_notifications || "Select Email Notifications"}</option>
                      <option>Yes</option>
                      <option>No</option>
                      
                    </select>
                  </div>
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >Allow Partial Payments</label>
                    
                    <select name="allow_partial_payments" id="allow_partial_payments" className="form-control">
                      <option  value={settingsNode?.allow_partial_payments || ""}>{settingsNode?.allow_partial_payments || "Select Allow Partial Payments"}</option>
                      <option>Yes</option>
                      <option>No</option>
                      
                    </select>
                  </div>
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >Allow Partial Recoveries</label>
                    
                    <select name="allow_partial_recoveries" id="allow_partial_recoveries" className="form-control">
                      <option  value={settingsNode?.allow_partial_recoveries || ""}>{settingsNode?.allow_partial_recoveries || "Select Allow Partial Recoveries"}</option>
                      <option>Yes</option>
                      <option>No</option>
                      
                    </select>
                  </div>
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >Auto Generate Request Numbers</label>
                    
                    <select name="auto_generate_request_numbers" id="auto_generate_request_numbers" className="form-control">
                      <option  value={settingsNode?.auto_generate_request_numbers || ""}>{settingsNode?.auto_generate_request_numbers || "Select Auto Generate Request Numbers"}</option>
                      <option>Yes</option>
                      <option>No</option>
                      
                    </select>
                  </div>
                  
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
                  module="settings"
                  field="default_approval_workflow"
                  label="Default Approval Workflow"
                  value={settingsNode?.default_approval_workflow || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="text"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <div className="form-group col-md-4 hive_data_cell ">
                    <label >System Status</label>
                    
                    <select name="system_status" id="system_status" className="form-control">
                      <option  value={settingsNode?.system_status || ""}>{settingsNode?.system_status || "Select System Status"}</option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Maintenance</option>
                      
                    </select>
                  </div>
                  
                  
                  <MosySmartField
                  module="settings"
                  field="setting_remarks"
                  label="Setting Remarks"
                  value={settingsNode?.setting_remarks || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="textarea"
                  cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
                  />
                  
                  
                  <MosySmartField
                  module="settings"
                  field="created_at"
                  label="Created At"
                  value={settingsNode?.created_at || ""}
                  onChange={handleInputChange}
                  context={{ hostParent: hostParent  }}
                  inputOverrides={{}}
                  type="datetime-local"
                  cellOverrides={{additionalClass: "col-md-4 hive_data_cell "}}
                  />
                  
                  
                  <input className="form-control" id="updated_at" name="updated_at" value={settingsNode?.updated_at || ""} placeholder="Updated At" type="hidden"/>
                  
                </div>
                
                <div className="col-md-12 text-center">
                  <SubmitButtons
                  src="SettingsMainProfilePage"
                  tblName="settings"
                  extraClass="optional-custom-class"
                  
                  />
                </div>
              </div></div>
              {/*    Input cells section isle      */}
            </div>
            
            <section className="hive_control">
              <input type="hidden" id="settings_dataNode" name="settings_dataNode" value={paramSettingsUptoken}/>
              <input type="hidden" id="settings_mosy_action" name="settings_mosy_action" value={settingsActionStatus}/>
            </section>
            
            
          </div>
          
        </form>
        
        
        <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
          {/*<hive_mini_list/>*/}
          
          
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

