<?php

/*
|--------------------------------------------------------------------------
| Generated Event Mapping String
|--------------------------------------------------------------------------
*/

/*

// STAFF

staff:activate-staff:profile|'record_id'|check-circle,Activate Staff,activateStaff,../logicControl
@activateStaff:DataMapUpdate:staff=Activate {{full_name}} staff member,staff_status|Active

staff:record-advance:profile|'record_id'|money,Record Advance,recordAdvance,../logicControl
@recordAdvance:DataMapAdd:requests=Record advance request, staff:full_name|record_id:staff_id,requests:request_number|request_number:'1000'

staff:suspend-staff:profile|'record_id'|pause,Suspend Staff,suspendStaff,../logicControl
@suspendStaff:DataMapUpdate:staff=Suspend {{full_name}} staff member,staff_status|Suspended

staff:adjust-limit:profile|'record_id'|money,Adjust Limit,adjustAdvanceLimit,../logicControl
@adjustAdvanceLimit:DataMapUpdate:staff=Adjust advance limit,advance_limit|,limit_adjustment_reason|

staff:active-staff:list|'Active'|users,Active Staff,filterActiveStaff,../logicControl
@filterActiveStaff:DataQueryCol:staff=staff_status,Active


// REQUESTS

requests:approve-l1:profile|'record_id'|check-circle,Approve Level 1,approveLevel1,../logicControl
@approveLevel1:DataMapUpdate:requests=Approve request level 1,request_status|Approved L1

requests:approve-l2:profile|'record_id'|check-circle,Approve Level 2,approveLevel2,../logicControl
@approveLevel2:DataMapUpdate:requests=Approve request level 2,request_status|Approved L2

requests:reject-request:profile|'record_id'|times-circle,Reject Request,rejectRequest,../logicControl
@rejectRequest:DataMapUpdate:requests=Reject request,request_status|Rejected

requests:add-payment:profile|'record_id'|undo,Record Recovery,addPayment,../logicControl
@addPayment:DataMapAdd:payments=Record Recovery Payment,requests:record_id|request_id,requests:staff_id|staff_id

requests:add-disbursement:profile|'record_id'|money,Disburse Funds,addDisbursement,../logicControl
@addDisbursement:DataMapAdd:disbursements=Create Disbursement,requests:record_id|request_id,requests:staff_id|staff_id,requests:amount_approved|amount_disbursed

requests:mark-paid:profile|'record_id'|money,Mark Paid,markRequestPaid,../logicControl
@markRequestPaid:DataMapUpdate:requests=Mark request paid,request_status|Paid

requests:clear-request:profile|'record_id'|check-circle,Clear Advance,clearAdvanceRequest,../logicControl
@clearAdvanceRequest:DataMapUpdate:requests=Clear advance request,request_status|Cleared

requests:pending-requests:list|'Pending'|clock-o,Pending Requests,filterPendingRequests,../logicControl
@filterPendingRequests:DataQueryCol:requests=request_status,Pending

requests:approved-requests:list|'Approved'|check-circle,Approved Requests,filterApprovedRequests,../logicControl
@filterApprovedRequests:DataQueryCol:requests=request_status,Approved

requests:outstanding-requests:list|'Outstanding'|exclamation-circle,Outstanding Advances,filterOutstandingRequests,../logicControl
@filterOutstandingRequests:DataQueryCol:requests=current_balance_above,0


// APPROVALS

approvals:approve-record:profile|'record_id'|check-circle,Approve Record,approveRecord,../logicControl
@approveRecord:DataMapUpdate:approvals=Approve approval record,approval_status|Approved

approvals:reject-record:profile|'record_id'|times-circle,Reject Record,rejectApprovalRecord,../logicControl
@rejectApprovalRecord:DataMapUpdate:approvals=Reject approval record,approval_status|Rejected

approvals:pending-approvals:list|'Pending'|clock-o,Pending Approvals,filterPendingApprovals,../logicControl
@filterPendingApprovals:DataQueryCol:approvals=approval_status,Pending


// PAYMENTS

payments:verify-payment:profile|'record_id'|check-circle,Verify Transaction,verifyPayment,../logicControl
@verifyPayment:DataMapUpdate:payments=Verify payment transaction,payment_status|Completed

payments:reverse-payment:profile|'record_id'|undo,Reverse Transaction,reversePayment,../logicControl
@reversePayment:DataMapUpdate:payments=Reverse payment transaction,payment_status|Reversed

payments:failed-payment:profile|'record_id'|times-circle,Mark Failed,markPaymentFailed,../logicControl
@markPaymentFailed:DataMapUpdate:payments=Mark payment failed,payment_status|Failed

payments:completed-payments:list|'Completed'|money,Completed Transactions,filterCompletedPayments,../logicControl
@filterCompletedPayments:DataQueryCol:payments=payment_status,Completed

payments:recoveries:list|'Recovery'|undo,Recovery Transactions,filterRecoveries,../logicControl
@filterRecoveries:DataQueryCol:payments=payment_type,Recovery

payments:disbursements:list|'Disbursement'|money,Disbursements,filterDisbursements,../logicControl
@filterDisbursements:DataQueryCol:payments=payment_type,Disbursement


// MESSAGES

messages:resend-message:profile|'record_id'|paper-plane,Resend Message,resendMessage,../logicControl
@resendMessage:DataMapUpdate:messages=Resend notification,delivery_status|Pending

messages:mark-delivered:profile|'record_id'|check-circle,Mark Delivered,markDelivered,../logicControl
@markDelivered:DataMapUpdate:messages=Mark message delivered,delivery_status|Delivered

messages:failed-message:profile|'record_id'|times-circle,Mark Failed,markFailedMessage,../logicControl
@markFailedMessage:DataMapUpdate:messages=Mark message failed,delivery_status|Failed

messages:failed-messages:list|'Failed'|exclamation-circle,Failed Messages,filterFailedMessages,../logicControl
@filterFailedMessages:DataQueryCol:messages=delivery_status,Failed


// SETTINGS

settings:activate-settings:profile|'record_id'|cog,Activate Settings,activateSettings,../logicControl
@activateSettings:DataMapUpdate:settings=Activate system settings,system_status|Active

settings:disable-settings:profile|'record_id'|cog,Disable Settings,disableSettings,../logicControl
@disableSettings:DataMapUpdate:settings=Disable system settings,system_status|Inactive

*/

/*
|--------------------------------------------------------------------------
| Generated Event Mapper Array
|--------------------------------------------------------------------------
*/

$eventMappingArray=[

    "staff"=>[

        "profile"=>[

            "check-circle: Activate Staff" => [
                "fe" => "activateStaff('record_id')",
                "be" => "activateStaff()",
                "file" => "activate-staff",
                "funName" => "activateStaff",
                "destTable" => "staff",
                "logicFlow" => "Activate {{full_name}} staff member,staff_status|Active",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "money: Record Advance" => [
                "fe" => "recordAdvance('record_id')",
                "be" => "recordAdvance()",
                "file" => "record-advance",
                "funName" => "recordAdvance",
                "destTable" => "requests",
                "logicFlow" => "Record advance request, staff:full_name|record_id:staff_id,requests:request_number|request_number:'1000'",
                "functionType" => "DataMapAdd",
                "basePath"=>"../logicControl"
            ],

            "pause: Suspend Staff" => [
                "fe" => "suspendStaff('record_id')",
                "be" => "suspendStaff()",
                "file" => "suspend-staff",
                "funName" => "suspendStaff",
                "destTable" => "staff",
                "logicFlow" => "Suspend {{full_name}} staff member,staff_status|Suspended",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "money: Adjust Limit" => [
                "fe" => "adjustAdvanceLimit('record_id')",
                "be" => "adjustAdvanceLimit()",
                "file" => "adjust-limit",
                "funName" => "adjustAdvanceLimit",
                "destTable" => "staff",
                "logicFlow" => "Adjust advance limit,advance_limit|,limit_adjustment_reason|",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

        "list"=>[

            "users: Active Staff" => [
                "fe" => "filterActiveStaff('Active')",
                "be" => "filterActiveStaff()",
                "file" => "active-staff",
                "funName" => "filterActiveStaff",
                "destTable" => "staff",
                "logicFlow" => "staff_status,Active",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

    "requests"=>[

        "profile"=>[

            "check-circle: Approve Level 1" => [
                "fe" => "approveLevel1('record_id')",
                "be" => "approveLevel1()",
                "file" => "approve-l1",
                "funName" => "approveLevel1",
                "destTable" => "requests",
                "logicFlow" => "Approve request level 1,request_status|Approved L1",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "check-circle: Approve Level 2" => [
                "fe" => "approveLevel2('record_id')",
                "be" => "approveLevel2()",
                "file" => "approve-l2",
                "funName" => "approveLevel2",
                "destTable" => "requests",
                "logicFlow" => "Approve request level 2,request_status|Approved L2",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "times-circle: Reject Request" => [
                "fe" => "rejectRequest('record_id')",
                "be" => "rejectRequest()",
                "file" => "reject-request",
                "funName" => "rejectRequest",
                "destTable" => "requests",
                "logicFlow" => "Reject request,request_status|Rejected",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "undo: Record Recovery" => [
                "fe" => "addPayment('record_id')",
                "be" => "addPayment()",
                "file" => "add-payment",
                "funName" => "addPayment",
                "destTable" => "payments",
                "logicFlow" => "Record Recovery Payment,requests:record_id|request_id,requests:staff_id|staff_id",
                "functionType" => "DataMapAdd",
                "basePath"=>"../logicControl"
            ],

            "money: Disburse Funds" => [
                "fe" => "addDisbursement('record_id')",
                "be" => "addDisbursement()",
                "file" => "add-disbursement",
                "funName" => "addDisbursement",
                "destTable" => "disbursements",
                "logicFlow" => "Create Disbursement,requests:record_id|request_id,requests:staff_id|staff_id,requests:amount_approved|amount_disbursed",
                "functionType" => "DataMapAdd",
                "basePath"=>"../logicControl"
            ],

            "money: Mark Paid" => [
                "fe" => "markRequestPaid('record_id')",
                "be" => "markRequestPaid()",
                "file" => "mark-paid",
                "funName" => "markRequestPaid",
                "destTable" => "requests",
                "logicFlow" => "Mark request paid,request_status|Paid",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "check-circle: Clear Advance" => [
                "fe" => "clearAdvanceRequest('record_id')",
                "be" => "clearAdvanceRequest()",
                "file" => "clear-request",
                "funName" => "clearAdvanceRequest",
                "destTable" => "requests",
                "logicFlow" => "Clear advance request,request_status|Cleared",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

        "list"=>[

            "clock-o: Pending Requests" => [
                "fe" => "filterPendingRequests('Pending')",
                "be" => "filterPendingRequests()",
                "file" => "pending-requests",
                "funName" => "filterPendingRequests",
                "destTable" => "requests",
                "logicFlow" => "request_status,Pending",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

            "check-circle: Approved Requests" => [
                "fe" => "filterApprovedRequests('Approved')",
                "be" => "filterApprovedRequests()",
                "file" => "approved-requests",
                "funName" => "filterApprovedRequests",
                "destTable" => "requests",
                "logicFlow" => "request_status,Approved",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

            "exclamation-circle: Outstanding Advances" => [
                "fe" => "filterOutstandingRequests('Outstanding')",
                "be" => "filterOutstandingRequests()",
                "file" => "outstanding-requests",
                "funName" => "filterOutstandingRequests",
                "destTable" => "requests",
                "logicFlow" => "current_balance_above,0",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

    "approvals"=>[

        "profile"=>[

            "check-circle: Approve Record" => [
                "fe" => "approveRecord('record_id')",
                "be" => "approveRecord()",
                "file" => "approve-record",
                "funName" => "approveRecord",
                "destTable" => "approvals",
                "logicFlow" => "Approve approval record,approval_status|Approved",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "times-circle: Reject Record" => [
                "fe" => "rejectApprovalRecord('record_id')",
                "be" => "rejectApprovalRecord()",
                "file" => "reject-record",
                "funName" => "rejectApprovalRecord",
                "destTable" => "approvals",
                "logicFlow" => "Reject approval record,approval_status|Rejected",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

        "list"=>[

            "clock-o: Pending Approvals" => [
                "fe" => "filterPendingApprovals('Pending')",
                "be" => "filterPendingApprovals()",
                "file" => "pending-approvals",
                "funName" => "filterPendingApprovals",
                "destTable" => "approvals",
                "logicFlow" => "approval_status,Pending",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

    "payments"=>[

        "profile"=>[

            "check-circle: Verify Transaction" => [
                "fe" => "verifyPayment('record_id')",
                "be" => "verifyPayment()",
                "file" => "verify-payment",
                "funName" => "verifyPayment",
                "destTable" => "payments",
                "logicFlow" => "Verify payment transaction,payment_status|Completed",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "undo: Reverse Transaction" => [
                "fe" => "reversePayment('record_id')",
                "be" => "reversePayment()",
                "file" => "reverse-payment",
                "funName" => "reversePayment",
                "destTable" => "payments",
                "logicFlow" => "Reverse payment transaction,payment_status|Reversed",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "times-circle: Mark Failed" => [
                "fe" => "markPaymentFailed('record_id')",
                "be" => "markPaymentFailed()",
                "file" => "failed-payment",
                "funName" => "markPaymentFailed",
                "destTable" => "payments",
                "logicFlow" => "Mark payment failed,payment_status|Failed",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

        "list"=>[

            "money: Completed Transactions" => [
                "fe" => "filterCompletedPayments('Completed')",
                "be" => "filterCompletedPayments()",
                "file" => "completed-payments",
                "funName" => "filterCompletedPayments",
                "destTable" => "payments",
                "logicFlow" => "payment_status,Completed",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

            "undo: Recovery Transactions" => [
                "fe" => "filterRecoveries('Recovery')",
                "be" => "filterRecoveries()",
                "file" => "recoveries",
                "funName" => "filterRecoveries",
                "destTable" => "payments",
                "logicFlow" => "payment_type,Recovery",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

            "money: Disbursements" => [
                "fe" => "filterDisbursements('Disbursement')",
                "be" => "filterDisbursements()",
                "file" => "disbursements",
                "funName" => "filterDisbursements",
                "destTable" => "payments",
                "logicFlow" => "payment_type,Disbursement",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

    "messages"=>[

        "profile"=>[

            "paper-plane: Resend Message" => [
                "fe" => "resendMessage('record_id')",
                "be" => "resendMessage()",
                "file" => "resend-message",
                "funName" => "resendMessage",
                "destTable" => "messages",
                "logicFlow" => "Resend notification,delivery_status|Pending",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "check-circle: Mark Delivered" => [
                "fe" => "markDelivered('record_id')",
                "be" => "markDelivered()",
                "file" => "mark-delivered",
                "funName" => "markDelivered",
                "destTable" => "messages",
                "logicFlow" => "Mark message delivered,delivery_status|Delivered",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "times-circle: Mark Failed" => [
                "fe" => "markFailedMessage('record_id')",
                "be" => "markFailedMessage()",
                "file" => "failed-message",
                "funName" => "markFailedMessage",
                "destTable" => "messages",
                "logicFlow" => "Mark message failed,delivery_status|Failed",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

        "list"=>[

            "exclamation-circle: Failed Messages" => [
                "fe" => "filterFailedMessages('Failed')",
                "be" => "filterFailedMessages()",
                "file" => "failed-messages",
                "funName" => "filterFailedMessages",
                "destTable" => "messages",
                "logicFlow" => "delivery_status,Failed",
                "functionType" => "DataQueryCol",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

    "settings"=>[

        "profile"=>[

            "cog: Activate Settings" => [
                "fe" => "activateSettings('record_id')",
                "be" => "activateSettings()",
                "file" => "activate-settings",
                "funName" => "activateSettings",
                "destTable" => "settings",
                "logicFlow" => "Activate system settings,system_status|Active",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

            "cog: Disable Settings" => [
                "fe" => "disableSettings('record_id')",
                "be" => "disableSettings()",
                "file" => "disable-settings",
                "funName" => "disableSettings",
                "destTable" => "settings",
                "logicFlow" => "Disable system settings,system_status|Inactive",
                "functionType" => "DataMapUpdate",
                "basePath"=>"../logicControl"
            ],

        ],

    ],

];

?>