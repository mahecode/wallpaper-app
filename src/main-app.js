import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/home';
import TrendingScreen from './screens/trending';
import {createAppContainer} from 'react-navigation';
import FullScreen from './screens/full-screen';
import CustomBottomTabNavigator from './components/bottom-tab-navigator';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Trending: TrendingScreen,
  },
  {
    tabBarComponent: CustomBottomTabNavigator,
  },
);

const StackNavigator = createStackNavigator(
  {
    BottomTabNavigator,
    FullScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
