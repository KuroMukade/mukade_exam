import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Header />
      <div className="container">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </QueryClientProvider>,
);
