export const REGISTER_FIELD_GROUP = {
    name: 'register',
    headingLabel: 'Register',
    group: [
        {
            id: 1,
            name: 'first_name',
            icon: 'person',
            fieldType: 'text',
            label: 'First name'
        },
        {
            id: 2,
            name: 'last_name',
            icon: 'person',
            fieldType: 'text',
            label: 'Last name'
        },
        {
            id: 3,
            name: 'company_name',
            icon: 'person',
            fieldType: 'text',
            label: 'Company name'
        },
        {
            id: 4,
            name: 'phone_number',
            icon: 'local_phone',
            fieldType: 'number',
            label: 'Number'
        },
        {
            id: 5,
            name: 'email',
            icon: 'person',
            fieldType: 'email',
            label: 'User Email'
        },
        {
            id: 6,
            name: 'password',
            icon: 'https',
            fieldType: 'password',
            label: 'Password'
        },
        {
            id: 7,
            name: 'password_confirmation',
            icon: 'https',
            fieldType: 'password',
            label: 'Confirm Password'
        }
    ]
};

export const LOGIN_FIELD_GROUP = {
    name: 'login',
    headingLabel: 'Log In',
    group: [
        {
            id: 1,
            name: 'email',
            icon: 'person',
            fieldType: 'email',
            label: 'User Email'
        },
        {
            id: 2,
            name: 'password',
            icon: 'https',
            fieldType: 'password',
            label: 'Password'
        }
    ]
};

export const FORGET_PASSWORD_GROUP = {
    name: 'forget-password',
    headingLabel: 'Reset My Password',
    group: [
        {
            id: 1,
            name: 'email',
            icon: 'person',
            fieldType: 'email',
            label: 'User Email'
        }
    ]
};

