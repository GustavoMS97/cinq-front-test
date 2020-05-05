import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }

  body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.inline-block {
  display: inline-block;
}

.inline-table {
  display: inline-table;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center !important;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-space-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.justify-start {
  justify-content: flex-start !important;
}

.align-start {
  align-items: flex-start !important;
}

.align-content-start {
  align-content: flex-start;
}

.flex-center {
  justify-content: center !important;
  align-items: center !important;
}

`;
