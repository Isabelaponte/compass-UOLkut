
import React, { useState } from 'react';
import classes from './InputChips.module.css'

interface ChipProps {
    text: string;
    onDelete: () => void;
  }
  
  interface ChipsContainerProps {
    placeholder: string;
  }

  const Chip: React.FC<ChipProps> = ({ text, onDelete }) => {
    return (
      <button className={classes.chip} onClick={onDelete}>
        {text}
        <span className={classes.close}>
          X
        </span>
      </button>
    );
  };
    
    const InputChips: React.FC<ChipsContainerProps> = ({ placeholder }) => {

    const [chips, setChips] = useState<string[]>([]);
    const [inputText, setInputText] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const text = inputText.trim();
            if (text !== '') {
                setChips((prevChips) => [...prevChips, text]);
                setInputText('');
            }
        }
    };

    const handleDeleteChip = (index: number) => {
        setChips((prevChips) => prevChips.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className={classes.bubble}>

                {chips.map((chip, index) => (
                    <Chip key={index} text={chip} onDelete={() => handleDeleteChip(index)} />
                ))}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </>
    );
}

export default InputChips;