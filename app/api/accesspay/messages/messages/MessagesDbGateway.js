
import { mosySqlDelete  , mosySqlInsert , mosySqlUpdate } from "../../../apiUtils/dataControl/dataUtils";

//insert messages 
export async function AddMessages(newId, mutatedDataArray, body, authData)
{

  const result = await mosySqlInsert("messages", mutatedDataArray, body);
   
  return result;
}


//update messages 
export async function UpdateMessages(newId, mutatedDataArray, body, authData, whereStr)
{

  const result = await mosySqlUpdate("messages", mutatedDataArray, body, whereStr);
  
  return result;
}


//delete messages 
export async function DeleteMessages(tokenId, whereStr)
{  
  const result = await mosySqlDelete("messages", whereStr);

  return result;
}

