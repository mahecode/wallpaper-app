export const initialState = {
  wallpapers: {},
  size: 0,
  trendingWallpapers: {},
  categorizedWallpapers: {},
};

export const SET_WALLPAPERS = 'SET_WALLPAPERS';
export const ADD_WALLPAPERS = 'ADD_WALLPAPERS';
export const SET_TRENDING_WALLPAPERS = 'SET_TRENDING_WALLPAPERS';
export const SET_MORE_TRENDING_WALLPAPERS = 'SET_MORE_TRENDING_WALLPAPERS';
export const SET_CATEGORY_WALLPAPERS = 'SET_CATEGORY_WALLPAPERS';
export const SET_MORE_CATEGORY_WALLPAPERS = 'SET_MORE_CATEGORY_WALLPAPERS';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_WALLPAPERS:
      return {
        ...state,
        wallpapers: action.wallpapers,
        size: action.size,
      };
    case ADD_WALLPAPERS:
      return {
        ...state,
        wallpapers: {
          page: action.wallpapers.page,
          photos: [...state.wallpapers.photos, action.wallpapers.photos],
        },
        size: state.size + action.size,
      };
    case SET_TRENDING_WALLPAPERS:
      return {
        ...state,
        trendingWallpapers: action.trendingWallpapers,
      };
    case SET_MORE_TRENDING_WALLPAPERS:
      return {
        ...state,
        trendingWallpapers: {
          photos: [
            ...state.trendingWallpapers.photos,
            ...action.trendingWallpapers.photos,
          ],
        },
      };
    case SET_CATEGORY_WALLPAPERS:
      return {
        ...state,
        categorizedWallpapers: action.categorizedWallpapers,
      };
    case SET_MORE_CATEGORY_WALLPAPERS:
      return {
        ...state,
        categorizedWallpapers: {
          photos: [
            ...state.categorizedWallpapers.photos,
            ...action.categorizedWallpapers.photos,
          ],
        },
      };
    default:
      return state;
  }
};
