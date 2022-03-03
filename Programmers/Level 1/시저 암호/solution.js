function encrypt(s, i, n) {
  const c = s.charCodeAt(i);
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);

  if (A <= c && c <= Z) {
    return ((c + n - A) % 26) + A;
  }

  if (a <= c && c <= z) {
    return ((c + n - a) % 26) + a;
  }

  return c;
}

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i += 1) {
    answer += String.fromCharCode(encrypt(s, i, n));
  }

  return answer;
}
