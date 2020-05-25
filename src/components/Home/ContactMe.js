import React from 'react';
import { db } from "../../data/firebase"
import '../../css/Home/ContactMe.css';

export default class ContactMe extends React.Component {

  state = {
    name:'',
    email:'',
    message:'',
    isLoading: false
  }

  handleInputChange = ({target:{name, value}}) => {
    this.setState({[name]: value})
  }

  onSubmitContact = (ev) => {
    ev.preventDefault()
    this.setState({isLoading:true})
    const{ name, email} = this.state
    if(!name || !email){
      alert('Please at least enter your name and email, thank you!')
      return
    }
    const infoId = `info_${Date.now()}`
    const { isLoading, ...infoObj} = this.state
    db.collection("client").doc(infoId).set(infoObj)
    .then(() =>{
      this.setState({name:'',email:'',message:'', isLoading:false})
      this.props.openNotification()
    })
  }

  render(){
    const { name, email ,message, isLoading } = this.state
    return (
      <footer className="contactMe" id='contactMe' ref={this.props.refC}>
          <div className="contactMeMain">
            <p className="contactMeTitle">CONTACT ME</p>
            <form className="contactMeForm">
                <input className="contactMeInput" onChange={this.handleInputChange} type="text" name="name" value={name} placeholder="Name*"/>
                <input className="contactMeInput" type="text" name="email" placeholder="E-mail*" value= {email} onChange={this.handleInputChange}/>
                <textarea name="message" className="contactMeTextarea" placeholder="Leave Message Here..." value={message} onChange={this.handleInputChange}></textarea>
                <a className={ isLoading ? "contactMeBtn loading" : "contactMeBtn"} onClick={this.onSubmitContact} disabled>Submit</a>
            </form>
          </div>
          
          <div className="contactMeBack"></div>
          
      </footer>
    );
  }
}