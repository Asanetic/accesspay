/**
 * Final FILE: approved-requests.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: approved-requests.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterApprovedRequests
// ════════════════════════════════════════════════════════════════
export function filterApprovedRequests({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterApprovedRequests");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
