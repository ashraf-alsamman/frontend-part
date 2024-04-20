import { useContext, createContext } from "react";

const FormContext = createContext({});
FormContext.displayName = "FormContext";

function FormProvider({ children, ...props }) {
  return <FormContext.Provider value={props}>{children}</FormContext.Provider>;
}

function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("Form Provider Error");
  }
  return context;
}

export { FormProvider, useFormContext };
