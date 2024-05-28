import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/products" component={ProductListingPage} exact />
          <Route path="/products/:id" component={ProductDetailPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
