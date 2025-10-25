import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Light Theme */
  [data-theme="light"] {
    --bg-primary: #f8f9fa;
    --bg-secondary: #ffffff;
    --bg-tertiary: #e9ecef;
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-muted: #999999;
    --border-color: #e9ecef;
    --shadow: rgba(0, 0, 0, 0.1);
  }

  /* Dark Theme */
  [data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-tertiary: #404040;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #999999;
    --border-color: #404040;
    --shadow: rgba(0, 0, 0, 0.3);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }

  /* Material Design Toast Styles */
  .material-toast {
    border-radius: 8px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    border: none !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  }

  .material-toast-body {
    font-size: 14px !important;
    font-weight: 500 !important;
    padding: 16px !important;
  }

  .material-toast-progress {
    background: linear-gradient(90deg, #007bff, #0056b3) !important;
  }

  /* Success Toast */
  .Toastify__toast--success {
    background: #d4edda !important;
    color: #155724 !important;
    border-left: 4px solid #28a745 !important;
  }

  /* Error Toast */
  .Toastify__toast--error {
    background: #f8d7da !important;
    color: #721c24 !important;
    border-left: 4px solid #dc3545 !important;
  }

  /* Warning Toast */
  .Toastify__toast--warning {
    background: #fff3cd !important;
    color: #856404 !important;
    border-left: 4px solid #ffc107 !important;
  }

  /* Info Toast */
  .Toastify__toast--info {
    background: #d1ecf1 !important;
    color: #0c5460 !important;
    border-left: 4px solid #17a2b8 !important;
  }

  /* Default Toast */
  .Toastify__toast--default {
    background: #f8f9fa !important;
    color: #333 !important;
    border-left: 4px solid #6c757d !important;
  }
`;
