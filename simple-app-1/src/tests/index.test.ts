import {describe, expect, it} from '@jest/globals';
import {mutiply, sum} from '../index';

describe('Testing all calculator functionality', () => {

  describe('Testing sum function', () => {
    it('adds 1 + 2 to equal 3', () => {
        const finalAnswer = sum(1, 2);
        expect(finalAnswer).toBe(3);
      });
    
    it('should return the sum of negative numbers correctly', () => {
        const finalAnswer = sum(-1, -2);
        expect(finalAnswer).toBe(-3);
    })
  });

  describe('Testing multiply function', () => {
    it('should multiply 2 and 3 correctly', () => {
        const finalAnswer = mutiply(2, 3);
        expect(finalAnswer).toBe(6);
      });
  });


});