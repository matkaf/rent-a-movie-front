export interface IItem {
  id: number,
  title: string,
  genre: string,
  resume: string,
  release: number,
}

export interface ItemType extends IItem {
  type: string,
}

export interface IMovieRental {
  movieId: number,
  userId: number
}

export interface IGameRental {
  gameId: number,
  userId: number
}
