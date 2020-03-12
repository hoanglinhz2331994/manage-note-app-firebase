import {noteData} from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    // testConnect:'testThoi'
    isEdit:false,
    editItem:{},
    isAdd:false,
    AlertShow:false,
    AlertContent:'',
    AlertType:''
}
const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            // console.log('Kết nối thành công, dữ liệu được nhập vào là' + action.getItem);
            noteData.push(action.getItem)
            // alert('Thêm dữ liệu' + JSON.stringify(action.getItem) + 'thành công');
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state,isEdit:!state.isEdit}
        case 'GET_EDIT_DATA':
            return {...state,editItem:action.editOject}
        case 'EDIT':
            //update dữ liệu lên trên firebase
            noteData.child(action.getItem.id).update({
                noteTitle:action.getItem.noteTitle,
                noteContent:action.getItem.noteContent
            })
            console.log('Dữ liệu cần sửa mà Store nhận được là ' + JSON.stringify(action.getItem) + "cập nhật thành công");
            return {...state,editItem:{}}
        case 'DELETE':
            // console.log(action.deleteId); lấy được ID của phần tử trong TableRow
            noteData.child(action.deleteId).remove();
            console.log("Đã xóa thành công phần tử " + action.deleteId);
            return state
        case 'CHANGE_ADD_STATUS':
            return {...state,isAdd:!state.isAdd}
        case 'ALERT_ON':
            return {...state,AlertShow:true,AlertContent:action.AlertContent,AlertType:action.AlertType}
        case 'ALERT_OFF':
            
            return {...state,AlertShow:false}
        default:
            return state
    }
}
var store1 = redux.createStore(allReducers);
store1.subscribe(function(){
    console.log(JSON.stringify(store1.getState()));
    
})
export default store1;