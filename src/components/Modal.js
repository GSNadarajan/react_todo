import React, { useState } from 'react';

function Modal({openModal, closeModal, isModalOpen, setIsModalOpen}) {

  return (
    <div className="app">
        <button 
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            Toggle modal
        </button>

    {isModalOpen && (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow p-6">
            <button type="button" className="absolute top-3 right-3 text-gray-400 hover:text-gray-900"
                onClick={closeModal}>
                
            </button>
            <div className="text-center">
              
                <p className="mt-2 text-sm text-gray-500">
                    Are you sure you want to delete this product? 
                </p>
                <div className="mt-4 flex justify-end">
                   
                    <button type="button"
                        className=" inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}>
                        Cancel
                    </button>
                     <button type="button"
                        className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    )}
</div>
  );
}

export default Modal;
