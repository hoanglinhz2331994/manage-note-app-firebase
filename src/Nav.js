import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {
    handleAdd = (event)=>{
        event.preventDefault(); //Hàm không cho load lại trang
        this.props.changEditStatus();
        this.props.changeAddStatus();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="Home">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="HomecollapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://zing.vn" onClick={(event)=>this.handleAdd(event)}>Thêm ghi chú</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type:"CHANGE_ADD_STATUS"
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);