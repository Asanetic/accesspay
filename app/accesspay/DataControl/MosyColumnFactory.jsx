const MosyColumnFactory = {

   //-- approvals cols--//
  approvals: ["record_id", "request_id", "staff_id", "approval_level", "approved_by", "approval_action", "approval_comments", "approved_on", "approval_status", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- disbursements cols--//
  disbursements: ["record_id", "request_id", "staff_id", "disbursement_number", "amount_disbursed", "reference_number", "payment_method", "disbursement_notes", "disbursed_by", "disbursed_on", "disbursement_status", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- messages cols--//
  messages: ["record_id", "request_id", "staff_id", "message_type", "recipient", "message_body", "delivery_status", "sent_on", "message_status", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- mosy_sql_roll_back cols--//
  mosy_sql_roll_back: ["roll_bk_key", "table_name", "roll_type", "where_str", "roll_timestamp", "value_entries", "hive_site_id", "hive_site_name"],

   //-- page_manifest_ cols--//
  page_manifest_: ["manikey", "page_group", "site_id", "page_url", "hive_site_id", "hive_site_name", "project_id", "project_name"],

   //-- payments cols--//
  payments: ["record_id", "request_id", "staff_id", "payment_type", "amount", "reference_number", "payment_method", "payment_notes", "recorded_by", "recorded_on", "payment_status", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- requests cols--//
  requests: ["record_id", "staff_id", "request_number", "amount_requested", "request_reason", "amount_approved", "current_balance", "requested_on", "approved_on", "paid_on", "cleared_on", "request_status", "request_remarks", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- settings cols--//
  settings: ["record_id", "approval_levels", "default_currency", "sms_notifications", "email_notifications", "allow_partial_payments", "allow_partial_recoveries", "auto_generate_request_numbers", "default_approval_workflow", "system_status", "setting_remarks", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- staff cols--//
  staff: ["record_id", "full_name", "staff_number", "phone_number", "email_address", "department", "position", "advance_limit", "current_outstanding_balance", "staff_status", "registered_on", "created_at", "updated_at", "hive_site_id", "hive_site_name"],

   //-- system_module_manifest_ cols--//
  system_module_manifest_: ["record_id", "component_name", "module_key", "module_name", "permission_type", "capability_key", "access_name", "relative_path", "hive_site_id", "hive_site_name"],

   //-- system_role_bundles cols--//
  system_role_bundles: ["record_id", "bundle_id", "bundle_name", "remark", "hive_site_id", "hive_site_name"],

   //-- system_users cols--//
  system_users: ["record_id", "name", "email", "tel", "login_password", "ref_id", "regdate", "user_no", "user_pic", "user_gender", "last_seen", "about", "hive_site_id", "hive_site_name", "auth_token", "token_status", "token_expiring_in", "project_id", "project_name", "user_role"],

   //-- user_bundle_role_functions cols--//
  user_bundle_role_functions: ["record_id", "bundle_id", "bundle_name", "role_id", "role_name", "remark", "hive_site_id", "hive_site_name"],

   //-- user_manifest_ cols--//
  user_manifest_: ["admin_mkey", "user_id", "user_name", "role_id", "site_id", "role_name", "hive_site_id", "hive_site_name", "project_id", "project_name"],


};
export default MosyColumnFactory;