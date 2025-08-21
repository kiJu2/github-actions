/**
 * 두 숫자를 더하는 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a와 b의 합
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 두 숫자를 빼는 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a에서 b를 뺀 값
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 두 숫자를 곱하는 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a와 b의 곱
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 두 숫자를 나누는 함수
 * @param a 첫 번째 숫자 (피제수)
 * @param b 두 번째 숫자 (제수)
 * @returns a를 b로 나눈 값
 * @throws 0으로 나누려고 할 때 에러를 발생시킴
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다');
  }
  return a / b;
}
