import React from "react";

const DroppableItem = ({ droppableItem, relationships }) => {
  const linkedDraggableItem = relationships.find(
    (relationship) => relationship.droppableItem === droppableItem
  )?.draggableItem;

  return (
    <div
      style={{
        backgroundColor: linkedDraggableItem ? "lightgreen" : "white",
        color: "black",
        border: "1px dashed #aaa",
      }}
    >
      {droppableItem}
    </div>
  );
};

export default DroppableItem;
