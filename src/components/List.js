import { useState } from "react";
const List = (props) => {
  const [myInput, setMyInput] = useState("");
  function handelChange(e) {
    setMyInput(e.target.value);
  }
  function handelSubmit(e) {
    e.preventDefault();
    props.setList((prevState) => [
      ...prevState,
      { id: prevState.lenght, title: myInput.trim(), done: false },
    ]);
    setMyInput("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" value={myInput} onChange={handelChange} />
      <input type="submit" value="ToDo" />
    </form>
  );
};
export default List;
