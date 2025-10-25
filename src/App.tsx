import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from './contexts/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="material-toast"
          progressClassName="material-toast-progress"
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;