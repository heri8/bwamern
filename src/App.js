import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/properties/:id" component={DetailsPage} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/example" component={Example} exact />
      </Router>
    </div>
  );
}

export default App;
