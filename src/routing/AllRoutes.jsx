
import {Routes, Route} from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { Form } from "../pages/Form/Form";
// import { DetailPage } from './pages/Details/DetailPage';
import {Homepage} from "../pages/HomePage/Homepage"
export const AllRoutes = () => {
  return (


        <Routes>
            <Route exact path="/" Component={Homepage}></Route>
            <Route exact path="/details" Component={Modal}></Route>
            <Route exact path="/book" Component={Form}></Route>
        </Routes>



  )
}