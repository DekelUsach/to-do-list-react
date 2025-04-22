import React from 'react'

export default function Tarea({ titulo, i, todolist, settodolist, destacada }) {
    return (
        <li id="tar" className="list-group-item d-flex align-items-center border-0 m.b-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
            <input
                className="form-check-input"
                type="checkbox"
                checked={todolist[i].chequeado}
                onChange={() => {
                    const updatedList = todolist.map((item, index) => {
                        if (index === i) {
                            const nuevoEstado = !item.chequeado;
                            return {
                                ...item,
                                chequeado: nuevoEstado,
                                fechaChequeo: nuevoEstado ? new Date() : null
                            };
                        }
                        return item;
                    });
                    settodolist(updatedList);
                }}
            />
            <p
                className="tarea-titulo"
                style={{
                    textDecoration: todolist[i].chequeado ? "line-through" : "none",
                    color: destacada ? "#ff0000" : "inherit",
                    fontWeight: destacada ? "bold" : "normal",
                    marginLeft: "10px"
                }}
            >
                {titulo}
            </p>
        </li>
    )
}