import React from 'react'

export default function BotonAgregar({AgregarTarea}) {

    return (

        <button data-mdb-button-init data-mdb-ripple-init
            className="btn btn-info ms-2" id="btn-add" onClick={AgregarTarea}>Agregar tarea</button>

    )
}
