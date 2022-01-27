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
            </Container>
        </>
    );
};

export default MainHome;
