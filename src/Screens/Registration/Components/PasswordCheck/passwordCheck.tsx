import { useEffect, useState } from "react";
import { useRegistrationDataContext } from "../../Context/registrationContext";

interface Checks {
    smallLetterCheck: boolean,
    capsLetterCheck: boolean,
    numberCheck: boolean,
    specialCharCheck: boolean,
    pwdLengthCheck: boolean,
}

const PasswordCheck = () => {

    // data coming in from the Context (onlz password required here)
    const { registrationData } = useRegistrationDataContext(); 
    const { password } = registrationData

    const [checks, setChecks] = useState<Checks>(
        {
            smallLetterCheck: false,
            capsLetterCheck: false,
            numberCheck: false,
            specialCharCheck: false,
            pwdLengthCheck: false,
        } as Checks
    )

    useEffect(() => {
        const smallLetterCheck: boolean = /[a-z]/.test(password)
        const capsLetterCheck: boolean = /[A-Z]/.test(password)
        const numberCheck: boolean = /[0-9]/.test(password)
        const specialCharCheck: boolean = /[!@#$%^&*]/.test(password)
        const pwdLengthCheck: boolean = password.length >= 8

        setChecks({
            smallLetterCheck,
            capsLetterCheck,
            numberCheck,
            specialCharCheck,
            pwdLengthCheck,
        } as Checks)
    }, [password])
    
    return (
        <>
            <p>
                <span>{checks.pwdLengthCheck ? '✔️' : '❌'}</span>
                <span>8+ characters</span>
            </p> 
            <p>
                <span>{checks.smallLetterCheck ? '✔️' : '❌'}</span>
                <span>lowercase letter</span>
            </p> 
            <p>
                <span>{checks.capsLetterCheck ? '✔️' : '❌'}</span>
                <span>uppercase letter</span>
            </p> 
            <p>
                <span>{checks.numberCheck ? '✔️' : '❌'}</span>
                <span>number</span>
            </p> 
            <p>
                <span>{checks.specialCharCheck ? '✔️' : '❌'}</span>
                <span>special character</span>
            </p> 
        </>
    )
}

export default PasswordCheck