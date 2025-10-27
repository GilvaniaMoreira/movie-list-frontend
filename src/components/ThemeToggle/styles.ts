import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
  position: relative;
  padding: 0 8px;
`;

export const ToggleSwitch = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 56px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid var(--border-color);
  background: ${props => props.isActive 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'var(--bg-tertiary)'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 4px;
  
  &:hover {
    border-color: #667eea;
  }
`;

export const ToggleKnob = styled.div<{ isActive: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transition: transform 0.3s ease;
  transform: ${props => props.isActive ? 'translateX(24px)' : 'translateX(0)'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const IconContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  opacity: ${props => props.isActive ? 0.5 : 0.7};
  z-index: 5;
  
  &:first-child {
    left: -28px;
  }
  
  &:last-child {
    right: -28px;
  }
`;

