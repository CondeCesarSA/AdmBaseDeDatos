import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { KanbanColumn } from "./KanbanColumn";

export const KanbanBoard = () => {

    const [data ,setData] = useState({})
    const [toDo, setToDo] = useState([]);
    const [blocked, setBlocked] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [columns, setColumns] = useState({});

    const columnsFromBackend = {
        "1": { name: "Por hacer", items: toDo, qty: toDo?.length },
        "2": { name: "Bloqueado", items: blocked, qty: blocked?.length },
        "3": { name: "En progreso", items: inProgress, qty: inProgress?.length },
        "4": { name: "Hecho", items: done, qty: done?.length }
    };

    useEffect(() => {
        const dataJson = JSON.parse(localStorage.getItem('UserOrders'))
        setData(dataJson);
        setToDo(dataJson?.orders.filter(item => item.estado == "TO DO"))
        setBlocked(dataJson?.orders.filter(item => item.estado == "BLOCKED"))
        setInProgress(dataJson?.orders.filter(item => item.estado == "IN PROGRESS"))
        setDone(dataJson?.orders.filter(item => item.estado == "DONE"))
        setColumns(columnsFromBackend)
        console.log("test")
    }, [toDo?.length, blocked?.length, inProgress?.length, done?.length])

    const updateData = (result, data) => {
        let newStatus = "";
        if (result.destination.droppableId == "1") {
            newStatus = "TO DO";
        }
        if (result.destination.droppableId == "2") {
            newStatus = "BLOCKED";
        }
        if (result.destination.droppableId == "3") {
            newStatus = "IN PROGRESS";
        }
        if (result.destination.droppableId == "4") {
            newStatus = "DONE";
        }
        const newData = Object.entries(data).flatMap(item => item[1].items)
        const cardToEdit = newData.findIndex(item => item.id == result.draggableId)
        newData[cardToEdit].estado = newStatus
        localStorage.setItem('UserOrders', JSON.stringify({ orders: newData }))

        //Arreglar esto
        const dataJson = JSON.parse(localStorage.getItem('UserOrders'))
        setToDo(dataJson?.orders.filter(item => item.estado == "TO DO"))
        setBlocked(dataJson?.orders.filter(item => item.estado == "BLOCKED"))
        setInProgress(dataJson?.orders.filter(item => item.estado == "IN PROGRESS"))
        setDone(dataJson?.orders.filter(item => item.estado == "DONE"))
        setData({orders: newData});
    }

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            console.log(result)
            updateData(result, columns);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    return (
        <Box>
            <div style={{ display: "flex", justifyContent: "space-evenly", height: "100%" }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <KanbanColumn key={columnId} columnId={columnId} column={column}></KanbanColumn>
                        );
                    })}
                </DragDropContext>
            </div>
        </Box>
    );
}

