import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  const Index = lazy(() => import('./pages').then((m) => ({ default: m.Home })));
  const Login = lazy(() => import('./pages').then((m) => ({ default: m.Login })));
  const Test = lazy(() => import('./pages').then((m) => ({ default: m.Test })));
  const MyExpense = lazy(() => import('./pages').then((m) => ({ default: m.MyExpense })));

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence initial={false} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/my-expense" element={<MyExpense />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
