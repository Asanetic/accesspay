/**
 * Final FILE: active-staff.jsx
 * Auto Generated Frontend Functions
 */

import { MosyCard , closeMosyCard} from '../../../components/MosyCard';
import { MosySmartColumnFilter } from "../../UiControl/smartFilterUiControl";

/**
 * FILE: active-staff.jsx
 * AUTO GENERATED FRONTEND FUNCTION
 */

// ════════════════════════════════════════════════════════════════
// FUNCTION: filterActiveStaff
// ════════════════════════════════════════════════════════════════
export function filterActiveStaff({customQueryStr, stateItemSetters, colName, colVal, tableName}) 
{
    //alert("filterActiveStaff");

    MosySmartColumnFilter({customQueryStr:customQueryStr, stateItemSetters:stateItemSetters, colName:colName, colVal:colVal, tableName:tableName});

}
