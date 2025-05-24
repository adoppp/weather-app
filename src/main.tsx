import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from '@/utils/useSystemTheme/useSystemTheme';
import { App } from '@/App';
import { Provider } from 'react-redux';
import { persistor, store } from '@/storage/store';
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <ThemeModeProvider>
                <App/>
              </ThemeModeProvider>
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
