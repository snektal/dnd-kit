// List.jsx
import React from "react";
import { useDrop } from "react-dnd";
import ListItem from "./ListItem";

const List = ({ title, items, onDrop }) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item, monitor) => {
      onDrop(items.indexOf(item), item);
    },
  });

  return (
    <div
      ref={drop}
      style={{ margin: "10px", padding: "10px", border: "1px solid black" }}
    >
      <h2>{title}</h2>
      {items.map((item, index) => (
        <ListItem key={item} item={item} index={index} />
      ))}
    </div>
  );
};

export default List;
