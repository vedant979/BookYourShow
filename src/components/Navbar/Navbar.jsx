import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div>
      <AppBar className="Navbar" sx={{backgroundColor :"#333545 !important"}}>
        <Toolbar>
          <h1 className='Navbar-header'>
          <Link to="/" className='link-header'>
            Book your Show
          </Link>

          </h1>
        </Toolbar>
      </AppBar>
    </div>
  )
}
