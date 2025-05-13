import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InputAgregar from './InputAgregar';
import BotonAgregar from './BotonAgregar';
import BotonMasRapida from './BotonMasRapida';
import BotonBorrar from './BotonBorrar';
import TareaContainer from './TareaContainer';
import Tarea from './Tarea';
export default function ContenedorGrande() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if(nuevaTarea.trim() === ''){
      alert('no puede agregar una tarea vacia')
      return;
    }
    setTareas([...tareas, {
      titulo: nuevaTarea,
      chequeado: false,
      fechaChequeo: null 
    }]);
    setNuevaTarea('')
  };
  const borrarTarea = () => {
    setTareas([]);
    setNuevaTarea('')
  }
  const [tareaMasRapida, setTareaMasRapida] = useState(null);

  const encontrarMasRapida = () => {
    const tareasCompletadas = tareas.filter(t => t.chequeado && t.fechaChequeo);

    if (tareasCompletadas.length === 0) {
      alert("No hay tareas completadas aún");
      return;
    }

    const masRapida = tareasCompletadas.reduce((prev, current) => {
      return new Date(prev.fechaChequeo) < new Date(current.fechaChequeo) ? prev : current;
    });

    setTareaMasRapida(masRapida);
  };
  return (
    <>

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">

                  <div className="d-flex mb-4 gap-2">
                    <InputAgregar value={nuevaTarea} onChange={setNuevaTarea} />
                    <BotonAgregar AgregarTarea={agregarTarea} />
                    <BotonBorrar borrarTarea={borrarTarea} />
                    <BotonMasRapida onClick={encontrarMasRapida} />
                  </div>

                  <ul className="list-group">
                    {tareas.map((tarea, i) => (
                      <Tarea
                        key={i}
                        titulo={tarea.titulo}
                        todolist={tareas}
                        i={i}
                        settodolist={setTareas}
                        destacada={tarea === tareaMasRapida}
                      />
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>


  )
}
