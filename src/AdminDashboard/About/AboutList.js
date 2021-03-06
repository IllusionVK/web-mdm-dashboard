import React, { Component } from "react"
import ReactWinJS from 'react-winjs'
import PropTypes from 'prop-types'
let WinJS = require('winjs')

export default class AboutList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            layout: { type: WinJS.UI.ListLayout }
        }
    }

    itemRenderer = ReactWinJS.reactRenderer((item) => {
        return (
            <div style={{ padding: '14px', width: '100%' }}>
                {item.data.title}
            </div>
        )
    })


    handleSelectionChanged = (eventObject) => {
        let listView = eventObject.currentTarget.winControl
        let index = listView.selection.getIndices()
        setTimeout(function () {
            this.setState({ selectedItemList: index });
            this.props.onNavigate(index.length === 1 && !this.state.selectionMode ? [this.props.location[0], index] : this.props.location);
        }.bind(this), 0)
    }

    render() {
        return (
            <div className="listPane" style={{ height: '100%', width: this.props.itemListPaneWidth, display: 'inline-block', verticalAlign: 'top' }}>
                <ReactWinJS.ListView
                    ref="listView"
                    className="contentListView win-selectionstylefilled"
                    style={{ height: 'calc(100% - 48px)' }}
                    itemDataSource={this.props.itemList.dataSource}
                    itemTemplate={this.itemRenderer}
                    layout={this.state.layout}
                    selectionMode="single"
                    tapBehavior="directSelect" 
                    onSelectionChanged={this.handleSelectionChanged}
                />
            </div>
        )
    }
}
AboutList.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    itemList: PropTypes.object.isRequired,
    location: PropTypes.array.isRequired,
    onNavigate: PropTypes.func.isRequired
}
