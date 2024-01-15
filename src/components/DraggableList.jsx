import React from "react";
import DraggableItem from "./DraggableItem";

const DraggableList = ({ items, relationships, onDragStart }) => {
  return (
    <ul>
      {items.map((draggableItem, index) => (
        <DraggableItem
          key={index}
          draggableItem={draggableItem}
          relationships={relationships}
          onDragStart={onDragStart}
        />
      ))}
    </ul>
  );
};

export default DraggableList;
