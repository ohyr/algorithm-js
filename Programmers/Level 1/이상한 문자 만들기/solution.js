function solution(s) {
  let wordList = s.split(" ");

  for (let i = 0; i < wordList.length; i += 1) {
    let word = "";

    for (let j = 0; j < wordList[i].length; j += 1) {
      word +=
        j % 2 ? wordList[i][j].toLowerCase() : wordList[i][j].toUpperCase();
    }

    wordList[i] = word;
  }

  return wordList.join(" ");
}
