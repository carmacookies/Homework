import React from "react";

interface FormProps {
    setText: Function
}

export const Form = ({setText}:FormProps) =>{
    function handleSubmit(event:any){
        try {
            // event.preventDefault()
            // console.log(event)
            setText(event.target.value)
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <form >
            <input onKeyUp={handleSubmit} type="text" name="" id="" />
            {/* <button type="submit" onSubmit={handleSubmit}>submit</button> */}
        </form>

    )
}