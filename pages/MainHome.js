// import styles from "./Home.module.css";
import Image from "next/image";
import { Button, Container, Card, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
import DatePicking from "./DatePicking";
import "swiper/css/navigation";
import styles from "./mainHome.module.css";
import TextField from "@mui/material/TextField";

SwiperCore.use([Pagination, Navigation]);

const MainHome = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "90vh",
                    backgroundImage: "url()",
                }}
            >
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide
                        style={{
                            width: "100%",
                            height: "90vh",
                            display: "block",
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage:
                                "url(https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-rev-bg-img-1.jpg)",
                        }}
                    >
                        <h1
                            style={{
                                marginTop: "20%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Josefin Sans",
                                fontSize: "70px",
                                fontWeight: "500",
                            }}
                        >
                            Exceptional Attention to Every Little Detail
                        </h1>
                        <Button
                            variant="outline-danger"
                            style={{
                                marginLeft: "50%",
                                marginTop: "50px",
                                fontFamily: "Raleway', sans-serif",
                                letterSpacing: "3px",
                            }}
                        >
                            VIEW MORE
                        </Button>{" "}
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: "100%",
                            height: "90vh",
                            display: "block",
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage:
                                "url(https://alloggio.qodeinteractive.com/wp-content/uploads/2020/05/h1-rev-bg-img-6-1.jpg)",
                        }}
                    >
                        <h1
                            style={{
                                marginTop: "20%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Josefin Sans",
                                fontSize: "70px",
                                fontWeight: "500",
                                color: "white",
                            }}
                        >
                            Design to Make Your Stay Magnificent
                        </h1>
                        <Button
                            variant="outline-danger"
                            style={{
                                marginLeft: "50%",
                                marginTop: "50px",
                                fontFamily: "Raleway', sans-serif",
                                letterSpacing: "3px",
                            }}
                        >
                            VIEW MORE
                        </Button>{" "}
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: "100%",
                            height: "100vh",
                            display: "block",
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundImage:
                                "url(https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-rev-bg-img-3.jpg)",
                        }}
                    >
                        <h1
                            style={{
                                marginTop: "17%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Josefin Sans",
                                fontSize: "110px",
                                fontWeight: "100",
                                color: "white",
                            }}
                        >
                            B&B
                        </h1>
                        <p
                            style={{
                                marginLeft: "38%",
                                color: "white",
                                fontSize: "60px",
                                fontFamily: "Josefin Sans",
                            }}
                        >
                            Be More Than a Guest.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: "100%",
                            height: "90vh",
                            display: "block",
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage:
                                "url(https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-rev-bg-img-4-6.jpg)",
                        }}
                    >
                        <h1
                            style={{
                                marginTop: "17%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Josefin Sans",
                                fontSize: "90px",
                                fontWeight: "100",
                                color: "black",
                            }}
                        >
                            Beautiful Apartment & Cozy Atmosphere
                        </h1>
                        <Button
                            variant="outline-danger"
                            style={{
                                marginLeft: "50%",
                                marginTop: "50px",
                                fontFamily: "Raleway', sans-serif",
                                letterSpacing: "3px",
                            }}
                        >
                            VIEW MORE
                        </Button>{" "}
                    </SwiperSlide>
                </Swiper>
            </div>
            <DatePicking></DatePicking>
            <Container>
                <h1
                    className="text-center"
                    style={{
                        marginTop: "100px",
                        fontFamily: "Cormorant Garamond",
                        fontSize: "3.5rem",
                    }}
                >
                    {" "}
                    Urban Spirit of Helsinki
                </h1>
                <p className="text-center lead mt-5 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi officia eaque perferendis quis dignissimos. Beatae
                    numquam accusantium iusto nam inventore, a, porro optio nemo
                    eligendi quia culpa laboriosam reprehenderit dolorum?
                </p>
            </Container>
            <Container className="mb-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-room-img-04.jpg"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: "30px",
                                        fontFamily: "Montserrat",
                                    }}
                                    // className={styles.cardTitle}
                                >
                                    Modern Home
                                </Card.Title>
                                <Card.Text>
                                    <p
                                        className="lead"
                                        style={{ color: "#b56953" }}
                                    >
                                        from $75 / 75m2 / 1-3 person
                                    </p>
                                </Card.Text>
                                <Card.Text className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis maiores voluptate
                                    vero est optio ipsa autem praesentium
                                    sapiente quisquam a.
                                </Card.Text>
                                <Button variant="primary">BOOK NOW</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-room-img-02.jpg"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: "30px",
                                        fontFamily: "Montserrat",
                                    }}
                                >
                                    Bright Suite
                                </Card.Title>
                                <Card.Text>
                                    <p
                                        className="lead"
                                        style={{ color: "#b56953" }}
                                    >
                                        from $105 / 50m2 / 2-4 person
                                    </p>
                                </Card.Text>
                                <Card.Text className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis maiores voluptate
                                    vero est optio ipsa autem praesentium
                                    sapiente quisquam a.
                                </Card.Text>
                                <Button variant="primary">BOOK NOW</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-room-img-03.jpg"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: "30px",
                                        fontFamily: "Montserrat",
                                    }}
                                >
                                    Cozy Place
                                </Card.Title>
                                <Card.Text>
                                    <p
                                        style={{ color: "#b56953" }}
                                        className="lead"
                                    >
                                        from $45 / 43m2 / 1-3 person
                                    </p>
                                </Card.Text>
                                <Card.Text className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis maiores voluptate
                                    vero est optio ipsa autem praesentium
                                    sapiente quisquam a.
                                </Card.Text>
                                <Button variant="primary">BOOK NOW</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={{ width: "22rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-room-img-01.jpg"
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: "30px",
                                        fontFamily: "Montserrat",
                                    }}
                                >
                                    Maria's Home
                                </Card.Title>
                                <Card.Text>
                                    <p
                                        style={{ color: "#b56953" }}
                                        className="lead"
                                    >
                                        from $50 / 100m2 / 2-6 person
                                    </p>
                                </Card.Text>
                                <Card.Text className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis maiores voluptate
                                    vero est optio ipsa autem praesentium
                                    sapiente quisquam a.
                                </Card.Text>
                                <Button variant="primary">BOOK NOW</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <Container
                    style={{
                        backgroundImage:
                            "url(https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-img-01.jpg)",
                        width: "100%",
                        height: "60vh",
                        marginTop: "150px",
                    }}
                >
                    <div
                        style={{
                            width: "700px",
                            backgroundColor: "#faf9f5",
                            padding: "80px",
                        }}
                        className={styles.home_rules}
                    >
                        <h1
                            style={{
                                fontSize: "30px",
                                fontFamily: "Montserrat",
                            }}
                        >
                            House Rules
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim, aperiam. Assumenda, provident maiores
                            odio tenetur minus unde voluptates, impedit
                            repudiandae debitis doloremque aperiam at
                            reprehenderit eveniet quibusdam velit ipsa! Est?
                        </p>
                        <Button variant="outline-danger mt-4">Read More</Button>{" "}
                    </div>
                </Container>
            </Container>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mb-4">Malmö’s B’n’B Amenities</h1>
                <p className="text-center mb-5 lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi quos aliquid aliquam error doloremque suscipit
                    molestiae voluptatem, sint ut, quasi voluptatibus iusto modi
                    laboriosam facere cumque quis accusamus. Animi,
                    perspiciatis.
                </p>
                <div className={styles.all_icons}>
                    <div className={styles.icons}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z" />
                        </svg>
                        <p className="lead mt-2">First WIFI</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 2.427c-1.303 0-2.41-1.043-2.41-2.427h-15.149c0 1.382-1.137 2.427-2.441 2.427v1.573h20v-1.573zm-19 3.573l3.062 18h11.938l3-18h-18zm15.639 1.996l-.667 4.004h-11.881l-.668-4.004h13.216zm-10.882 14.004l-.667-4h9.882l-.667 4h-8.548z" />
                        </svg>
                        <p className="lead mt-2">Best Snacks</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16 22h5v2h-5v-2zm-13 0h5v2h-5v-2zm18-20v17h-18v-17h18zm2-2h-22v21h22v-21zm-9.092 8.312l.279.279-.473.474-.135-.145-.146-.135.475-.473zm-1.077-.634l.364.153-.262.617-.211-.097-.152-.057.261-.616zm-1.278-.178h.395v.67l-.197-.008-.197.008v-.67zm-.864.17l.256.619-.168.062-.197.089-.256-.619.365-.151zm.291 2.774l.425-.424-.595-.595c.265-.188.589-.3.939-.3.898 0 1.625.728 1.625 1.625s-.727 1.625-1.625 1.625-1.625-.727-1.625-1.625c0-.331.099-.637.268-.894l.588.588zm-1.388-2.132l.474.474-.146.134-.135.144-.473-.473.28-.279zm-.922 3.497l.62-.256.062.169.089.195-.619.257-.152-.365zm.866 1.432l-.279-.279.528-.529.135.145.146.135-.53.528zm1.133.581l-.364-.154.262-.617.211.097.152.057-.261.617zm1.278.178h-.395v-.67l.197.008.197-.008v.67zm.864-.17l-.256-.62.168-.062.197-.089.256.619-.365.152zm1.097-.644l-.474-.474.146-.135.135-.145.473.474-.28.28zm.76-.993l-.617-.261.097-.21.058-.154.617.261-.155.364zm.332-1.247h-.67l.008-.198-.008-.197h.67v.395zm-.79-1.001l-.062-.169-.089-.196.619-.255.152.365-.62.255zm-2.46-4.445c-2.645 0-4.824 1.957-5.188 4.5h-1.562l2 2.958 2-2.958h-1.424c.355-1.986 2.088-3.5 4.174-3.5 2.344 0 4.25 1.906 4.25 4.25s-1.906 4.25-4.25 4.25c-1.508 0-2.831-.792-3.586-1.979l-.6.888c.958 1.268 2.475 2.091 4.186 2.091 2.898 0 5.25-2.351 5.25-5.25s-2.352-5.25-5.25-5.25z" />
                        </svg>
                        <p className="lead mt-2">Heavy Security</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903zm15.229-7.679c.18.721.05 1.446-.304 2.035l.97.584c.504-.838.688-1.869.433-2.892-.255-1.024-.9-1.848-1.739-2.351l-.582.97c.589.355 1.043.934 1.222 1.654zm.396-4.346l-.597.995c1.023.616 1.812 1.623 2.125 2.874.311 1.251.085 2.51-.53 3.534l.994.598c.536-.892.835-1.926.835-3-.001-1.98-1.01-3.909-2.827-5.001zm-16.73 2.692l-.582-.97c-.839.504-1.484 1.327-1.739 2.351-.255 1.023-.071 2.053.433 2.892l.97-.584c-.354-.588-.484-1.314-.304-2.035.179-.72.633-1.299 1.222-1.654zm-4.444 2.308c0 1.074.299 2.108.835 3l.994-.598c-.615-1.024-.841-2.283-.53-3.534.312-1.251 1.101-2.258 2.124-2.873l-.597-.995c-1.817 1.092-2.826 3.021-2.826 5z" />
                        </svg>
                        <p className="lead mt-2">Alarming</p>
                    </div>
                </div>
            </Container>
            <Container>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/centered-slider-img-3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1
                                className="text-center"
                                style={{ color: "#f06b66", fontSize: "5.5rem" }}
                            >
                                DRAWING ROOM
                            </h1>
                            <p className="lead text-center">
                                A drawing room is a room in a castle where
                                visitors may be entertained, and a historical
                                term for what would now usually be called a
                                living room, although today's palaces, country
                                houses, and manor houses in Japan would be said
                                to have drawing rooms.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/05/centered-slider-img-04.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3
                                className="text-center"
                                style={{ color: "#f06b66", fontSize: "5.5rem" }}
                            >
                                DINNING ROOM
                            </h3>
                            <p className="lead text-center">
                                A dining room is a room for consuming food. In
                                modern times it is usually adjacent to the
                                kitchen for convenience in serving, although in
                                medieval times it was often on an entirely
                                different floor level.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/05/centered-slider-img-05.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3
                                className="text-center"
                                style={{ color: "#f06b66", fontSize: "5.5rem" }}
                            >
                                BED ROOM
                            </h3>
                            <p className="lead text-center">
                                A bedroom is a room situated within a
                                residential or accommodation unit characterised
                                by its usage for sleeping. A typical western
                                bedroom contains as bedroom furniture one or two
                                beds, a clothes closet, and bedside table and
                                dressing table, both of which usually contain
                                drawers.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/centered-slider-img-1.jpg"
                            alt="Third slide"
                            style={{ filter: "grayscale(100%)" }}
                        />

                        <Carousel.Caption>
                            <h3
                                className="text-center"
                                style={{ color: "#f06b66", fontSize: "5.5rem" }}
                            >
                                LIVING ROOM
                            </h3>
                            <p className="lead text-center">
                                In Western architecture, a living room, also
                                called a lounge room, lounge, sitting room, or
                                drawing room, is a room for relaxing and
                                socializing in a residential house or apartment.
                                Such a room is sometimes called a front room
                                when it is near the main entrance at the front
                                of the house.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container>
                <div>
                    <h1 className="text-center mt-5 mb-5">
                        Edge B’n’B Offers and Events
                    </h1>
                    <p className="lead text-center mt-5 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore ea itaque placeat veritatis velit asperiores hic
                        repellat culpa natus consequatur? Numquam architecto
                        repudiandae vero rem necessitatibus suscipit ab dolore
                        provident maxime cupiditate veritatis eos unde eius
                        enim, dignissimos officiis non!
                    </p>
                </div>
                <div className={styles.video_section}>
                    {/* <img src="https://images.pexels.com/photos/756076/pexels-photo-756076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img> */}
                    {/* <ReactPlayer url="https://vimeo.com/9176224" /> */}
                    <a href="https://vimeo.com/9176224">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                        </svg>
                    </a>
                </div>
            </Container>
            <Container className="mt-5 mb-5">
                <div className={styles.reviews}>
                    <div className={styles.person}>
                        <img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-img-03.png"></img>
                        <h1>
                            <q>Best time</q>
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minima porro harum tempore dignissimos dolore
                            sit ex voluptatum aliquam atque laboriosam suscipit
                            aperiam impedit, iste tenetur officia commodi
                            praesentium laborum consectetur.
                        </p>
                        <p style={{ color: "#f06b66", fontSize: "1.3rem" }}>
                            Andreas Mjøs
                        </p>
                    </div>
                    <div className={styles.person}>
                        <img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-img-04.png"></img>
                        <h1>
                            <q>A great find</q>
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minima porro harum tempore dignissimos dolore
                            sit ex voluptatum aliquam atque laboriosam suscipit
                            aperiam impedit, iste tenetur officia commodi
                            praesentium laborum consectetur.
                        </p>
                        <p style={{ color: "#f06b66", fontSize: "1.3rem" }}>
                            Mary Cruz
                        </p>
                    </div>
                    <div className={styles.person}>
                        <img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/h1-img-05.png"></img>
                        <h1>
                            <q>Nice position</q>
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minima porro harum tempore dignissimos dolore
                            sit ex voluptatum aliquam atque laboriosam suscipit
                            aperiam impedit, iste tenetur officia commodi
                            praesentium laborum consectetur.
                        </p>
                        <p style={{ color: "#f06b66", fontSize: "1.3rem" }}>
                            Mia Skurdal
                        </p>
                    </div>
                </div>
            </Container>
            <Container className={styles.events}>
                <div className={styles.event_cards}>
                    <div className={styles.cards}>
                        <img
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/blog-list-img-1.jpg"
                            style={{ width: "100%", height: "" }}
                        ></img>
                        <p
                            style={{
                                color: "#f06b66",
                                fontSize: "1.3rem",
                                marginTop: "10px",
                            }}
                        >
                            March 19, 2020
                        </p>
                        <h1 style={{ marginBottom: "30px" }}>
                            A Night In Norway
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe quis cum fugit tempore aliquid
                            repudiandae quisquam, dicta repellendus dignissimos!
                            Et accusantium sunt pariatur, animi blanditiis
                            officiis consequuntur perferendis harum eum?
                        </p>
                        <Button variant="outline-danger">Read More</Button>{" "}
                    </div>
                    <div className={styles.cards}>
                        <img
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/blog-list-img-2.jpg"
                            style={{ width: "100%", height: "" }}
                        ></img>
                        <p
                            style={{
                                color: "#f06b66",
                                fontSize: "1.3rem",
                                marginTop: "10px",
                            }}
                        >
                            March 19, 2020
                        </p>
                        <h1 style={{ marginBottom: "30px" }}>
                            Coffee In Malmo
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe quis cum fugit tempore aliquid
                            repudiandae quisquam, dicta repellendus dignissimos!
                            Et accusantium sunt pariatur, animi blanditiis
                            officiis consequuntur perferendis harum eum?
                        </p>
                        <Button variant="outline-danger">Read More</Button>{" "}
                    </div>
                    <div className={styles.cards}>
                        <img
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/blog-list-img-3.jpg"
                            style={{ width: "100%", height: "" }}
                        ></img>
                        <p
                            style={{
                                color: "#f06b66",
                                fontSize: "1.3rem",
                                marginTop: "10px",
                            }}
                        >
                            March 19, 2020
                        </p>
                        <h1 style={{ marginBottom: "30px" }}>
                            Campaign In Italy
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe quis cum fugit tempore aliquid
                            repudiandae quisquam, dicta repellendus dignissimos!
                            Et accusantium sunt pariatur, animi blanditiis
                            officiis consequuntur perferendis harum eum?
                        </p>
                        <Button variant="outline-danger">Read More</Button>{" "}
                    </div>
                </div>
            </Container>
            <Container fluid className={styles.newsletter_main}>
                <Container className={styles.newsLetterInside}>
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z" />
                    </svg>
                    <h1 className="ms-5 me-5">Join our weekly Newsletter</h1>
                    <TextField
                        id="standard-basic"
                        label="Email Address"
                        variant="standard"
                        className="lead"
                    />
                    <Button variant="outline-danger" className="lead ms-5">
                        Sign Me Up
                    </Button>{" "}
                </Container>
            </Container>
            <Container fluid>
                <div className={styles.footer_main}>
                    <div className={styles.footer_second}>
                        <h1 className="text-center mb-4">About</h1>
                        <p className="lead text-center">
                            Welcome to Alloggio, where comfort is everything.
                            Beautiful room presentations, straightforward
                            booking & reservation options, & a whole lot more
                            awaits here.
                        </p>
                        <img
                            src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/04/footer-clients.png"
                            className="mt-3"
                        ></img>
                    </div>
                    <div className={styles.footer_second}>
                        <h1 className="text-center mb-4">Contact</h1>
                        <p className="text-center mb-4 lead">
                            A: Via Venti Settembre, Roma
                        </p>
                        <p className="text-center mb-4 lead">
                            P: +31 555 777 83
                        </p>
                        <p className="text-center mb-4 lead">
                            App: Viber, WhatsApp
                        </p>
                        <p className="text-center mb-4 lead">
                            E: info@allogio.com
                        </p>
                        <Button
                            variant="outline-danger"
                            className={styles.footer_btn}
                        >
                            Show On Map
                        </Button>{" "}
                    </div>
                    <div className={styles.footer_second}>
                        <h1 className="text-center mb-4">Payment</h1>
                        <p className="lead text-center">
                            Pay any way you choose, we support all payment
                            options.
                        </p>
                        <div className={styles.payment_card}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                className="me-3"
                            >
                                <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v11zm-6.167-6.246c0 .179-.022.361-.056.542-.282 1.473-1.249 1.982-2.483 1.982h-.191c-.151 0-.279.111-.303.263l-.268 1.697c-.023.151-.151.262-.302.262h-.912c-.13 0-.229-.116-.209-.244l.462-2.96.021-.019h.718c1.745 0 2.836-.873 3.158-2.523.27.272.365.626.365 1zm-4.738 1.417c.039-.275.153-.392.462-.393l.753-.001c1.525 0 2.399-.697 2.674-2.13.267-1.378-.701-2.147-2.01-2.147h-2.448c-.172 0-.319.127-.346.3-.768 4.945-.99 6.202-1.013 6.586-.007.121.09.224.212.224h1.33l.386-2.439z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                className="me-3"
                            >
                                <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h20c1.104 0 2-.896 2-2v-12zm-13.553 3.63h1.295l-.81 4.753h-1.295l.81-4.753zm3.907 1.908c-.453-.22-.73-.367-.727-.589 0-.198.235-.409.742-.409.424-.007.73.086.97.182l.116.055.176-1.03c-.257-.096-.659-.2-1.161-.2-1.28 0-2.182.645-2.189 1.568-.007.683.644 1.064 1.135 1.291.504.233.674.381.671.59-.003.318-.403.464-.775.464-.518 0-.794-.072-1.219-.249l-.167-.076-.182 1.064c.303.133.862.248 1.443.254 1.362 0 2.246-.637 2.256-1.624.003-.541-.342-.952-1.089-1.291zm5.646 2.846h-1.202l-.158-.712-1.659-.002-.273.714h-1.36l1.924-4.355c.136-.309.368-.394.678-.394h1.001l1.049 4.749zm-1.571-1.686l-.3-1.372-.088-.41-.172.454-.516 1.328h1.076zm-9.879-3.065l-1.268 3.241-.135-.659-.454-2.184c-.079-.3-.306-.39-.588-.401h-2.089l-.016.099c.508.123.962.3 1.361.521l1.152 4.128 1.371-.002 2.039-4.743h-1.373z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                className="me-3"
                            >
                                <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h20c1.104 0 2-.896 2-2v-12zm-6.836 5.188c0 1.761-1.427 3.188-3.188 3.188s-3.188-1.427-3.188-3.188 1.428-3.188 3.189-3.188 3.187 1.427 3.187 3.188zm-6.73 0c0-1.087.493-2.061 1.266-2.711-.487-.302-1.061-.477-1.677-.477-1.761 0-3.188 1.427-3.188 3.188s1.427 3.188 3.188 3.188c.615 0 1.19-.175 1.677-.477-.773-.65-1.266-1.624-1.266-2.711zm-1.722 4.791v-.531c0-.2-.127-.335-.333-.336-.108-.002-.22.032-.297.151-.058-.094-.151-.151-.28-.151-.09 0-.179.027-.248.126v-.104h-.184v.846h.186v-.469c0-.147.081-.225.207-.225.122 0 .184.08.184.223v.471h.186v-.469c0-.147.085-.225.207-.225.126 0 .186.08.186.223v.471h.186zm2.752-.847h-.301v-.257h-.186v.257h-.172v.168h.172v.386c0 .197.076.313.294.313.08 0 .172-.025.23-.066l-.053-.158-.163.048c-.092 0-.122-.057-.122-.142v-.382h.301v-.167zm1.57-.021c-.106 0-.175.05-.223.124v-.103h-.182v.846h.184v-.475c0-.14.06-.218.181-.218l.115.021.057-.174-.132-.021zm-2.374.089c-.089-.058-.211-.089-.345-.089-.214 0-.352.103-.352.271 0 .138.103.223.292.25l.087.012c.101.014.149.041.149.089 0 .066-.067.103-.193.103-.127 0-.22-.041-.282-.089l-.088.143c.101.074.228.11.367.11.244 0 .386-.115.386-.276 0-.149-.112-.227-.296-.253l-.087-.012c-.08-.011-.143-.027-.143-.083 0-.062.06-.099.161-.099.108 0 .212.041.264.073l.08-.15zm4.933-.089c-.106 0-.175.05-.223.124v-.103h-.182v.846h.184v-.475c0-.14.06-.218.181-.218l.115.021.057-.174-.132-.021zm-2.373.445c0 .257.179.444.452.444.127 0 .212-.028.305-.101l-.089-.149c-.069.05-.142.076-.221.076-.147-.002-.255-.108-.255-.271 0-.163.108-.269.255-.271.08 0 .152.027.221.076l.089-.149c-.092-.073-.177-.101-.305-.101-.273.001-.452.189-.452.446zm1.725 0v-.423h-.184v.103c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444 0 .259.186.444.423.444.12 0 .209-.048.267-.124v.103h.184v-.423zm-.685 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.16-.001-.257-.123-.257-.271zm-2.222-.445c-.248 0-.421.181-.421.444 0 .269.181.444.434.444.127 0 .244-.032.347-.119l-.09-.136c-.071.057-.161.089-.246.089-.119 0-.227-.055-.253-.207h.629l.004-.071c-.004-.263-.167-.444-.404-.444zm-.004.165c.119 0 .195.074.214.205h-.439c.02-.122.094-.205.225-.205zm4.62.28v-.763h-.184v.443c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444 0 .259.186.444.423.444.12 0 .209-.048.267-.124v.103h.184v-.423zm-.685 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.16-.001-.257-.123-.257-.271zm-6.219 0v-.423h-.185v.103c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444s.186.444.423.444c.12 0 .209-.048.267-.124v.103h.185v-.423zm-.686 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.159-.001-.257-.123-.257-.271z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h20c1.104 0 2-.896 2-2v-12zm-4 3.938h-2.502l-.585.63-.546-.63h-5.383l-.463 1.064-.474-1.064h-4.241l-1.806 4.124h2.162l.267-.658h.613l.267.658h8.984l.602-.641.563.641h2.542l-1.811-2.051 1.811-2.073zm-12.11.467v.018l-.009-.018h.009zm4.665 3.077h-.697l-.006-2.318-1.02 2.318h-.624l-1.025-2.318v2.318h-1.438l-.273-.663h-1.471l-.273.663h-.769l1.265-2.959h1.053l1.198 2.798v-2.798h1.154l.925 2.006.853-2.006h1.148v2.959zm6.119 0h-.908l-.869-.981-.903.981h-2.798v-2.959h2.842l.869.97.897-.97h.869l-1.321 1.488 1.322 1.471zm-3.004-2.346l.774.864-.808.869h-1.739v-.591h1.549v-.602h-1.549v-.541h1.773zm-8.934-.111l.485 1.181h-.97l.485-1.181z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        {" "}
                        <h1 className="text-center mb-4">Get Social</h1>
                        <p className="lead text-center">
                            Follow us on social media and keep in touch with
                            Alloggio.
                        </p>
                        <div className={styles.social_icons}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="ms-3"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="ms-3"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="ms-3"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="ms-3"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default MainHome;
