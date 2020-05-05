import React, { Component } from "react";
import { Input, InputLabel, InputAdornment, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Container, StyledForm, HeaderContainer } from "./style.css";
import { getUsers } from "../../functions/User";
import DefaultView from "./DefaultView";

class Main extends Component {
  state = { users: [], searchValue: "", smallerView: false };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
    window.addEventListener("resize", this.updateWindowDimensions);
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
          >
            Delete selected
          </Button>
          <Button variant="contained" color="primary">
            Download
          </Button>
        </HeaderContainer>
        {this.state.smallerView ? (
          true
        ) : (
          <DefaultView
            users={this.state.users}
            searchValue={this.state.searchValue}
            selectUser={(row, checked) => {
              row.selected = checked;
              this.setState({ users: this.state.users });
            }}
          />
        )}
      </Container>
    );
  }
}

export default Main;
