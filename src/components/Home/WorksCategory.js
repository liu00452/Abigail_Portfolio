import React from 'react';
import '../../css/Home/Works.css';

export default function WorksCategory(props) {
  const {onChangeCategory, currentPage, categoryId} = props

  function handleDifPage(id) {
    if(currentPage === 0){
      onChangeCategory(id, true)
    } else {
      onChangeCategory(id, false)
    }
  }

  return (
    <div className="homeWorksCategory">
        <p onClick={() => handleDifPage(0)} className={categoryId == 0? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>ALL</p>
        <p onClick={() => handleDifPage(1)} className={categoryId == 1? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>DEVELOPMENT</p>
        <p onClick={() => handleDifPage(2)} className={categoryId == 2? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>DESIGN</p>
    </div>
  );
}