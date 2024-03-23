import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BackgroundImage() {
	return (
    <div className="absolute top-0 w-full h-screen -z-10">
      <LazyLoadImage
        src="https://i.pinimg.com/564x/c0/eb/74/c0eb7402c13c3c5f2549a210f708b4fd.jpg"
        alt="wallpaper"
        className="h-full w-full object-cover object-center"
        effect="blur"
        wrapperClassName="wrapper w-full h-full p-0 m-0 object-cover object-center bg-black bg-opacity-70"
      />
    </div>
  );
}
