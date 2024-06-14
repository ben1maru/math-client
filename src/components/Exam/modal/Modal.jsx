import React from 'react';
import './style.css';

function Modal({ score, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Ваш результат: {score} балів</p>
      </div>
    </div>
  );
}

export default Modal;
