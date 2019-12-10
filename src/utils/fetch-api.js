import {API_URL, PEXELS_API_SECRET} from './constants';
import {getRandomInt} from './utils';

export const getWallpapers = async () => {
  try {
    const page = getRandomInt(100);
    const response = await fetch(
      `${API_URL}/search?query=mobile+wallpapers&per_page=80&page=${page}`,
      {
        headers: {
          Authorization: PEXELS_API_SECRET,
        },
        method: 'GET',
      },
    )
      .then(res => res.json())
      .catch(err => err);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingWallpapers = async () => {
  try {
    const page = getRandomInt(120);
    const response = await fetch(
      `${API_URL}/curated?per_page=40&page=${page}`,
      {
        headers: {
          Authorization: PEXELS_API_SECRET,
        },
        method: 'GET',
      },
    )
      .then(res => res.json())
      .catch(err => err);
    return response;
  } catch (error) {
    console.log(error);
  }
};
