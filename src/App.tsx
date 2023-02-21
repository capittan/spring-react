import './App.css';
import HomePage from './components/home';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/auth/Sign In/SignInPage';
import DefaultLayout from './components/default';
import NotFoundPage from './components/notFound/notFoundPage';
import SignUpPage from './components/auth/Sign Up';
import CategoryPage from './components/categories';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Categories" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;