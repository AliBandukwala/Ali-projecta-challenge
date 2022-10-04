import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Checks } from "../../../Models/checksModel";
import { RegistrationData } from "../../../Models/registrationDataModel";

interface RegistrationProviderProps {
  children: ReactNode
}

interface RegistrationProvideValue {
  registrationData: RegistrationData, 
  setRegistrationData: Function, 
  checks: Checks,
  setChecks: Function,
}

/* Initial state for context */
export const initialState = {
    registrationData: {email: '', password: ''} as RegistrationData,
    setRegistrationData: () => {},
    checks: {
      smallLetterCheck: false,
      capsLetterCheck: false,
      numberCheck: false,
      specialCharCheck: false,
      pwdLengthCheck: false,
    } as Checks,
    setChecks: () => {},
} as RegistrationProvideValue

/* Context for Registration data: */
export const RegistrationDataContext = createContext<RegistrationProvideValue>(initialState);

/* Provider for Registration data: */
const RegistartionDataProvider = ({ children }: RegistrationProviderProps) => {

    const [registartionData, setRegistartionData] = useState<RegistrationData>(initialState.registrationData);
    const [checks, setChecks] = useState<Checks>(initialState.checks)
  
    const value: RegistrationProvideValue = useMemo( 
      () => (
        { 
          registrationData: registartionData, 
          setRegistrationData: setRegistartionData, 
          checks: checks,
          setChecks: setChecks,
        }
      ) as RegistrationProvideValue, 
      [registartionData, setRegistartionData, checks, setChecks]
    )
  
    return (
      <RegistrationDataContext.Provider value={ value }>
        {children}
      </RegistrationDataContext.Provider>
    );
  };
  
  export default RegistartionDataProvider

  /* main hook to manage Registration data state in components */
export function useRegistrationDataContext() {
    const contextData = useContext(RegistrationDataContext)
    if (contextData === undefined) {
        throw new Error('useRegistrationDataContext must be used within a RegistartionDataProvider')
    }
    return contextData
}