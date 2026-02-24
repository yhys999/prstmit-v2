import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeTracking } from './lib/analytics'

// 初始化Google Analytics和Google Ads跟踪
if (typeof window !== 'undefined') {
  initializeTracking();
}

createRoot(document.getElementById("root")!).render(<App />);
