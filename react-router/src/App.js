import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/ => Welcome component
// our-domain.com/products => Products component
// our-domain.com/product-detail/1 => Products Detail
