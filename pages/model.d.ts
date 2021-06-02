type ICharactor = {
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
}

type IEpisode = {
  air_date: string;
  characters: ICharactor[];
  created: string;
  name: string;
};

type IEpisodesByIds = IEpisode[];
