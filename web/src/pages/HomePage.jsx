import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { Container, Card } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { theme } from '../styles/theme';

const Hero = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSize.large};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xl};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xxl};
`;

const FeatureCard = styled(Card)`
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.textLight};
`;

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <Hero>
        <Title>User Registration and Authentication</Title>
        <Subtitle>
          A secure authentication system built with Spring Boot and React
        </Subtitle>
        
        <ButtonGroup>
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <Button variant="primary" size="large">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="large">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <Button variant="primary" size="large">
                Go to Profile
              </Button>
            </Link>
          )}
        </ButtonGroup>
      </Hero>

      {/* <Features>
        <FeatureCard>
          <FeatureIcon>🔐</FeatureIcon>
          <FeatureTitle>Secure Authentication</FeatureTitle>
          <FeatureDescription>
            JWT-based authentication with password encryption
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Fast & Responsive</FeatureTitle>
          <FeatureDescription>
            Built with modern technologies for optimal performance
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Modern Design</FeatureTitle>
          <FeatureDescription>
            Clean and intuitive user interface with styled-components
          </FeatureDescription>
        </FeatureCard>
      </Features> */}
    </Container>
  );
};

export default HomePage;