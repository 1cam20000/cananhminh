import React, { useContext, useState } from "react";
import { Button, Checkbox } from "antd";
import { IoTrashBinOutline } from "react-icons/io5";
import { AppContext, AppContext2 } from "../App";

const ListTodo = () => {
  const { todos, setTodos } = useContext(AppContext2);

  const onDelete = (indexHandle) => {
    const newArr = todos.filter((item, index) => index !== indexHandle);
    setTodos(newArr);
    console.log(newArr);
  };
  const handleDeleteAll = () => {
    const newTodo = [];
    setTodos(newTodo);
  };

  //
  const onCheck = (indexHandle) => {
    const newCheckArr = todos.map((item, index) => {
      if (index === indexHandle) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setTodos(newCheckArr);
  };

  return (
    <div style={{ width: "800px", margin: "0 auto", position: "relative" }}>
      {todos.map((item, index) => (
        <div
          style={{ marginTop: "20px", gap: "15px", display: "flex" }}
          key={item.id}
        >
          <Checkbox onClick={() => onCheck(index)} />
          <div className={item.isDone == true && "styleCheck"}>
            {" "}
            {item.name}
          </div>
          <Button
            size="20"
            style={{ border: "none", right: "0px", position: "absolute" }}
            onClick={() => onDelete(index)}
          >
            <IoTrashBinOutline />
          </Button>
        </div>
      ))}
      {todos.length === 0 ? (
        <h1></h1>
      ) : (
        <Button
          onClick={handleDeleteAll}
          type="primary"
          style={{
            background: "red",
            position: "absolute",
            right: "0px",
            marginTop: "10px",
          }}
        >
          Delete All
        </Button>
      )}
    </div>
  );
};

export default ListTodo;
