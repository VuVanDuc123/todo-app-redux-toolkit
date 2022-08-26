import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState, useRef } from "react";
import Todo from "../Todo";

// sử dụng dispatch gửi đi
import { useDispatch, useSelector } from "react-redux/es/exports";

// action
// import { addTodo } from "../../redux/actions";
// import { todoListSelector } from "../../redux/selectors";// lấy selector
import { todoRemainingSelector } from "../../redux/selectors";

// id ngẫu nhiên từ uuid
import { v4 as uuidv4 } from "uuid";

// redux/toolkit
import todoListReducerSlice from "./todoReducerSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");

  const dispatch = useDispatch();
  // const todoList = useSelector(todoListSelector);// xuất giá trị
  const todoList = useSelector(todoRemainingSelector); // xuất giá trị

  const inputRef = useRef();

  // console.log([uuidv4('hex')]);

  const handleOnClickAddTodoList = () => {
    dispatch(
      todoListReducerSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        prioriry: prioriry,
        completed: false,
      })
    );

    setTodoName("");
    setPrioriry("Medium");
    inputRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* xuất ra todoList */}
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
            ref={inputRef}
          />
          {/* thay đổi input */}
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={(value) => setPrioriry(value)}
          >
            {/*thay đổi select */}
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleOnClickAddTodoList}>
            {/* xử lý click add*/}
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
