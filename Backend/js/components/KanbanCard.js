import React from "react"
import { Draggable } from "react-beautiful-dnd";

export const KanbanCard = ({item, index}) => {

    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            borderRadius: "3px",
                            fontWeight: "600",
                            fontSize: "14px",
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                                ? "#f7f7f7"
                                : "white",
                            color: "#5e5e5e",
                            ...provided.draggableProps.style
                        }}
                    >
                        <div>
                            <div>Ticket N° {item.id}</div>
                            <div>{item.equipo}</div>
                            <div>{item.tecnico}</div>  
                        </div>
                    </div>
                );
            }}
        </Draggable>
    )
}