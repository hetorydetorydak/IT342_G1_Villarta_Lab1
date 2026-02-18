import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Input from '../common/Input';
import { Button } from '../common/Button';
import { AuthContainer, AuthCard, AuthTitle, AuthForm, AuthLink } from './AuthStyles';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstname) {
      newErrors.firstname = 'First name is required';
    }
    
    if (!formData.lastname) {
      newErrors.lastname = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const { confirmPassword, ...registerData } = formData;
      const response = await register(registerData);
      
      if (response.success) {
        navigate('/login');
      }
    } catch (error) {
      // Error is handled by the context
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Create Account</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            id="firstname"
            type="text"
            label="First Name"
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
            placeholder="Enter your first name"
            disabled={loading}
          />
          
          <Input
            id="lastname"
            type="text"
            label="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
            placeholder="Enter your last name"
            disabled={loading}
          />
          
          <Input
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
            disabled={loading}
          />
          
          <Input
            id="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Create a password"
            disabled={loading}
          />
          
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            disabled={loading}
          />
          
          <Button 
            type="submit" 
            variant="primary" 
            size="large" 
            fullWidth
            loading={loading}
          >
            Register
          </Button>
        </AuthForm>
        
        <AuthLink>
          Already have an account? <Link to="/login">Login here</Link>
        </AuthLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default Register;