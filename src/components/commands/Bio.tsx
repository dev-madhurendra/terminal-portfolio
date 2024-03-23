import React from "react";
import { GoVerified } from "react-icons/go";
import { IBio } from "../../interface";
import { BIO_CONSTANTS, BIO_LINKS } from "../../utils/constants";

const Bio = () => (
  <div className="mt-2 mb-2 w-11/12 mx-auto">
    <div className="flex items-center gap-3 mb-3 ">
      <img
        src={BIO_CONSTANTS.IMAGE}
        alt={BIO_CONSTANTS.IMAGE_ALT}
        className="w-40 h-40 rounded-full border-2 border-yellow-200"
      />
      <div>
        <div className="flex items-center gap-1">
          <h1 className="text-2xl">{BIO_CONSTANTS.NAME}</h1>
          <GoVerified className="text-blue-500 text-2xl" />
        </div>
        <p className="text-lg text-gray-400">{BIO_CONSTANTS.DOB_DESCRIPTION}</p>
      </div>
    </div>
    <p>{BIO_CONSTANTS.ABOUT_DESCRIPTION}</p>
    <div className="grid grid-cols-2">
      {BIO_LINKS.map(({ Icon, text, href, title }: IBio, index: number) => {
        return (
          <div className="flex items-center gap-1 mt-3" key={index}>
            <div className="text-lg flex items-center gap-1 text-yellow-200">
              <Icon />
              <h1>{title + "/"}</h1>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex-1 underline text-blue-300 "
            >
              {text}
            </a>
          </div>
        );
      })}
    </div>
  </div>
);

export default Bio;
