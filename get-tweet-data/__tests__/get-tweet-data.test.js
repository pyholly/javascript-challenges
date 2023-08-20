const getTweetData = require("../get-tweet-data");

describe("getTweetData", () => {
  test("test to see if passed empty string returns object with no data ", () => {
    const input = "";
    const output = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    };
    expect(getTweetData(input)).toEqual(output);
  });
  test("test to see when passed a string with no mentions or hashtags it returns the correct tweetdata with the correct string length ", () => {
    const input = "My awesome tweet";
    const output = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 16,
    };
    expect(getTweetData(input)).toEqual(output);
  });
  test("test to see when passed a string with a mention it returns the correct tweetdata with the correct string length and mentions", () => {
    const input = "My awesome tweet to @northcoders";
    const output = {
      tags: [],
      mentions: ["@northcoders"],
      tagCount: 0,
      mentionCount: 1,
      length: 32,
    };
    expect(getTweetData(input)).toEqual(output);
  });
  test("test to see when passed a string with a hashtag it returns the correct tweetdata with the correct string length and hashtags", () => {
    const input = "My awesome tweet about #coding";
    const output = {
      tags: ["#coding"],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 30,
    };
    expect(getTweetData(input)).toEqual(output);
  });
  test("test to see when passed a string with a hashtag and a mention it returns the correct tweetdata with the correct string length,hashtags and mentions", () => {
    const input =
      "I am #coding with @northcoders I love #coding and @northcoders";
    const output = {
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 62,
    };
    expect(getTweetData(input)).toEqual(output);
  });
});
