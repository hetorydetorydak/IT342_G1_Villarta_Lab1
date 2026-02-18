import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const InputContainer = styled.div`
  margin-bottom: ${theme.spacing.md};
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.medium};
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${props => props.error ? theme.colors.danger : theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSize.medium};
  transition: all ${theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? theme.colors.danger : theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.error ? 
      'rgba(220, 53, 69, 0.25)' : 
      'rgba(74, 144, 226, 0.25)'};
  }
  
  &:disabled {
    background-color: ${theme.colors.secondary};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: ${theme.spacing.xs};
  color: ${theme.colors.danger};
  font-size: ${theme.fontSize.small};
`;

const Input = React.forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  id,
  ...props 
}, ref) => {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        ref={ref}
        id={id}
        type={type}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;