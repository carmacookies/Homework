import React from "react";
interface FormDisplayProps {
    text: string
}

export const FormDisplay = ({text}:FormDisplayProps) =>{
        return(
            <div>
                {text}
            </div>
        )
    }