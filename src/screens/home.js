import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

import OfflineAlert from '../components/OfflineAlert';

let currentNetwork;

NetInfo.fetch().then(state => {
  currentNetwork = state.isConnected;
});

const CheckConnection = () => {
  const [netInfo, setNetInfo] = useState(currentNetwork);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return netInfo;
};

const Home = props => {
  let network = CheckConnection();
  if (network === false) {
    return <OfflineAlert />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View style={styles.logoView}>
            <Image
              style={styles.logo}
              source={require('../assets/twitter-logo.png')}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              See what's happening in the world right now!.
            </Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Get Tweets"
              onPress={() => {
                props.navigation.navigate('Tweets');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logoView: {
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  textView: {
    paddingTop: 150,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    alignItems: 'center',
    paddingTop: 170,
  },
});

export default Home;
