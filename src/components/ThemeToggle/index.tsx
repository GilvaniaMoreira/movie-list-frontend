import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { LightMode, DarkMode } from '@mui/icons-material';
import {
  ToggleContainer,
  ToggleSwitch,
  ToggleKnob,
  IconContainer
} from './styles';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <ToggleContainer>
      <ToggleSwitch isActive={isLightMode} onClick={toggleTheme}>
        <IconContainer isActive={isLightMode}>
          <DarkMode fontSize="small" style={{ color: 'var(--text-primary)' }} />
        </IconContainer>
        <ToggleKnob isActive={isLightMode} />
        <IconContainer isActive={!isLightMode}>
          <LightMode fontSize="small" style={{ color: 'var(--text-primary)' }} />
        </IconContainer>
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default ThemeToggle;

