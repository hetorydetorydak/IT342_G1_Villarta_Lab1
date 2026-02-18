import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../common/Button';
import {
  ProfileContainer,
  ProfileCard,
  ProfileAvatar,
  ProfileName,
  ProfileEmail,
  ProfileInfo,
  InfoItem,
  InfoLabel,
  InfoValue,
} from './UserStyles';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const getInitials = () => {
    return `${user.firstname?.[0] || ''}${user.lastname?.[0] || ''}`.toUpperCase();
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileAvatar>
          {getInitials()}
        </ProfileAvatar>
        
        <ProfileName>
          {user.firstname} {user.lastname}
        </ProfileName>
        
        <ProfileEmail>
          {user.email}
        </ProfileEmail>
        
        <ProfileInfo>
          <InfoItem>
            <InfoLabel>Member ID</InfoLabel>
            <InfoValue>#{user.id}</InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Full Name</InfoLabel>
            <InfoValue>{user.firstname} {user.lastname}</InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>{user.email}</InfoValue>
          </InfoItem>
        </ProfileInfo>
        
        <Button 
          variant="danger" 
          size="large" 
          onClick={logout}
          style={{ marginTop: '2rem' }}
        >
          Logout
        </Button>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default UserProfile;