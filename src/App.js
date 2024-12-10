import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
