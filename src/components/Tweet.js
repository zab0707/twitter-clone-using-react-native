import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Tweet = ({tweet, updateLikes, updateReTweets}) => {
  const like = id => {
    updateLikes(id);
  };

  const reTweet = id => {
    updateReTweets(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.image} />
        <Text style={[styles.id, {paddingLeft: 10}]}>{tweet.item.name}</Text>
        <Text style={{flex: 1, textAlign: 'right'}}>{tweet.item.id}</Text>
      </View>
      <View style={{paddingLeft: 20, paddingRight: 10}}>
        <Text style={[styles.tweet]}>{tweet.item.text}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => reTweet(tweet.item.id)}>
          <Image
            source={require('../assets/reTweet.png')}
            style={styles.actionsIcons}
          />
        </TouchableOpacity>
        <Text>{tweet.item.retweet_count}</Text>
        <TouchableOpacity onPress={() => like(tweet.item.id)}>
          <Image
            source={require('../assets/like.png')}
            style={styles.actionsIcons}
          />
        </TouchableOpacity>
        <Text>{tweet.item.favorite_count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 50,
    borderRadius: 25,
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
  },
  tweet: {
    fontSize: 18,
    padding: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  actionsIcons: {
    width: 20,
    height: 20,
    margin: 10,
  },
});

export default Tweet;
