import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const SessionContext = ({ children }) => {
  const [form, setForm] = useState([]);

  const handleDelete = (id) => {
    setForm((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FormContext.Provider value={{ form, setForm, handleDelete }}>
      {children}
    </FormContext.Provider>
  );
};

// custom hook (clean usage)
export const useFormContext = () => useContext(FormContext);
