import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const buttonVariants = {
  primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    
    &:hover:not(:disabled) {
      background-color: #357abd;
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    
    &:hover:not(:disabled) {
      background-color: #e5e5e5;
    }
  `,
  success: css`
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    
    &:hover:not(:disabled) {
      background-color: #218838;
    }
  `,
  danger: css`
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};
    
    &:hover:not(:disabled) {
      background-color: #c82333;
    }
  `,
};

const buttonSizes = {
  small: css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.fontSize.small};
  `,
  medium: css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.fontSize.medium};
  `,
  large: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.fontSize.large};
  `,
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.small};
  font-weight: 500;
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  border: none;
  outline: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  ${props => buttonSizes[props.size || 'medium']}
  ${props => buttonVariants[props.variant || 'primary']}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => props.loading && css`
    position: relative;
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid ${theme.colors.white};
      border-radius: ${theme.borderRadius.round};
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }
  `}
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const IconButton = styled(Button)`
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  width: auto;
`;