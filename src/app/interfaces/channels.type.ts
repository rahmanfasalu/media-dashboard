// Channel interface
export interface Logo {
  logo: string;
}
export interface Schedule {
  id: string;
  title: string;
  start: string;
  end: string;
}
export interface Channels {
  id: string;
  title: string;
  images: Logo;
  schedules: Schedule[];
}
