import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';
import Input from '../ui/Input';
import ThemeToggle from '../ThemeToggle';
import { 
  Favorite, 
  ExitToApp, 
  Clear
} from '@mui/icons-material';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  SearchContainer,
  NavContainer,
  AvatarContainer,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownText,
  Icon,
  SearchInputIcon,
  UserInfo,
  UserName,
  UserEmail
} from './styles';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onClearSearch?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onClearSearch }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleLogoClick = () => {
    setSearchQuery('');
    if (onClearSearch) {
      onClearSearch();
    }
    navigate('/');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsDropdownOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (onClearSearch) {
      onClearSearch();
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>
          MovieList
        </Logo>
        
        <SearchContainer>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', width: '100%' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Input
                type="text"
                placeholder="Pesquisar filmes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
              />
              {searchQuery && (
                <SearchInputIcon
                  type="button"
                  onClick={handleClearSearch}
                >
                  <Clear fontSize="small" style={{ color: '#666' }} />
                </SearchInputIcon>
              )}
            </div>
            <Button type="submit" variant="primary">
              Buscar
            </Button>
          </form>
        </SearchContainer>

        <NavContainer>
          <ThemeToggle />
          {isAuthenticated && user ? (
            <AvatarContainer>
              <Avatar onClick={toggleDropdown}>
                {getUserInitials(user.name)}
              </Avatar>
              
              <Dropdown isOpen={isDropdownOpen}>
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
                
                <DropdownItem onClick={handleFavoritesClick}>
                  <Icon>
                    <Favorite fontSize="small" />
                  </Icon>
                  <DropdownText>Meus Favoritos</DropdownText>
                </DropdownItem>
                
                <DropdownItem onClick={handleLogout}>
                  <Icon>
                    <ExitToApp fontSize="small" />
                  </Icon>
                  <DropdownText>Sair</DropdownText>
                </DropdownItem>
              </Dropdown>
            </AvatarContainer>
          ) : (
            <>
              <Button 
                variant="outline" 
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button 
                variant="primary" 
                onClick={handleRegisterClick}
              >
                Registrar
              </Button>
            </>
          )}
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

