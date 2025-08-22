import { add, subtract, multiply, divide } from './math';

describe('Math 유틸리티 함수들', () => {
  describe('add 함수', () => {
    test('두 양수를 더해야 한다', () => {
      expect(add(2, 3)).toBe(2);
      expect(add(10, 20)).toBe(30);
    });

    test('음수를 포함한 계산을 해야 한다', () => {
      expect(add(-5, 3)).toBe(-2);
      expect(add(-10, -20)).toBe(-30);
    });

    test('0을 포함한 계산을 해야 한다', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(10, 0)).toBe(10);
      expect(add(0, 0)).toBe(0);
    });

    test('소수점 계산을 해야 한다', () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract 함수', () => {
    test('두 수를 빼야 한다', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 7)).toBe(3);
    });

    test('음수 결과를 반환해야 한다', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply 함수', () => {
    test('두 수를 곱해야 한다', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(5, 6)).toBe(30);
    });

    test('0과의 곱셈을 해야 한다', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 10)).toBe(0);
    });
  });

  describe('divide 함수', () => {
    test('두 수를 나누어야 한다', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(15, 3)).toBe(5);
    });

    test('소수점 결과를 반환해야 한다', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });

    test('0으로 나누면 에러를 던져야 한다', () => {
      expect(() => divide(10, 0)).toThrow('0으로 나눌 수 없습니다');
    });
  });
});
