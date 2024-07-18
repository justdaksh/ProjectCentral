import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RecoilRoot } from "recoil";
import "./App.css";
import { BackgroundChanger } from "./components/BGChanger/BackgroundChanger";

function App() {
  return (
    <>
      <RecoilRoot>
        <BackgroundChanger />
      </RecoilRoot>
    </>
  );
}

export default App;
