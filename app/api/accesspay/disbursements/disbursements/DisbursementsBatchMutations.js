
/**
 * AUTO-GENERATED BATCH MUTATIONS
 * DO NOT EDIT MANUALLY
 */

export const DisbursementsBatchMutations = {
"_requests_request_number_request_id": {"type":"join","table":"requests","link":"request_id:record_id","select":{"_requests_request_number_request_id":"request_number"}},
"_staff_full_name_staff_id": {"type":"join","table":"staff","link":"staff_id:record_id","select":{"_staff_full_name_staff_id":"full_name"}}
};

export const listDisbursementsMutationKeys = {
"_requests_request_number_request_id": [],
"_staff_full_name_staff_id": [],

};

export default listDisbursementsMutationKeys;
