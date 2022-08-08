import React from "react";


function ButtonClick(props) {


    return(
        <React.Fragment>
            <button className="btn btn-primary" onClick={props.onClickMax}>Click <b>+1</b></button>
        </React.Fragment>
    )
    
}

export default ButtonClick;