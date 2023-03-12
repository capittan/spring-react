import './App.css';
import HomePage from './components/home';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/auth/Sign In/SignInPage';
import DefaultLayout from './components/default';
import NotFoundPage from './components/notFound/notFoundPage';
import SignUpPage from './components/auth/Sign Up';
import CategoryPage from './components/categories';
import CreateCategoryPage from './components/categories/create';
import ProductPage from './components/products';
import CreateProductPage from './components/products/create';
import ProductsByCategoryPage from './components/productsByCategory';
import ProductById from './components/productById';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />

          <Route path="/Categories" element={<CategoryPage />} />
          <Route path="/CreateCategory" element={<CreateCategoryPage />} />

          <Route path="/Products" element={<ProductPage />} />
          <Route path="/Product/:id" element={<ProductById />} />
          <Route path="/ProductsByCategory/:id" element={<ProductsByCategoryPage />} />

          <Route path="/CreateProduct" element={<CreateProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;