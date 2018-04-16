import axios from 'axios'

//passar base dos endereços da api
const api = axios.create({
  // baseURL: 'http://localhost:3001/'
  baseURL: 'https://api.myjson.com/bins/mdvrx'
})

export const loadGenres = () => api.get('genres');
export const saveSeries = (newSeries) => api.post('series', newSeries);
export const updateSeries = (series) => api.put('series/'+series.id, series);
export const loadSeriesById = (id) => api.get('series/'+id);
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre);
export const deleteSeries = (id) => api.delete('series/'+id);

const apis = {
  loadGenres: loadGenres,
  saveSeries: saveSeries,
  updateSeries: updateSeries,
  loadSeriesByGenre: loadSeriesByGenre,
  deleteSeries: deleteSeries,
  loadSeriesById: loadSeriesById,
  

  //pode se fazer isso tb
      // loadGenres,
      // saveSeries,
      // loadSeriesByGenre,
      // deleteSeries,
      // loadSeriesById,


}

export default apis