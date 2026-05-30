/**
 * Final FILE: disbursements.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: disbursements.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterDisbursements
// ════════════════════════════════════════════════════════════════
export function filterDisbursements({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterDisbursements");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
