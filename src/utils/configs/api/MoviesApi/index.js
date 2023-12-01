class MoviesApi {

  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) return res.json();
    return res.text().then((text) => {
      throw JSON.parse(text).message ?? JSON.parse(text).error ?? 'Внутренняя ошибка сервера';
    });
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkRes);
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
