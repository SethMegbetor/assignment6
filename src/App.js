import React from "react";
import Header from "./components/header";
import Global from "./components/global";
import GlobalTable from "./components/globalTable";
import Sidenote from "./components/sidenote";
function App() {
  return (
    <>
      <Header></Header>
      <Global></Global>
      <Sidenote></Sidenote>
      <GlobalTable></GlobalTable>
    </>
  );
}

export default App;
