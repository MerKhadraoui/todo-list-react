import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDo from "./components/ToDo";
import React, { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const remove = (removItem) => {
    const newArr = list.filter((item) => item.id !== removItem);
    setList(newArr);
  };
  const check = (itemsToCheck) => {
    list.filter((item) => {
      if (item.id === itemsToCheck) {
        item.done = !item.done;
      }
      return item;
    });
  };
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDo list={list} remove={remove} checkToDo={check} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
