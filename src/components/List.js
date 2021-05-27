import { useState } from "react";
const List = () => {
  const [myInput, setMyInput] = useState("");
  function handelChange(e) {
    setMyInput(e.target.value);
  }
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" value={myInput} onChange={handelChange} />
      <input type="submit" value="ToDo" />
    </form>
  );
};
export default List;
