import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router";
import "./index.css";

const Home = lazy(()=> import("./Page/Home/Home"))
const ProductDetail = lazy(()=> import("./Page/ProductDetail/ProductDetail"))

const Header = lazy(()=> import("./Layout/Header"))
const Footer = lazy(()=> import("./Layout/Footer"))

function MainLayout() {
  return (
    <>
      <Header />
     <div className="container-mainLayout">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
     </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/productDetail" element={<ProductDetail/>} />
        </Route>
    </Routes>
  );
}

export default App;