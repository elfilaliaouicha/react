import "./App.css";
import Navs from "./Components/Navs/Navs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home.js/Home";
import Tarifs from "./Components/Tarifs/Tarifs";
import Faq from "./Components/Faq/Faq";
import Contact from "./Components/Contact/Contact";
import { useSelector} from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./Components/Contact/Logout";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      
      <Navs />
      <Switch>
        <Route path="/" Components = {Home} exact><Home /></Route>
        <Route path="/tarifs" Components = {Tarifs} exact><Tarifs /></Route>
        <Route path="/faq" Components = {Faq} exact><Faq /></Route>
        {user ? <Logout /> : <Contact />};
      </Switch>
    </Router>
  );
}

export default App;
