import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InputAgregar from './InputAgregar';
import BotonAgregar from './BotonAgregar';
import BotonMasRapida from './BotonMasRapida';
import BotonBorrar from './BotonBorrar';
import TareaContainer from './TareaContainer';
import Tarea from './Tarea';
export default function ContenedorGrande() {
    
    return (
        <>

            <section class="vh-100 gradient-custom">

                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">

                        <div class="col col-xl-10">

                            <div class="card">

                                <div class="card-body p-5">
                                    <div class="d-flex justify-content-center align-items-center mb-4">
                                        <InputAgregar />
                                        <BotonAgregar />
                                        <BotonMasRapida />
                                        <BotonBorrar />
                                    </div>

                                </div>

                                <TareaContainer />
                            </div>
                        </div>

                    </div>
                </div>

            </section>


        </>


    )
}
