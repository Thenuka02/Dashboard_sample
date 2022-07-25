import {BrowserRouter  ,Routes, Route} from "react-router-dom";
import Drawer from "../components/layouts/Drawer";

import Setting from "../pages/Setting";
import Ticket from "../pages/Ticket";


const AppRouter = () =>{
    return(
     
        <BrowserRouter>
          {/* <Navbar /> */}
    <Drawer />
            <Routes>
                <Route path="/" element={<Ticket />}/>
                <Route path="/setting" element={<Setting />}/> 
            </Routes>
           
        </BrowserRouter>
     
       
    )
}

export default AppRouter;
