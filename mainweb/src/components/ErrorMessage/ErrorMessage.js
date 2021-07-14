import React, { PureComponent } from "react";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

class ErrorMessage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpenErrorAlert: false,
        }
    }

    componentDidUpdate(prevPops) {
        if (prevPops.open !== this.props.open) {
            this.setState({
                isOpenErrorAlert: this.props.open,
            })
        }
    }
    handleClose = () => {
        this.props.clearErrorState();
        this.setState({
            isOpenErrorAlert: false,
        })
    }
    render() {
        const { open } = this.props;
        const { isOpenErrorAlert } = this.state;
        return (
            <Snackbar open={isOpenErrorAlert} anchorOrigin={{ horizontal: "right", vertical: "top" }}
                autoHideDuration={5000} onClose={this.handleClose}>
                <Alert severity="error" onClose={this.handleClose}>
                    {this.props.errorMessage || this.props.emailVerfiyError}
                </Alert>
            </Snackbar>
        )
    }
}
export default ErrorMessage
