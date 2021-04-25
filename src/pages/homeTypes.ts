export type Episodes = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  description: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
};

export type HomeProps = {
  latestEpisodes: Array<Episodes>;
  allEpisodes: Array<Episodes>;
};
