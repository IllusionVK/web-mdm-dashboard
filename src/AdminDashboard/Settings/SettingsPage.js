import React, { Component } from 'react'
import EmptyMessage from '../../Utils/EmptyMessage'
import PropTypes from 'prop-types'
import Entity from './Entity/'
import Profiles from './Profiles'
import Supervision from './Supervision'
import Security from './Security'
import Notifications from './Notifications'
import Display from './Display'


class SettingsPage extends Component {
    render () {
        if (this.props.location[1] || this.props.location[1] === 0) {
            const selectedItemList = this.props.itemList.getAt(this.props.location[1])
            switch (selectedItemList.title) {
                case 'Entity':
                    return (
                        <Entity 
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            showNotification={this.props.showNotification}
                        />
                    )
                case 'Profiles':
                    return (
                        <Profiles 
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            showNotification={this.props.showNotification}
                        />
                    )
                case 'Supervision':
                    return (
                        <Supervision 
                            itemListPaneWidth={this.props.itemListPaneWidth} 
                            showNotification={this.props.showNotification}
                        />
                    )
                case 'Security':
                    return (
                        <Security 
                            itemListPaneWidth={this.props.itemListPaneWidth} 
                            getPasswordConfiguration={this.props.getPasswordConfiguration}
                            passwordConfiguration={this.props.passwordConfiguration}
                            isLoading={this.props.isLoading}
                            changeLoading={this.props.changeLoading}
                            showNotification={this.props.showNotification}
                        />
                    )
                case 'Notifications':
                    return (
                        <Notifications itemListPaneWidth={this.props.itemListPaneWidth}/>
                    )
                case 'Display':
                    return (
                        <Display 
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            handleToggleAnimation={this.props.handleToggleAnimation}
                        />
                    )
                default:
                    return (
                        <EmptyMessage message="No Selection" itemListPaneWidth={this.props.itemListPaneWidth} />
                    )
            }
        } else {
            return (
                <EmptyMessage message="No Selection" itemListPaneWidth={this.props.itemListPaneWidth} />            
            )
        }
    }
}

SettingsPage.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    animation: PropTypes.bool.isRequired,
    handleToggleAnimation: PropTypes.func.isRequired,
    location: PropTypes.array.isRequired,
    itemList: PropTypes.object.isRequired,
    getPasswordConfiguration: PropTypes.func.isRequired,
    passwordConfiguration: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    changeLoading: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired
}

export default SettingsPage