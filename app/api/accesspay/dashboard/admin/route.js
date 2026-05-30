

import { mosyFlexSelect, toNum } from '../../../apiUtils/dataControl/dataUtils';
import { processAuthToken } from '../../../auth/authManager';

export async function GET(request)
{
    const { valid:isTokenValid, reason:tokenError, data:authData } =
        processAuthToken(request);

    if(!isTokenValid)
    {
        return Response.json(
        {
            status:'unauthorized',
            message:tokenError
        },
        {
            status:403
        });
    }

    const safeHiveSiteId =
        String(authData.hive_site_id)
        .replace(/'/g, "\\\\'");

    

const requests_count_request_status_pendingQ = {
    tbl:'requests',
    colstr:btoa(`COUNT(*) as value`),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
    `)
};




const requests_count_request_status_approvedQ = {
    tbl:'requests',
    colstr:btoa(`COUNT(*) as value`),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
    `)
};




const requests_count_request_status_paidQ = {
    tbl:'requests',
    colstr:btoa(`COUNT(*) as value`),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
    `)
};




const requests_count_request_status_partially_clearedQ = {
    tbl:'requests',
    colstr:btoa(`COUNT(*) as value`),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
    `)
};




const requests_count_request_status_clearedQ = {
    tbl:'requests',
    colstr:btoa(`COUNT(*) as value`),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
    `)
};




const payments_sum_amountQ = {
    tbl:'payments',
    colstr:btoa(`COALESCE(SUM(amount),0) as value`),
    q:btoa(`
        WHERE payments.hive_site_id='${safeHiveSiteId}'
    `)
};



const staff_sum_current_outstanding_balanceQ = {
    tbl:'staff',
    colstr:btoa(`COALESCE(SUM(current_outstanding_balance),0) as value`),
    q:btoa(`
        WHERE staff.hive_site_id='${safeHiveSiteId}'
    `)
};




const request_status_breakdownQ = {
    tbl:'requests',
    colstr:btoa(`
        request_status as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};




const monthly_requests_trendQ = {
    tbl:'requests',
    colstr:btoa(`
        DATE_FORMAT(requested_on, '%Y-%m') as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE requests.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY label ASC

    `)
};




const requests_by_departmentQ = {
    tbl:'staff',
    colstr:btoa(`
        department as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE staff.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};




const monthly_disbursementsQ = {
    tbl:'payments',
    colstr:btoa(`
        DATE_FORMAT(recorded_on, '%Y-%m') as label,
        COALESCE(SUM(amount),0) as value
    `),
    q:btoa(`
        WHERE payments.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY label ASC

    `)
};




const monthly_recoveriesQ = {
    tbl:'payments',
    colstr:btoa(`
        DATE_FORMAT(recorded_on, '%Y-%m') as label,
        COALESCE(SUM(amount),0) as value
    `),
    q:btoa(`
        WHERE payments.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY label ASC

    `)
};




const payments_by_methodQ = {
    tbl:'payments',
    colstr:btoa(`
        payment_method as label,
        COALESCE(SUM(amount),0) as value
    `),
    q:btoa(`
        WHERE payments.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};




const staff_status_overviewQ = {
    tbl:'staff',
    colstr:btoa(`
        staff_status as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE staff.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};




const notification_delivery_statusQ = {
    tbl:'messages',
    colstr:btoa(`
        delivery_status as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE messages.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};




const approval_status_overviewQ = {
    tbl:'approvals',
    colstr:btoa(`
        approval_status as label,
        COUNT(*) as value
    `),
    q:btoa(`
        WHERE approvals.hive_site_id='${safeHiveSiteId}'
        
GROUP BY label
ORDER BY value DESC

    `)
};



    const [
        requests_count_request_status_pendingRes,
requests_count_request_status_approvedRes,
requests_count_request_status_paidRes,
requests_count_request_status_partially_clearedRes,
requests_count_request_status_clearedRes,
payments_sum_amountRes,
staff_sum_current_outstanding_balanceRes,
request_status_breakdownRes,
monthly_requests_trendRes,
requests_by_departmentRes,
monthly_disbursementsRes,
monthly_recoveriesRes,
payments_by_methodRes,
staff_status_overviewRes,
notification_delivery_statusRes,
approval_status_overviewRes
    ] = await Promise.all([
        mosyFlexSelect(requests_count_request_status_pendingQ),
mosyFlexSelect(requests_count_request_status_approvedQ),
mosyFlexSelect(requests_count_request_status_paidQ),
mosyFlexSelect(requests_count_request_status_partially_clearedQ),
mosyFlexSelect(requests_count_request_status_clearedQ),
mosyFlexSelect(payments_sum_amountQ),
mosyFlexSelect(staff_sum_current_outstanding_balanceQ),
mosyFlexSelect(request_status_breakdownQ),
mosyFlexSelect(monthly_requests_trendQ),
mosyFlexSelect(requests_by_departmentQ),
mosyFlexSelect(monthly_disbursementsQ),
mosyFlexSelect(monthly_recoveriesQ),
mosyFlexSelect(payments_by_methodQ),
mosyFlexSelect(staff_status_overviewQ),
mosyFlexSelect(notification_delivery_statusQ),
mosyFlexSelect(approval_status_overviewQ)
    ]);

    const cardsData = [
        

{
    title:'Pending Requests',
    value:`${toNum(requests_count_request_status_pendingRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaClock'
}

,

{
    title:'Approved Requests',
    value:`${toNum(requests_count_request_status_approvedRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaCheckCircle'
}

,

{
    title:'Paid Advances',
    value:`${toNum(requests_count_request_status_paidRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaMoneyBillWave'
}

,

{
    title:'Partially Cleared',
    value:`${toNum(requests_count_request_status_partially_clearedRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaBalanceScale'
}

,

{
    title:'Cleared Advances',
    value:`${toNum(requests_count_request_status_clearedRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaCheckDouble'
}

,

{
    title:'Total Disbursed',
    value:`${toNum(payments_sum_amountRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaHandHoldingUsd'
}

,

{
    title:'Total Recovered',
    value:`${toNum(payments_sum_amountRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaUndo'
}

,

{
    title:'Outstanding Balance',
    value:`${toNum(staff_sum_current_outstanding_balanceRes?.data?.[0]?.value || 0, 0)}`,
    percentage:'',
    icon:'FaExclamationTriangle'
}


    ];

    const chartData = [
        

{
    title:'Request Status Breakdown',
    chartType:'pie',
    dataKey:'label',
    data:request_status_breakdownRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Monthly Requests Trend',
    chartType:'line',
    dataKey:'label',
    data:monthly_requests_trendRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Requests by Department',
    chartType:'bar',
    dataKey:'label',
    data:requests_by_departmentRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Monthly Disbursements',
    chartType:'line',
    dataKey:'label',
    data:monthly_disbursementsRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Monthly Recoveries',
    chartType:'line',
    dataKey:'label',
    data:monthly_recoveriesRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Payments by Method',
    chartType:'pie',
    dataKey:'label',
    data:payments_by_methodRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Staff Status Overview',
    chartType:'bar',
    dataKey:'label',
    data:staff_status_overviewRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Notification Delivery Status',
    chartType:'pie',
    dataKey:'label',
    data:notification_delivery_statusRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}

,

{
    title:'Approval Status Overview',
    chartType:'bar',
    dataKey:'label',
    data:approval_status_overviewRes?.data ?? [],
    series:[
        {
            key:'value',
            color:'#661238',
            name:'Value'
        }
    ],
    height:350,
    containerClass:'col-md-6'}


    ];

    const gridData = [
        
    ];

    return Response.json(
    {
        status:'success',
        message:'Dashboard ready!',
        cards_data:cardsData,
        chart_data:chartData,
        grid_data:gridData
    });

}

