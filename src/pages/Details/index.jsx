import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Fab,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import { selectUser, updateUser } from "../../redux/actions";

import { Container, FormContainer, ButtonContainer } from "./style.css";

class Details extends Component {
  state = {
    user: undefined,
    firstName: "",
    firstNameValid: true,
    lastName: "",
    lastNameValid: true,
    age: 0,
    description: "",
    canGoBack: true,
    modalOpen: false,
  };

  componentDidMount() {
    if (this.props.users && this.props.users.selectedUser) {
      this.setState({
        user: this.props.users.selectedUser,
        firstName: this.props.users.selectedUser.firstName,
        lastName: this.props.users.selectedUser.lastName,
        age: this.props.users.selectedUser.age,
        description: this.props.users.selectedUser.description,
      });
    }
  }

  goBack = () => {
    if (!this.state.canGoBack) {
      this.setState({ modalOpen: true });
    } else {
      this.props.selectUser(undefined);
      this.props.history.goBack();
    }
  };

  onSave = (e) => {
    let obj = {};
    if (!this.state.firstName || this.state.firstName.trim().length === 0) {
      obj.firstNameValid = false;
    }
    if (!this.state.lastName || this.state.lastName.trim().length === 0) {
      obj.lastNameValid = false;
    }

    if (Object.keys(obj).length > 0) {
      this.setState(obj);
      e.preventDefault();
    } else {
      this.props.updateUser({
        ...this.state.user,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Container>
        <Fab
          id="back-btn"
          onClick={this.goBack}
          color="primary"
          aria-label="Back"
        >
          <ArrowBack />
        </Fab>
        <FormContainer id="edit-user-form" onSubmit={this.onSave}>
          <TextField
            id="first-name"
            error={!this.state.firstNameValid}
            label="First name"
            className="input-field"
            value={this.state.firstName}
            onChange={(e) =>
              this.setState({ firstName: e.target.value, canGoBack: false })
            }
            variant="outlined"
          />

          <TextField
            id="last-name"
            error={!this.state.lastNameValid}
            label="Last name"
            className="input-field"
            value={this.state.lastName}
            onChange={(e) =>
              this.setState({ lastName: e.target.value, canGoBack: false })
            }
            variant="outlined"
          />

          <TextField
            label="Age"
            className="input-field"
            value={this.state.age}
            disabled
            variant="outlined"
          />

          <TextField
            label="Description"
            multiline
            rowsMax="4"
            className="input-field"
            value={this.state.description}
            disabled
            variant="outlined"
          />
          <ButtonContainer>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>

            <Button variant="contained" color="default" onClick={this.goBack}>
              Cancel
            </Button>
          </ButtonContainer>
        </FormContainer>

        <Dialog
          open={this.state.modalOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to cancel?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you cancel this operation, all changes will be lost.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ modalOpen: false })}
              color="primary"
            >
              Disagree
            </Button>
            <Button
              onClick={async () => {
                await this.setState({ canGoBack: true, modalOpen: false });
                this.goBack();
              }}
              color="primary"
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }
}

/**
 * Funcao que recebe o estado do redux e passa para o props do componente.
 */
const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, { selectUser, updateUser })(Details);
