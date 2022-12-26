import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetcher, tmdbAPI } from "../../config";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full bg-white rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        className="object-cover w-full h-full rounded-lg"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-5xl font-bold">{title}</h2>
        <div className="flex items-center justify-start mb-5 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-lg">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-lg">
            Drama
          </span>
        </div>
        <div className="flex flex-row gap-x-5">
          <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
