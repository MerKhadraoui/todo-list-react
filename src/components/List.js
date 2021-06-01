import { useState } from "react";
// install uuid in terminal run => (npm i uuid)
import { v4 as uuidv4 } from "uuid";
const List = (props) => {
  const [myInput, setMyInput] = useState("");
  function handelChange(e) {
    setMyInput(e.target.value);
  }
  function handelSubmit(e) {
    e.preventDefault();
    props.setList((prevState) => [
      ...prevState,
      { id: uuidv4(), title: myInput.trim(), done: false },
    ]);
    setMyInput("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="input"
        type="text"
        value={myInput}
        onChange={handelChange}
      />
      <input className="click" type="submit" value="ToDo" />
    </form>
  );
};
export default List;
