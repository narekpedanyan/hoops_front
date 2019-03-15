
export const SIDE_BAR_NAV_ITEMS = {
    name: 'nav-bar',
    headingLabel: '',
    group: [
        {
            id: 1,
            href: '/dashboard',
            icon: 'dashboard',
            label: 'Dashboard'
        },
        {
            id: 2,
            href: '/customers',
            icon: 'person',
            label: 'Customers'
        },
        {
            id: 3,
            href: '/catalogue',
            icon: 'view_list',
            label: 'Catalogue'
        },
        {
            id: 4,
            href: '/quotes',
            icon: 'book',
            label: 'Quotes'
        },
        {
            id: 5,
            href: '/jobs',
            icon: 'assignment',
            label: 'Jobs'
        },
        {
            id: 5,
            href: '/orders',
            icon: 'description',
            label: 'Purchase Orders'
        }
    ]
};

export const ACCOUNT_DROP_DOWN = {
    name: 'side-bar-account-dropdown',
    headingLabel: '',
    group: [
        {
            label: 'My Profile',
            icons: 'account_circle',
            link: false,
        },
        {
            label: 'Change Password',
            icons: 'https',
            link: false,
        },
        {
            label: 'Logout',
            icons: 'power_settings_new',
            link: false,
        }
    ]
};

