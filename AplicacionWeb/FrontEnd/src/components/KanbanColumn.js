import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { KanbanCard } from "./KanbanCard";

export const KanbanColumn = ({columnId, column}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "24%"
            }}
            key={columnId}
        >
            {/*<h2 style={{ background: "#f1f3f5", padding: 8, margin: 0, fontSize: "14px", width: "100%" }}>{column.name}</h2>*/}
            <div style={{ margin: 8, width: "100%", height: "70vh", marginTop: 0 }}>
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                        return (
                            <>
                            <h2 
                                style= {{ 
                                    background: snapshot.isDraggingOver
                                        ? "#e3e3e3"
                                        : "#f1f3f5", 
                                    padding: 8, 
                                    margin: 0, 
                                    fontSize: "14px", 
                                    width: "100%", 
                                    color: "#808a9f" 
                                }}
                            >
                                {column.name} ({column.qty})
                            </h2>

                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver
                                        ? "#e3e3e3"
                                        : "#f1f3f5",
                                    padding: 4,
                                    width: "100%",
                                    height: "inherit"
                                    //minHeight: 450 //deforma el body
                                }}
                            >
                                {column?.items?.map((item, index) => {
                                    return (
                                        <KanbanCard key={item.id} item={item} index={index}></KanbanCard>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                            </>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    )
}