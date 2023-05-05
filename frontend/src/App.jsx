import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from './Components/NavBar/Navbar.jsx';
import HomePage from './HomePage.jsx';
import StartUpSection from './Components/StartUpSection/StartUpSection.jsx';
import LoginPage from './Components/Signup/LoginPage.jsx';
import GettingStarted from './Components/Signup/GettingStarted.jsx'
import Profile from "./Components/ProfilePage/Profile.jsx"; 
import Subscribe from "./Components/Subscribe/Subscribe.jsx";
import StartupPage from "./Components/Subscribe/StartupPage.jsx";
import FundStartUp from "./Components/StartUpSection/FundStartUp.jsx";
import { UserProvider } from './Components/UserContext.jsx'
import Payment from "./Components/Signup/Payment.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />}/>
        <Route path="/startup" element={<StartUpSection />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/subscribe" element={<Subscribe />}/>
        <Route path="/startup-sp" element={<StartupPage />}/>
        <Route path="/fund-startup" element={<FundStartUp />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/signup" element={<GettingStarted />}/>
      </Route>
    )
  )
  return (
    <UserProvider>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;
