function getTweetData(tweet) {
  const tweetData = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: tweet.length,
  };
  const tweetArr = tweet.split(" ");
  tweetArr.forEach((word) => {
    if (word.startsWith("@")) {
      if (!tweetData.mentions.includes(word)) {
        tweetData.mentions.push(word);
        tweetData.mentionCount++;
      }
    } else if (word.startsWith("#")) {
      if (!tweetData.tags.includes(word)) {
        tweetData.tags.push(word);
        tweetData.tagCount++;
      }
    }
  });
  return tweetData;
}

module.exports = getTweetData;
