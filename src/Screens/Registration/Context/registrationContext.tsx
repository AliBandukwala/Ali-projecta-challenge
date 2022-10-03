import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { RegistrationData } from "../../../Models/registrationDataModel";

interface RegistrationProviderProps {children: ReactNode}
interface RegistrationProvideValue {registrationData: RegistrationData, setRegistrationData: Function, }

const initialState = {
    registrationData: {email: '', password: ''} as RegistrationData,
    setRegistrationData: () => {},
} as RegistrationProvideValue

/* Context for Registration data: */
export const RegistrationDataContext = createContext<RegistrationProvideValue>(initialState);

/* Provider for Registration data: */
const RegistartionDataProvider = ({ children }: RegistrationProviderProps) => {

    const [registartionData, setRegistartionData] = useState<RegistrationData>(initialState.registrationData);
  
    const value: RegistrationProvideValue = useMemo( 
      () => ({ registrationData: registartionData, setRegistrationData: setRegistartionData, }) as RegistrationProvideValue, 
      [registartionData, setRegistartionData]
    )
  
    return (
      <RegistrationDataContext.Provider value={ value }>
        {children}
      </RegistrationDataContext.Provider>
    );
  };
  
  export default RegistartionDataProvider

  /* main hook to manage New Sensor Data state in components */
export function useRegistrationDataContext() {
    const contextData = useContext(RegistrationDataContext)
    if (contextData === undefined) {
        throw new Error('useRegistrationDataContext must be used within a RegistartionDataProvider')
    }
    return contextData
}