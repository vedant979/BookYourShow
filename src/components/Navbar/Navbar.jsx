import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div>
      <AppBar className="Navbar" sx={{backgroundColor :"#333545 !important"}}>
        <Toolbar>
          <h1 className='Navbar-header'>
              Book your Show
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  )
}
