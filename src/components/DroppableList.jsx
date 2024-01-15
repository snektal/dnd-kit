// DroppableList.jsx
import React from "react";
import { useDrop } from "react-dnd";

const DroppableList = ({ items, onDrop }) => {
  const [, drop] = useDrop({
    accept: "DRAGGABLE_ITEM",
    drop: (draggedItem) => {
      //   onDrop(draggedItem.draggedItem, items[0]); // Assume there is only one droppable item in this example
      onDrop(
        draggedItem.draggedItem,
        items.find(
          (droppableItem) => droppableItem.id === draggedItem.draggedItem.id
        )
      );
    },
  });

  return (
    <div ref={drop} style={{ marginLeft: "20px" }}>
      <h2>Droppable List</h2>
      {items.map((item) => (
        <DroppableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const DroppableItem = ({ item }) => {
  function handleOnDrag(event) {
    event.target.style.backgroundColor = "red";
    alert(event.target.style.backgroundColor);
  }

  return (
    <div
      onDragEnter={() => handleOnDrag}
      style={{
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

export default DroppableList;
