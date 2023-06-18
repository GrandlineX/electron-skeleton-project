import React from 'react';
import ReactDOM from 'react-dom';
import { GLXElectronAPI } from '@grandlinex/e-kernel';
import App from '@/app/App';

// Type interface for Electron API

declare global {
  interface Window {
    glxApi: GLXElectronAPI;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
