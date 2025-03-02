import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import RestaurantItem from "./RestaurantSliderItem";

import "swiper/css";

const RestaurantSlider = () => {
  const dummyRestaurantItems = [
    {
      id: 1,
      name: "Italian Delight",
      image: "/images/restaurant.jpg",
      average_rating: 4.5,
      description: "Experience the taste of authentic Italian cuisine.",
    },
    {
      id: 2,
      name: "Sushi World",
      image: "/images/restaurant.jpg",
      average_rating: 4.2,
      description: "Fresh and delightful sushi with extraordinary flavors.",
    },
    {
      id: 3,
      name: "Burger House",
      image: "/images/restaurant.jpg",
      average_rating: 4.0,
      description: "Juicy burgers made from premium ingredients.",
    },
    {
      id: 4,
      name: "Taco Fiesta",
      image: "/images/restaurant.jpg",
      average_rating: 3.8,
      description: "Explore the vibrant flavors of authentic Mexican tacos.",
    },
    {
      id: 5,
      name: "Vegan Paradise",
      image: "/images/restaurant.jpg",
      average_rating: 4.7,
      description: "Delightful vegan dishes that nourish both body and soul.",
    },
    {
      id: 6,
      name: "French Bistro",
      image: "/images/restaurant.jpg",
      average_rating: 4.3,
      description: "Enjoy the elegance of French dining and culinary artistry.",
    },
    {
      id: 7,
      name: "Indian Spice",
      image: "/images/restaurant.jpg",
      average_rating: 4.6,
      description: "A burst of flavors from traditional Indian spices.",
    },
    {
      id: 8,
      name: "Steakhouse Grill",
      image: "/images/restaurant.jpg",
      average_rating: 4.1,
      description: "Premium steaks grilled to perfection.",
    },
    {
      id: 9,
      name: "Mediterranean Magic",
      image: "/images/restaurant.jpg",
      average_rating: 4.4,
      description: "A delightful blend of Mediterranean aromas and flavors.",
    },
    {
      id: 10,
      name: "Dessert Haven",
      image: "/images/restaurant.jpg",
      average_rating: 4.8,
      description: "Indulge in sweet treats and heavenly desserts.",
    },
  ];

  return (
    <div className="flex  flex-col gap-6 mt-12 overflow-hidden w-[calc(100vw-160px)]">
      <h1 className={` text-[1.5rem] uppercase font-bold`}>Restaurants</h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="flex justify-center items-center  w-full xl:min-h-[24rem]"
      >
        {dummyRestaurantItems?.map((item) => (
          <SwiperSlide className="h-full !w-[20rem]" key={item.id}>
            <RestaurantItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RestaurantSlider;
