import React,{Component} from 'react';
import './App.css';
import Content from './Content';
import Nav from './Nav';
import AddNews from './AddNews';
// import {noteData} from './firebaseConnect';
import {connect} from 'react-redux';
import AlertInfor from './AlertInfor';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={}
  // }
  // addData = (item) =>{
  //   noteData.push(item)
  // }
  showFormIsEdit = ()=>{
    if(this.props.isEdit){
      return <AddNews/>
    }
  }
  render() {
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div>
      <Nav/>
      <AlertInfor/>
        <div className="container">
          <div className="row">
            <Content/>
            {this.showFormIsEdit()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
