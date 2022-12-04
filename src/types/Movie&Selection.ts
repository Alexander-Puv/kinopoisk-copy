export interface IMovie {
  id: number,
  title: string,
  img: string,
  link: string,
  keywords: string,
}

export interface ISelection {
  title: string,
  movies: IMovie[]
}