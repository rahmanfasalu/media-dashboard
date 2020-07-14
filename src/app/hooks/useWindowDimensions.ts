import { useState, useEffect } from "react";

import { ScreenWidth } from "src/theme/media";
import { HOUR_SIZE } from "../constants/dashboardConstants";

/*
 *  HOOK: WindowDimension
 *  This will trigger on every resize with new window width, height and with the new hoursize.
 *  The hour size will be calcualted based on the screen size for responsiveness
 */

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let hourSize: number;
  if (width >= ScreenWidth.large) {
    hourSize = HOUR_SIZE.extraLarge;
  } else if (width >= ScreenWidth.pc) {
    hourSize = HOUR_SIZE.lageScreen;
  } else if (width >= ScreenWidth.meduim) {
    hourSize = HOUR_SIZE.mediumScreen;
  } else if (width >= ScreenWidth.small) {
    hourSize = HOUR_SIZE.smallScreen;
  } else {
    hourSize = HOUR_SIZE.extraSmallScreen;
  }
  return {
    width,
    height,
    hourSize,
  };
}
function throttled(delay: number, fn: Function) {
  let lastCall = 0;
  return function (...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      console.log("called");
      setWindowDimensions(getWindowDimensions());
    }
    const tHandler = throttled(400, handleResize);
    window.addEventListener("resize", tHandler);
    return () => window.removeEventListener("resize", tHandler);
  }, []);

  return windowDimensions;
}
