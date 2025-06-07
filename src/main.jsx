import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

import '@/index.css';
import App from '@/App.jsx';
import ThemeProvider from '@config/ThemeProvider';


createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>,
)
