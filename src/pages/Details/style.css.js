import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;

  #back-btn {
    position: fixed;
    top: 10px;
    left: 10px;
  }

  .input-field {
    margin: 10px 0px;
    width: 70%;
  }
`;

export const FormContainer = styled.form`
  @media only screen and (max-width: 600px) {
    width: 100% !important;
    height: 100% !important;
    box-shadow: 0px;
  }

  width: 35%;
  height: 50%;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
