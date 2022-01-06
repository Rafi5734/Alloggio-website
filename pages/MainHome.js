import styles from "./carousel.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import Image1 from "./pexels-quark-studio-2506988.jpg";
SwiperCore.use([Pagination]);

const MainHome = () => {
    return (
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
                    slide1
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
                    Slide 2
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
                    Slide 3
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
                    Slide 4
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainHome;
