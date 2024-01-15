// DraggableList.jsx
import React from "react";
import { useDrag } from "react-dnd";

const DraggableList = ({ items }) => {
  return (
    <div>
      <h2>Draggable List</h2>
      {items.map((item, index) => (
        <DraggableItem key={index} item={item} />
      ))}
    </div>
  );
};

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "DRAGGABLE_ITEM",
    item: { draggedItem: item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        marginBottom: "8px",
        padding: "8px",
        border: "1px solid black",
        backgroundColor: item.backgroundColor || "white",
        color: "black",
      }}
    >
      {item.content}
    </div>
  );
};

export default DraggableList;
