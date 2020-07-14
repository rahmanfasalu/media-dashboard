import { Logo } from "./channels.type";

export interface Icon {
  icon: string;
}
export interface People {
  name: string;
  role: string;
}

export interface Episodes {
  id: string;
  title: string;
}
export interface Series {
  title: string;
  episodes: Episodes[];
}
export interface Meta {
  year: string;
  genres: string[];
  cast: People[];
  creators: People[];
}
export interface ProgramInfo {
  id: string;
  title: string;
  start: string;
  end: string;
  images: Icon;
  channelId: string;
  channelTitle: string;
  channelImages: Logo;
  meta: Meta;
  series: Series[];
  description: string;
}
