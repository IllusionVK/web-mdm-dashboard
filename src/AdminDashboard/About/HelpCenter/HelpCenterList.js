import React, { Component } from "react"
import PropTypes from 'prop-types'
import ReactWinJS from 'react-winjs'
import ContentPane from '../../../Utils/ContentPane'

class HelpCenterList extends Component {

    itemRenderer = ReactWinJS.reactRenderer((item) => {
        return (
            <div style={{ padding: '14px', width: '100%' }}>
                <span className="documentIcon" style={{marginRight: '5px'}}/>
                {item.data['HelpCenter.name']}
            </div>
        )
    })

    handleSuggestionsRequested = (eventObject) => {
        let queryText = eventObject.detail.queryText,
            query = queryText.toLowerCase(),
            suggestionCollection = eventObject.detail.searchSuggestionCollection

        if (queryText.length > 0) {
            for (let i = 0, len = this.props.suggestionList.length; i < len; i++) {
                if (this.props.suggestionList[i].toLowerCase().indexOf(query) !== -1) {
                    suggestionCollection.appendQuerySuggestion(this.props.suggestionList[i])
                }
            }
        }
    }

    handleQuerySubmitted = (eventObject) => {
        this.props.filterArticles(eventObject.detail.queryText)
    }

    search = () => {
        this.props.filterArticles(document.getElementsByClassName('win-autosuggestbox-input win-textbox')[0].value)
    }

    render() {
        return (
            <ContentPane itemListPaneWidth={this.props.itemListPaneWidth}>
                <div className="listPane" style={{ padding: 0 }}>

                    <div className="search" onClick={this.search}>
                        <span className="searchIcon"></span>
                    </div>

                    <ReactWinJS.AutoSuggestBox
                        style={{ margin: '20px'}}
                        placeholderText="Search an article"
                        onSuggestionsRequested={this.handleSuggestionsRequested}
                        onQuerySubmitted={this.handleQuerySubmitted} />

                    <h3 style={{paddingLeft: '10px', width: '100%', overflow: 'auto'}}>{this.props.labelList}</h3>

                    <ReactWinJS.ListView
                        ref="listView"
                        className="contentListView win-selectionstylefilled"
                        style={{ height: 'calc(100% - 48px)' }}
                        itemDataSource={this.props.dataSource}
                        itemTemplate={this.itemRenderer}
                        layout={this.props.layout}
                        selectionMode="single"
                        tapBehavior="directSelect"
                        onSelectionChanged={this.props.handleSelectionChanged}
                    />

                    {
                        this.props.labelList !== 'Popular' ? '' : 
                            <div>
                                <div className="separator" />
                                
                                <div style={{padding: '22px 14px 22px 10px'}}>
                                    <a onClick={this.props.showAllArticles}>Browse all articles</a>
                                </div>
                            </div>
                    }

                    <div className="separator" />

                    <div className="itemList" onClick={()=> this.props.changeSelectItem('feedback')}>
                        <span className="messageIcon" style={{marginRight: '5px'}}/>
                        Send feedback
                    </div>
                </div>
            </ContentPane>
        )
    }
}

HelpCenterList.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    labelList: PropTypes.string.isRequired,
    dataSource: PropTypes.object.isRequired,
    layout: PropTypes.object.isRequired,
    handleSelectionChanged: PropTypes.func.isRequired,
    showAllArticles: PropTypes.func.isRequired,
    changeSelectItem: PropTypes.func.isRequired
}

export default HelpCenterList