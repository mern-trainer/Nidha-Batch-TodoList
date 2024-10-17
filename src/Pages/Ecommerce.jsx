import { Fragment } from "react"
import { Card, Carousel, Container, Nav, Navbar, Table } from "react-bootstrap"
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa"

const Ecommerce = () => {
    return <Fragment>
       
        <Navbar expand="lg" className="navbar-light fixed-top" bg="light" style={{height: "60px"}}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="./logo.png" alt="logo" style={{height: "45px"}}/>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Shop</Nav.Link> 
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Carousel style={{marginTop: "60px"}} nextIcon={<FaArrowRight />} prevIcon={<FaArrowLeft />}>
            <Carousel.Item interval={2000}>
                <img className="w-100" height={500} src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg" alt="sample 1" />
                <Carousel.Caption>
                    <h2>Hello 1</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className="w-100" height={500} src="https://i.ytimg.com/vi/MkBgqyAp6lY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAI92N7cM4fzl83IbQXOGcGytECkw" alt="sample 1" />
                <Carousel.Caption>
                    <h2>Hello 2</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="w-100" height={500} src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg" alt="sample 1" />
                <Carousel.Caption>
                    <h2>Hello 3</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <h2 className="my-5 text-center">Latest Products</h2>

        <div className="d-flex overflow-auto gap-3">
            <Card className="flex-shrink-0" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://dmassets.micron.com/is/image/microntechnology/mobile%3A3-2-all-others?ts=1724191387711&dpr=off" alt="sample 1"/>
                <Card.Body>
                    <h4>Sample Text</h4>
                    <Card.Text className="text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem autem veniam beatae fugiat obcaecati tempora labore! Corporis veritatis et fugiat iste rem, voluptatibus, inventore vitae officiis aut culpa in.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="flex-shrink-0" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://dmassets.micron.com/is/image/microntechnology/mobile%3A3-2-all-others?ts=1724191387711&dpr=off" alt="sample 1"/>
                <Card.Body>
                    <h4>Sample Text</h4>
                    <Card.Text className="text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem autem veniam beatae fugiat obcaecati tempora labore! Corporis veritatis et fugiat iste rem, voluptatibus, inventore vitae officiis aut culpa in.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="flex-shrink-0" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://dmassets.micron.com/is/image/microntechnology/mobile%3A3-2-all-others?ts=1724191387711&dpr=off" alt="sample 1"/>
                <Card.Body>
                    <h4>Sample Text</h4>
                    <Card.Text className="text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem autem veniam beatae fugiat obcaecati tempora labore! Corporis veritatis et fugiat iste rem, voluptatibus, inventore vitae officiis aut culpa in.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="flex-shrink-0" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://dmassets.micron.com/is/image/microntechnology/mobile%3A3-2-all-others?ts=1724191387711&dpr=off" alt="sample 1"/>
                <Card.Body>
                    <h4>Sample Text</h4>
                    <Card.Text className="text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem autem veniam beatae fugiat obcaecati tempora labore! Corporis veritatis et fugiat iste rem, voluptatibus, inventore vitae officiis aut culpa in.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="flex-shrink-0" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://dmassets.micron.com/is/image/microntechnology/mobile%3A3-2-all-others?ts=1724191387711&dpr=off" alt="sample 1"/>
                <Card.Body>
                    <h4>Sample Text</h4>
                    <Card.Text className="text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem autem veniam beatae fugiat obcaecati tempora labore! Corporis veritatis et fugiat iste rem, voluptatibus, inventore vitae officiis aut culpa in.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

       

        <Table striped hover responsive bordered variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    </Fragment>
}

export default Ecommerce