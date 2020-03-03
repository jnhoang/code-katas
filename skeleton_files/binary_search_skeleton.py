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
  pass



if __name__ == '__main__':
  test_cases = [
    ([1, 3, 5, 7, 8, 12], 8, 4),
    ([1, 3, 5, 7, 8, 12], 6, -1),
    ([1, 3, 5, 7, 8, 12], 12, 5),
    ([1, 3, 5, 7, 8, 12], 1, 0)
  ]

  for case in test_cases:
    print('\nexpected: ', binary_search(case[0], case[1]))
    print('result  : ', case[2])
