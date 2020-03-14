"""
  implement binary_search on given input, return index
  list will be sorted
  if target is not in the array return -1
    ([1, 3, 5, 7, 8, 12], 8), 4
    ([1, 3, 5, 7, 8, 12], 6), -1
    ([1, 3, 5, 7, 8, 12], 12), 5
    ([1, 3, 5, 7, 8, 12], 1), 0
"""

def binary_search(arr, target):
  min_index = 0
  max_index = len(arr) - 1

  while(min_index <= max_index):
    mid_index = (min_index + max_index) // 2
    value_at_mid = arr[mid_index]

    if  value_at_mid == target:
      return mid_index
    elif value_at_mid > target:
      max_index = mid_index - 1
    elif value_at_mid < target:
      min_index = mid_index + 1

  return -1


if __name__ == '__main__':
  test_cases = [
    ([1, 3, 5, 7, 8, 12], 8, 4),
    ([1, 3, 5, 7, 8, 12], 6, -1),
    ([1, 3, 5, 7, 8, 12], 12, 5),
    ([1, 3, 5, 7, 8, 12], 1, 0)
  ]

  for case in test_cases:
    print('\nresult  : ', binary_search(case[0], case[1]))
    print('expected: ', case[2])
