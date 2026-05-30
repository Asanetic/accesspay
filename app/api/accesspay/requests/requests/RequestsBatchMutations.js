
/**
 * AUTO-GENERATED BATCH MUTATIONS
 * DO NOT EDIT MANUALLY
 */

export const RequestsBatchMutations = {
"_messages_message_type_record_id": {"type":"join","table":"messages","link":"record_id:request_id","select":{"_messages_message_type_record_id":"message_type"}},
"_staff_full_name_staff_id": {"type":"join","table":"staff","link":"staff_id:record_id","select":{"_staff_full_name_staff_id":"full_name"}}
};

export const listRequestsMutationKeys = {
"_messages_message_type_record_id": [],
"_staff_full_name_staff_id": [],

};

export default listRequestsMutationKeys;
