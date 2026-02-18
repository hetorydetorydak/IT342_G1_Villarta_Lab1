import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
  }
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || theme.spacing.md};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr'};
  gap: ${props => props.gap || theme.spacing.md};
  align-items: ${props => props.align || 'start'};
`;