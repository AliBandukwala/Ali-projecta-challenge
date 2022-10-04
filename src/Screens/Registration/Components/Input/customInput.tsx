import { ChangeEvent, memo } from "react";
import { useRegistrationDataContext } from "../../Context/registrationContext";
import PasswordCheck from "../PasswordCheck/passwordCheck";
import SubmitButton from "../SubmitButton/submitButton";
import './customInput.css'

interface CustomInputProps {
    type: 'email' | 'password'
}

const CustomInput = memo(({type}: CustomInputProps) => {

    // data coming in from the Context
    const { registrationData, setRegistrationData } = useRegistrationDataContext(); 

    // method to update state on input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setRegistrationData(
            {
                ...registrationData,
                [id]: value,
            }
        )
    }

    return (
        <div className="customInput">
            <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
            <input 
                id={type} 
                type={type} 
                name={type}
                placeholder={type}
                aria-label={type}
                value={registrationData[type]} 
                onChange={handleInputChange} 
            />

            {
                /* 
                    rendering PasswordCheck and Submit button 
                    along with Password Input (following the desing)
                */
                type === "password" && 
                <>
                    <PasswordCheck />
                    <SubmitButton />
                </>
            }

        </div>
    )
})

export default CustomInput