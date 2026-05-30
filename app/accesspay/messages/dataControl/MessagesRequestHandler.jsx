'use client';
//hive / data utils
import { mosyPostFormData, mosyGetData, mosyUrlParam, mosyUpdateUrlParam , deleteUrlParam, magicRandomStr, mosyGetLSData  } from '../../../MosyUtils/hiveUtils';

//action modals 
import { MosyNotify , closeMosyModal, MosyAlertCard } from '../../../MosyUtils/ActionModals';

//filter util
import { MosySecureFilterEngine } from '../../DataControl/MosyFilterEngine';

//custom event manager 
import { customEventHandler } from '../../DataControl/customDataFunction';

//routes manager
///handle routes 
import { getApiRoutes } from '../../AppRoutes/apiRoutesHandler';

// Use default base root (/)
const apiRoutes = getApiRoutes();

//insert data
export async function insertMessages() {
 //console.log(`Form messages insert sent `)

  return await mosyPostFormData({
    formId: 'messages_profile_form',
    url: apiRoutes.messages.base,
    method: 'POST',
    isMultipart: true,
  });
}

//update record 
export async function updateMessages() {

  //console.log(`Form messages update sent `)

  return await mosyPostFormData({
    formId: 'messages_profile_form',
    url: apiRoutes.messages.base,
    method: 'PUT',
    isMultipart: true,
  });
}


///receive form actions from profile page  
export async function inteprateMessagesFormAction(e, setters) {
  e.preventDefault();

  const form = e.target;
  const formDataObj = new FormData(form);
  const actionType = formDataObj.get('messages_mosy_action');
 
 //console.log(`Form messages submission received action : ${actionType}`)

  try {
    let result = null;
    let actionMessage ='Record added succesfully!';

    if (actionType === 'add_messages') {

      actionMessage ='Record added succesfully!';

      result = await insertMessages();
    }

    if (actionType === 'update_messages') {

      actionMessage ='Record updated succesfully!';

      result = await updateMessages();
    }

    if (result?.status === 'success') {
      
      const messagesUptoken = btoa(result.messages_dataNode || '');

      //set id key
      setters.setMessagesUptoken(messagesUptoken);
      
      //update url with new messagesUptoken
      mosyUpdateUrlParam('messages_dataNode', messagesUptoken)

      setters.setMessagesActionStatus('update_messages')
    
      setters.setSnackMessage(actionMessage);

      return {
        status: 'success',
        message: actionMessage,
        newToken: messagesUptoken,
        actionName : actionType,
        actionType : 'messages_form_submission'
      };
            
      
    } else {
      MosyNotify({message:result.message, icon:'times-circle', iconColor :'text-danger'})
      
      return {
        status: 'error',
        message: result,
        actionName: actionType,
        newToken: null
      };
      
    }

  } catch (error) {
    console.error('Form error:', error);
    
      MosyNotify({message:result.message, icon:'times-circle', iconColor :'text-danger'})
    
      return {
        status: 'error',
        message: result,
        actionName: actionType,
        newToken: null
      };
      
  } 
}


export async function initMessagesProfileData(rawQstr) { 

  MosyNotify({message : 'Refreshing Messages' , icon:'refresh', addTimer:false})

  try {
    // Fetch the  data with the given key
    const response = await mosyGetData({
      endpoint: apiRoutes.messages.base,
      params: { 
      ...rawQstr,
      src : btoa(`initMessagesProfileData`)
      },
    });

    // Handle the successful response
    if (response.status === 'success') {
      //console.log('messages Data:', response.data);  // Process the data

       closeMosyModal()

      return response.data?.[0] || {};  // Return the actual record

    } else {
          
      console.log('Error fetching messages data:', response.message);  // Handle error
      MosyNotify({message:response.message, icon:'times-circle', iconColor :'text-danger'})

      closeMosyModal()

      return {}
    }
  } catch (err) {

    closeMosyModal()

    console.log('Error:', err);
    return {}
  }
}


export async function DeleteMessages(token = '') {

    try {
      MosyNotify({message:"Sending delete request",icon:"send", addTimer : false})
    
      const response = await mosyGetData({
        endpoint: apiRoutes.messages.delete,
        params: { 
          _messages_delete_record: (token), 
          },
      });

      console.log('Token DeleteMessages '+token)
      if (response.status === 'success') {

        closeMosyModal();

        return response; // Return the data
      } else {
        console.error('Error deleting systemusers data:', response.message);
        
        closeMosyModal();

        MosyNotify({message:response.message, icon:'times-circle', iconColor :'text-danger'})

        return response; // Safe fallback
      }
    } catch (err) {
      console.error('Error:', err);
      closeMosyModal();
      
      return []; //  Even safer fallback
    }

}


export async function getMessagesListData(qstr = {}) {

  //manage pagination 
  const pageNo = mosyUrlParam('qmessages_page','0')
  const recordsPerPage = mosyGetLSData('systemDataLimit', '11')

  try {
    const response = await mosyGetData({
      endpoint: apiRoutes.messages.base,
      params: { 
        ... qstr, 
        pageNo : pageNo,
        pageSize : recordsPerPage,
        orderType : 'desc', 
        src : btoa(`getMessagesListData`)
        },
    });

    if (response.status === 'success') {
      //console.log('messages Data:', response.data);
      return response; //Return the data
    } else {
      console.log('Error fetching messages data:', response);
      MosyNotify({message:response.message, icon:'times-circle', iconColor :'text-danger'})
      
      return []; // Safe fallback
    }
  } catch (err) {

   MosyNotify({message:err, icon:'times-circle', iconColor :'text-danger'})

    console.log('Error:', err);
    return []; //  Even safer fallback
  }
}


export async function loadMessagesListData(customQueryStr, setters) {

    const gftMessages = MosySecureFilterEngine('messages');
    let finalFilterStr = (gftMessages);    

    if(customQueryStr!='')
    {
      finalFilterStr = customQueryStr;
    }

    setters.setMessagesLoading(true);
    
    const messagesListData = await getMessagesListData(finalFilterStr);
    
    setters.setMessagesLoading(false)
    setters.setMessagesListData(messagesListData?.data)

    setters.setMessagesListPageCount(messagesListData?.pagination?.page_count)


    return messagesListData

}
  
  
export async function messagesProfileData(customQueryStr, setters, router, customProfileData={}) {

    const messagesTokenId = mosyUrlParam('messages_dataNode');
    
    const deleteParam = mosyUrlParam('messages_delete');

    //manage  the staff_uptoken value  basically detect primkey
    let decodedMessagesToken = '0';
    if (messagesTokenId) {
      
      decodedMessagesToken = atob(messagesTokenId); // Decode the record_id
      setters.setMessagesUptoken(messagesTokenId);
      setters.setMessagesActionStatus('update_messages');
      
    }
    
    //override customQueryStr if there is an active staff_uptoken else use customQueryStr if any
    let rawMessagesQueryStr ={Node:btoa(decodedMessagesToken)}
    if(customQueryStr!='')
    {
      // if no messages_dataNode set , use customQueryStr
      if (!messagesTokenId) {
       rawMessagesQueryStr = customQueryStr
      }
    }

    const profileDataRecord = await initMessagesProfileData(rawMessagesQueryStr)

    if(deleteParam){
      popDeleteDialog(messagesTokenId, setters, router)
    }
    
    // Merge with custom injected values (custom wins)
    const finalProfileData = {
      ...profileDataRecord,
      ...customProfileData,    
    };
      

    setters.setMessagesNode(finalProfileData)
    
    
}
  
  

export function InteprateMessagesEvent(data) {
     
  //console.log(' Messages Child gave us:', data);

  const actionName = data?.actionName

  const childActionName = { [actionName]: true };

  if(childActionName.select_messages){

    if(data?.profile)
    {
    
    //const childStateSetters = data?.setters.childSetters

    const parentSetter = data?.setters.parentStateSetters 

    parentSetter?.setLocalEventSignature(magicRandomStr())
    parentSetter?.setParentUseEffectKey(magicRandomStr())
    parentSetter?.setActiveScrollId('MessagesProfileTray')

    
    mosyUpdateUrlParam('messages_dataNode', btoa(data?.token))
    
    const router = data?.router
      
    const url = data?.url

    router.push(url, { scroll: false });

    }else{

    //const childStateSetters = data?.setters.childSetters

    const parentSetter = data?.setters.parentStateSetters 

    parentSetter?.setMessagesCustomProfileQuery(data?.qstr)

    parentSetter?.setLocalEventSignature(magicRandomStr())
    parentSetter?.setParentUseEffectKey(magicRandomStr())
    parentSetter?.setActiveScrollId('MessagesProfileTray')

    
    mosyUpdateUrlParam('messages_dataNode', btoa(data?.token))
    
    }
  }

  if(childActionName.add_messages){

    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    //console.log(`add messages `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
        parentStateSetter?.setActiveScrollId('MessagesProfileTray')
      }
    }
     
  }

  if(childActionName.update_messages){
    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    //console.log(`update messages `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
        parentStateSetter?.setActiveScrollId('MessagesProfileTray')
        
      }
    }
  }

  if(childActionName.delete_messages){

    popDeleteDialog(btoa(data?.token), data?.setters)

 }

  
}


export function popDeleteDialog(deleteToken, setters, router, afterDeleteUrl='../messages/list')
{     

  //console.log(`popDeleteDialog`, setters)
  const childSetters = setters?.childStateSetters
  
  MosyAlertCard({
  
    icon : "trash",
  
    message: "Are you sure you want to delete this record?",

    autoDismissOnClick : false,
  
    onYes: () => {
  
      DeleteMessages(deleteToken).then(response=>{
  
        if(response.status!='error')
        {
          childSetters?.setSnackMessage("Record deleted succesfully!")
          childSetters?.setParentUseEffectKey(magicRandomStr());
          childSetters?.setLocalEventSignature(magicRandomStr());

          if(router){
            router.push(`${afterDeleteUrl}?snack_alert=Record Deleted successfully!`)
          }
       }
      })
  
    },
  
    onNo: () => {
  
      // Remove the param from the URL
       closeMosyModal()
       deleteUrlParam('messages_delete');
        
    }
  
  });

}