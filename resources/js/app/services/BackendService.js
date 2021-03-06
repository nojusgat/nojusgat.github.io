import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.access_token){
    const token = 'Bearer ' + user.access_token;
    config.headers.Authorization =  token;
  }

  return config;
});

class BackendService {
  getInfoById = async(id) => {
    return axios.post("/api/auth/movie/show", {
      by: "id",
      param: id
    });
  }

  getInfosByIds = async(ids) => {
    return axios.post("/api/auth/movie/show", {
      by: "ids",
      param: ids
    });
  }

  getInfoByPopular = async(page) => {
    return axios.post("/api/auth/movie/show", {
      by: "category",
      page: page
    });
  }

  getInfoByGenre = async(cat, page) => {
    return axios.post("/api/auth/movie/show", {
      by: "category",
      param: cat,
      page: page
    });
  }

  getInfoByTitle = async(title, page) => {
    return axios.post("/api/auth/movie/show", {
      by: "title",
      param: title,
      page: page
    });
  }

  markUserFavorite = async(action, movie_id) => {
    return axios.post("/api/auth/movie/favorite", {
      action: action,
      id: movie_id
    });
  }

  getCategories = async() => {
    return axios.get("/api/auth/movie/genres");
  }

  setUserInfo = async(first, last, gender) => {
    return axios.post("/api/auth/change/details", {
      firstname: first,
      lastname: last,
      gender: gender
    });
  }

  setUserAbout = async(about) => {
    return axios.post("/api/auth/change/details", {
      about: about
    });
  }

  changeAvatar = async(data) => {
    return axios.post("/api/auth/change/avatar", data);
  }
}

export default new BackendService();
