import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalePost from '../ModalePost'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const navigate = useNavigate()
  return (
    <>
      <Container className="d-grid gap-2 d-flex mt-3">
        <Button href='./' variant="success" size="lg">
       HOME
        </Button>
        <ModalePost />
        <Button variant="success" size="lg">
          SETTINGS
        </Button>
        <Button variant="secondary" size="lg" onClick={() => {
          navigate("/login")
          localStorage.clear()
        }}>
          LOG OUT
        </Button>
      </Container>
    </>

    //   <Container>

    //     <ButtonGroup vertical>
    //       <Link to='/'>
    //         <Button >Home</Button>
    //       </Link>
    //       <ModalePost />
    //       <DropdownButton
    //         as={ButtonGroup}
    //         title="User"
    //         id="bg-vertical-dropdown-2"
    //       >
    //         <Link> 
    //         <Dropdown.Item eventKey="1">Settings</Dropdown.Item>
    //         </Link>
    //         <Button
    //     onClick={() => {
    //        navigate("/login")
    //        localStorage.clear()
    //     }}
    //  >
    //     Logout
    //  </Button>
    //       </DropdownButton>
    //     </ButtonGroup>
    //   </Container>
  );
}

export default SideBar;