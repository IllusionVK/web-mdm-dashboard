import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DevicesList from './DevicesList'
import DevicesPage from './DevicesPage'

export default class Devices extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectionMode: false
        }
    }

    changeSelectionMode = (selectionMode) => {
        this.setState({
            selectionMode
        })
    }

    render() {

        let selectedIndex = this.props.location.length === 2 ? this.props.location[1] : null
        if (this.props.mode === 'small') {
            if (selectedIndex === null && this.props.actionList === null) {
                return <DevicesList
                    itemListPaneWidth={'100%'}
                    animation={this.props.animation}
                    dataSource={this.props.dataSource}
                    changeDataSource={this.props.changeDataSource}
                    fetchData={this.props.fetchData}
                    isLoading={this.props.isLoading}
                    isError={this.props.isError}
                    location={this.props.location}
                    onNavigate={this.props.onNavigate}
                    changeSelectionMode={this.changeSelectionMode}
                    selectionMode={this.state.selectionMode}
                    actionList={this.props.actionList}
                    changeActionList={this.props.changeActionList}
                    showNotification={this.props.showNotification} />
            } else {
                return <DevicesPage 
                    itemListPaneWidth={0}
                    animation={this.props.animation}
                    dataSource={this.props.dataSource}
                    changeDataSource={this.props.changeDataSource}
                    location={this.props.location}
                    onNavigate={this.props.onNavigate}
                    selectedIndex={selectedIndex}
                    changeSelectionMode={this.changeSelectionMode}
                    actionList={this.props.actionList}
                    changeActionList={this.props.changeActionList}
                    showNotification={this.props.showNotification} />
            }
        } else {
            let itemListPaneWidth = 320
            return (
                <div style={{ height: '100%' }}>
                    <DevicesList
                        itemListPaneWidth={itemListPaneWidth}
                        animation={this.props.animation}
                        dataSource={this.props.dataSource}
                        changeDataSource={this.props.changeDataSource}
                        fetchData={this.props.fetchData}
                        isLoading={this.props.isLoading}
                        isError={this.props.isError}
                        location={this.props.location}
                        onNavigate={this.props.onNavigate}
                        changeSelectionMode={this.changeSelectionMode}
                        selectionMode={this.state.selectionMode}
                        actionList={this.props.actionList}
                        changeActionList={this.props.changeActionList} 
                        showNotification={this.props.showNotification}
                    />
                    <DevicesPage 
                        itemListPaneWidth={itemListPaneWidth}
                        animation={this.props.animation}
                        dataSource={this.props.dataSource}
                        changeDataSource={this.props.changeDataSource}
                        location={this.props.location}
                        onNavigate={this.props.onNavigate}
                        selectedIndex={selectedIndex}
                        changeSelectionMode={this.changeSelectionMode}
                        actionList={this.props.actionList}
                        changeActionList={this.props.changeActionList} 
                        showNotification={this.props.showNotification}
                    />
                </div>
            )
        }
    }
}
Devices.propTypes = {
    mode: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    animation: PropTypes.bool.isRequired,
    dataSource: PropTypes.object.isRequired,
    changeDataSource: PropTypes.func.isRequired,
    location: PropTypes.array.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeActionList: PropTypes.func.isRequired,
    actionList: PropTypes.string,
    showNotification: PropTypes.func.isRequired
}
