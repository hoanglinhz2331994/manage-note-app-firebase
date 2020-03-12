import React, { Component } from 'react';
import {connect} from 'react-redux';


class TableRow extends Component {
    twoAction = ()=>{
        this.props.changeEditStatus()
        //console.log(this.props.note); //lấy được thông tin đối tượng
        this.props.getEditData(this.props.note);
    }
    deleteData = ()=>{
      //console.log(this.props.note.id);
      this.props.getDeleteData(this.props.note.id);
      this.props.alertOn('Xóa ghi chú " ' + this.props.note.noteTitle + ' " thành công',"danger")
    }
    render() {
        return (
            <div className="card">
                <div className="card-header " role="tab" id="note1">
                <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#number"+this.props.i} aria-expanded="true" aria-controls="noteContent">
                   {this.props.noteTitle}
                    </a>
                    <div className="btn-group float-right">
                        <button onClick={()=>this.twoAction()} className="btn btn-outline-info">Sửa</button>
                        <button onClick={()=>this.deleteData()} className="btn btn-outline-secondary">Xóa</button>
                    </div>
                </h5>
                </div>
                <div id={"number"+this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                <div className="card-body">
                    {this.props.noteContent}
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      isEditStatus: state.isEdit
    }
  }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({
          type:"CHANGE_EDIT_STATUS"
        })
      },
      getEditData: (editOject) => {
        dispatch({
          type:"GET_EDIT_DATA",
          editOject
        })
      },
      getDeleteData: (deleteId) => {
        dispatch({
          type:"DELETE",
          deleteId
        })
      },
      alertOn: (AlertContent,AlertType) => {
          dispatch({
            type:"ALERT_ON",AlertContent,AlertType
          })
        },
      alertOff: () => {
          dispatch({
            type:"ALERT_OFF"
          })
        },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TableRow);