import { useState, useEffect } from "react";
import { HOUR_SIZE } from "../constants/dashboard.constants";
import { ScreenWidth } from "../../theme/media";

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

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
