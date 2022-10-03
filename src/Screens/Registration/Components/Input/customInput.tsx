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
            <input 
                id={type} 
                type={type} 
                placeholder={type}
                value={registrationData[type]} 
                onChange={handleInputChange} 
            />

            {
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