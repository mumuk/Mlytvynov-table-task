import React, { useState } from 'react';
import styles from './EditFieldModal.module.css';
import {IPerson} from "../../interfaces/IPerson.ts";

interface ModalProps {
  fieldType: string;
  person: IPerson;
  onClose: () => void;
  onSave: (updatedPerson: IPerson) => void;
}

const Modal: React.FC<ModalProps> = ({ fieldType, person, onClose, onSave }) => {
  const field= fieldType.toString()
  const [value, setValue] = useState<string | number>(person[field as keyof IPerson] || '');

  const handleSave = () => {
    const updatedPerson = { ...person, [field]: value as any };
    onSave(updatedPerson);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="inputField">{field}</label>
        <input
          id="inputField"
          className={styles.input}
          type={field}
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
