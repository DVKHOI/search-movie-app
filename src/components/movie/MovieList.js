import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCartSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  const isLoading = !data && !error;
  return (
    <div className="movie-list">
      {isLoading && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCartSkeleton></MovieCartSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCartSkeleton></MovieCartSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCartSkeleton></MovieCartSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCartSkeleton></MovieCartSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCartSkeleton></MovieCartSkeleton>
          </SwiperSlide>
        </Swiper>
      )}

      {!isLoading && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard props={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};
MovieList.propsTypes = {
  type: PropTypes.string.isRequired,
};
function FallbackComponent() {
  return <div className="text-red-500 bg-red-100">Error components</div>;
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
