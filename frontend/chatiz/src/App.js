import LoginForm from "./components/LoginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { ProtectedRoute } from "./utils/protected.route";


function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route path="/" exact component={Home}></Route>
       <Route path="/login" exact component={LoginForm}></Route>
       <ProtectedRoute path="/dashboard" exact component={Dashboard}></ProtectedRoute>
       </Switch>
     </Router>
    </>
  );
}

export default App;
