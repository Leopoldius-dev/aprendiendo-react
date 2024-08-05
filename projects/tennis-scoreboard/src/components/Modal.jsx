import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Modal = ({ winner, onClose }) => {
  useEffect(() => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{winner} wins!</h2>
        <button onClick={onClose}>Restart</button>
      </div>
    </div>
  );
};

export default Modal;
