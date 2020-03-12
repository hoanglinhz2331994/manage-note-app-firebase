import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';

class AlertInfor extends Component {
    handleDisMiss = ()=>{
        this.props.alertOff();
    }
    render() {
        if(this.props.AlertShow===false) return null;
        return (
            <AlertContainer position="top-right">
                <Alert type={this.props.AlertType} onDismiss={()=>this.handleDisMiss()} timeout={1000}>
                    {this.props.AlertContent}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertType: state.AlertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    alertOff: () => {
        dispatch({
            type:"ALERT_OFF"
        })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfor);