import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router';
import Loading from './components/Loading';

function App() {
  const Index = lazy(() => import('./pages').then((m) => ({ default: m.Home })));
  const Login = lazy(() => import('./pages').then((m) => ({ default: m.Login })));
  const Test = lazy(() => import('./pages').then((m) => ({ default: m.Test })));

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
