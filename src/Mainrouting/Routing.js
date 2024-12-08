import { createBrowserRouter } from "react-router-dom";
import Html from "../components/Html";
import MaindashComp from "../layout/MaindashComp";
import About from "../components/About";
import ProductComp from "../components/ProductComp";
import FormComp from "../components/Form";
import AddComp from "../components/AddComp";


const routing = createBrowserRouter([
    
    {path:'maindashboard',element:<MaindashComp></MaindashComp>,children:[
        {path:'home',element:<Html></Html>},
        {path:'about',element:<About></About>},
        {path:'product',element:<ProductComp></ProductComp>},
        {path:'contact',element:<FormComp></FormComp>},
        {path:'addcomp',element:<AddComp></AddComp>}

    ]}
]);

export default routing