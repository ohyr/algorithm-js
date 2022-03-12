function solution(num) {
  let answer = 0;
  
  while(num != 1) {
      num = num % 2 ? num*3+1 : num/2;
      answer++;
      if(answer >= 500) {
          answer = -1;
          break;
      }
  }
  
  return answer;
}
