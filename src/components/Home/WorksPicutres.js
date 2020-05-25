import React from 'react';
import '../../css/Home/Works.css';

class ImgItem extends React.Component{

    state = {
        isHover: false
    }

    taggleIsHover = () => {
        this.setState({isHover: !this.state.isHover})
    }

    render(){
        const {isHover } = this.state
        return(
            <div onClick={()=>this.props.onShowWorkDetail(this.props.data.id)} className={isHover? 'homeWorksPicutresImgItem onMouseOver' :"homeWorksPicutresImgItem" } onMouseOver={this.taggleIsHover} onMouseOut={this.taggleIsHover}>
                <img className={ isHover ? 'homeWorksPicutresImg onMouseOver' : "homeWorksPicutresImg"} src={this.props.data.cover}/>
                <div className="homeWorksInfo">
                    <p className="homeWorksPicutresImgItemTitle">{this.props.data.title}</p>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        )
    }
}

export default function WorksPicutres(props) {
    const { data, categoryId, currentPage, onShowWorkDetail } = props 

    const gridStyle = {
        gridTemplateColumns: currentPage === 1 ? '1fr' : '1fr 1fr'
    }

    return (
        <div className="homeWorksPicutres" style={ categoryId === 2 || currentPage === 1 ? gridStyle : {} }>
            {
                data.map((item,index) => <ImgItem onShowWorkDetail={onShowWorkDetail} data={item} key={index}/>)
            }
        </div>
    );
}