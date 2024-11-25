import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Testimonals from "./components/Testimonals"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Workflow from "./components/WorkFlow"
import Pricing from "./components/Pricing"




function App() {
  return (
    <>
    <NavBar/>
    <div className='max-w-7xl min-h-[100vh] mx-auto pt-20 px-6'>
       <Hero/>

       <Feature/>
       <Workflow/>

       <Pricing/>
       <Testimonals/>

       <Footer/>


       
    </div>



    

    

    </>
  )


  
}

export default App
