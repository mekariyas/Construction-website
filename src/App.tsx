import NavBar from "./components/NavBar"
import Footer from "./components/Footer.tsx"
import {Outlet} from "react-router-dom"


const App = () => {
  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App