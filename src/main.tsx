import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '@/storage/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ModeTheme } from '@/utils/ModeTheme/ModeTheme';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
                <ModeTheme />
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
