import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";
import Categories from "../pages/Categories";
import Info from "../pages/Info";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/Info" element={<Info />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
