import React, { Component } from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@material-ui/core";

import { Container, TableContainer, StyledTable } from "./style.css";

class DefaultView extends Component {
  filterUsers = (user) =>
    user.firstName
      .toLowerCase()
      .includes(this.props.searchValue.toLowerCase()) ||
    user.lastName.toLowerCase().includes(this.props.searchValue.toLowerCase());

  renderRows = () => {
    const { users } = this.props;
    const searchedUsers = users.filter(this.filterUsers);
    return searchedUsers.map((row) => (
      <TableRow key={row.id}>
        <TableCell align="center">
          <Checkbox
            checked={row.selected || false}
            onChange={(e) => this.props.selectUser(row, e.target.checked)}
            color="primary"
          />
        </TableCell>
        <TableCell align="center">
          {`${row.firstName} ${row.lastName}`}
        </TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center">Show | Delete</TableCell>
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

export default DefaultView;
