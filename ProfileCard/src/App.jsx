import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Profile from './components/Profile';

function App() {

  return (
    <>
    <RecoilRoot>
      <Profile/>
    </RecoilRoot>
    </>
  )
}



export default App
