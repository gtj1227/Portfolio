import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { DASection } from "./Pages/DASection";
import { Toaster } from "../components/ui/toaster";
function App() {

  return (
    <>
    <Toaster />
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path="DASection" element={<DASection />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
