import './App.css';
import HomePage from './components/home';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/Sign In/SignInPage';
import DefaultLayout from './components/default';
import NotFoundPage from './components/notFound/notFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/SignIn" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;