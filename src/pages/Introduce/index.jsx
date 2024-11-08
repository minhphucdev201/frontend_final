import React from 'react'
// import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
export default function Introduce() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
  return (
    <>
      <div>
        <div className="banner-container" style={{ marginTop: '100px' }}>
          <div className="row">
            {/* Content */}
            <div className="col-sm-4" data-aos="fade-up" data-aos-duration={3000} data-aos-easing="linear" data-aos-delay={50} data-aos-offset={200} style={{ marginTop: '100px' }}>
              <h1>Explore our University Web Game!</h1>
              <pre>{"                "}Learn, protect the environment, and discover what makes our campus special {"\n"}{"                "}through fun and interactive challenges!{"\n"}{"                "}</pre>
              <a className="btn btn-warning magic-hover magic-hover__square" href="#" role="button">Play Now</a>
            </div>
            {/* Ảnh game hot đại diện - Bé Green */}
            {/* responsize, canh lề và tạo hiệu ứng aos cho ảnh */}
            <div className="thumbnail col-sm-8" data-aos="zoom-in-up" data-aos-duration={3000}>
              {/* responsize, canh lề và tạo hiệu ứng cho ảnh */}
              <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034103/B%C3%A9_Green5_u6cu7z.png" className="pulse img-fluid float-end" />

            </div>
          </div>
        </div>
        {/* Giới thiệu game hay */}
        <div className='game-hot '>
          <div className='game-hot-top container-lg' style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} >
            <div className='game-hot-title fs-4' >GAME HOT</div>
            <div><button type="button" className="btn btn-outline-warning float-end magic-hover magic-hover__square" style={{ textAlign: 'left', marginRight: '140px' }}>See more</button></div>
          </div>
          <div className=" mt-4" >

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={4}



            >
              <SwiperSlide> <div className="swiper-slide">
                <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/173789/Originals/Tro-choi-mien-phi-khong-tai-ve-may-0.jpg" />
              </div></SwiperSlide>
              <SwiperSlide> <div className="swiper-slide"><img src="https://baobariavungtau.com.vn/dataimages/202301/original/images1778766_11M_1.jpeg" /></div></SwiperSlide>
              <SwiperSlide>  <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2024/01/12/ban-hop-voi-nhan-vat-nao-trong-mario-10.jpg" /></div></SwiperSlide>
              <SwiperSlide>     <div className="swiper-slide"><img src="https://st.gamevui.vn/images/image/2022/02/21/bieu-ngu-minecraft-1.jpg" /></div></SwiperSlide>

            </Swiper>
          </div>

        </div>

        {/* Giới thiệu các danh mục*/}
        {/* Tạo một khối cho phần nền */}
        <div className="background-section" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay={50} data-aos-offset={200}>
          {/* Tiêu đề*/}
          <h1>Explore our University Web Game!</h1>
          <p>Join us in an exciting journey where learning meets fun! <br />Our University Web Game is designed to engage
            students in a variety of interactive challenges that not only educate but also entertain. </p>
          {/* Khối chứa các biểu tượng dịch vụ */}
          <div className="service-icons row">
            {/* Từng mục dịch vụ với biểu tượng và tên */}
            <div className="service col-sm-6 col-md-4">
              <i className="fa-solid fa-chess-rook" /> {/* Biểu tượng top (tương tự 4 biểu tượng dưới)*/}
              <p>Top Games</p> {/* Tên dịch vụ */}
            </div>
            <div className="service col-sm-6 col-md-4">
              <i className="fa-solid fa-hand" />
              <p>UEH Review</p>
            </div>
            <div className="service col-sm-6 col-md-4">
              <i className="fa-brands fa-pagelines" />
              <p>UEH Green</p>
            </div>
            <div className="service col-sm-6 col-md-4">
              <i className="fa-solid fa-chalkboard-user" />
              <p>EduGames</p>
            </div>
            <div className="service col-sm-6 col-md-4">
              <i className="fa-solid fa-person-arrow-up-from-line" />
              <p>Top Gamer</p>
            </div>
          </div>
        </div>
        {/* Giới thiệu thành viên */}
        <div className="author-introduce">
          <div className="row">


            {/* Giới thiệu thành viên - dùng col để chia đều 5 cột */}
            <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration={200} data-aos-easing="linear" data-aos-delay={100} data-aos-anchor-placement="top-center">
              <div className="img-box" >
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034103/Avatar3_k8cwdz.jpg" alt="Anime Girl" className="anime-girl-image" />
                <div className="author-name">Nhu Ngoc</div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration={200} data-aos-easing="linear" data-aos-delay={100} data-aos-anchor-placement="top-center">
              <div className="img-box" >
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034103/Avatar5_okrwo0.jpg" alt="Anime Girl" className="anime-girl-image" />
                <div className="author-name">Thien Huong</div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration={200} data-aos-easing="linear" data-aos-delay={50} data-aos-anchor-placement="top-center">
              <div className="img-box" >
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034102/Avatar2_eiircz.jpg" alt="Anime Girl" className="anime-girl-image" />
                <div className="author-name">My Truc</div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration={200} data-aos-easing="linear" data-aos-delay={100} data-aos-anchor-placement="top-center">
              <div className="img-box" >
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034103/Avatar1_pnkdm4.jpg" alt="Anime Girl" className="anime-girl-image" />
                <div className="author-name">Gia Han</div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2" data-aos="flip-left" data-aos-duration={200} data-aos-easing="linear" data-aos-delay={100} data-aos-anchor-placement="top-center">
              <div className="img-box" >
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1731034103/Avatar4_lr2sec.jpg" alt="Anime Girl" className="anime-girl-image" />
                <div className="author-name">Yen Nhi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
