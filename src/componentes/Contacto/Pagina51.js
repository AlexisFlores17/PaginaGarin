import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setTipoPersona2 } from '../../actions/contactoActions';

export const Pagina51 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setPersona = (value) => {
        dispatch( setTipoPersona2(value) );
        siguiente(value);
    }

    const siguiente = (value) => {
        if (value === "mercantil") {
            dispatch( cambiarPagina( 61 ) );
        } else if ( value === "otro"){
            dispatch( cambiarPagina( 62 ) );
        } else {
            dispatch( cambiarPagina( 71 ) );
        }
    }

    const anterior = () => {
        dispatch( setTipoPersona2("") );
        dispatch( cambiarPagina( 5 ) );
    }

    return (
        <span>
            <p className="pregunta">
                5.1 -{`>`} ¿Qué tipo de <span className="bold">persona moral</span> eres?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("anonima") }>
                    Sociedad anónima { state.tipoPersona2 === "anonima" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("mercantil") }>
                    Otra sociedad mercantil { state.tipoPersona2 === "mercantil" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("soCivil") }>
                    Sociedad civil { state.tipoPersona2 === "soCivil" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("asCivil") }>
                    Asociación civil { state.tipoPersona2 === "asCivil" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("otro") }>
                    Otro { state.tipoPersona2 === "otro" && <i><HiCheckCircle /></i> }
                </div>
            </div>
            <div className="btn-siguiente siguiente-anterior">
                <span className="btn-siguiente-span" onClick={() => anterior()}>
                    <HiArrowNarrowLeft />
                </span>
            </div>
        </span>
    )
}
