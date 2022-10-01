import CustomInput from "../Input/customInput"

const Registration = () => {
    return (
        <form>
            <CustomInput type="email" />
            <CustomInput type="password" />
        </form>
    )
}

export default Registration