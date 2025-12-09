import "./App.css";
import { Header } from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import JobCard from "./components/JobCard.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { JobDetail } from "./pages/Detail.jsx";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
