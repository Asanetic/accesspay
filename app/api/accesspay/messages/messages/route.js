
//utils 
import {base64Decode, mosyUploadFile, mosyDeleteFile, magicRandomStr , mosySecureSelect} from '../../../apiUtils/dataControl/dataUtils';

import { MessagesBatchMutations } from './MessagesBatchMutations';

//be gate keeper and auth 
import { mosyMutateQuery, mutateInputArray } from '../../beMonitor';

//role access control 
import { validateRoleAccess } from '../../validateRoleAccess';

import { processAuthToken } from '../../../auth/authManager';

import { AddMessages, UpdateMessages } from './MessagesDbGateway';

export async function GET(request) {

  try {
    const { searchParams } = new URL(request.url);

    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(request);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    // -----------------------------
    // SIMPLE ROLE VALIDATION
    // -----------------------------
    const canSelect = validateRoleAccess({
      table: 'messages',
      source: 'Messages',
      action : 'select',
      role: 'view_messages',
      authData
    });

    if (!canSelect.valid) {
      return Response.json({
        status: 'error',
        message: canSelect.message,
        data: []
      });
    }

    
    // messages column DictionaryMap
  const MessagesColumnDictionary={

    Node : "primkey", 
    NodeId : "record_id", 
    recordId : "record_id", 
    requestId : "request_id", 
    staffId : "staff_id", 
    messageType : "message_type", 
    recipient : "recipient", 
    messageBody : "message_body", 
    deliveryStatus : "delivery_status", 
    sentOn : "sent_on", 
    messageStatus : "message_status", 
    createdAt : "created_at", 
    updatedAt : "updated_at", 

  }


    
    
    
    
   const result = await mosySecureSelect({
      table: `messages`,
      recordIdColumn: `record_id`,
      dictionary: MessagesColumnDictionary,
      searchParams,
      authData,
      batchMutations: MessagesBatchMutations,
      defaultOrderColumn : `primkey`
    });

    return Response.json({
      status: 'success',
      message: 'Messages data retrieved',
      ...result
    });
      
   
  } catch (err) {
    console.error('GET Messages failed:', err);
    return Response.json(
      { status: 'error', message: err.message },
      { status: 500 }
    );
  }
}



export async function POST(MessagesRequest) {
  try {
    let body;
    let isMultipart = false;

    const contentType = MessagesRequest.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      isMultipart = true;
      const formData = await MessagesRequest.formData();

      // Convert FormData to plain object
      body = {};
      for (let [key, value] of formData.entries()) {
        body[key] = value;
      }

    } else {
      body = await MessagesRequest.json();
    }
    
    
    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(MessagesRequest);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    // -----------------------------
    // SIMPLE ROLE VALIDATION
    // -----------------------------
    const canPost = validateRoleAccess({
      table: 'messages',
      source: 'Messages',
      action : 'create',
      role: 'manage_messages',
      authData
    });

    if (!canPost.valid) {
      return Response.json({
        status: 'error',
        message: canPost.message,
        data: []
      });
    }
    
    //generate Record id 
    const newId = magicRandomStr(7);

		
  
  //--- Begin  messages inputs array ---// 
  const MessagesInputsArr = {

    "request_id" : "?", 
    "staff_id" : "?", 
    "message_type" : "?", 
    "recipient" : "?", 
    "message_body" : "?", 
    "delivery_status" : "?", 
    "sent_on" : "?", 
    "message_status" : "?", 
    "created_at" : "?", 
    "updated_at" : "?", 

  };

  //--- End messages inputs array --//

    //mutate requested values eg add authData.hive_site_id or add more values that only the back end control etc 
    const mutatedDataArray =mutateInputArray('messages',MessagesInputsArr, MessagesRequest, newId, authData)

      
      mutatedDataArray.record_id = newId;
      
      // Insert into table Messages
      const result = await AddMessages(newId, mutatedDataArray, body, authData);     

       

      return Response.json({
        status: 'success',
        message: result.message,
        messages_dataNode: result.record_id
      });
      
    
 
  } catch (err) {
    console.error(`Request failed:`, err);
    return Response.json(
      { status: 'error', 
      message: `Data Post error ${err.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(MessagesRequest) {
  try {
    let body;
    let isMultipart = false;

    const contentType = MessagesRequest.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      isMultipart = true;
      const formData = await MessagesRequest.formData();

      // Convert FormData to plain object
      body = {};
      for (let [key, value] of formData.entries()) {
        body[key] = value;
      }

    } else {
      body = await MessagesRequest.json();
    }
    
    
    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(MessagesRequest);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    // -----------------------------
    // SIMPLE ROLE VALIDATION
    // -----------------------------
    const canUpdate = validateRoleAccess({
      table: 'messages',
      source: 'Messages',
      action : 'update',
      role: 'manage_messages',
      authData
    });

    if (!canUpdate.valid) {
      return Response.json({
        status: 'error',
        message: canUpdate.message,
        data: []
      });
    }
    
    const MessagesFormAction = body.messages_mosy_action;
    const messages_dataNode_value = base64Decode(body.messages_dataNode);
    
    const newId = magicRandomStr(7);

		
  
  //--- Begin  messages inputs array ---// 
  const MessagesInputsArr = {

    "request_id" : "?", 
    "staff_id" : "?", 
    "message_type" : "?", 
    "recipient" : "?", 
    "message_body" : "?", 
    "delivery_status" : "?", 
    "sent_on" : "?", 
    "message_status" : "?", 
    "created_at" : "?", 
    "updated_at" : "?", 

  };

  //--- End messages inputs array --//

    //mutate requested values eg add authData.hive_site_id or add more values that only the back end control etc 
    const mutatedDataArray =mutateInputArray('messages',MessagesInputsArr, MessagesRequest, newId, authData)
       
      // update table Messages
      const result = await UpdateMessages(newId, mutatedDataArray, body, authData, `primkey='${messages_dataNode_value}'`)

      

      return Response.json({
        status: 'success',
        message: result.message,
        messages_dataNode: messages_dataNode_value
      });
 

  } catch (err) {
    console.error(`Request failed:`, err);
    return Response.json(
      { status: 'error', 
      message: `Data Post error ${err.message}` },
      { status: 500 }
    );
  }
}


