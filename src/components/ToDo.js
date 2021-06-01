// usin for loop
// const ToDo = (props) => {
//   console.log(props.list);
//   const userTodos = props.list;
//   for (let i = 0; i < userTodos.length; i++) {
//     console.log(userTodos[i]);
//     <li key={i}>
//       <input
//         type="checkbox"
//         defaultChecked={userTodos[i].done}
//         onChange={() => props.check(userTodos[i].id)}
//       />
//       {userTodos[i].title}
//       <i
//         onClick={() => {
//           console.log(userTodos[i].id);
//           props.remove(userTodos[i].id);
//         }}
//       >
//         🗑
//       </i>
//     </li>;
//   }

//   return <ul>{userTodos}</ul>;
// };

// export default ToDo;
const Todo = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      {toDo.title}
      <i
        onClick={() => {
          console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};

export default Todo;
