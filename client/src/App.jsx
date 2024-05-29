import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Navbar from './Components/navbar/Navbar'
import LeftBar from './Components/leftBar/LeftBar'
import RightBar from './Components/rightBar/RightBar'
import Home from './Components/home/Home'
import {
  createBrowserRouter,
  RouterProvider, 
  Navigate, 
  Outlet
} from  'react-router-dom'



function App() {
  const currentUser = true;
  const Layout = () => {
    return(
        <div>
            <Navbar/>
        <div style={{display:"flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
        </div>
        </div>
    );

};
const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
    ],
  }
])
  return ( 
    <div>
      <RouterProvider router={router}/>
        
    </div>
  )
}

export default App
