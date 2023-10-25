import React, { useState } from 'react';
import styles from './EditFieldModal.module.css';

interface ModalProps {
  fieldType: string;
  person: { [key: string]: any };
  onClose: () => void;
  onSave: (person: { [key: string]: any }) => void;
}

const Modal: React.FC<ModalProps> = ({ fieldType, person, onClose, onSave }) => {
  const [value, setValue] = useState<string | number>(person[fieldType] || '');
  console.log(fieldType)
  const handleSave = () => {
    const updatedPerson = { ...person, [fieldType]: value };
    onSave(updatedPerson);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="inputField">{fieldType}</label>
        <input
          id="inputField"
          className={styles.input}
          type={fieldType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.button} onClick={handleSave}>
          Save
        </button>
        <button className={styles.button} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
