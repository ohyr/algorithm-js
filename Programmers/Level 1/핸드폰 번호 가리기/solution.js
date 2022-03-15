function solution(phone_number) {
  return phone_number.split("").map((num, idx) => phone_number.length - idx > 4 ? "*" : num).join("");
}