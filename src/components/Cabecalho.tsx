import React from "react";
import styled from "styled-components";

function Cabecalho() {
  return (
    <Header>
      <h1>Biblioteca</h1>
    </Header>
  );
}

const Header = styled.header`
  background-color: #FFFBFB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7em;
  h1 {
    font-size: 2.5em;
  }
`

export default Cabecalho