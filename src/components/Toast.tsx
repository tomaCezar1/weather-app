import React, { useContext } from 'react';

import { ToastContext } from '../context/ToastContext';
import CloseBtn from '../images/cancel.svg';

function Toast({ type, text }) {
    const { setShowToast, unmountToast, setUnmountToast } = useContext(ToastContext);

    const triggerDelete = () => {
        setUnmountToast(true);

        setTimeout(() => {
            setShowToast(null);
            setUnmountToast(false);
        }, 750);
    };

    return (
        <div className={`toast toast-${type} ${unmountToast ? 'delete-toast' : ''}`}>
            <span className="capitalize">{text}</span>
            <img className="toast-btn" src={CloseBtn} onClick={triggerDelete} alt="close button" />
        </div>
    );
}

export default Toast;
