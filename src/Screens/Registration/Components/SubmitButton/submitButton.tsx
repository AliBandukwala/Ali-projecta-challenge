import { initialState, useRegistrationDataContext } from "../../Context/registrationContext";
import './submitButton.css'

const SubmitButton = () => {

    const { registrationData, setRegistrationData, checks, setChecks } = useRegistrationDataContext();
    const { email } = registrationData 

    let disbaled = !(
                        (email.length > 0) && 
                        (checks.capsLetterCheck) &&
                        (checks.smallLetterCheck) &&
                        (checks.numberCheck) &&
                        (checks.specialCharCheck) &&
                        (checks.pwdLengthCheck)
                    )

    const handleSubmit = () => {
        setRegistrationData(initialState.registrationData)
        setChecks(initialState.checks)
    }
    
    return (
        <button 
            className="submitButton" 
            disabled={disbaled}
            onClick={handleSubmit} 
            aria-label="Submit Button"
        >
            Submit
        </button>
    )
}

export default SubmitButton