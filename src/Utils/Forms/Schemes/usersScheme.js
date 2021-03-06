export default function ({state, changeState, changeEmail, deleteEmail}) {

    const personalInformation = [
        [
            {
                label: "Login",
                type: "text",
                name: "login",
                value: state.login,
                placeholder: null,
                function: null,
                disabled: true,
                style: {
                    width: 'auto'
                }
            },
        ],
        [
            {
                label: "Realname",
                type: "text",
                name: "realName",
                value: state.realName,
                placeholder: "Realname",
                function: changeState,
                disabled: false,
                style: null
            },
            {
                label: "First name",
                type: "text",
                name: "firstName",
                value: state.firstName,
                placeholder: "First name",
                function: changeState,
                disabled: false,
                style: null
            }
        ],
        [
            {
                label: "Title",
                type: "select",
                name: "title",
                value: state.title,
                options: [
                    {
                        label: 'option 1',
                        value: 'option 1'
                    },
                    {
                        label: 'option 2',
                        value: 'option 2'
                    },
                    {
                        label: 'option 3',
                        value: 'option 3'
                    }
                ],
                function: changeState
            },
            {
                label: "Location",
                type: "select",
                name: "location",
                value: state.location,
                options: [
                    {
                        label: 'option 1',
                        value: 'option 1'
                    },
                    {
                        label: 'option 2',
                        value: 'option 2'
                    },
                    {
                        label: 'option 3',
                        value: 'option 3'
                    }
                ],
                function: changeState
            },
            {
                label: "Default profile",
                type: "select",
                name: "defaultProfile",
                value: state.defaultProfile,
                options: [
                    {
                        label: 'option 1',
                        value: 'option 1'
                    },
                    {
                        label: 'option 2',
                        value: 'option 2'
                    },
                    {
                        label: 'option 3',
                        value: 'option 3'
                    }
                ],
                function: changeState
            }
        ]
    ]
    
    const contactInformation = [
        [
            {
                label: "Phone",
                type: "text",
                name: "phone",
                value: state.phone,
                placeholder: "Phone",
                function: changeState,
                disabled: false,
                style: null
            },
            {
                label: "Mobile phone",
                type: "text",
                name: "mobilePhone",
                value: state.mobilePhone,
                placeholder: "Mobile phone",
                function: changeState,
                disabled: false,
                style: null
            }
        ],
        [
            {
                label: "Phone 2",
                type: "text",
                name: "phone2",
                value: state.phone2,
                placeholder: "Phone 2",
                function: changeState,
                disabled: false,
                style: null
            },
            {
                label: "Administrative number",
                type: "text",
                name: "administrativeNumber",
                value: state.administrativeNumber,
                placeholder: "Administrative number",
                function: changeState,
                disabled: false,
                style: null
            }
        ]
    ]
    const passwordInformation = [
        [
            {
                label: "Password",
                type: "password",
                name: "password",
                value: state.password,
                placeholder: "Password",
                function: changeState,
                disabled: false,
                style: null
            },
            {
                label: "Password (confirmation)",
                type: "password",
                name: "passwordConfirmation",
                value: state.passwordConfirmation,
                placeholder: "Password confirmation",
                function: changeState,
                disabled: false,
                style: null
            }
        ]
    ]
    
    const activityInformation = [
        [
            {
                label: "Last login",
                type: "text",
                name: "lastLogin",
                value: state.lastLogin,
                placeholder: "Last login",
                function: changeState,
                disabled: true,
                style: {
                    width: '100%'
                }
            },
            {
                label: "Created",
                type: "text",
                name: "created",
                value: state.created,
                placeholder: "Created",
                function: changeState,
                disabled: true,
                style: {
                    width: 'auto'
                } 
            },
            {
                label: "Modified",
                type: "text",
                name: "modified",
                value: state.modified,
                placeholder: "Modified",
                function: changeState,
                disabled: true,
                style: {
                    width: 'auto'
                } 
            }
        ]
    
    ]
    
    const validDatesInformation = [
        [{
            label: "Valid since",
            type: "date",
            name: "validSince",
            value: state.validSince,
            function: changeState
        }],
        [{
            label: "Valid until",
            type: "date",
            name: "validUntil",
            value: state.validUntil,
            function: changeState
        }]
    ]
    
    const moreInformation = [
        [{
            label: "Authentication",
            type: "text",
            name: "authentication",
            value: state.authentication,
            placeholder: null,
            function: changeState,
            disabled: true,
            style: null
        }],
        [   
            {
                label: "Category",
                type: "select",
                name: "category",
                value: state.category,
                options: [
                    {
                        label: 'option 1',
                        value: 'option 1'
                    },
                    {
                        label: 'option 2',
                        value: 'option 2'
                    },
                    {
                        label: 'option 3',
                        value: 'option 3'
                    }
                ],
                function: changeState
            },
            {
                label: "Default entity",
                type: "select",
                name: "defaultEntity",
                value: state.defaultEntity,
                options: [
                    {
                        label: 'option 1',
                        value: 'option 1'
                    },
                    {
                        label: 'option 2',
                        value: 'option 2'
                    },
                    {
                        label: 'option 3',
                        value: 'option 3'
                    }
                ],
                function: changeState
            }
        ],
        [
            {
                label: "Comments",
                type: "textArea",
                name: "comments",
                value: state.comments,
                placeholder: null,
                function: changeState,
                disabled: false,
                style: null
            }
        ]
    ]
    
    let emailsInformation = [[]]
    
    for (let index = 0; index < state.emails.length; index++) {
        emailsInformation = [
            ...emailsInformation,
            [{
                label: `Email ${index + 1}`,
                type: "email",
                name: index,
                value: state.emails[index],
                placeholder: null,
                function: changeEmail,
                disabled: false,
                style: null,
                delete: deleteEmail
            }]
        ]
        
    }

    return {
        personalInformation,
        contactInformation,
        passwordInformation,
        activityInformation,
        validDatesInformation,
        moreInformation,
        emailsInformation
    }
}
