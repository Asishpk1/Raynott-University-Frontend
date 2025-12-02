import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar expand='lg' className='p-4 shadow' style={{backgroundColor:'white'}}>
      <Container>
        <Link to={'/'}  className='text-decoration-none'><Navbar.Brand style={{color:'rgb(65, 144, 115)'}} className='fs-4 fw-bolder'> <i className="fa-solid fa-building-columns"></i> Raynott <span className='fw-bold fs-5'>University</span></Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=' d-flex justify-content-center gap-sm-5 gap-2 flex-wrap' style={{fontWeight:'500'}}>
            <Link to={'/'} className=' text-decoration-none  highlight fw-bold contents' style={{color:'rgb(65, 144, 115)'}} >Home</Link>
            <Link to={'/courses'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(65, 144, 115)'}}>Academics</Link>
            <Link to={'/admission'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(65, 144, 115)'}}>Admission</Link>
            <Link to={'/contact'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(65, 144, 115)'}}>Contact</Link>
            <Link to={'/login'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(65, 144, 115)'}}>Admin</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header