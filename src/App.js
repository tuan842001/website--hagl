import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Error from "./pages/404/404";
import Homepage from "./pages/homepage/Homepage";
import Gioithieu from "./pages/gioithieu/Gioithieu";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Contact from "./pages/contact/Contact";
import SchedulePage from "./pages/schedulePage/SchedulePage";
import PlayerPage from "./pages/playerPage/PlayerPage";
import ShopPage from "./pages/shopPage/ShopPage";
import NewsPage from "./pages/newsPage/NewsPage";
import Footer from "./components/footer/Footer";
import VideoPage from "./pages/videoPage/VideoPage";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/cau-thu" element={<PlayerPage />} />
        <Route path="/lich-thi-dau" element={<SchedulePage />} />
        <Route path="/cua-hang" element={<ShopPage />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route
          path="/cong-dong"
          element={<Error img="../image/vantoan-mobile.png" />}
        />
        <Route path="/video" element={<VideoPage />} />

        <Route
          path="/cau-thu/cong-phuong"
          element={<Error img="../image/congphuong-mobile.png" />}
        />
        <Route
          path="/cau-thu/van-toan"
          element={<Error img="../image/vantoan-mobile.png" />}
        />
        <Route
          path="/cau-thu/xuan-truong"
          element={<Error img="../image/xuantruong-mobile.png" />}
        />
        <Route
          path="/cau-thu/tuan-anh"
          element={<Error img="../image/tuananh-mobile.png" />}
        />
        <Route path="dang-nhap" element={<Login />} />
        <Route path="dang-ky" element={<SignUp />} />
        <Route path="gioi-thieu" element={<Gioithieu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
