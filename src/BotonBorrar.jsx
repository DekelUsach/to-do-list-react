import React from 'react'

export default function BotonBorrar({borrarTarea}) {
  return (
    <button type="submit" data-mdb-button-init data-mdb-ripple-init
    className="btn btn-info ms-2" id="btn-borrar" onClick={borrarTarea}>Borrar todo</button>
)
}
