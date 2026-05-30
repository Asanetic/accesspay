/**
 * Final FILE: outstanding-requests.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: outstanding-requests.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterOutstandingRequests
// ════════════════════════════════════════════════════════════════
export function filterOutstandingRequests({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterOutstandingRequests");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
