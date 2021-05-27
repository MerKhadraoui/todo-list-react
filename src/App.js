import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDo from "./components/ToDos";
import React, { useState } from "react";
function App() {
  const [list, setList] = useState([]);

  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDo />
      <Footer />
    </React.Fragment>
  );
}

export default App;
