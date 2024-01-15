// ListItem.jsx
import React from "react";
import { useDrag } from "react-dnd";

const ListItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: { item },
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
      }}
    >
      {item.id}
    </div>
  );
};

export default ListItem;
