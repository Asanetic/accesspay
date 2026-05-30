/**
 * Final FILE: pending-approvals.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: pending-approvals.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterPendingApprovals
// ════════════════════════════════════════════════════════════════
export function filterPendingApprovals({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterPendingApprovals");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
