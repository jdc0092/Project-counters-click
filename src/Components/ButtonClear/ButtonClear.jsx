import R from "react";


function ButtonClear(props){
    return(
        <button className="btn btn-danger" onClick={props.onClearButton}>Clear</button>
    )
}

export default ButtonClear;