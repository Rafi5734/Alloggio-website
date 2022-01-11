import styles from "./carousel.module.css";
import Image from "next/image";
import { Button, Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
import DatePicking from "./DatePicking";
import "swiper/css/navigation";

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
                            height: "90vh",
                            display: "block",
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
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
            <Container>
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
                                <Card.Title>Modern Home</Card.Title>
                                <Card.Text>
                                    <p>from $75 / 75m2 / 1-3 person</p>
                                </Card.Text>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis maiores voluptate
                                    vero est optio ipsa autem praesentium
                                    sapiente quisquam a.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
};

export default MainHome;
