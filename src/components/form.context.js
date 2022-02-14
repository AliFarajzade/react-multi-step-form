import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

const FormContextProvider = ({ children }) => {
    const [profile, setProfile] = useState({ name: '', email: '' });
    const [social, setSocial] = useState({ twitter: '', facebook: '' });

    return (
        <FormContext.Provider
            value={{ profile, setProfile, social, setSocial }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;
