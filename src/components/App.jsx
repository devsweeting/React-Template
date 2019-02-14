import React from "react";
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;


function App(){
  return (
    <div>
      <p>App Component</p>
    </div>
  );
}

export default App;
