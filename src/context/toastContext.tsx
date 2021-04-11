import React, { useState } from 'react';

const toastContext = React.createContext(null);

function ToastContextProvider({ children }): JSX.Element {
    const [showToast, setShowToast] = useState<string>(null);
    const [unmountToast, setUnmountToast] = useState<boolean>(false);

    return (
        <toastContext.Provider
            value={{
                showToast,
                setShowToast,
                unmountToast,
                setUnmountToast
            }}>
            {children}
        </toastContext.Provider>
    );
}

export { toastContext, ToastContextProvider };
