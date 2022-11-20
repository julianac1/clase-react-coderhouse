const Boton = ({nombres, handleOnClick})=>{
    return(
        <button style={{backgroundColor: '#eee'}} onClick = {handleOnClick }>
            {nombres}
        </button>

    )
}

export default Boton;