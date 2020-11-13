import { Router, Route, Switch } from "react-router-dom";
import ProductPage from "./products/ProductPage";
import PageNotFound from "./PageNotFound";
import OfflinePage from "./maintenance/OfflinePage";
import history from "../history";

import "../assets/sass/main.scss";

const App = () => {
  return (
    <Router history={history}>
      <div id="main" className="container main-content-area">
        <Switch>
          <Route exact path="/" component={ProductPage} />
          <Route exact path="/product/:product" component={ProductPage} />
          <Route exact path="/offline" component={OfflinePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
