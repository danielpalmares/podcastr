import { ReactNode } from 'react';

export type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  url: string;
  duration: number;
};

export type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  play: (episode: Episode) => void;
  playNext: () => void;
  playPrevious: () => void;
  playList: (list: Episode[], index: number) => void;
  clearPlayerState: () => void;
  setPlayingState: (state: boolean) => void;
};

export type PlayerContextProviderProps = {
  children: ReactNode;
};
