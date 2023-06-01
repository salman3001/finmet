// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { FaUserTie } from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { Autoplay } from "swiper";

const HomeSection9 = () => {
  return (
    <div
      id="testimonial"
      className=" mx-5 md:mx-16 lg:mx-20 xl:mx-24 py-8 md:py-10 lg:py-16 space-y-20"
    >
      <h1 className="text-center text-4xl font-bold">What our client says</h1>
      <div className="relative ">
        <Swiper
          style={{ height: "100%" }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ disableOnInteraction: false }}
        >
          <SwiperSlide>
            <Card
              name="Sachin Chawla"
              comment="I am current customer of Finmet, And I will simply say, THEY OFFER THE BEST SERVICES IN GST AND INCOME TAXES."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Faiz Ahmed"
              comment="I chosen to go with Finmet.in in order to register my Pvt Ltd. company and for the complete compliance package. registration agent assigned to me was very competent and  answered all my questions related to company"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Abhay Tripathi"
              comment=" its been more than a year i am a customer of finamet. I will recommend finmet to anyone who want services related to GST and income tax, they have best services overall."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Imran Bajwa"
              comment="The repsonse from the finmet team is very fast. They always provide the right information related to all ITR queries and even related to future investment."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Tanvir Jaikishen"
              comment="I recently used Finmet to file my GST return in the online method. The team deputed to help me was very professional in their approach.hey took all the necessary details and filed it for me."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Sneha Roy"
              comment="They offer a lot of transparency and professionalism for new beginers and start up businesses. it's my personal opinion."
            />
          </SwiperSlide>
          <Bullets />
        </Swiper>
        <div className="absolute -top-16 left-0 ">
          <ImQuotesLeft color="#e11d48" size={40} />
        </div>
        <div className="absolute -bottom-10 right-0">
          <ImQuotesRight color="#e11d48" size={40} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection9;

const Card = (prop: { name: string; comment: string }) => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border-l px-4 justify-center h-full">
      <div className="flex  items-center gap-6">
        <div className="border-2 border-rose-700 rounded-full p-2">
          <FaUserTie size={35} color="#e11d48" />
        </div>
        <p className="text-lg bold">{prop.name}</p>
      </div>
      <p className="t">{prop.comment}</p>
    </div>
  );
};

const Bullets = () => {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    swiper.on("slideChange", (swip: any) => {
      setActiveSlide(swip.activeIndex);
    });
  }, [swiper]);

  return (
    <div className="flex justify-center items-center gap-8 mt-10 h-4">
      {activeSlide === 0 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full  cursor-pointer "
          onClick={() => {
            swiper.slideTo(0);
          }}
        ></div>
      )}
      {activeSlide === 1 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full cursor-pointer "
          onClick={() => {
            swiper.slideTo(1);
          }}
        ></div>
      )}
      {activeSlide === 2 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full cursor-pointer "
          onClick={() => {
            swiper.slideTo(2);
          }}
        ></div>
      )}
      {activeSlide === 3 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full cursor-pointer "
          onClick={() => {
            swiper.slideTo(3);
          }}
        ></div>
      )}
      {activeSlide === 4 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full cursor-pointer "
          onClick={() => {
            swiper.slideTo(4);
          }}
        ></div>
      )}
      {activeSlide === 5 ? (
        <div className="h-3 w-3 rounded-full bg-rose-700 text-3xl leading-[.4rem]  font-thin scaleIn"></div>
      ) : (
        <div
          className="h-1 w-1 bg-rose-400 rounded-full cursor-pointer "
          onClick={() => {
            swiper.slideTo(5);
          }}
        ></div>
      )}
    </div>
  );
};
