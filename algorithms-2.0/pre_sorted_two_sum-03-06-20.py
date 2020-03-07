from test_cases import test_cases
"""
From: https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1153/
Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function two_sum should return indices of the two numbers such that
they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:
  Input       :  numbers = [2,7,11,15], target = 9
  Output      :  [1,2]
  Explanation :  The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
"""

def two_sum(nums_list, target):
  hash_table = {}

  for index, value in enumerate(nums_list):
    desired_value = target - value
    if hash_table.get(desired_value) != None:
      return [ hash_table[desired_value] + 1, index + 1]
    else:
      hash_table[value] = index


if __name__ == '__main__':
  cases = test_cases.get('two_sum')

  for case in cases:
    print('\nexpected: ', case.get('assert_result'))
    print('result  : ', two_sum(case['param_1'], case['param_2']))
