import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ConstructInputs from '../../Utils/Forms'
import ContentPane from '../../Utils/ContentPane'
import validateData from '../../Utils/validateData'
import IconItemList from '../IconItemList'
import { usersScheme } from '../../Utils/Forms/Schemes'

class Profiles extends Component {
    
    constructor(props) {
        super(props)
        const currentUser = this.props.dataSource.itemList.getAt(this.props.selectedIndex)
        
        this.state = {
            login: validateData(currentUser["User.name"], undefined),
            firstName: validateData(currentUser["User.firstname"]),
            realName: validateData(currentUser["User.realname"]),
            phone: validateData(currentUser["User.phone"]),
            mobilePhone: validateData(currentUser["User.mobile"]),
            phone2: validateData(currentUser["User.phone2"]),
            administrativeNumber: validateData(currentUser["User.registration_number"]),
            lastLogin: validateData(currentUser["User.last_login"], undefined),
            created: validateData(currentUser["User.date_creation"], undefined),
            modified: validateData(currentUser["User.date_mod"], undefined),
            emails: validateData(currentUser["User.UserEmail.email"], []),
            imageProfile: validateData(currentUser['User.picture'], "profile.png"),
            authentication: 'GLPI internal database',
            password: '',
            passwordConfirmation: '',
            category: '',
            defaultEntity: '',
            comments: '',
            typeImageProfile: 'file',
            title: '',
            location: '',
            defaultProfile: '',
            validSince: new Date(),
            validUntil: new Date()
        }
    }

    saveChanges = () => {
        this.props.showNotification('Success', 'edited user')            
        this.props.changeActionList(null)
    }

    changeState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    changeEmail = (name, value) => {
        let emails = [...this.state.emails]
        emails[name] = value
        this.changeState('emails', emails)
    }

    deleteEmail = (index) => {
        this.setState({
            emails: this.state.emails.slice(0,index).concat(this.state.emails.slice(index+1))
        })
    }

    addEmail = () => {
        this.setState({
            emails: [
                ...this.state.emails,
                ''
            ]
        })
    }

    previewFile = (evt) => {

        const file = evt.target.files[0]
        if (file.type.match('image.*')) {
            let reader = new FileReader()

            reader.onload = ((theFile) => {
                return (e) => {
                this.setState({
                    imageProfile: e.target.result,
                    typeImageProfile: 'localFile'
                })
            }})(file)

            reader.readAsDataURL(file)
        }
   }

    openFileChooser = () => {
        this.inputElement.value = null
        this.inputElement.click()
    }

    render () {

        const user = usersScheme({
            state: this.state, 
            changeState: this.changeState,
            changeEmail: this.changeEmail,
            deleteEmail: this.deleteEmail
        })

        const inputAttributes = {
            type: 'file',
            accept: "image/*",
            name: "imageProfile",
            style: { display: 'none' },
            ref: (element) => {
                this.inputElement = element
            },
            onChange: this.previewFile
        }

        return (

            <ContentPane itemListPaneWidth={this.props.itemListPaneWidth} >
                <div className="list-content Profiles">
                    <div className="listElement listElementIcon">
                        <span className="viewIcon" />
                    </div>


                    <div className="listElement">

                        <div style={{ overflow: 'hidden' }}>
                            <input
                                {...inputAttributes}
                            />
                            <IconItemList
                                image={this.state.imageProfile}
                                type={this.state.typeImageProfile}
                                imgClick={this.openFileChooser}
                                size={150}
                                imgClass="clickable" />
                        </div>

                    </div>


                    <ConstructInputs data={user.personalInformation} icon="contactIcon" />

                    <ConstructInputs data={user.passwordInformation} icon="permissionsIcon" />

                    <ConstructInputs data={user.validDatesInformation} icon="monthIcon" />

                    <ConstructInputs data={user.emailsInformation} icon="emailIcon" />
                    <div style={{ overflow: 'auto' }}>
                        <button className="win-button" style={{ float: 'right' }} onClick={this.addEmail}>Add email</button>
                    </div>

                    <ConstructInputs data={user.contactInformation} icon="phoneIcon" />

                    <ConstructInputs data={user.moreInformation} icon="detailsIcon" />

                    <ConstructInputs data={user.activityInformation} icon="documentIcon" />

                    <button className="win-button win-button-primary" style={{ margin: "20px", float: "right" }} onClick={this.saveChanges}>
                        Save
                    </button>

                    <br />
                </div>
            </ContentPane>
        )
    }
}

Profiles.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    dataSource: PropTypes.object.isRequired,
    selectedIndex: PropTypes.array,
    changeActionList: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired
}

export default Profiles