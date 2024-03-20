import { ReactElement } from 'react';

export interface Library {
  id: number;
  name: string;
  count_videos: number;
  video_size: string;
  update: string;
}

export interface LibraryDetail {
  id: number;
  name: string;
  duration: string;
  video_size: string;
  update: string;
}

export interface settingGrid {
  id: string;
  className: string;
  headerClassName: string;
  redirectPath?: string;
  icon?: ReactElement;
}
