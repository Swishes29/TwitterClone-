import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-black">
       
        <h2 className="text-xl font-bold mb-4 text-center">¿Deseas eliminar post?</h2>

       
        <p className="text-gray-500 mb-6 text-center">
          Esta acción no se puede revertir, y se eliminará de tu perfil, de la cronología de las cuentas que te siguen y de los resultados de búsqueda.
        </p>

       
        <div className="flex flex-col items-center space-y-4">
          
          <button
            className="bg-red-600 text-white font-bold py-2 px-6 rounded-full w-full hover:bg-red-700 transition-all"
            onClick={onConfirm}
          >
            Eliminar
          </button>

          
          <button
            className="bg-white border border-gray-300 text-black font-bold py-2 px-6 rounded-full w-full hover:bg-gray-100 transition-all"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
