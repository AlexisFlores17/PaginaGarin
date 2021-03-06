import React, {useState, useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Hamburger from './Hamburger'

export const Header = () =>{

    const redux = useSelector(state => state.contactoReducer)

    let myHeader = useRef(null)

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menú"
    })

    const [disabled, setDisabled] = useState(false)

    const handleMenu = () => {        
        disableMenu()
        if(state.initial === false){
            setState({
                initial: null,
                clicked: true,
                menuName: "Cerrar"
            })
            
        }else if(state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menú"
            })
            
        }
        else if(state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Cerrar"
            })
            
        }        
    }

    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }

    var prevScrollpos = window.pageYOffset;

    useEffect(() => {
        if( redux.aviso ){
            myHeader.style.display = "none"
        }else{
            myHeader.style.display = "inherit"
        }
        return () => {
            
        }
    }, [redux.aviso])


    window.onscroll = function() {
        if(state.clicked === false || state.initial === false){
            var currentScrollPos = window.pageYOffset;
            if ( currentScrollPos > 150) {
                if (prevScrollpos > currentScrollPos) {
                    myHeader.style.top = "0";
                } else {
                    myHeader.style.top = "-100px";
                }
            }
            
            prevScrollpos = currentScrollPos;
        }
        
    }


    return (
        <header ref = {el => (myHeader= el)} >
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            HGR<span>.</span>                                                        
                        </div>
                        
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu} >{state.menuName}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state} handleMenu= {handleMenu}/>
        </header>
      )
}

