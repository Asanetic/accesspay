
$disbursements_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`request_id` varchar(500),
`staff_id` varchar(500),
`disbursement_number` varchar(500),
`amount_disbursed` decimal(10,2),
`reference_number` varchar(500),
`payment_method` varchar(500),
`disbursement_notes` longtext,
`disbursed_by` varchar(500),
`disbursed_on` datetime,
`disbursement_status` varchar(500),

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$disbursements_table = 'disbursements';

create_table(

    $mysqliconn,
    $dbname,
    $disbursements_table,
    $disbursements_table_script

);





$staff_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`full_name` varchar(500),
`staff_number` varchar(500),
`phone_number` varchar(50),
`email_address` varchar(255),
`department` varchar(500),
`position` varchar(500),
`advance_limit` varchar(500),
`current_outstanding_balance` decimal(10,2),
`staff_status` varchar(500),
`registered_on` datetime,

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$staff_table = 'staff';

create_table(

    $mysqliconn,
    $dbname,
    $staff_table,
    $staff_table_script

);





$requests_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`staff_id` varchar(500),
`request_number` varchar(500),
`amount_requested` decimal(10,2),
`request_reason` longtext,
`amount_approved` decimal(10,2),
`current_balance` decimal(10,2),
`requested_on` datetime,
`approved_on` datetime,
`paid_on` datetime,
`cleared_on` datetime,
`request_status` varchar(500),
`request_remarks` longtext,

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$requests_table = 'requests';

create_table(

    $mysqliconn,
    $dbname,
    $requests_table,
    $requests_table_script

);





$approvals_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`request_id` varchar(500),
`staff_id` varchar(500),
`approval_level` varchar(500),
`approved_by` varchar(500),
`approval_action` varchar(500),
`approval_comments` longtext,
`approved_on` datetime,
`approval_status` varchar(500),

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$approvals_table = 'approvals';

create_table(

    $mysqliconn,
    $dbname,
    $approvals_table,
    $approvals_table_script

);





$payments_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`request_id` varchar(500),
`staff_id` varchar(500),
`payment_type` varchar(500),
`amount` decimal(10,2),
`reference_number` varchar(500),
`payment_method` varchar(500),
`payment_notes` longtext,
`recorded_by` varchar(500),
`recorded_on` datetime,
`payment_status` varchar(500),

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$payments_table = 'payments';

create_table(

    $mysqliconn,
    $dbname,
    $payments_table,
    $payments_table_script

);





$messages_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`request_id` varchar(500),
`staff_id` varchar(500),
`message_type` varchar(500),
`recipient` varchar(500),
`message_body` longtext,
`delivery_status` varchar(500),
`sent_on` datetime,
`message_status` varchar(500),

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$messages_table = 'messages';

create_table(

    $mysqliconn,
    $dbname,
    $messages_table,
    $messages_table_script

);





$settings_table_script = "


`primkey` int(11) PRIMARY KEY AUTO_INCREMENT,
`record_id` varchar(100) NOT NULL,

`approval_levels` varchar(500),
`default_currency` varchar(500),
`sms_notifications` varchar(500),
`email_notifications` varchar(255),
`allow_partial_payments` varchar(500),
`allow_partial_recoveries` varchar(500),
`auto_generate_request_numbers` varchar(500),
`default_approval_workflow` varchar(500),
`system_status` varchar(500),
`setting_remarks` longtext,

`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
`hive_site_id` varchar(100),
`hive_site_name` varchar(255)

        

";

$settings_table = 'settings';

create_table(

    $mysqliconn,
    $dbname,
    $settings_table,
    $settings_table_script

);




