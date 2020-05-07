import React, { Component } from "react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Checkbox,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  changeUserCheckbox,
  selectUser,
  removeUsers,
} from "../../../redux/actions";

import { Container, StyledCard } from "./style.css";

class SmallView extends Component {
  state = {};

  removeItem = (user) => {
    this.props.removeUsers([user.id]);
  };

  onSelectUserToEdit = (user) => {
    this.props.selectUser(user);
    this.props.history.push("/details");
  };

  renderCard = (user) => {
    return (
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h2">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Age: {user.age}
          </Typography>
          <Typography component="p">
            <strong>Description:</strong> {user.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox
            checked={user.selected || false}
            onChange={(e) =>
              this.props.changeUserCheckbox(user, e.target.checked)
            }
            color="primary"
          />
          <Button size="small" onClick={() => this.onSelectUserToEdit(user)}>
            Show
          </Button>
          <Button size="small" onClick={() => this.removeItem(user)}>
            Delete
          </Button>
        </CardActions>
      </StyledCard>
    );
  };

  render() {
    const { users } = this.props;
    return (
      <Container>
        <div className="row">
          {users.map((user) => (
            <div className="col" key={user.id}>
              {this.renderCard(user)}
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default connect(null, { changeUserCheckbox, selectUser, removeUsers })(
  withRouter(SmallView)
);
