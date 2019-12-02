import React from 'react';
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES } from 'bpk-component-input';
import BpkLabel from 'bpk-component-label';

const TextInput = ({id,name,value,onChange,placeholder,onClear,label}) => {

  const handleChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    onChange(name,value);
  };

  const handleClear = (event) => { 
    const name = event.target.name;
    onChange(name, '');
  };
  
  return (
    <>
      <BpkLabel htmlFor={label}>label</BpkLabel>
      <BpkInput
        id={id}
        type={INPUT_TYPES.text}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
        clearButtonLabel={'Clear'}
        onClear={handleClear}
      />
  </>
  )
}

export default TextInput;
