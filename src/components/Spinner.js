import React from 'react'
import Loader from "../Load.gif"

const Spinner = ()=>{


    return(
        <div className = "container text-center " >
            <img src = {Loader} alt = "loading" style = {{height : '70px'}}></img>
        </div>
    
    )

}

export default Spinner;