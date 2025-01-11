// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/Body/MainBody";
import MainAbout from "./components/About/MainAbout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="mt-20"> {/* Add margin to avoid header overlap */}
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/about" element={<MainAbout />} />
          {/* <Route path="*" element={<NotFound />} /> Optional: 404 page */}
        </Routes>
      </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
