"use client";
import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import { getImagePath } from "../../../lib/utils";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: getImagePath("/assets/carousel/google.svg"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/garnier.png"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/slack.png"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/udemy.png"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/google.svg"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/garnier.png"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/slack.png"),
  },
  {
    imgSrc: getImagePath("/assets/carousel/udemy.png"),
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-14">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
