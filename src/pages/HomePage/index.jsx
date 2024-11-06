import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import HomePageApi from '../../api/HomePage';
import ScoreApi from '../../api/Score';
export default function HomePage() {
    const [listGame, setListGame] = useState([]);
    const [listScore, setListScore] = useState([]);
    const [listRecently, setListRecently] = useState([]);
    const [visibleTopGame, setvisibleTopGame] = useState(6); // Số lượng item hiển thị ban đầu
    const [visibleRencently, setvisibleRecently] = useState(6); // Số lượng item hiển thị ban đầu

    const handleSeeMore = (e) => {
        e.preventDefault();
        setvisibleTopGame(prevCount => prevCount + 3); // Tăng số lượng item hiển thị lên 3
    };

    const handleSeeLess = (e) => {
        e.preventDefault();
        setvisibleTopGame(prevCount => Math.max(prevCount - 3, 4)); // Giảm số lượng item hiển thị xuống 3
    };


    const handleSeeMoreRecently = (e) => {
        e.preventDefault();
        setvisibleRecently(prevCount => prevCount + 3); // Tăng số lượng item hiển thị lên 3
    };

    const handleSeeLessRecently = (e) => {
        e.preventDefault();
        setvisibleRecently(prevCount => Math.max(prevCount - 3, 4)); // Giảm số lượng item hiển thị xuống 3
    };

    const [isJumped, setIsJumped] = useState(false);
    const recentlyPlayerRef = useRef(null);
    const topGamePlayerRef = useRef(null);

    const handleJumpTopGame = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        setIsJumped(true); // Đặt state là true để áp dụng CSS

        // Cuộn đến vị trí
        if (topGamePlayerRef.current) {
            const offset = 80; // Chiều cao của header
            const top = topGamePlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const handleJumpToRecentlyPlayer = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        setIsJumped(true); // Đặt state là true để áp dụng CSS

        // Cuộn đến vị trí
        if (recentlyPlayerRef.current) {
            const offset = 80; // Chiều cao của header
            const top = recentlyPlayerRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
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
    useEffect(() => {
        (
            async () => {
                try {
                    const res = await ScoreApi.getAll();
                    setListScore(res.data.data);

                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);

    useEffect(() => {
        (
            async () => {
                try {
                    const res = await HomePageApi.getRencently();
                    setListRecently(res.data.data);

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
                            <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={topGamePlayerRef}>
                                <p className="bestgame__title">Top games</p>
                                <div className="box-game">
                                    <div className="row ">
                                        {listGame.slice(0, visibleTopGame).map((item, index) => (
                                            <div className="col-4 my-3" key={index}>
                                                <div className="item">
                                                    <div className="item__img">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="item__detail row">
                                                        <div className="item__text col-6">
                                                            <p className="fw-bold fs-8" style={{ marginBottom: 0 }}>{item.game_name}</p>
                                                            <p className="fw-lighter" style={{ marginBottom: 0 }}>{item.tag}</p>
                                                        </div>
                                                        <div className="item__icon col-6">
                                                            <span><i className="fa-solid fa-play fa-2xl" style={{ color: '#FFFFFF', marginRight: '8px' }} /></span>
                                                            <span><i className="fa-regular fa-heart fa-2xl" style={{ color: '#ffffff' }} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    {visibleTopGame < listGame.length && (
                                        <a href="" className="box-link" onClick={handleSeeMore}>See more</a>
                                    )}
                                    {visibleTopGame > 6 && (
                                        <a href="" className="box-link" onClick={handleSeeLess}>See less</a>
                                    )}
                                </div>
                            </div>
                            {/* Recently player */}
                            <div className={`bestgame ${isJumped ? 'jumped' : ''}`} ref={recentlyPlayerRef}>
                                <p className="bestgame__title mt-4">Recently player</p>
                                <div className="box-game">
                                    <div className="row">

                                        {listRecently.slice(0, visibleRencently).map((item, index) => (
                                            <div className="col-4 my-3" key={index}  >
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
                                        ))}


                                        {visibleRencently < listRecently.length && (
                                            <a href="" className="box-link" onClick={handleSeeMoreRecently}>See more</a>
                                        )}
                                        {visibleRencently > 6 && (
                                            <a href="" className="box-link" onClick={handleSeeLessRecently}>See less</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="jump row">
                                <p className="jump-title col-3 ">Jump to: </p>
                                <ul className="jump-list col-9 ">
                                    <li className="jump-item"><a href="#" className="jump-link" onClick={handleJumpTopGame}>Top games</a></li>
                                    <li className="jump-item"><a href="#" className="jump-link" onClick={handleJumpToRecentlyPlayer}>Recently player</a></li>
                                    <li className="jump-item"><a href="" className="jump-link">UEH Review</a></li>
                                    <li className="jump-item"><a href="" className="jump-link">UEH Green</a></li>
                                    <li className="jump-item"><a href="" className="jump-link">EduGames</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="sidebar  col-5">
                            <div className="highscore">
                                <p className="highscore__title">Top Gamer
                                </p><div className="gamer">
                                    <ul className="gamer-list">
                                        {listScore.map((item, index) => {
                                            return (
                                                <li className="gamer-item" key={index}>
                                                    <div className="gamer-infor">
                                                        <p className="thumbnail-wrranty m-0 "><img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/Warranty_amqva9.png" alt="" />
                                                        </p><p className="gamer-username m-0">{item.user_info.user_name}</p>
                                                        <span className="gamer-score">Điểm: <b>{item.score}</b></span>
                                                        <a href className="gamer-game">UEH Maze </a>
                                                    </div>
                                                    <div className="gamer-thumbnail"> <a href className><img src={item.game_info.image} alt="" /></a></div>
                                                </li>
                                            )

                                        })}


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}
