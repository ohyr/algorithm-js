function solution(board, moves) {
  let answer = 0;

  const basket = [];

  for (let i = 0; i < moves.length; i++) {
    const pos = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pos] != 0) {
        if (basket[basket.length - 1] === board[j][pos]) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(board[j][pos]);
        }
        board[j][pos] = 0;
        break;
      }
    }
  }

  return answer;
}
