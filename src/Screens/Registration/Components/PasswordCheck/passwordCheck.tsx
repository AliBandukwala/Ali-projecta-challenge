import { useEffect, useState } from "react";
import { Checks } from "../../../../Models/checksModel";
import { useRegistrationDataContext } from "../../Context/registrationContext";
import './passwordCheck.css'

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

    const checkMark: string = '✔️'
    const crossMark: string = '❌'
    
    return (
        <>
            <p className="pwdCheck">
                <span className="mark">{checks.pwdLengthCheck ? checkMark : crossMark }</span>
                <span>8+ characters</span>
            </p> 
            <p className="pwdCheck">
                <span className="mark">{checks.smallLetterCheck ? checkMark : crossMark }</span>
                <span>lowercase letter</span>
            </p> 
            <p className="pwdCheck">
                <span className="mark">{checks.capsLetterCheck ? checkMark : crossMark }</span>
                <span>uppercase letter</span>
            </p> 
            <p className="pwdCheck">
                <span className="mark">{checks.numberCheck ? checkMark : crossMark }</span>
                <span>number</span>
            </p> 
            <p className="pwdCheck">
                <span className="mark">{checks.specialCharCheck ? checkMark : crossMark }</span>
                <span>special character</span>
            </p> 
        </>
    )
}

export default PasswordCheck