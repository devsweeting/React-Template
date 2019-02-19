import React from "react";
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Header from './Header';
import DisplayCard from './DisplayCard';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    font-family: 'Roboto', sans-serif;
  }
`;
function App(){
  return (
    <div>
      <Header />
      <DisplayCard />
    </div>
  );
}

export default App;
