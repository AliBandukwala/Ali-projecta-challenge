import { ChangeEvent, memo } from "react";
import { useRegistrationDataContext } from "../../Context/registrationContext";
import PasswordCheck from "../PasswordCheck/passwordCheck";
import SubmitButton from "../SubmitButton/submitButton";

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
        <div style={{display: 'flex', flexDirection:'column'}}>
            <input 
                id={type} 
                type={type} 
                placeholder={type}
                value={registrationData[type]} 
                onChange={handleInputChange} 
            />

            {
                type === "password" && 
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <PasswordCheck />
                    <SubmitButton />
                </div>
            }

        </div>
    )
})

export default CustomInput