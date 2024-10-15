import React from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'

// state => an object, handle component data

const Grid = () => {
    return (
        <Container fluid>
            <Row>
                {/* <Col xs={{offset: 1, span: 10}} sm={{offset: 0, span: 6}} md={4} lg={3} className='bg-primary'>Hi</Col>
                <Col xs={12} sm={6} md={4} lg={3} className="bg-success">Hi</Col>
                <Col xs={12} sm={6} md={4} lg={3} className="bg-danger">Hi</Col>
                <Col xs={12} sm={6} md={12} lg={3} className="bg-info">Hi</Col> */}
                <Col xs={12} md={6}>
                    <h2>Sample Head</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis quos recusandae nihil, quaerat sunt qui vitae quia expedita beatae eum consectetur asperiores veritatis quibusdam esse et aspernatur illum dicta.</p>
                </Col>
                <Col xs={12} md={6}>
                    {/* <img src="./logo.png" alt="logo" clas/> */}
                    <Image src='./logo.png' fluid/>
                </Col>
            </Row>

            {/* <Stack direction='horizontal' gap={5} >
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </Stack> */}
        </Container>
    )
}

export default Grid
