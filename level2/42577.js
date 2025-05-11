// 전화번호 목록

function solution(phone_book) {
  // 먼저 sort하고
  phone_book.sort();

  // 앞에서 부터 순회하면서 포함되는거 찾아야함
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 접두어인지 판단
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
