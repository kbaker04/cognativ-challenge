import { Route, Switch } from "react-router-dom";
import ProductPage from "./products/ProductPage";
import PageNotFound from "./PageNotFound";
import "../assets/sass/main.scss";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
