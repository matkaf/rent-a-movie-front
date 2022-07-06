import { IGameRental, IItem, IMovieRental } from "../interfaces"
import api from "./api"

export const requestMovies = async () => {
  const { data } = await api.get('/movies')

  return data
}

export const requestGames = async () => {
  const { data } = await api.get('/games')

  return data
}

export const saveMovieRental = async (movies: IMovieRental[]) => {
  const { data } = await api.post('/movies', { movies })

  return data
}

export const saveGameRental = async (games: IGameRental[]) => {
  const { data } = await api.post('/games', { games })

  return data
}
