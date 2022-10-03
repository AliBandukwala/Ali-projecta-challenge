import RegistartionDataProvider from "../../Context/registrationContext"
import CustomInput from "../Input/customInput"
import './registrationForm.css'

const Registration = () => {
    return (
        <RegistartionDataProvider>
            <form className="registrationForm">
                <CustomInput type="email" />
                <CustomInput type="password" />
            </form>
        </RegistartionDataProvider>
    )
}

export default Registration