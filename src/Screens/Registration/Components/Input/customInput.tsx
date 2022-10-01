import { ChangeEvent, memo, useState } from "react";

interface CustomInputProps {
    type: 'email' | 'password'
}

const CustomInput = memo(({type}: CustomInputProps) => {

    const [inputText, SetInputText] = useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        SetInputText(e.target.value)     
    }

    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <input 
                type={type} 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder={type} 
            />

            {
                type === "password" && <div></div>
            }

        </div>
    )
})

export default CustomInput