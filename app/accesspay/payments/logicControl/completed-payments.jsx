/**
 * Final FILE: completed-payments.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: completed-payments.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterCompletedPayments
// ════════════════════════════════════════════════════════════════
export function filterCompletedPayments({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterCompletedPayments");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
