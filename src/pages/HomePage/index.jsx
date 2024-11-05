import React, { useEffect, useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import HomePageApi from '../../api/HomePage';
export default function HomePage() {
    const [listGame, setListGame] = useState([]);
    useEffect(() => {
        (
            async () => {
                try {

                    const res = await HomePageApi.getAll();
                    setListGame(res.data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);
    return (
        <>
            <section>
                <div className="banner ">

                    <Swiper
                        modules={[Autoplay]}

                        spaceBetween={50}
                        slidesPerView={1}



                    >
                        <SwiperSlide> <div className="swiper-slide">
                            <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/173789/Originals/Tro-choi-mien-phi-khong-tai-ve-may-0.jpg" />
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="swiper-slide"><img src="https://baobariavungtau.com.vn/dataimages/202301/original/images1778766_11M_1.jpeg" /></div></SwiperSlide>
                        <SwiperSlide>  <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2024/01/12/ban-hop-voi-nhan-vat-nao-trong-mario-10.jpg" /></div></SwiperSlide>
                        <SwiperSlide>     <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2022/02/21/bieu-ngu-minecraft-1.jpg" /></div></SwiperSlide>

                    </Swiper>
                    <div className="play__now">
                        <p className="play__now-link">PLAY NOW</p>
                    </div>
                    <div className="collection" style={{ marginTop: "-24px" }}>
                        <div className="collection__slideshow">

                            <Swiper style={{ marginLeft: '130px' }}
                                // ID cho Swiper


                                spaceBetween={30} // Khoảng cách giữa các slide
                                slidesPerView={7} // Số lượng slide hiển thị

                            >
                                {/* Các slide */}
                                <SwiperSlide> <div className="item " style={{ height: "185px" }}>
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="item ">
                                    <div className="item__img">
                                        <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Screenshot_2024-09-23_111111_jyl3hq.png" alt="" /></div>
                                    <div className="item__detail row">
                                        <div className="item__text col-6">
                                            <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>v</p>
                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                        </div>
                                        <div className="item__icon col-6">
                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                {/* Thêm nhiều slide nếu cần */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-xl">
                <div className="section box-sidebar">
                    <div className=" row gx-5">
                        <div className="main col-7">
                            {/* top  games */}
                            <div className="bestgame ">
                                <p className="bestgame__title">Top games</p>
                                <div className="box-game">
                                    <div className="row">
                                        {listGame.map((item, index) => {
                                            return (
                                                <div className="col-4" key={index}>
                                                    <div className="item ">
                                                        <div className="item__img">
                                                            <img src={item.image} alt="" /></div>
                                                        <div className="item__detail row">
                                                            <div className="item__text col-6">
                                                                <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>{item.game_name}</p>
                                                                <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.description}</p>
                                                            </div>
                                                            <div className="item__icon col-6">
                                                                <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                                <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <a href className="box-link">See more</a>
                                </div>
                            </div>
                            {/* Recently player */}
                            <div className="bestgame ">
                                <p className="bestgame__title mt-4">Recently player</p>
                                <div className="box-game">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item ">
                                                <div className="item__img">
                                                    <img src="../Image/15.png" alt="" /></div>
                                                <div className="item__detail row">
                                                    <div className="item__text col-6">
                                                        <p className="fw-bold fs-6" style={{ marginBottom: 0 }}>UEH maze</p>
                                                        <p className="fw-lighter" style={{ marginBottom: 0 }}>UEH review</p>
                                                    </div>
                                                    <div className="item__icon col-6">
                                                        <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                        <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href className="box-link">See more</a>
                                </div>
                            </div>
                            <div className="jump row">
                                <p className="jump-title col-3 ">Jump to: </p>
                                <ul className="jump-list col-9 ">
                                    <li className="jump-item"><a href className="jump-link">Top games</a></li>
                                    <li className="jump-item"><a href className="jump-link">Recently player</a></li>
                                    <li className="jump-item"><a href className="jump-link">UEH Review</a></li>
                                    <li className="jump-item"><a href className="jump-link">UEH Green</a></li>
                                    <li className="jump-item"><a href className="jump-link">EduGames</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar  col-5">
                            <div className="highscore">
                                <p className="highscore__title">Top Gamer
                                </p><div className="gamer">
                                    <ul className="gamer-list">
                                        <li className="gamer-item">
                                            <div className="gamer-infor">
                                                <p className="thumbnail-wrranty m-0 "><img src="../Image/Warranty.png" alt="" />
                                                </p><p className="gamer-username m-0">Thien Heo</p>
                                                <span className="gamer-score">Điểm: <b>0411</b></span>
                                                <a href className="gamer-game">UEH Maze </a>
                                            </div>
                                            <div className="gamer-thumbnail"> <a href className><img src="../Image/8.png" alt="" /></a></div>
                                        </li>
                                        <li className="gamer-item">
                                            <div className="gamer-infor">
                                                <p className="thumbnail-wrranty m-0 "><img src="../Image/Warranty.png" alt="" />
                                                </p><p className="gamer-username m-0">Thien Heo</p>
                                                <span className="gamer-score">Điểm: <b>0411</b></span>
                                                <a href className="gamer-game">UEH Maze </a>
                                            </div>
                                            <div className="gamer-thumbnail"> <a href className><img src="../Image/8.png" alt="" /></a></div>
                                        </li>
                                        <li className="gamer-item">
                                            <div className="gamer-infor">
                                                <p className="thumbnail-wrranty m-0 "><img src="../Image/Warranty.png" alt="" />
                                                </p><p className="gamer-username m-0">Thien Heo</p>
                                                <span className="gamer-score">Điểm: <b>0411</b></span>
                                                <a href className="gamer-game">UEH Maze </a>
                                            </div>
                                            <div className="gamer-thumbnail"> <a href className><img src="../Image/8.png" alt="" /></a></div>
                                        </li>
                                        <li className="gamer-item">
                                            <div className="gamer-infor">
                                                <p className="thumbnail-wrranty m-0 "><img src="../Image/Warranty.png" alt="" />
                                                </p><p className="gamer-username m-0">Thien Heo</p>
                                                <span className="gamer-score">Điểm: <b>0411</b></span>
                                                <a href className="gamer-game">UEH Maze </a>
                                            </div>
                                            <div className="gamer-thumbnail"> <a href className><img src="../Image/8.png" alt="" /></a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}
