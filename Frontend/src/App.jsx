import { BrowserRouter, Route ,Routes} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"


function App() {
  

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
