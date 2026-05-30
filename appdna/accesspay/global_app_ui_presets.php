<?php

$global_input_presets_page_layout_preset = [

"image_columns" => [

    "staff_photo",

],

"textarea_array" => [

    "approval_comments",

    "message_body",

    "payment_notes",

    "request_reason",

    "request_remarks",

    "setting_remarks",

],

"date_columns" => [

    "updated_at",

],

"datetime_columns" => [

    "approved_on",

    "created_at",

    "sent_on",

    "recorded_on",

    "requested_on",

    "paid_on",

    "cleared_on",

    "registered_on",

],

"sum_cols_list" => [

    "amount",

    "amount_requested",

    "amount_approved",

    "current_balance",

    "auto_generate_request_numbers",

    "current_outstanding_balance",

],

"static_drop_down_array" => [

    "approval_status" => "Pending,Approved,Rejected",

    "delivery_status" => "Pending,Sent,Delivered,Failed",

    "message_status" => "Draft,Pending,Sent,Delivered,Failed",

    "payment_status" => "Pending,Completed,Failed,Reversed",

    "request_status" => "Pending,Approved L1,Approved L2,Rejected,Paid,Partially Cleared,Cleared",

    "system_status" => "Active,Inactive,Maintenance",

    "staff_status" => "Active,Inactive,Suspended",

    "sms_notifications" => "Yes,No",

    "email_notifications" => "Yes,No",

    "allow_partial_payments" => "Yes,No",

    "allow_partial_recoveries" => "Yes,No",

    "auto_generate_request_numbers" => "Yes,No",

],

"dynamic_drop_down_array" => [

    "message_type",

    "payment_type",

    "payment_method",

    "default_currency",

    "department",

],



];

?>