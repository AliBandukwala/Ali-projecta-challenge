import RegistartionDataProvider from "../../Context/registrationContext"
import CustomInput from "../Input/customInput"

const Registration = () => {
    return (
        <RegistartionDataProvider>
            <form>
                <CustomInput type="email" />
                <CustomInput type="password" />
            </form>
        </RegistartionDataProvider>
    )
}

export default Registration