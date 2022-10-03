import { useRegistrationDataContext } from "../../Context/registrationContext";

const SubmitButton = () => {

    const { registrationData } = useRegistrationDataContext();
    const { email, password } = registrationData 

    // TODO: Fix this logic here
    return (
        <button 
            disabled={!email.includes('@') && email.length === 0 && password.length > 8}
        >
            Submit
        </button>
    )
}

export default SubmitButton