import React from 'react';

const Validation =(props)=>{


    return(
<div>
  {props.textLength <=5? <div>Text Length is too short</div> :<div>Text Long enough</div>}
</div>

    )
}

export default Validation ;