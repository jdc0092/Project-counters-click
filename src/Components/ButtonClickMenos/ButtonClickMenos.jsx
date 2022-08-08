import React from "react";


function ButtonClick(props) {


    return(
        <React.Fragment>
            <button className="btn btn-secondary" onClick={props.onClickMenos}>Click <b>-1</b></button>
        </React.Fragment>
    )
    
}

export default ButtonClick;