import React from 'react';
import WorksCategory from './Home/WorksCategory'
import WorksPicutres from './Home/WorksPicutres'
import { Link } from 'react-router-dom'

import WorksData from '../data/Works'
import '../css/Home/Works.css';

export default class Works extends React.Component {
    state = {
        categoryId: '',
        data: WorksData
    }

    // handleChangeCategory = (categoryId, isSlice) => {
    //     let data = WorksData
    //     data.sort((a,b) => {
    //         let x = Number(a.time.split('-').join('').split('-').join(''))
    //         let y = Number(b.time.split('-').join('').split('-').join(''))

    //         return y - x
    //     })
    //     if(categoryId === 0){
    //         data = isSlice ? data.slice(0,9) : data
    //     } else {
    //         data = WorksData.filter(item => item.type === categoryId)
    //         data = isSlice ? data.slice(0,9) : data
    //     }

        
    //     this.setState({categoryId, data})
    // }

    componentDidMount(){
        const { currentPage } = this.props;

        const data = WorksData.filter(item => item.type === currentPage)

        this.setState({categoryId: currentPage, data:data})

    }

    render(){
        const { currentPage } = this.props
        return (
            <div className="homeWorks">
                {/* { currentPage === 0 ? <p className="homeWorksTitle">My Work</p> : ''} */}
                {/* <WorksCategory currentPage={currentPage} categoryId={this.state.categoryId} onChangeCategory={this.handleChangeCategory}/> */}
                <WorksPicutres onShowWorkDetail={this.props.onShowWorkDetail} currentPage={currentPage} categoryId={this.state.categoryId} data={this.state.data}/>
                {/* { currentPage === 0 ? <Link to='/work' className="homeWorksViewMore">View More →</Link> : ''} */}
            </div>
          );
    }
}