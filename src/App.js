import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
/*
Благодаря router мы можем без перезагрузки страницы 
обновлять определённе элементы
*/
import {BrowserRouter, Routes, Route} from "react-router-dom";


//Каждая компонента должна начинаться с большой буквы
function App() {
  return (
    //оборачиваем в BrowserRouter весь код что бы всё работало правильно
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <div className="wrap">
        <Navbar />
        <div className='content'>
            <Routes>
              {/*здесь у нас находятся ссылки по которым. 
              Нажимая на них у нас обновляется контент в эелементе*/}
              <Route path="/profile/" element={<Profile />} />
              <Route path="dialogs/*" element={<Dialogs />} />
            </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;