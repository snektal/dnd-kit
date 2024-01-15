import React from "react";

const DraggableItem = ({ draggableItem, relationships, onDragStart }) => {
  const linkedDroppableItem = relationships.find(
    (relationship) => relationship.draggableItem === draggableItem
  )?.droppableItem;

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, draggableItem)}
      style={{
        backgroundColor: linkedDroppableItem ? "lightgreen" : "white",
        color: "black",
        border: "1px dashed #aaa",
      }}
    >
      {draggableItem}
    </div>
  );
};

export default DraggableItem;
