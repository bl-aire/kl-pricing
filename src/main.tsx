import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {MantineProvider, createTheme} from '@mantine/core';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// --- Styles ---
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'mantine-datatable/styles.css';

// --- Main application ---
import MainApp from './App';

// --- Aysnc query config ---
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

// --- App theme ---
const theme = createTheme({
  primaryColor: "orange", 
  fontFamily: "Lexend, sans-serif"
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <QueryClientProvider client={queryClient}>
        <MainApp />
      </QueryClientProvider>
     </MantineProvider>
  </StrictMode>,
)
