/**
 * Final FILE: pending-requests.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: pending-requests.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterPendingRequests
// ════════════════════════════════════════════════════════════════
export function filterPendingRequests({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterPendingRequests");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
