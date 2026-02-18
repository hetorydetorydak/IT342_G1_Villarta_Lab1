import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Card } from '../common/Container';

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #cb1149 100%);
`;

export const AuthCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: ${theme.spacing.xl};
`;

export const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.xlarge};
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const AuthLink = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.md};
  font-size: ${theme.fontSize.small};
  
  a {
    color: ${theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;