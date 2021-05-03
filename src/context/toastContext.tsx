import React, { useState } from 'react';

const defaultState = {
    showToast: ''
};

const ToastContext = React.createContext(defaultState);

function ToastContextProvider({ children }): JSX.Element {
    const [showToast, setShowToast] = useState<string>(null);
    const [unmountToast, setUnmountToast] = useState<boolean>(false);

    return (
        <ToastContext.Provider
            value={{
                showToast,
                setShowToast,
                unmountToast,
                setUnmountToast
            }}>
            {children}
        </ToastContext.Provider>
    );
}

export { ToastContext, ToastContextProvider };
