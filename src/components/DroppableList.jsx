import React from "react";
import DroppableItem from "./DroppableItem";

const DroppableList = ({ items, relationships, onDragOver, onDrop }) => {
  return (
    <ul
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{ border: "1px solid #ccc", minHeight: "100px" }}
    >
      {items.map((droppableItem, index) => (
        <DroppableItem
          key={index}
          droppableItem={droppableItem}
          relationships={relationships}
        />
      ))}
    </ul>
  );
};

export default DroppableList;
