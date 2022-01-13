import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./Navbbar.module.css";
import Link from "next/link";
import MainHome from "./MainHome";

export default function Home() {
    return (
        <>
            <div>
                <Head>
                    <title>Maria's Home - Alloggio</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link
                        rel="icon"
                        href="https://c0.klipartz.com/pngpicture/74/613/gratis-png-gmail-android-email-npm-material-diseno-letra-m-thumbnail.png"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>

                <Navbar bg="light" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#">
                            <img
                                src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/04/logo.png"
                                className={styles.logo}
                            ></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                {/* Home Navbar */}
                                <NavDropdown
                                    title="Home"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item>
                                        <Link href="/">MAIN HOME</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link href="/bb">B&B HOME</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        HOSTEL HOME
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        SUMMER RESORT
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        VACATION RESORT
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        HOTEL HOME
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        LANDING
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* Rooms Navbar */}
                                <NavDropdown
                                    title="Rooms"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="#action3">
                                        ROOM LIST TYPES
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        ROOM LIST LAYOUTS
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        SINGLE ROOM
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        MY ACCOUNT
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        CART
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        CHECKOUT
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* Pages Navbar */}
                                <NavDropdown
                                    title="Pages"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="#action3">
                                        ABOUT US
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        PROMOTIONS & OFFERS
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        LOCAL ACTIVITIES
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        MENU PAGE
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        FAQ PAGES
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* Gallery Navbar */}
                                <NavDropdown
                                    title="Gallery"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="#action3">
                                        ROOM GALLERY
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        ROOM MASONRY GALLERY
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1">Blog</Nav.Link>
                                <Nav.Link href="#action1">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <MainHome></MainHome>
        </>
    );
}
