import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";
import { APP_CONSTANTS } from "./utils/constants";

const App = () => 
    <>
      <div className="h-screen w-full flex justify-center items-center font-josefin overflow-hidden">
        <div className="w-full">
          <div className="block sm:hidden mb-10 bg-yellow-200 py-3 text-center text-xl text-gray-700">
			<p>{APP_CONSTANTS.USE_A_PC_TEXT}</p>
			<p>{APP_CONSTANTS.OPTIMIZED_MOBILE_VIEW}</p>
            <a
              href="https://dev-madhurendra.vercel.app"
              className="block p-2 underline"
            >
              {APP_CONSTANTS.VISIT_THIS_INSTEAD}
            </a>
          </div>
          <TerminalBox />
        </div>
      </div>
      <BackgroundImage />
    </>

export default App
