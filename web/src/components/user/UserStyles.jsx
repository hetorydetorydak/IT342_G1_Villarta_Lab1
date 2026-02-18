import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Card } from '../common/Container';

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
`;

export const ProfileCard = styled(Card)`
  text-align: center;
`;

export const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${theme.borderRadius.round};
  background: linear-gradient(135deg, ${theme.colors.primary}, #6a11cb);
  margin: 0 auto ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 3rem;
  font-weight: bold;
`;

export const ProfileName = styled.h2`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.fontSize.xlarge};
`;

export const ProfileEmail = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.fontSize.large};
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
`;

export const InfoItem = styled.div`
  text-align: center;
`;

export const InfoLabel = styled.p`
  color: ${theme.colors.textLight};
  font-size: ${theme.fontSize.small};
  margin-bottom: ${theme.spacing.xs};
`;

export const InfoValue = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.large};
  font-weight: 500;
`;