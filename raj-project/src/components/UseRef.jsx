import React, {useRef} from 'react'

const UseRef = () => { 
    const inputElement = useRef(null);

const handleSubmit = (event) =>{

event.preventDefault();
 inputElement.current.style.backgroundColor="skyblue" 
 inputElement.current.style.color="white"

//current points to the munted text input element

console.log("Current input field:", inputElement.current);

//collecting value from input field using useRef

alert("Submitted value:" +inputElement.current.value);
}

return (

<div className = "box">

<form onSubmit={handleSubmit}>

<input ref={inputElement} type="text" />

<button type="submit">Click</button>

</form>

</div>
)
}
export default UseRef