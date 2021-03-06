import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Confirmation from '../../../Utils/Confirmation'

class DangerZone extends Component {

    wipe = async () => {
        const isOK = await Confirmation.isOK(this.wipeDevice)
        if (isOK) {
            this.props.showNotification('Success', 'data deleted successfully')
        }
    }

    unenroll = async () => {
        const isOK = await Confirmation.isOK(this.unenrollmentDevice)
        if (isOK) {
            this.props.showNotification('Success', 'unenrollment device')            
        }
    }

    delete = async () => {
        const isOK = await Confirmation.isOK(this.deleteDevice)
        if (isOK) {
            this.props.showNotification('Success', 'element successfully removed')                        
        }
    }

    render() {
        return ( 
            <div>
                <div className="listElement">
                    <div className="message">
                        Wipe Device
                        <div className="detail">Wipe will delete all data on the device</div>
                    </div>
                    <div className="controller">
                        <button className="win-button" onClick={this.wipe}>Wipe</button>
                    </div>
                    <Confirmation 
                        title="This is the last warning"
                        message="You're about to wipe the device. Are you really certain ? (the device is going to delete all its data next time it turns on)"
                        reference={el => this.wipeDevice = el} 
                    /> 
                </div>

                <div className="listElement">
                    <div className="message">
                        Unenrollment Device
                        <div className="detail">Unenrollment will change the state of the device (policies are unapplied, deployed files and app will be removed)</div>
                    </div>
                    <div className="controller">
                        <button className="win-button" onClick={this.unenroll}>Unenroll</button>
                    </div>
                    <Confirmation 
                        title={'Unenroll device #' + this.props.selectedItemList["PluginFlyvemdmAgent.id"] } 
                        message={'You are going to unenroll device ' + this.props.selectedItemList["PluginFlyvemdmAgent.id"]} 
                        reference={el => this.unenrollmentDevice = el} 
                    /> 
                </div>

                <div className="listElement">
                    <div className="message">
                        Delete Device
                        <div className="detail">Once you delete a device, there is no going back. Please be certain</div>
                    </div>
                    <div className="controller">
                        <button className="win-button" onClick={this.delete}>Delete</button>
                    </div>
                    <Confirmation 
                        title={'Delete device #' + this.props.selectedItemList["PluginFlyvemdmAgent.id"] } 
                        message={'You are going to delete device ' + this.props.selectedItemList["PluginFlyvemdmAgent.id"]} 
                        reference={el => this.deleteDevice = el} 
                    /> 
                </div>
            </div>
        )
    }
}

DangerZone.propTypes = {
    selectedItemList: PropTypes.object.isRequired,
    showNotification: PropTypes.func.isRequired
}

export default DangerZone