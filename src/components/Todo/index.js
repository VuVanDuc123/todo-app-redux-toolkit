import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";

// dispatch: gửi đi cập nhât lại
import { useDispatch } from "react-redux";
// import { toggleTodoStatus } from "../../redux/actions";
import TodoListSlice from "../TodoList/todoReducerSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    //dispatch(toggleTodoStatus(id))// cài đặt lại toggle cho todo có id = ...
    dispatch(TodoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
