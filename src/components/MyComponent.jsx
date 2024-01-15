// MyComponent.jsx
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableList from "./DraggableList";
import DroppableList from "./DroppableList";

const MyComponent = () => {
  const [draggableItems, setDraggableItems] = useState([
    {
      id: 1,
      content: "Draggable Item 1",
      backgroundColor: "white",
      droppableItemId: -1,
    },
    {
      id: 2,
      content: "Draggable Item 2",
      backgroundColor: "white",
      droppableItemId: -1,
    },
    {
      id: 3,
      content: "Draggable Item 3",
      backgroundColor: "white",
      droppableItemId: -1,
    },
  ]);

  const [droppableItems, setDroppableItems] = useState([
    {
      id: 1,
      content: "Droppable Item 1",
      backgroundColor: "white",
      draggedItemId: -1,
    },
    {
      id: 2,
      content: "Droppable Item 2",
      backgroundColor: "white",
      draggedItemId: -1,
    },
    {
      id: 3,
      content: "Droppable Item 3",
      backgroundColor: "white",
      draggedItemId: -1,
    },
  ]);

  const handleDrop = (draggedItem, droppableItem) => {
    // Change the background color of both items
    setDraggableItems((items) =>
      items.map((item) => {
        if (
          draggedItem.id === item.id &&
          item.droppableItemId === droppableItem.id
        ) {
          console.log(
            "draggedItem.id === item.id && item.droppableItemId === droppableItem.id"
          );
        }

        if (draggedItem.id !== item.id && item.droppableItemId !== -1) {
          console.log(
            "draggedItem.id !== item.id && item.droppableItemId !== -1"
          );
        }
        console.log("draggedItem.id", draggedItem.id);
        console.log("item.id", item.id);
        console.log("droppableItem.id", droppableItem.id);
        console.log("item.droppableItemId", item.droppableItemId);
        // draggedItem.id === item.id && item.droppableItemId === droppableItem.id
        //   ? {
        //       ...item,
        //       backgroundColor: "lightblue",
        //       droppableItemId: droppableItem.id,
        //     }
        //   : { ...item, backgroundColor: "white", droppableItemId: -1 };

        // draggedItem.id !== item.id && item.droppableItemId !== -1
        //   ? {
        //       ...item,
        //       backgroundColor: "lightblue",
        //       droppableItemId: droppableItem.id,
        //     }
        //   : { ...item, backgroundColor: "white", droppableItemId: -1 };
      })
    );

    setDroppableItems((items) =>
      items.map((item) =>
        droppableItem.id === item.id ||
        (item.draggedItemId !== draggedItem.id && item.draggedItemId !== -1)
          ? {
              ...item,
              backgroundColor: "lightblue",
              draggedItemId: draggedItem.id,
            }
          : { ...item, backgroundColor: "white", draggedItemId: -1 }
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <DraggableList items={draggableItems} />
        <DroppableList items={droppableItems} onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
};

export default MyComponent;
