import { SHORT_MOVIE_DURATION } from '../constants';

const regexForStringReplacement = /[!@#$%^&*()_\-,.|\/\\<>«»"'`\[\]{}:;~]/g;

const standardizeString = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(regexForStringReplacement, '');
};

export const filterMovies = (movies, string, isShortMovie) => {
  if (isShortMovie) {
    return movies.filter(m => m.duration <= SHORT_MOVIE_DURATION)
      .filter(m => standardizeString(m.nameRU || m.nameEN).includes(standardizeString(string)));
  }

  return movies.filter(m => standardizeString(m.nameRU || m.nameEN).includes(standardizeString(string)));
};
