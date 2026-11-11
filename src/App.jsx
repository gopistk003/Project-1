
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
