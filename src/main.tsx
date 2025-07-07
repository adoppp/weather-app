import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { router } from '@/routing/routing';
import { RouterProvider } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { CityProvider } from '@/utils/useGetLocation/useGetLocation';
import { ThemeProvider } from '@/utils/useTheme/useTheme';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { LocalisationProvider } from './utils/useLocalisation/useLocalisation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <CityProvider>
            <LocalisationProvider>
              <ThemeProvider>
                <RouterProvider router={router} />
              </ThemeProvider>
            </LocalisationProvider>
          </CityProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
