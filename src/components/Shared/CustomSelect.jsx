import React, { useState, useRef, useEffect } from 'react';
import { PiCaretDownThin, PiCheckThin } from 'react-icons/pi';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-container" ref={containerRef}>
      <div 
        className={`custom-select-trigger ${isOpen ? 'is-open' : ''} ${selectedOption ? 'item-selected' : ''}`}
        onClick={handleToggle}
      >
        <span className="custom-select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <PiCaretDownThin className="custom-select-icon" />
      </div>

      <div className={`custom-select-dropdown ${isOpen ? 'is-open' : ''}`}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`custom-select-option ${value === option.value ? 'is-selected' : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            <span>{option.label}</span>
            {value === option.value && <PiCheckThin className="option-check-icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
