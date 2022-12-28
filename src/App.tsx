import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  const location = useLocation();
  const Index = lazy(() => import('./pages').then((m) => ({ default: m.Home })));
  const Login = lazy(() => import('./pages').then((m) => ({ default: m.Login })));
  const Test = lazy(() => import('./pages').then((m) => ({ default: m.Test })));

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <AnimatePresence initial={false} exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/test" element={<Test />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}

export default App;
