import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import axios from 'react-native-axios';

import Tweet from '../components/Tweet';

const Tweets = props => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonkeeper.com/b/JID4',
    })
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const updateLikes = id => {
    const updated = [...tweets];
    const index = updated.findIndex(tweet => tweet.id === id);
    updated[index].favorite_count += 1;
    setTweets(updated);
  };

  const updateReTweets = id => {
    const updated = [...tweets];
    const index = updated.findIndex(tweet => tweet.id === id);
    updated[index].retweet_count += 1;
    setTweets(updated);
  };

  return (
    <FlatList
      data={tweets}
      renderItem={item => (
        <Tweet
          tweet={item}
          updateLikes={updateLikes}
          updateReTweets={updateReTweets}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Tweets;
