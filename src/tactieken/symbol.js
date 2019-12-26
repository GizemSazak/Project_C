import React from 'react';

function Symbol(props) {
    const DragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('symbol_id', target.id);

        setTimeout(() => {
            target.style.display = "none"
        }, 1);

    }

    const DragOver = e => {
        e.stopPropagation();

    }

    return (
        <div id={props.id} className={props.className} draggable={props.draggable} onDragStart={DragStart} onDragOver={DragOver} >
        </div>
    )
}

export default Symbol