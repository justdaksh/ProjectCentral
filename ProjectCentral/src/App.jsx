import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RecoilRoot } from "recoil";
import "./App.css";
import { BackgroundChanger } from "./components/BGChanger/BackgroundChanger";
import { ParaGenerator } from "./components/ParaGenerator/ParaGenerator";
import { GithubInfoCard } from "./components/GithubInfoCard/GithubInfoCard";
import { Login } from "./components/Login/Login";
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from "./components/NoMatchRoute/NoMatch";
import { Navbar } from "./components/Navbar/Navbar";
import { ProtectedOtpVerify } from "./components/Login/ProtectedOtpVerify";
function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar/>
      <Routes>
        <Route path="/BackgroundChanger" element={<BackgroundChanger/>} />
        <Route path="/ParaGenerator" element={<ParaGenerator/>} />
        <Route path="/GithubInfoCard" element={<GithubInfoCard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login/otpVerification" element={<ProtectedOtpVerify />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Login/>} />
      </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
