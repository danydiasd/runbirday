import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PresenceFormPage } from './pages/PresenceFormPage';
import { RacePage } from './pages/RacePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/confirmar/:eventType" element={<PresenceFormPage />} />
      <Route path="/corrida" element={<RacePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
