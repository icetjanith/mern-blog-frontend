import './App.css'
import Home from './modules/common/home/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./modules/common/products/Products.jsx";
import AuthLayout from "./modules/auth/auth-layout/AuthLayout.jsx";
import Login from "./modules/auth/login/Login.jsx";
import SignUp from "./modules/auth/signup/SignUp.jsx";
import InvalidPage from "./modules/auth/invalid-page/InvalidPage.jsx";
import PrivateRoute from "./modules/common/PrivateRoute.jsx";
import DashboardLayout from "./modules/common/Dashboard/DashboardLayout.jsx";
import CreatePost from "./modules/common/create-post/CreatePost.jsx";
import PostDetail from "./modules/common/post-details/PostDetails.jsx";
import About from "./modules/common/about/About.jsx";
import Contact from "./modules/common/contact/Contact.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/posts" element={<Products />}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/post-details/:id" element={<PostDetail/>}/>
              <Route path="/auth" element={<AuthLayout/>}>
                  <Route path="login" element={<Login/>}/>
                  <Route path="signup" element={<SignUp/>}/>
                  <Route path="invalid" element={<InvalidPage/>}/>
              </Route>
              <Route element={<PrivateRoute/>}>
                  <Route path="/dashboard" element={<DashboardLayout/>}/>
                  <Route path="/create-post" element={<CreatePost/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
