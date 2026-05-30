// sidebarConfigPOS.js

export const sidebarConfig = [

  {
    type: "link",
    label: "Dashboard",
    icon: "fa fa-dashboard",
    href: (routes) => `${routes.accesspay}/dashboard/main`,
    roles: []
  },

  {
    type: "submenu",
    label: "Requests",
    icon: "fa fa-money",
    roles: [],
    items: [
      { label: "All Requests", href: (routes) => `${routes.accesspay}/requests/list`, roles: [] },
      { label: "New Request", href: (routes) => `${routes.accesspay}/requests/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Approvals",
    icon: "fa fa-check-circle",
    roles: [],
    items: [
      { label: "Pending Approvals", href: (routes) => `${routes.accesspay}/approvals/list`, roles: [] },
      { label: "Approval History", href: (routes) => `${routes.accesspay}/approvals/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Disbursements",
    icon: "fa fa-send",
    roles: [],
    items: [
      { label: "All Disbursements", href: (routes) => `${routes.accesspay}/disbursements/list`, roles: [] },
      { label: "New Disbursement", href: (routes) => `${routes.accesspay}/disbursements/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Recoveries",
    icon: "fa fa-credit-card",
    roles: [],
    items: [
      { label: "All Recoveries", href: (routes) => `${routes.accesspay}/payments/list`, roles: [] },
      { label: "Record Recovery", href: (routes) => `${routes.accesspay}/payments/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Staff",
    icon: "fa fa-users",
    roles: [],
    items: [
      { label: "Staff Members", href: (routes) => `${routes.accesspay}/staff/list`, roles: [] },
      { label: "Add Staff", href: (routes) => `${routes.accesspay}/staff/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Messages",
    icon: "fa fa-envelope",
    roles: [],
    items: [
      { label: "Message Center", href: (routes) => `${routes.accesspay}/messages/list`, roles: [] },
      { label: "Send Message", href: (routes) => `${routes.accesspay}/messages/profile`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Reports",
    icon: "fa fa-line-chart",
    roles: [],
    items: [
      { label: "Outstanding Advances", href: (routes) => `${routes.accesspay}/dashboard/outstanding`, roles: [] },
      { label: "Recovery Report", href: (routes) => `${routes.accesspay}/dashboard/recoveries`, roles: [] },
      { label: "Disbursement Report", href: (routes) => `${routes.accesspay}/dashboard/disbursements`, roles: [] },
      { label: "Staff Summary", href: (routes) => `${routes.accesspay}/dashboard/staff`, roles: [] },
    ],
  },

  {
    type: "submenu",
    label: "Settings",
    icon: "fa fa-cog",
    roles: [],
    items: [
      { label: "System Settings", href: (routes) => `${routes.accesspay}/settings/list`, roles: [] },
      { label: "Update Settings", href: (routes) => `${routes.accesspay}/settings/profile`, roles: [] },
    ],
  }

];
