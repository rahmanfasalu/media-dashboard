import WeekDays from "../interfaces/weekdays.type";

/*
 * Get the time in minute
 *
 * Get the total time in minutes, if no argument provided then it will
 * return the minutes in current day
 */
function _getMinutes(date?: string): number {
  if (date) {
    return new Date(date).getHours() * 60 + new Date(date).getMinutes();
  } else {
    return new Date().getHours() * 60 + new Date().getMinutes();
  }
}

/*
 * Get the current weekdays
 *
 * Get the current weekdays from sunday to saturday
 */
export const getWeekDays = (): WeekDays[] => {
  const weekDays: WeekDays[] = [];
  const curr: Date = new Date();
  const firstday: Date = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  const lastday: Date = new Date(
    curr.setDate(curr.getDate() - curr.getDay() + 6)
  );
  for (
    const day: Date = firstday;
    day <= lastday;
    day.setDate(day.getDate() + 1)
  ) {
    weekDays.push({
      name: day.toString().split(" ")[0],
      date: day.getDate() + "." + day.getMonth(),
    });
  }
  return weekDays;
};

/*
 * Get the scrollbar width
 *
 */
export const getScrollableBarWidth = (hourSize: number): number => {
  return 24 * hourSize;
};

/*
 * Get the minute size
 *
 */
export const getMinuteSize = (hourSize: number): number => {
  return hourSize / 60;
};

/*
 * Get the minute size
 *
 */
export const currentShowScreenPosition = (
  hourSize: number,
  currentScreenWidth: number
): number => {
  const startTimeInMinutes = _getMinutes();

  return getMinuteSize(hourSize) * startTimeInMinutes - currentScreenWidth / 2;
};

/*
 * Calcualte the show start length
 *
 * Converte the tim of the day in mintes and multiply with minute size to
 * get the start length.
 */
export const getShowStartPoint = (
  miunteSize: number,
  start: string
): number => {
  const startTimeInMinutes = _getMinutes(start);
  return miunteSize * startTimeInMinutes;
};

/*
 * Calcualte the show width
 *
 * Calculate the width of the show start and end time,
 * Assuming start time is always less than end time
 */
export const getShowLength = (
  miunteSize: number,
  start: string,
  end: string
): number => {
  const startTimeInMinutes = _getMinutes(start);
  const endTimeInMinutes = _getMinutes(end);
  const diff = endTimeInMinutes - startTimeInMinutes;
  return diff * miunteSize;
};

/*
 * Check the active show
 *
 * If the show is currently running then return true, else return false
 * Assuming start time is always less than end time
 */
export const isActiveShow = (start: string, end: string): boolean => {
  const startTimeInMinutes = _getMinutes(start);
  const endTimeInMinutes = _getMinutes(end);
  const currentTimeInMinute = _getMinutes();
  if (
    startTimeInMinutes <= currentTimeInMinute &&
    currentTimeInMinute <= endTimeInMinutes
  ) {
    return true;
  }
  return false;
};

/*
 * Formated time
 * Get ime in HH:MM formate
 */
export const formatedTime = (date: string): string => {
  var dateObj = new Date(date);
  return dateObj.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
