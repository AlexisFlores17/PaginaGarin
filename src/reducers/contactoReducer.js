import { types } from "../types/types"; 


export const contactoReducer = ( initialState = {
    abierto: false,
    nombre: "",
    correo: "",
    conozcoSituacion: false,
    areaAyuda: "",
    areaAyuda2: "",
    tipoPersona: "",
    tipoPersona2: "",
    tipoPersona3: "",
    residencia: "",
    
}, action )=>{
    switch (action.type) {  
        case types.ActualizarContacto:
            return{
                ...initialState,
                ...action.payload
            };     
        default:
            return initialState;
    }
}