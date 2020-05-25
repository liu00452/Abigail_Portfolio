import React from 'react';
import Home from './screens/Home'
import Work from './screens/Works'
import DevelopmentWork from './screens/DevelopmentWork'
import HeaderImage from './img/back.png'
import WorkDetail from './components/Works/WorkDetail'
import Modal from 'react-bootstrap/Modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends React.Component{
  
  state = {
    isShowWorkDetail: false,
    targetWorkId:0
  }

  showWorkDetail = (targetWorkId) => {
    this.setState({isShowWorkDetail: true, targetWorkId})
  }

  hideWorkDetail = () => {
    this.setState({isShowWorkDetail: false})
  }

  render(){
    return (
      <Router basename="/Abigail_Portfolio">
        <div className="App">
          <Modal onHide={this.hideWorkDetail} show={this.state.isShowWorkDetail} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <i onClick={this.hideWorkDetail} className="far fa-times-circle"></i>
            <WorkDetail targetWorkId={this.state.targetWorkId}/>
          </Modal>
          <div className="Back">
            <img className="BackImage" src={HeaderImage}/>
          </div>
          <Switch>
            <Route path='/work'>
              <Work onShowWorkDetail={this.showWorkDetail}/>
            </Route>
            <Route path='/developmentWork'>
              <DevelopmentWork onShowWorkDetail={this.showWorkDetail}/>
            </Route>
            <Route path='/'>
              <Home onShowWorkDetail={this.showWorkDetail}/>
            </Route>
          </Switch>
          <p className="copyright">&copy; 2020 Abigail Jingrong Liu</p>
        </div>
      </Router>
    );
  }
} 