import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/home';
import TrendingScreen from './screens/trending';
import {createAppContainer} from 'react-navigation';
import FullScreen from './screens/full-screen';
import CategoriesScreen from './screens/categories';
import AboutScreen from './screens/About';
import CategoryWallpaperScreen from './screens/category-wallpapers';
import SearchScreen from './screens/search';
import CustomBottomTabNavigator from './components/bottom-tab-navigator';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Trending: TrendingScreen,
    Categories: CategoriesScreen,
    About: AboutScreen,
  },
  {
    tabBarComponent: CustomBottomTabNavigator,
  },
);

const StackNavigator = createStackNavigator(
  {
    BottomTabNavigator,
    FullScreen,
    'Categorized Wallpaper': CategoryWallpaperScreen,
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
