import { useState, useEffect } from "react";

/*
 *  HOOK: Minute Trigger
 *  This will trigger every minute with current day time in minute.
 *  ie:1 for 00:01 and 1440 for 24:00, minute will reset every day
 */
export default function useCurrentTimeInMinutes() {
  const currenTimeInMinute =
    new Date().getHours() * 60 + new Date().getMinutes();
  const [minute, setMinute] = useState(currenTimeInMinute);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMinute(minute + 1);
      //reset day
      if (minute > 1440) {
        setMinute(0);
      }
    }, 60000);
    return () => clearInterval(intervalId);
  }, [minute]);

  return { minute };
}
