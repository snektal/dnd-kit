import React, { useState } from "react";
import DraggableList from "./DraggableList";
import DroppableList from "./DroppableList";

const TwoListsComponent = () => {
  const [draggableList, setDraggableList] = useState([
    "Item A",
    "Item B",
    "Item C",
  ]);
  const [droppableList, setDroppableList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [relationships, setRelationships] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppableItem) => {
    const draggableItem = e.dataTransfer.getData("text/plain");
    console.log("before ", draggableItem, droppableItem);

    const updatedRelationships = relationships.filter(
      (relationship) => relationship.draggableItem !== draggableItem
    );

    setRelationships([
      ...updatedRelationships,
      { draggableItem, droppableItem },
    ]);
    console.log("after ", draggableItem, droppableItem);
  };

  return (
    <div>
      <div>
        <h2>Draggable List</h2>
        <DraggableList
          items={draggableList}
          relationships={relationships}
          onDragStart={handleDragStart}
        />
      </div>

      <div>
        <h2>Droppable List</h2>
        <DroppableList
          items={droppableList}
          relationships={relationships}
          onDragOver={handleDragOver}
          onDrop={(e) => {
            e.preventDefault();
            const droppableItem = e.target.textContent;
            handleDrop(e, droppableItem);
          }}
        />
      </div>
    </div>
  );
};

export default TwoListsComponent;
