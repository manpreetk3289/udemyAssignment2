import React from 'react';

var Char = (props) =>{

    return (
<div  onClick={props.clickHandler}>

    {props.word}
</div>

    )
}

export default Char;