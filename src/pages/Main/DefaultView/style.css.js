import styled from "styled-components";
import { Table, Paper } from "@material-ui/core";

export const Container = styled.div``;

export const TableContainer = styled(Paper)`
  width: 90%;
  margin: 24px;
  overflow-x: auto;

  .actions-btn {
    margin: 0px 10px;
  }
`;

export const StyledTable = styled(Table)`
  min-width: 1024;
`;
