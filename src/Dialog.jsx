import React from 'react';

const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null; // Si el diálogo no está abierto, no renderizar nada
    }

    return (
        <div>
            {isOpen && <div className="overlay" />}

            <div className="dialog">
                <div className="dialog-content">
                    {children}
                </div>
                <button className="dialog-close-button" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Dialog;