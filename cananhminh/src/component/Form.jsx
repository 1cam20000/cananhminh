import React, { useContext, useState } from "react";
import { Button, Input } from "antd";
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";

const Form = () => {
  const handleAdd = useContext(AppContext)
  const [val, setVal] = useState("");
  const onclick = () => {
    if (val !== "") {
      handleAdd(val);
      setVal("");
    }
  };
  return (
    <div id="form">
      <h1>#todo</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid ",
          padding: "15px",
        }}
      >
        <NavLink to={"/"} className={({ isActive }) => isActive && "isActive"}>
          <>All</>
        </NavLink>
        <NavLink
          to={"/active"}
          className={({ isActive }) => isActive && "isActive"}
        >
          <>Active</>
        </NavLink>
        <NavLink
          to={"/complete"}
          className={({ isActive }) => isActive && "isActive"}
        >
          <>Completed</>
        </NavLink>
      </div>
      <div style={{ display: "flex" }}>
        <Input value={val} onChange={(e) => setVal(e.target.value)} />
        <Button onClick={onclick} type="primary">
          Add
        </Button>
      </div>
    </div>
  );
};

export default Form;
