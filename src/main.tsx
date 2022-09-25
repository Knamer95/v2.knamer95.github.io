import { createRoot } from 'react-dom/client';
import App from './App';
import '@/lib/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
