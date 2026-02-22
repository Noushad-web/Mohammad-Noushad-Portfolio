import PreLoader from "../component/PreLoader";
import React, { useRef } from "react";

function Loader() {
  const loaderFadeOut = useRef();
  // console.log(loaderFadeOut.currrent);
  return (
    <div className="loader" ref={loaderFadeOut}>
      <PreLoader />
    </div>
  );
}

export default Loader;
