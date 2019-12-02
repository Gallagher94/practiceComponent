import React from 'react';
import PropTypes from 'prop-types';
import BpkButton from 'bpk-component-button';

const Button = ({content, onClick,label}) => {

  const handleClick = () => { 
    onClick();
  };
  
  return (
  <>
    <BpkButton onClick={handleClick}>{content}</BpkButton>
  </>
);
}
export default Button;


Button.defaultProps = {
  content: '',
  onClick: ()=>{}
};

Button.propTypes = {
  content: PropTypes.number,
  onClick: PropTypes.func
}