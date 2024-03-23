import React from "react";
import { CONTACT_CONSTANTS } from "../../utils/constants";

const Contact = () => (
  <div className="w-11/12 mx-auto">
    {CONTACT_CONSTANTS.CONTACTS.map(({ text, value, href }, index) => {
      return (
        <div className="flex items-center gap-20  mt-3" key={index}>
          <h1 className="text-yellow-200 w-36">{text}</h1>
          <a href={href} className="flex-1 underline text-blue-300 ">
            {value}
          </a>
        </div>
      );
    })}
  </div>
);

export default Contact
