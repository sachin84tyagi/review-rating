import "./App.css";
import { Switch, Route} from "react-router-dom";
import listRecord from "./components/pages/contact-management/contact";
import contactAddEdit from "./components/pages/contact-management/addEdit";
import Error from "./components/reusable/Error";
import Header from "./components/reusable/Header";
import contactView from "./components/pages/contact-management/View";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Detail from "./components/pages/Detail";
import Signup from "./components/pages/users/signup";
import { PrivateRoute } from "./helpers/private-route"

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/contact" component={listRecord} />
          <PrivateRoute exact path="/contact/add" component={contactAddEdit} />
          <PrivateRoute exact path="/contact/view/:id" component={contactView} />
          <PrivateRoute exact path="/contact/update/:id" component={contactAddEdit} />
          <Route exact path="/about" component={About} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="*" component={Error} />
        </Switch>
      
      {/* </div> */}
    </div>
  );
}

export default App;
