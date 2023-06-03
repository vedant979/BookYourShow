import "./Homepage.css"
import { Navbar } from '../../components/Navbar/Navbar'
import { Banner } from '../../components/Banner/Banner'
export const Homepage = () => {
  return (
    <div style={{width:"100%"}}>
        {/* Navbar */}
        <Navbar/>

        {/* Banner */}
        <Banner/>


    </div>
  )
}
