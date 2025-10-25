import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--bg-secondary);
  padding: 16px 0;
  box-shadow: 0 2px 4px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #007bff;
  margin: 0;
  font-size: 24px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
  max-width: 400px;
  margin: 0 32px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  min-width: 200px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const DropdownText = styled.span`
  font-size: 14px;
  color: #333;
`;

export const Icon = styled.span`
  font-size: 18px;
  color: #666;
`;

export const SearchInputIcon = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 8px;
`;

export const UserName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

export const UserEmail = styled.div`
  color: #666;
  font-size: 12px;
`;

