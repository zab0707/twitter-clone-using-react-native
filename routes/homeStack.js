import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../src/screens/home';
import Tweets from '../src/screens/tweets';

const screens = {
  Home: {
    screen: Home,
  },
  Tweets: {
    screen: Tweets,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
