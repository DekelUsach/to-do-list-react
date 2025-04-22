import React from 'react'

export default function InputAgregar({ value, onChange }) {
    return (
        <>
            <div   className="form-outline flex-fill">
                <input type="text" id="form2" className="form-control" placeholder="Agregar tarea..." value={value}
                    onChange={(e) => onChange(e.target.value)} />
            </div>


        </>
    )
}
