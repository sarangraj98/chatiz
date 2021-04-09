import { useAuth } from "./utils/auth-context";
import {AuthenticatedRoutes,UnauthenticatedRoutes} from './routes'

function App() { 
  const {loggedIn} = useAuth(); 
  return loggedIn? <AuthenticatedRoutes/>:<UnauthenticatedRoutes/>
  
}

export default App;
