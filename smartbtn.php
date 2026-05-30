

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:paymentsNode.request_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:paymentsNode.staff_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Approval History */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_approval_history_profile_action_btn"
    label="View Approval History"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Payment Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_payment_records_profile_action_btn"
    label="View Payment Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Payment Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_payment_records_profile_action_btn"
    label="View Payment Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : check-circle: Approve Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_approveRecord_btn"
    label="Approve Record"
    icon="check-circle"

    onClick={()=>{

        approveRecord({

            title: `Approve approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Approved',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : x-circle: Reject Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_rejectApprovalRecord_btn"
    label="Reject Record"
    icon="x-circle"

    onClick={()=>{

        rejectApprovalRecord({

            title: `Reject approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Rejected',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : clock: Pending Approvals */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMapQCol_filterPendingApprovals_btn"
    label="Pending Approvals"
    icon="clock"

    onClick={()=>{

        filterPendingApprovals({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "approval_status",

            colVal: "Pending",

            tableName: "approvals",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : send: Resend Message */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_resendMessage_btn"
    label="Resend Message"
    icon="send"

    onClick={()=>{

        resendMessage({

            title: `Resend notification`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Pending',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : check-circle: Mark Delivered */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markDelivered_btn"
    label="Mark Delivered"
    icon="check-circle"

    onClick={()=>{

        markDelivered({

            title: `Mark message delivered`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Delivered',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : x-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markFailedMessage_btn"
    label="Mark Failed"
    icon="x-circle"

    onClick={()=>{

        markFailedMessage({

            title: `Mark message failed`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Failed',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : alert-circle: Failed Messages */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMapQCol_filterFailedMessages_btn"
    label="Failed Messages"
    icon="alert-circle"

    onClick={()=>{

        filterFailedMessages({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "delivery_status",

            colVal: "Failed",

            tableName: "messages",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : check-circle: Verify Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_verifyPayment_btn"
    label="Verify Transaction"
    icon="check-circle"

    onClick={()=>{

        verifyPayment({

            title: `Verify payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Completed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Reverse Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_reversePayment_btn"
    label="Reverse Transaction"
    icon="undo"

    onClick={()=>{

        reversePayment({

            title: `Reverse payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Reversed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : x-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_markPaymentFailed_btn"
    label="Mark Failed"
    icon="x-circle"

    onClick={()=>{

        markPaymentFailed({

            title: `Mark payment failed`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Failed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:paymentsNode.request_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:paymentsNode.staff_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : dollar-sign: Completed Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterCompletedPayments_btn"
    label="Completed Transactions"
    icon="dollar-sign"

    onClick={()=>{

        filterCompletedPayments({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_status",

            colVal: "Completed",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Recovery Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterRecoveries_btn"
    label="Recovery Transactions"
    icon="undo"

    onClick={()=>{

        filterRecoveries({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Recovery",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : hand-holding-usd: Disbursements */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterDisbursements_btn"
    label="Disbursements"
    icon="hand-holding-usd"

    onClick={()=>{

        filterDisbursements({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Disbursement",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approve Level 1 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel1_btn"
    label="Approve Level 1"
    icon="check-circle"

    onClick={()=>{

        approveLevel1({

            title: `Approve request level 1`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L1',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Approve Level 2 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel2_btn"
    label="Approve Level 2"
    icon="check-double"

    onClick={()=>{

        approveLevel2({

            title: `Approve request level 2`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L2',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : x-circle: Reject Request */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_rejectRequest_btn"
    label="Reject Request"
    icon="x-circle"

    onClick={()=>{

        rejectRequest({

            title: `Reject request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Rejected',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : money-bill-wave: Mark Paid */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_markRequestPaid_btn"
    label="Mark Paid"
    icon="money-bill-wave"

    onClick={()=>{

        markRequestPaid({

            title: `Mark request paid`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Paid',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Clear Advance */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_clearAdvanceRequest_btn"
    label="Clear Advance"
    icon="check-double"

    onClick={()=>{

        clearAdvanceRequest({

            title: `Clear advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Cleared',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Approval History */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_approval_history_profile_action_btn"
    label="View Approval History"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Payment Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_payment_records_profile_action_btn"
    label="View Payment Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : clock: Pending Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterPendingRequests_btn"
    label="Pending Requests"
    icon="clock"

    onClick={()=>{

        filterPendingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Pending",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approved Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterApprovedRequests_btn"
    label="Approved Requests"
    icon="check-circle"

    onClick={()=>{

        filterApprovedRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Approved",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : alert-circle: Outstanding Advances */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterOutstandingRequests_btn"
    label="Outstanding Advances"
    icon="alert-circle"

    onClick={()=>{

        filterOutstandingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "current_balance_above",

            colVal: "0",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : settings: Activate Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_activateSettings_btn"
    label="Activate Settings"
    icon="settings"

    onClick={()=>{

        activateSettings({

            title: `Activate system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Active',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : settings: Disable Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_disableSettings_btn"
    label="Disable Settings"
    icon="settings"

    onClick={()=>{

        disableSettings({

            title: `Disable system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Inactive',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : user-check: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="user-check"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause-circle: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause-circle"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : plus-circle: Increase Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="increase_limit_profile_action_btn"
    label="Increase Limit"
    icon="plus-circle"

    onClick={()=>{

        increaseAdvanceLimit('record_id')

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Payment Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_payment_records_profile_action_btn"
    label="View Payment Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : check-circle: Approve Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_approveRecord_btn"
    label="Approve Record"
    icon="check-circle"

    onClick={()=>{

        approveRecord({

            title: `Approve approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Approved',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : x-circle: Reject Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_rejectApprovalRecord_btn"
    label="Reject Record"
    icon="x-circle"

    onClick={()=>{

        rejectApprovalRecord({

            title: `Reject approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Rejected',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : clock: Pending Approvals */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMapQCol_filterPendingApprovals_btn"
    label="Pending Approvals"
    icon="clock"

    onClick={()=>{

        filterPendingApprovals({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "approval_status",

            colVal: "Pending",

            tableName: "approvals",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : disbursements */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="DisbursementsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:disbursementsNode.request_id,parentName:disbursementsNode.disbursement_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : disbursements */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="DisbursementsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:disbursementsNode.staff_id,parentName:disbursementsNode.disbursement_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : send: Resend Message */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_resendMessage_btn"
    label="Resend Message"
    icon="send"

    onClick={()=>{

        resendMessage({

            title: `Resend notification`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Pending',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : check-circle: Mark Delivered */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markDelivered_btn"
    label="Mark Delivered"
    icon="check-circle"

    onClick={()=>{

        markDelivered({

            title: `Mark message delivered`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Delivered',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : x-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markFailedMessage_btn"
    label="Mark Failed"
    icon="x-circle"

    onClick={()=>{

        markFailedMessage({

            title: `Mark message failed`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Failed',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : alert-circle: Failed Messages */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMapQCol_filterFailedMessages_btn"
    label="Failed Messages"
    icon="alert-circle"

    onClick={()=>{

        filterFailedMessages({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "delivery_status",

            colVal: "Failed",

            tableName: "messages",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : check-circle: Verify Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_verifyPayment_btn"
    label="Verify Transaction"
    icon="check-circle"

    onClick={()=>{

        verifyPayment({

            title: `Verify payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Completed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Reverse Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_reversePayment_btn"
    label="Reverse Transaction"
    icon="undo"

    onClick={()=>{

        reversePayment({

            title: `Reverse payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Reversed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : x-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_markPaymentFailed_btn"
    label="Mark Failed"
    icon="x-circle"

    onClick={()=>{

        markPaymentFailed({

            title: `Mark payment failed`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Failed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:paymentsNode.request_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:paymentsNode.staff_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : dollar-sign: Completed Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterCompletedPayments_btn"
    label="Completed Transactions"
    icon="dollar-sign"

    onClick={()=>{

        filterCompletedPayments({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_status",

            colVal: "Completed",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Recovery Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterRecoveries_btn"
    label="Recovery Transactions"
    icon="undo"

    onClick={()=>{

        filterRecoveries({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Recovery",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : hand-holding-usd: Disbursements */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterDisbursements_btn"
    label="Disbursements"
    icon="hand-holding-usd"

    onClick={()=>{

        filterDisbursements({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Disbursement",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approve Level 1 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel1_btn"
    label="Approve Level 1"
    icon="check-circle"

    onClick={()=>{

        approveLevel1({

            title: `Approve request level 1`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L1',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Approve Level 2 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel2_btn"
    label="Approve Level 2"
    icon="check-double"

    onClick={()=>{

        approveLevel2({

            title: `Approve request level 2`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L2',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : x-circle: Reject Request */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_rejectRequest_btn"
    label="Reject Request"
    icon="x-circle"

    onClick={()=>{

        rejectRequest({

            title: `Reject request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Rejected',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : money-bill-wave: Mark Paid */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_markRequestPaid_btn"
    label="Mark Paid"
    icon="money-bill-wave"

    onClick={()=>{

        markRequestPaid({

            title: `Mark request paid`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Paid',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Clear Advance */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_clearAdvanceRequest_btn"
    label="Clear Advance"
    icon="check-double"

    onClick={()=>{

        clearAdvanceRequest({

            title: `Clear advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Cleared',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Approval History */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_approval_history_profile_action_btn"
    label="View Approval History"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Disbursement Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_disbursement_records_profile_action_btn"
    label="View Disbursement Records"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Recovery Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_recovery_records_profile_action_btn"
    label="View Recovery Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : clock: Pending Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterPendingRequests_btn"
    label="Pending Requests"
    icon="clock"

    onClick={()=>{

        filterPendingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Pending",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approved Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterApprovedRequests_btn"
    label="Approved Requests"
    icon="check-circle"

    onClick={()=>{

        filterApprovedRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Approved",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : alert-circle: Outstanding Advances */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterOutstandingRequests_btn"
    label="Outstanding Advances"
    icon="alert-circle"

    onClick={()=>{

        filterOutstandingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "current_balance_above",

            colVal: "0",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : settings: Activate Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_activateSettings_btn"
    label="Activate Settings"
    icon="settings"

    onClick={()=>{

        activateSettings({

            title: `Activate system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Active',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : settings: Disable Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_disableSettings_btn"
    label="Disable Settings"
    icon="settings"

    onClick={()=>{

        disableSettings({

            title: `Disable system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Inactive',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : user-check: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="user-check"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause-circle: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause-circle"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : plus-circle: Increase Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="increase_limit_profile_action_btn"
    label="Increase Limit"
    icon="plus-circle"

    onClick={()=>{

        increaseAdvanceLimit('record_id')

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approve Level 1 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel1_btn"
    label="Approve Level 1"
    icon="check-circle"

    onClick={()=>{

        approveLevel1({

            title: `Approve request level 1`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L1',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Approve Level 2 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel2_btn"
    label="Approve Level 2"
    icon="check-double"

    onClick={()=>{

        approveLevel2({

            title: `Approve request level 2`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L2',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : x-circle: Reject Request */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_rejectRequest_btn"
    label="Reject Request"
    icon="x-circle"

    onClick={()=>{

        rejectRequest({

            title: `Reject request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Rejected',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : undo: Record Recovery */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_addPayment_btn"
    label="Record Recovery"
    icon="undo"

    onClick={()=>{

        addPayment({

            title: `Record Recovery Payment`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "payments",

            fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id",

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : hand-holding-usd: Disburse Funds */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_addDisbursement_btn"
    label="Disburse Funds"
    icon="hand-holding-usd"

    onClick={()=>{

        addDisbursement({

            title: `Create Disbursement`,

            component: DisbursementsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "disbursements",

            fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id,requests:amount_approved|amount_disbursed",

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : money-bill-wave: Mark Paid */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_markRequestPaid_btn"
    label="Mark Paid"
    icon="money-bill-wave"

    onClick={()=>{

        markRequestPaid({

            title: `Mark request paid`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Paid',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-double: Clear Advance */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_clearAdvanceRequest_btn"
    label="Clear Advance"
    icon="check-double"

    onClick={()=>{

        clearAdvanceRequest({

            title: `Clear advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Cleared',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Approval History */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_approval_history_profile_action_btn"
    label="View Approval History"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Disbursement Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_disbursement_records_profile_action_btn"
    label="View Disbursement Records"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Recovery Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_recovery_records_profile_action_btn"
    label="View Recovery Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : clock: Pending Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterPendingRequests_btn"
    label="Pending Requests"
    icon="clock"

    onClick={()=>{

        filterPendingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Pending",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approved Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterApprovedRequests_btn"
    label="Approved Requests"
    icon="check-circle"

    onClick={()=>{

        filterApprovedRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Approved",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : alert-circle: Outstanding Advances */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterOutstandingRequests_btn"
    label="Outstanding Advances"
    icon="alert-circle"

    onClick={()=>{

        filterOutstandingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "current_balance_above",

            colVal: "0",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : check-circle: Approve Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_approveRecord_btn"
    label="Approve Record"
    icon="check-circle"

    onClick={()=>{

        approveRecord({

            title: `Approve approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Approved',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : times-circle: Reject Record */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMap_rejectApprovalRecord_btn"
    label="Reject Record"
    icon="times-circle"

    onClick={()=>{

        rejectApprovalRecord({

            title: `Reject approval record`,

            component: ApprovalsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "approvals",

            destTable: "approvals",

            fieldsetstr: 'approval_status|Rejected',

            profileDataNode: approvalsNode,

            dataInterpreter: InteprateApprovalsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:approvalsNode.request_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:approvalsNode.staff_id,parentName:approvalsNode.approval_level})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : approvals */
/* BUTTON        : clock-o: Pending Approvals */
/* ====================================================== */


<MosyActionButton
    source="ApprovalsProfile"
    action="approvals_DataMapQCol_filterPendingApprovals_btn"
    label="Pending Approvals"
    icon="clock-o"

    onClick={()=>{

        filterPendingApprovals({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "approval_status",

            colVal: "Pending",

            tableName: "approvals",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : disbursements */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="DisbursementsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:disbursementsNode.request_id,parentName:disbursementsNode.disbursement_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : disbursements */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="DisbursementsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:disbursementsNode.staff_id,parentName:disbursementsNode.disbursement_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : paper-plane: Resend Message */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_resendMessage_btn"
    label="Resend Message"
    icon="paper-plane"

    onClick={()=>{

        resendMessage({

            title: `Resend notification`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Pending',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : check-circle: Mark Delivered */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markDelivered_btn"
    label="Mark Delivered"
    icon="check-circle"

    onClick={()=>{

        markDelivered({

            title: `Mark message delivered`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Delivered',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : times-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMap_markFailedMessage_btn"
    label="Mark Failed"
    icon="times-circle"

    onClick={()=>{

        markFailedMessage({

            title: `Mark message failed`,

            component: MessagesProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "messages",

            destTable: "messages",

            fieldsetstr: 'delivery_status|Failed',

            profileDataNode: messagesNode,

            dataInterpreter: InteprateMessagesEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:messagesNode.request_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:messagesNode.staff_id,parentName:messagesNode.message_type})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : messages */
/* BUTTON        : exclamation-circle: Failed Messages */
/* ====================================================== */


<MosyActionButton
    source="MessagesProfile"
    action="messages_DataMapQCol_filterFailedMessages_btn"
    label="Failed Messages"
    icon="exclamation-circle"

    onClick={()=>{

        filterFailedMessages({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "delivery_status",

            colVal: "Failed",

            tableName: "messages",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : check-circle: Verify Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_verifyPayment_btn"
    label="Verify Transaction"
    icon="check-circle"

    onClick={()=>{

        verifyPayment({

            title: `Verify payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Completed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Reverse Transaction */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_reversePayment_btn"
    label="Reverse Transaction"
    icon="undo"

    onClick={()=>{

        reversePayment({

            title: `Reverse payment transaction`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Reversed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : times-circle: Mark Failed */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMap_markPaymentFailed_btn"
    label="Mark Failed"
    icon="times-circle"

    onClick={()=>{

        markPaymentFailed({

            title: `Mark payment failed`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "payments",

            destTable: "payments",

            fieldsetstr: 'payment_status|Failed',

            profileDataNode: paymentsNode,

            dataInterpreter: IntepratePaymentsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Request Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_request_details_profile_action_btn"
    label="View Request Details"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`recordId`,parentColVal:paymentsNode.request_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:paymentsNode.staff_id,parentName:paymentsNode.reference_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : money: Completed Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterCompletedPayments_btn"
    label="Completed Transactions"
    icon="money"

    onClick={()=>{

        filterCompletedPayments({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_status",

            colVal: "Completed",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : undo: Recovery Transactions */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterRecoveries_btn"
    label="Recovery Transactions"
    icon="undo"

    onClick={()=>{

        filterRecoveries({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Recovery",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : payments */
/* BUTTON        : money: Disbursements */
/* ====================================================== */


<MosyActionButton
    source="PaymentsProfile"
    action="payments_DataMapQCol_filterDisbursements_btn"
    label="Disbursements"
    icon="money"

    onClick={()=>{

        filterDisbursements({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "payment_type",

            colVal: "Disbursement",

            tableName: "payments",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approve Level 1 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel1_btn"
    label="Approve Level 1"
    icon="check-circle"

    onClick={()=>{

        approveLevel1({

            title: `Approve request level 1`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L1',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approve Level 2 */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_approveLevel2_btn"
    label="Approve Level 2"
    icon="check-circle"

    onClick={()=>{

        approveLevel2({

            title: `Approve request level 2`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Approved L2',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : times-circle: Reject Request */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_rejectRequest_btn"
    label="Reject Request"
    icon="times-circle"

    onClick={()=>{

        rejectRequest({

            title: `Reject request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Rejected',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : undo: Record Recovery */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_addPayment_btn"
    label="Record Recovery"
    icon="undo"

    onClick={()=>{

        addPayment({

            title: `Record Recovery Payment`,

            component: PaymentsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "payments",

            fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id",

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : money: Disburse Funds */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_addDisbursement_btn"
    label="Disburse Funds"
    icon="money"

    onClick={()=>{

        addDisbursement({

            title: `Create Disbursement`,

            component: DisbursementsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "disbursements",

            fieldsetstr: "requests:record_id|request_id,requests:staff_id|staff_id,requests:amount_approved|amount_disbursed",

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : money: Mark Paid */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_markRequestPaid_btn"
    label="Mark Paid"
    icon="money"

    onClick={()=>{

        markRequestPaid({

            title: `Mark request paid`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Paid',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Clear Advance */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMap_clearAdvanceRequest_btn"
    label="Clear Advance"
    icon="check-circle"

    onClick={()=>{

        clearAdvanceRequest({

            title: `Clear advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "requests",

            destTable: "requests",

            fieldsetstr: 'request_status|Cleared',

            profileDataNode: requestsNode,

            dataInterpreter: InteprateRequestsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Staff Details */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_staff_details_profile_action_btn"
    label="View Staff Details"
    icon="list"

    onClick={()=>{

        viewStaff({childCol:`recordId`,parentColVal:requestsNode.staff_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Approval History */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_approval_history_profile_action_btn"
    label="View Approval History"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Disbursement Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_disbursement_records_profile_action_btn"
    label="View Disbursement Records"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Recovery Records */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_recovery_records_profile_action_btn"
    label="View Recovery Records"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`requestId`,parentColVal:requestsNode.record_id,parentName:requestsNode.request_number})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : clock-o: Pending Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterPendingRequests_btn"
    label="Pending Requests"
    icon="clock-o"

    onClick={()=>{

        filterPendingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Pending",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : check-circle: Approved Requests */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterApprovedRequests_btn"
    label="Approved Requests"
    icon="check-circle"

    onClick={()=>{

        filterApprovedRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "request_status",

            colVal: "Approved",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : requests */
/* BUTTON        : exclamation-circle: Outstanding Advances */
/* ====================================================== */


<MosyActionButton
    source="RequestsProfile"
    action="requests_DataMapQCol_filterOutstandingRequests_btn"
    label="Outstanding Advances"
    icon="exclamation-circle"

    onClick={()=>{

        filterOutstandingRequests({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "current_balance_above",

            colVal: "0",

            tableName: "requests",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : cog: Activate Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_activateSettings_btn"
    label="Activate Settings"
    icon="cog"

    onClick={()=>{

        activateSettings({

            title: `Activate system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Active',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : settings */
/* BUTTON        : cog: Disable Settings */
/* ====================================================== */


<MosyActionButton
    source="SettingsProfile"
    action="settings_DataMap_disableSettings_btn"
    label="Disable Settings"
    icon="cog"

    onClick={()=>{

        disableSettings({

            title: `Disable system settings`,

            component: SettingsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "settings",

            destTable: "settings",

            fieldsetstr: 'system_status|Inactive',

            profileDataNode: settingsNode,

            dataInterpreter: InteprateSettingsEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : check-circle: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="check-circle"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : plus: Increase Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="increase_limit_profile_action_btn"
    label="Increase Limit"
    icon="plus"

    onClick={()=>{

        increaseAdvanceLimit('record_id')

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : check-circle: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="check-circle"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Adjust Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_adjustAdvanceLimit_btn"
    label="Adjust Limit"
    icon="money"

    onClick={()=>{

        adjustAdvanceLimit({

            title: `Adjust advance limit`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'advance_limit|,limit_adjustment_reason|',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : check-circle: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="check-circle"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Record Advance */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_recordAdvance_btn"
    label="Record Advance"
    icon="money"

    onClick={()=>{

        recordAdvance({

            title: `Record advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "requests",

            fieldsetstr: "staff:record_id|staff_id",

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Adjust Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_adjustAdvanceLimit_btn"
    label="Adjust Limit"
    icon="money"

    onClick={()=>{

        adjustAdvanceLimit({

            title: `Adjust advance limit`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'advance_limit|,limit_adjustment_reason|',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : check-circle: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="check-circle"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Record Advance */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_recordAdvance_btn"
    label="Record Advance"
    icon="money"

    onClick={()=>{

        recordAdvance({

            title: `Record advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "requests",

            fieldsetstr: "staff:full_name|record_id:staff_id",

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Adjust Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_adjustAdvanceLimit_btn"
    label="Adjust Limit"
    icon="money"

    onClick={()=>{

        adjustAdvanceLimit({

            title: `Adjust advance limit`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'advance_limit|,limit_adjustment_reason|',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : check-circle: Activate Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_activateStaff_btn"
    label="Activate Staff"
    icon="check-circle"

    onClick={()=>{

        activateStaff({

            title: `Activate {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Active',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Record Advance */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_recordAdvance_btn"
    label="Record Advance"
    icon="money"

    onClick={()=>{

        recordAdvance({

            title: `Record advance request`,

            component: RequestsProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "requests",

            fieldsetstr: "staff:full_name|record_id:staff_id,requests:request_number|request_number:'1000'",

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : pause: Suspend Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_suspendStaff_btn"
    label="Suspend Staff"
    icon="pause"

    onClick={()=>{

        suspendStaff({

            title: `Suspend {{full_name}} staff member`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'staff_status|Suspended',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : money: Adjust Limit */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMap_adjustAdvanceLimit_btn"
    label="Adjust Limit"
    icon="money"

    onClick={()=>{

        adjustAdvanceLimit({

            title: `Adjust advance limit`,

            component: StaffProfile,

            stateitemsetters: stateItemSetters,

            parentTable: "staff",

            destTable: "staff",

            fieldsetstr: 'advance_limit|,limit_adjustment_reason|',

            profileDataNode: staffNode,

            dataInterpreter: InteprateStaffEvent

        })

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Advance Requests */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_advance_requests_profile_action_btn"
    label="View Advance Requests"
    icon="list"

    onClick={()=>{

        viewRequests({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Approval Records */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_approval_records_profile_action_btn"
    label="View Approval Records"
    icon="list"

    onClick={()=>{

        viewApprovals({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Disbursements */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_disbursements_profile_action_btn"
    label="View Disbursements"
    icon="list"

    onClick={()=>{

        viewDisbursements({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Recoveries */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_recoveries_profile_action_btn"
    label="View Recoveries"
    icon="list"

    onClick={()=>{

        viewPayments({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : list : View Messages */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="view_messages_profile_action_btn"
    label="View Messages"
    icon="list"

    onClick={()=>{

        viewMessages({childCol:`staffId`,parentColVal:staffNode.record_id,parentName:staffNode.full_name})

    }}
/>

/* ====================================================== */
/* PRIMARY TABLE : staff */
/* BUTTON        : users: Active Staff */
/* ====================================================== */


<MosyActionButton
    source="StaffProfile"
    action="staff_DataMapQCol_filterActiveStaff_btn"
    label="Active Staff"
    icon="users"

    onClick={()=>{

        filterActiveStaff({

            customQueryStr : customQueryStr,

            stateItemSetters: stateItemSetters,

            colName: "staff_status",

            colVal: "Active",

            tableName: "staff",

        })

    }}
/>