import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./pages/Store";
// import Nav from "./components/Nav";
import Cart from "./pages/Cart";
// import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Layout from "./components/Layout";


function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <Router>
        <Header />
        
        <Routes>
        {/* <Route path="/" element={<Layout />}/> */}

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
        
      </Router>
    </AuthProvider>
    // </Provider>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { Provider } from "react-redux";
// import { store } from "./pages/Store";
// import Layout from "./components/Layout";
// // import Home from "./pages/Home"
// // import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Cart from "./pages/Cart";
// // import productList from "./data/products"; // If needed

// function App() {
//   return (
//     <Provider store={store}>
//       <AuthProvider>
//         <Router>
//           <Routes>
            // <Route element={<Layout />}>
//             <Route path="/" element={<Home />} />

//               <Route path="/cart" element={<Cart />} />
//             </Route>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </Provider>
//   );
// }

// export default App;
