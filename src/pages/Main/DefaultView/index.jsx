import React, { Component } from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  changeUserCheckbox,
  removeUsers,
  selectUser,
} from "../../../redux/actions";

import { Container, TableContainer, StyledTable } from "./style.css";

class DefaultView extends Component {
  removeItem = (user) => {
    this.props.removeUsers([user.id]);
  };

  onSelectRowToEdit = (user) => {
    this.props.selectUser(user);
    this.props.history.push("/details");
  };

  renderRows = () => {
    const { users } = this.props;
    return users.map((row) => (
      <TableRow key={row.id}>
        <TableCell align="center">
          <Checkbox
            checked={row.selected || false}
            onChange={(e) =>
              this.props.changeUserCheckbox(row, e.target.checked)
            }
            color="primary"
          />
        </TableCell>
        <TableCell align="center">
          {`${row.firstName} ${row.lastName}`}
        </TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            className="actions-btn"
            onClick={() => this.onSelectRowToEdit(row)}
          >
            <Edit />
          </Button>
          <Button
            onClick={() => this.removeItem(row)}
            variant="contained"
            color="secondary"
            className="actions-btn"
          >
            <Delete />
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  render() {
    return (
      <Container>
        <TableContainer>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="center">Check</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderRows()}</TableBody>
          </StyledTable>
        </TableContainer>
      </Container>
    );
  }
}

export default connect(null, { changeUserCheckbox, removeUsers, selectUser })(
  withRouter(DefaultView)
);
