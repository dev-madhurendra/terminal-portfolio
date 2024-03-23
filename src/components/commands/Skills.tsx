import React from "react";
import { SKILLS_DATA } from "../../utils/constants";
import ProgressBar from "../ProgressBar";


export const Skills = () =>
    <div>
      {SKILLS_DATA.map(({ Icon, barWidth, percentageValue, text }, index) => {
        return (
          <ProgressBar
            Icon={Icon}
            barWidth={barWidth}
            percentageValue={percentageValue}
            key={index}
            text={text}
          />
        );
      })}
    </div>
