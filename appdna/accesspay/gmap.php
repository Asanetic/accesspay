
<?php

/*
|--------------------------------------------------------------------------
| Generated Mapping String
|--------------------------------------------------------------------------
*/

/*

// STAFF RELATIONSHIPS

staff:full_name|record_id:staff_id:requests(Advance Requests),record_id:staff_id:approvals(Approval Records),record_id:staff_id:disbursements(Disbursements),record_id:staff_id:payments(Recoveries),record_id:staff_id:messages(Messages)


// REQUESTS RELATIONSHIPS

requests:request_number|staff_id:record_id:staff(Staff Details),record_id:request_id:approvals(Approval History),record_id:request_id:disbursements(Disbursement Records),record_id:request_id:payments(Recovery Records),record_id:request_id:messages(Messages)


// APPROVALS RELATIONSHIPS

approvals:approval_level|request_id:record_id:requests(Request Details),staff_id:record_id:staff(Staff Details)


// DISBURSEMENTS RELATIONSHIPS

disbursements:disbursement_number|request_id:record_id:requests(Request Details),staff_id:record_id:staff(Staff Details)


// PAYMENTS RELATIONSHIPS

payments:reference_number|request_id:record_id:requests(Request Details),staff_id:record_id:staff(Staff Details)


// MESSAGES RELATIONSHIPS

messages:message_type|request_id:record_id:requests(Request Details),staff_id:record_id:staff(Staff Details)


// SETTINGS RELATIONSHIPS

settings:default_currency|
 
*/



/*
|--------------------------------------------------------------------------
| Generated PHP Mapper
|--------------------------------------------------------------------------
*/




///Ai Notes  append mini list for interlinked data eg farmers & collections dont remove commented code replace instead 
$interlink_mapping_lists=[

    "staff"=>[

        "staff_requests"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)    }",
            "module_name"=>"Requests",
            "list_title"=>"Advance Requests",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'requests',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "staff_approvals"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)        }",
            "module_name"=>"Approvals",
            "list_title"=>"Approval Records",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'approvals',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "staff_disbursements"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)            }",
            "module_name"=>"Disbursements",
            "list_title"=>"Disbursements",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'disbursements',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "staff_payments"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)                }",
            "module_name"=>"Payments",
            "list_title"=>"Recoveries",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'payments',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "staff_messages"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)                    }",
            "module_name"=>"Messages",
            "list_title"=>"Messages",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'messages',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

    "requests"=>[

        "requests_staff"=>[
            "filter_str"=>"{recordId:btoa(requestsNode?.staff_id)    }",
            "module_name"=>"Staff",
            "list_title"=>"Staff Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'staff',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "requests_approvals"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)        }",
            "module_name"=>"Approvals",
            "list_title"=>"Approval History",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'approvals',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "requests_disbursements"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)            }",
            "module_name"=>"Disbursements",
            "list_title"=>"Disbursement Records",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'disbursements',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "requests_payments"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)                }",
            "module_name"=>"Payments",
            "list_title"=>"Recovery Records",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'payments',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "requests_messages"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)                    }",
            "module_name"=>"Messages",
            "list_title"=>"Messages",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'messages',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

    "approvals"=>[

        "approvals_requests"=>[
            "filter_str"=>"{recordId:btoa(approvalsNode?.request_id)    }",
            "module_name"=>"Requests",
            "list_title"=>"Request Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'requests',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "approvals_staff"=>[
            "filter_str"=>"{recordId:btoa(approvalsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "list_title"=>"Staff Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'staff',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

    "disbursements"=>[

        "disbursements_requests"=>[
            "filter_str"=>"{recordId:btoa(disbursementsNode?.request_id)    }",
            "module_name"=>"Requests",
            "list_title"=>"Request Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'requests',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "disbursements_staff"=>[
            "filter_str"=>"{recordId:btoa(disbursementsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "list_title"=>"Staff Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'staff',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

    "payments"=>[

        "payments_requests"=>[
            "filter_str"=>"{recordId:btoa(paymentsNode?.request_id)    }",
            "module_name"=>"Requests",
            "list_title"=>"Request Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'requests',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "payments_staff"=>[
            "filter_str"=>"{recordId:btoa(paymentsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "list_title"=>"Staff Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'staff',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

    "messages"=>[

        "messages_requests"=>[
            "filter_str"=>"{recordId:btoa(messagesNode?.request_id)    }",
            "module_name"=>"Requests",
            "list_title"=>"Request Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'requests',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

        "messages_staff"=>[
            "filter_str"=>"{recordId:btoa(messagesNode?.staff_id)        }",
            "module_name"=>"Staff",
            "list_title"=>"Staff Details",
            "event_name"=>"",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>'staff',
            "event_path"=>"",
            "module_path"=>"",
            "list_url"=>"",
            "profile_url"=>"",
        ],

    ],

];



///Ai Notes append mini profile for interlinked data dont remove commented code replace instead
$interlink_mapping_profile=[

    "staff"=>[

        "staff_requests"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)    }",
            "module_name"=>"Requests",
            "profile_title"=>"Advance Requests",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"requests",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"requests",
        ],

        "staff_approvals"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)        }",
            "module_name"=>"Approvals",
            "profile_title"=>"Approval Records",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"approvals",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"approvals",
        ],

        "staff_disbursements"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)            }",
            "module_name"=>"Disbursements",
            "profile_title"=>"Disbursements",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"disbursements",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"disbursements",
        ],

        "staff_payments"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)                }",
            "module_name"=>"Payments",
            "profile_title"=>"Recoveries",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"payments",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"payments",
        ],

        "staff_messages"=>[
            "filter_str"=>"{staffId:btoa(staffNode?.record_id)                    }",
            "module_name"=>"Messages",
            "profile_title"=>"Messages",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"messages",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"messages",
        ],

    ],

    "requests"=>[

        "requests_staff"=>[
            "filter_str"=>"{recordId:btoa(requestsNode?.staff_id)    }",
            "module_name"=>"Staff",
            "profile_title"=>"Staff Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"staff",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"staff",
        ],

        "requests_approvals"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)        }",
            "module_name"=>"Approvals",
            "profile_title"=>"Approval History",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"approvals",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"approvals",
        ],

        "requests_disbursements"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)            }",
            "module_name"=>"Disbursements",
            "profile_title"=>"Disbursement Records",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"disbursements",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"disbursements",
        ],

        "requests_payments"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)                }",
            "module_name"=>"Payments",
            "profile_title"=>"Recovery Records",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"payments",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"payments",
        ],

        "requests_messages"=>[
            "filter_str"=>"{requestId:btoa(requestsNode?.record_id)                    }",
            "module_name"=>"Messages",
            "profile_title"=>"Messages",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"messages",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"messages",
        ],

    ],

    "approvals"=>[

        "approvals_requests"=>[
            "filter_str"=>"{recordId:btoa(approvalsNode?.request_id)    }",
            "module_name"=>"Requests",
            "profile_title"=>"Request Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"requests",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"requests",
        ],

        "approvals_staff"=>[
            "filter_str"=>"{recordId:btoa(approvalsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "profile_title"=>"Staff Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"staff",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"staff",
        ],

    ],

    "disbursements"=>[

        "disbursements_requests"=>[
            "filter_str"=>"{recordId:btoa(disbursementsNode?.request_id)    }",
            "module_name"=>"Requests",
            "profile_title"=>"Request Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"requests",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"requests",
        ],

        "disbursements_staff"=>[
            "filter_str"=>"{recordId:btoa(disbursementsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "profile_title"=>"Staff Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"staff",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"staff",
        ],

    ],

    "payments"=>[

        "payments_requests"=>[
            "filter_str"=>"{recordId:btoa(paymentsNode?.request_id)    }",
            "module_name"=>"Requests",
            "profile_title"=>"Request Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"requests",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"requests",
        ],

        "payments_staff"=>[
            "filter_str"=>"{recordId:btoa(paymentsNode?.staff_id)        }",
            "module_name"=>"Staff",
            "profile_title"=>"Staff Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"staff",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"staff",
        ],

    ],

    "messages"=>[

        "messages_requests"=>[
            "filter_str"=>"{recordId:btoa(messagesNode?.request_id)    }",
            "module_name"=>"Requests",
            "profile_title"=>"Request Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"requests",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"requests",
        ],

        "messages_staff"=>[
            "filter_str"=>"{recordId:btoa(messagesNode?.staff_id)        }",
            "module_name"=>"Staff",
            "profile_title"=>"Staff Details",
            "custom"=>false,
            "external"=>true,
            "enabled"=>true,
            "alias"=>"staff",
            "event_name"=>"",
            "event_path"=>"",
            "list_table_name"=>"staff",
        ],

    ],

];



///Ai Notes universal database connection mapping
$connection_col_mapping=[

    "staff"=>[
        "record_id" => "messages:staff_id:message_type:apiRoutes.messages.base",
    ],

    "requests"=>[
        "staff_id" => "staff:record_id:full_name:apiRoutes.staff.base",
        "record_id" => "messages:request_id:message_type:apiRoutes.messages.base",
    ],

    "approvals"=>[
        "request_id" => "requests:record_id:request_number:apiRoutes.requests.base",
        "staff_id" => "staff:record_id:full_name:apiRoutes.staff.base",
    ],

    "disbursements"=>[
        "request_id" => "requests:record_id:request_number:apiRoutes.requests.base",
        "staff_id" => "staff:record_id:full_name:apiRoutes.staff.base",
    ],

    "payments"=>[
        "request_id" => "requests:record_id:request_number:apiRoutes.requests.base",
        "staff_id" => "staff:record_id:full_name:apiRoutes.staff.base",
    ],

    "messages"=>[
        "request_id" => "requests:record_id:request_number:apiRoutes.requests.base",
        "staff_id" => "staff:record_id:full_name:apiRoutes.staff.base",
    ],

];


  
///Ai Notes on each row you add more actions eg, view collections, send message dont remove commented code replace instead
$list_drop_down_mappper=[

    "staff"=>[

        "list : Advance Requests"=>[
            "fe"=>"viewRequests({childCol:`staffId`,parentColVal:liststaff_result.record_id,parentName:liststaff_result.full_name})",
            "file"=>"requests-automapper",
            "module_name"=>"Requests",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"staff",
            "childTable"=>"requests",
            "fileTitle"=>"Advance Requests",
            "alias"=>"requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : Approval Records"=>[
            "fe"=>"viewApprovals({childCol:`staffId`,parentColVal:liststaff_result.record_id,parentName:liststaff_result.full_name})",
            "file"=>"approvals-automapper",
            "module_name"=>"Approvals",
            "functionType"=>"autoMapper",
            "parentName"=>"ApprovalsList",
            "parentTable"=>"staff",
            "childTable"=>"approvals",
            "fileTitle"=>"Approval Records",
            "alias"=>"approvals",
            "functionType"=>"autoMapper",
            "basepath"=>"../../approvals/logicControl"
        ],

        "list : Disbursements"=>[
            "fe"=>"viewDisbursements({childCol:`staffId`,parentColVal:liststaff_result.record_id,parentName:liststaff_result.full_name})",
            "file"=>"disbursements-automapper",
            "module_name"=>"Disbursements",
            "functionType"=>"autoMapper",
            "parentName"=>"DisbursementsList",
            "parentTable"=>"staff",
            "childTable"=>"disbursements",
            "fileTitle"=>"Disbursements",
            "alias"=>"disbursements",
            "functionType"=>"autoMapper",
            "basepath"=>"../../disbursements/logicControl"
        ],

        "list : Recoveries"=>[
            "fe"=>"viewPayments({childCol:`staffId`,parentColVal:liststaff_result.record_id,parentName:liststaff_result.full_name})",
            "file"=>"payments-automapper",
            "module_name"=>"Payments",
            "functionType"=>"autoMapper",
            "parentName"=>"PaymentsList",
            "parentTable"=>"staff",
            "childTable"=>"payments",
            "fileTitle"=>"Recoveries",
            "alias"=>"payments",
            "functionType"=>"autoMapper",
            "basepath"=>"../../payments/logicControl"
        ],

        "list : Messages"=>[
            "fe"=>"viewMessages({childCol:`staffId`,parentColVal:liststaff_result.record_id,parentName:liststaff_result.full_name})",
            "file"=>"messages-automapper",
            "module_name"=>"Messages",
            "functionType"=>"autoMapper",
            "parentName"=>"MessagesList",
            "parentTable"=>"staff",
            "childTable"=>"messages",
            "fileTitle"=>"Messages",
            "alias"=>"messages",
            "functionType"=>"autoMapper",
            "basepath"=>"../../messages/logicControl"
        ],

    ],

    "requests"=>[

        "list : Staff Details"=>[
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:listrequests_result.staff_id,parentName:listrequests_result.request_number})",
            "file"=>"staff-automapper",
            "module_name"=>"Staff",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"requests",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "alias"=>"staff",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

        "list : Approval History"=>[
            "fe"=>"viewApprovals({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})",
            "file"=>"approvals-automapper",
            "module_name"=>"Approvals",
            "functionType"=>"autoMapper",
            "parentName"=>"ApprovalsList",
            "parentTable"=>"requests",
            "childTable"=>"approvals",
            "fileTitle"=>"Approval History",
            "alias"=>"approvals",
            "functionType"=>"autoMapper",
            "basepath"=>"../../approvals/logicControl"
        ],

        "list : Disbursement Records"=>[
            "fe"=>"viewDisbursements({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})",
            "file"=>"disbursements-automapper",
            "module_name"=>"Disbursements",
            "functionType"=>"autoMapper",
            "parentName"=>"DisbursementsList",
            "parentTable"=>"requests",
            "childTable"=>"disbursements",
            "fileTitle"=>"Disbursement Records",
            "alias"=>"disbursements",
            "functionType"=>"autoMapper",
            "basepath"=>"../../disbursements/logicControl"
        ],

        "list : Recovery Records"=>[
            "fe"=>"viewPayments({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})",
            "file"=>"payments-automapper",
            "module_name"=>"Payments",
            "functionType"=>"autoMapper",
            "parentName"=>"PaymentsList",
            "parentTable"=>"requests",
            "childTable"=>"payments",
            "fileTitle"=>"Recovery Records",
            "alias"=>"payments",
            "functionType"=>"autoMapper",
            "basepath"=>"../../payments/logicControl"
        ],

        "list : Messages"=>[
            "fe"=>"viewMessages({childCol:`requestId`,parentColVal:listrequests_result.record_id,parentName:listrequests_result.request_number})",
            "file"=>"messages-automapper",
            "module_name"=>"Messages",
            "functionType"=>"autoMapper",
            "parentName"=>"MessagesList",
            "parentTable"=>"requests",
            "childTable"=>"messages",
            "fileTitle"=>"Messages",
            "alias"=>"messages",
            "functionType"=>"autoMapper",
            "basepath"=>"../../messages/logicControl"
        ],

    ],

    "approvals"=>[

        "list : Request Details"=>[
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:listapprovals_result.request_id,parentName:listapprovals_result.approval_level})",
            "file"=>"requests-automapper",
            "module_name"=>"Requests",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"approvals",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "alias"=>"requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : Staff Details"=>[
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:listapprovals_result.staff_id,parentName:listapprovals_result.approval_level})",
            "file"=>"staff-automapper",
            "module_name"=>"Staff",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"approvals",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "alias"=>"staff",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "disbursements"=>[

        "list : Request Details"=>[
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:listdisbursements_result.request_id,parentName:listdisbursements_result.disbursement_number})",
            "file"=>"requests-automapper",
            "module_name"=>"Requests",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"disbursements",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "alias"=>"requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : Staff Details"=>[
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:listdisbursements_result.staff_id,parentName:listdisbursements_result.disbursement_number})",
            "file"=>"staff-automapper",
            "module_name"=>"Staff",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"disbursements",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "alias"=>"staff",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "payments"=>[

        "list : Request Details"=>[
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:listpayments_result.request_id,parentName:listpayments_result.reference_number})",
            "file"=>"requests-automapper",
            "module_name"=>"Requests",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"payments",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "alias"=>"requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : Staff Details"=>[
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:listpayments_result.staff_id,parentName:listpayments_result.reference_number})",
            "file"=>"staff-automapper",
            "module_name"=>"Staff",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"payments",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "alias"=>"staff",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "messages"=>[

        "list : Request Details"=>[
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:listmessages_result.request_id,parentName:listmessages_result.message_type})",
            "file"=>"requests-automapper",
            "module_name"=>"Requests",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"messages",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "alias"=>"requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : Staff Details"=>[
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:listmessages_result.staff_id,parentName:listmessages_result.message_type})",
            "file"=>"staff-automapper",
            "module_name"=>"Staff",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"messages",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "alias"=>"staff",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

];


/// Ai Notes buttons you want on the profile /form page dont remove commented code replace instead 
$profile_mapper_buttons_list_=[

    "staff"=>[

        "list : View Advance Requests"=>[
            "module_name"=>"Requests",
            "fe"=>"viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})",
            "alias"=>"requests",
            "file"=>"requests-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"staff",
            "childTable"=>"requests",
            "fileTitle"=>"Advance Requests",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : View Approval Records"=>[
            "module_name"=>"Approvals",
            "fe"=>"viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})",
            "alias"=>"approvals",
            "file"=>"approvals-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"ApprovalsList",
            "parentTable"=>"staff",
            "childTable"=>"approvals",
            "fileTitle"=>"Approval Records",
            "functionType"=>"autoMapper",
            "basepath"=>"../../approvals/logicControl"
        ],

        "list : View Disbursements"=>[
            "module_name"=>"Disbursements",
            "fe"=>"viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})",
            "alias"=>"disbursements",
            "file"=>"disbursements-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"DisbursementsList",
            "parentTable"=>"staff",
            "childTable"=>"disbursements",
            "fileTitle"=>"Disbursements",
            "functionType"=>"autoMapper",
            "basepath"=>"../../disbursements/logicControl"
        ],

        "list : View Recoveries"=>[
            "module_name"=>"Payments",
            "fe"=>"viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})",
            "alias"=>"payments",
            "file"=>"payments-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"PaymentsList",
            "parentTable"=>"staff",
            "childTable"=>"payments",
            "fileTitle"=>"Recoveries",
            "functionType"=>"autoMapper",
            "basepath"=>"../../payments/logicControl"
        ],

        "list : View Messages"=>[
            "module_name"=>"Messages",
            "fe"=>"viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})",
            "alias"=>"messages",
            "file"=>"messages-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"MessagesList",
            "parentTable"=>"staff",
            "childTable"=>"messages",
            "fileTitle"=>"Messages",
            "functionType"=>"autoMapper",
            "basepath"=>"../../messages/logicControl"
        ],

    ],

    "requests"=>[

        "list : View Staff Details"=>[
            "module_name"=>"Staff",
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})",
            "alias"=>"staff",
            "file"=>"staff-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"requests",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

        "list : View Approval History"=>[
            "module_name"=>"Approvals",
            "fe"=>"viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})",
            "alias"=>"approvals",
            "file"=>"approvals-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"ApprovalsList",
            "parentTable"=>"requests",
            "childTable"=>"approvals",
            "fileTitle"=>"Approval History",
            "functionType"=>"autoMapper",
            "basepath"=>"../../approvals/logicControl"
        ],

        "list : View Disbursement Records"=>[
            "module_name"=>"Disbursements",
            "fe"=>"viewDisbursements({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})",
            "alias"=>"disbursements",
            "file"=>"disbursements-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"DisbursementsList",
            "parentTable"=>"requests",
            "childTable"=>"disbursements",
            "fileTitle"=>"Disbursement Records",
            "functionType"=>"autoMapper",
            "basepath"=>"../../disbursements/logicControl"
        ],

        "list : View Recovery Records"=>[
            "module_name"=>"Payments",
            "fe"=>"viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})",
            "alias"=>"payments",
            "file"=>"payments-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"PaymentsList",
            "parentTable"=>"requests",
            "childTable"=>"payments",
            "fileTitle"=>"Recovery Records",
            "functionType"=>"autoMapper",
            "basepath"=>"../../payments/logicControl"
        ],

        "list : View Messages"=>[
            "module_name"=>"Messages",
            "fe"=>"viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})",
            "alias"=>"messages",
            "file"=>"messages-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"MessagesList",
            "parentTable"=>"requests",
            "childTable"=>"messages",
            "fileTitle"=>"Messages",
            "functionType"=>"autoMapper",
            "basepath"=>"../../messages/logicControl"
        ],

    ],

    "approvals"=>[

        "list : View Request Details"=>[
            "module_name"=>"Requests",
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})",
            "alias"=>"requests",
            "file"=>"requests-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"approvals",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : View Staff Details"=>[
            "module_name"=>"Staff",
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})",
            "alias"=>"staff",
            "file"=>"staff-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"approvals",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "disbursements"=>[

        "list : View Request Details"=>[
            "module_name"=>"Requests",
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:disbursementsNode.request_id,parentName:disbursementsNode.disbursement_number})",
            "alias"=>"requests",
            "file"=>"requests-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"disbursements",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : View Staff Details"=>[
            "module_name"=>"Staff",
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:disbursementsNode.staff_id,parentName:disbursementsNode.disbursement_number})",
            "alias"=>"staff",
            "file"=>"staff-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"disbursements",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "payments"=>[

        "list : View Request Details"=>[
            "module_name"=>"Requests",
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:paymentsNode.request_id,parentName:paymentsNode.reference_number})",
            "alias"=>"requests",
            "file"=>"requests-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"payments",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : View Staff Details"=>[
            "module_name"=>"Staff",
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:paymentsNode.staff_id,parentName:paymentsNode.reference_number})",
            "alias"=>"staff",
            "file"=>"staff-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"payments",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

    "messages"=>[

        "list : View Request Details"=>[
            "module_name"=>"Requests",
            "fe"=>"viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})",
            "alias"=>"requests",
            "file"=>"requests-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"RequestsList",
            "parentTable"=>"messages",
            "childTable"=>"requests",
            "fileTitle"=>"Request Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../requests/logicControl"
        ],

        "list : View Staff Details"=>[
            "module_name"=>"Staff",
            "fe"=>"viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})",
            "alias"=>"staff",
            "file"=>"staff-automapper",
            "functionType"=>"autoMapper",
            "parentName"=>"StaffList",
            "parentTable"=>"messages",
            "childTable"=>"staff",
            "fileTitle"=>"Staff Details",
            "functionType"=>"autoMapper",
            "basepath"=>"../../staff/logicControl"
        ],

    ],

];



    ///Auto generated profile data map
    $customProfileDataMap=[

        "staff"=>[

        "requests"=>[
            "_staff_full_name_staff_id"=>"staffNode?.full_name",
            "staff_id"=>"staffNode?.record_id",
        ],

        "approvals"=>[
            "_staff_full_name_staff_id"=>"staffNode?.full_name",
            "staff_id"=>"staffNode?.record_id",
        ],

        "disbursements"=>[
            "_staff_full_name_staff_id"=>"staffNode?.full_name",
            "staff_id"=>"staffNode?.record_id",
        ],

        "payments"=>[
            "_staff_full_name_staff_id"=>"staffNode?.full_name",
            "staff_id"=>"staffNode?.record_id",
        ],

        "messages"=>[
            "_staff_full_name_staff_id"=>"staffNode?.full_name",
            "staff_id"=>"staffNode?.record_id",
        ],

    ],

    "requests"=>[

        "staff"=>[
            "_requests_request_number_record_id"=>"requestsNode?.request_number",
            "record_id"=>"requestsNode?.staff_id",
        ],

        "approvals"=>[
            "_requests_request_number_request_id"=>"requestsNode?.request_number",
            "request_id"=>"requestsNode?.record_id",
        ],

        "disbursements"=>[
            "_requests_request_number_request_id"=>"requestsNode?.request_number",
            "request_id"=>"requestsNode?.record_id",
        ],

        "payments"=>[
            "_requests_request_number_request_id"=>"requestsNode?.request_number",
            "request_id"=>"requestsNode?.record_id",
        ],

        "messages"=>[
            "_requests_request_number_request_id"=>"requestsNode?.request_number",
            "request_id"=>"requestsNode?.record_id",
        ],

    ],

    "approvals"=>[

        "requests"=>[
            "_approvals_approval_level_record_id"=>"approvalsNode?.approval_level",
            "record_id"=>"approvalsNode?.request_id",
        ],

        "staff"=>[
            "_approvals_approval_level_record_id"=>"approvalsNode?.approval_level",
            "record_id"=>"approvalsNode?.staff_id",
        ],

    ],

    "disbursements"=>[

        "requests"=>[
            "_disbursements_disbursement_number_record_id"=>"disbursementsNode?.disbursement_number",
            "record_id"=>"disbursementsNode?.request_id",
        ],

        "staff"=>[
            "_disbursements_disbursement_number_record_id"=>"disbursementsNode?.disbursement_number",
            "record_id"=>"disbursementsNode?.staff_id",
        ],

    ],

    "payments"=>[

        "requests"=>[
            "_payments_reference_number_record_id"=>"paymentsNode?.reference_number",
            "record_id"=>"paymentsNode?.request_id",
        ],

        "staff"=>[
            "_payments_reference_number_record_id"=>"paymentsNode?.reference_number",
            "record_id"=>"paymentsNode?.staff_id",
        ],

    ],

    "messages"=>[

        "requests"=>[
            "_messages_message_type_record_id"=>"messagesNode?.message_type",
            "record_id"=>"messagesNode?.request_id",
        ],

        "staff"=>[
            "_messages_message_type_record_id"=>"messagesNode?.message_type",
            "record_id"=>"messagesNode?.staff_id",
        ],

    ],

];




?>
