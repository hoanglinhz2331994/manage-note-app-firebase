import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddNews extends Component {
    constructor(props) {
        super(props);
        this.state ={
            noteTitle:'',
            noteContent:'',
            id:''
        }
    }
    
    UNSAFE_componentWillMount() {
        if(this.props.editItem){
            this.setState({
                noteTitle:this.props.editItem.noteTitle,
                noteContent:this.props.editItem.noteContent,
                id:this.props.editItem.id
            })
        }
    }
    
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        
        this.setState({
            [name]:value
        })       
    }
    addData = (title,content) =>{
        if(this.state.id){
        //    console.log("Đang trong trạng thái sửa");
           var editObject={};
           editObject.id = this.state.id;
           editObject.noteTitle = this.state.noteTitle;
           editObject.noteContent = this.state.noteContent;
        
           this.props.editDataStore(editObject);
           this.props.changeEditStatus();
           this.props.alertOn("Sửa thành công","info");
        }else{
            var item={};
            item.noteTitle = title;
            item.noteContent = content;
            // // console.log(item);
            // this.props.getData(item);  //Lấy dữ liệu từ form AddNews chuyển về App
            // item = JSON.stringify(item);
            this.props.addData(item);
            this.props.alertOn("Thêm thành công","info");
        }
    }
    printTitle = ()=>{
        if(this.props.addStatus){
            return <h4>Thêm mới</h4>
        }else{
            return <h4>Sửa ghi chú</h4>
        }
    }
    render() {
        // console.log(this.props.editItem);
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTittle" placeholder="Tiêu đề note" />
                        <small id="helpIdNoteTittle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteTittle" placeholder="Nội dung note" />
                        <small id="helpIdNoteTittle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                        </label>
                    </div>
                    <button onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} type="reset" className="btn btn-primary">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (getItem) => {
            dispatch({type:'ADD_NEWS',getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:'EDIT',getItem})
        },
        changeEditStatus: () => {
            dispatch({
              type:"CHANGE_EDIT_STATUS"
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
export default connect(mapStateToProps, mapDispatchToProps)(AddNews);