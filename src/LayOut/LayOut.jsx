import { Outlet } from "react-router-dom"
import Header from "../Sides/Header/Header"
import Footer from "../Sides/Footer/Footer"

const LayOut = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayOut
