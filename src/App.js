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
    setList((prevState) => {
      prevState.filter((item) => {
        if (item.id === itemsToCheck) {
          item.done = !item.done;
        }
        return item;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <List className="todo-list" setList={setList} />
        <ToDo className="todo" list={list} remove={remove} check={check} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
