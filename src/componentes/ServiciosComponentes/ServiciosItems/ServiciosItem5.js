import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem5 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Valuación de empresas</div>
                {dropDownMenu ===5 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,5)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,5)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===5 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        Todas	 las	 empresas	 cuentan	 con	 un	 historial,	 activos	 fijos,	 activos	intangibles,	protección	 industrial,beneficios	 económicos	 esperados,riesgos	 esperados,entre	 algunos	 otros	 factores	 dentro	 de	 la	información	financieraque	pueden	generar	una	variación	importante	del	valorde	mercadoque	tienela	organización,	ya	sea	para	adquirircapital	o	para	ser	vendidaa	un	tercero
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Flujos de efectivo descontados </div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Multiplos</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}