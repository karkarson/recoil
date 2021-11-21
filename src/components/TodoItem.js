import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "../store/todoRecoil";

function replaceItemAtIndex(arr, index, newValue) {
  console.log(`replaceItemAtIndex arr =>`, arr);
  console.log(`replaceItemAtIndex index =>`, index);
  console.log(`replaceItemAtIndex newValue =>`, newValue);
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  console.log(`removeItemAtIndex arr =>`, arr);
  console.log(`removeItemAtIndex index =>`, index);
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  useEffect(() => {
    console.log(`todoList=> `, todoList);
    console.log(`item=> `, item);
  }, [item, todoList]);

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}> X </button>
      <span>{item.id}</span>
    </div>
  );
};

export default TodoItem;
