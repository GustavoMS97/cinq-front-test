import React, { Component } from "react";
import { Input, InputLabel, InputAdornment, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { connect } from "react-redux";
import { Container, StyledForm, HeaderContainer } from "./style.css";
import { fetchUsers, removeUsers } from "../../redux/actions";
import DefaultView from "./DefaultView";
import { differentArrayOfObjects } from "../../utils/Object";

class Main extends Component {
  state = { users: [], selectedUsers: [], searchValue: "", smallerView: false };

  async componentDidMount() {
    this.props.fetchUsers();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate() {
    // Valida o redux de usuários
    if (this.props.users) {
      if (
        this.props.users.userList &&
        differentArrayOfObjects(this.props.users.userList, this.state.users)
      ) {
        this.setState({ users: this.props.users.userList });
        console.log(this.props.users.userList);
      }

      if (
        this.props.users.selectedUsers &&
        differentArrayOfObjects(
          this.props.users.selectedUsers,
          this.state.selectedUsers
        )
      ) {
        this.setState({ selectedUsers: this.props.users.selectedUsers });
        console.log(this.props.users.selectedUsers);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 1024 && !this.state.smallerView) {
      this.setState({ smallerView: true });
    } else if (window.innerWidth > 1024 && this.state.smallerView) {
      this.setState({ smallerView: false });
    }
  };

  printJSON = () =>
    "text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(this.state.selectedUsers));

  removeUsers = () => {
    this.props.removeUsers(this.state.selectedUsers.map((u) => u.id));
  };

  filterUsers = (user) =>
    user.firstName
      .toLowerCase()
      .includes(this.state.searchValue.toLowerCase()) ||
    user.lastName.toLowerCase().includes(this.state.searchValue.toLowerCase());

  render() {
    return (
      <Container>
        <HeaderContainer>
          <StyledForm>
            <InputLabel htmlFor="search-input">Filter by name</InputLabel>
            <Input
              id="search-input"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              value={this.state.searchValue}
              onChange={(e) => this.setState({ searchValue: e.target.value })}
            />
          </StyledForm>
          <Button
            disabled={this.state.users.filter((u) => u.selected).length === 0}
            variant="contained"
            color="secondary"
            onClick={this.removeUsers}
          >
            {`Delete${` ${
              this.state.selectedUsers.length > 0
                ? this.state.selectedUsers.length
                : " "
            } `}selected`}
          </Button>
          <Button
            variant="contained"
            color="primary"
            href={`data:'${this.printJSON()}'`}
            download="users.json"
          >
            Download
          </Button>
        </HeaderContainer>
        {this.state.smallerView ? (
          true
        ) : (
          <DefaultView users={this.state.users.filter(this.filterUsers)} />
        )}
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

export default connect(mapStateToProps, { fetchUsers, removeUsers })(Main);
