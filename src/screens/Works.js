import React from 'react';
import Header from '../components/Header'
import Works from '../components/Works'

import '../css/Work/Work.css'


export default class WorkPage extends React.Component {

    state = {
        currentPage: 1,
        headerContent : {
            line2: 'MY DESIGN WORKS',
            line3: '----- created by Abigail'
        }
    }

    componentDidMount(){
        window.scrollTo({
            top: 0
        });
    }

    render(){
        const { currentPage, headerContent } = this.state
        return(
            <div className="WorkPage">
                <div className="shadowBox">
                    <Header currentPage={currentPage} headerContent={headerContent}/>
                    <Works onShowWorkDetail={this.props.onShowWorkDetail} currentPage={currentPage}/>
                </div>
            </div>
        )
    }
}