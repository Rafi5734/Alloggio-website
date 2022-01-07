import styles from "./carousel.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import DatePicking from "./DatePicking";

SwiperCore.use([Pagination]);

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
        </>
    );
};

export default MainHome;
