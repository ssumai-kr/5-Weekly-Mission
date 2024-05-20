import { BrowserRouter, Routes, Route} from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/folder";
import App from "./App";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
function HomePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<App/>}/>
                <Route path="/shared" element = {<Shared/>}/>      
                <Route path="/folder" element = {<Folder/>}/>
                <Route path="/signin" element = {<Signin/>}/>
                <Route path="/signup" element = {<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default HomePage;