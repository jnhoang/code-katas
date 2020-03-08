from test_cases import pre_sorted_binary_search
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
  min_index =  0
  max_index =  len(arr) - 1

  while min_index <= max_index:
    midpoint = (min_index + max_index) // 2

    val = arr[midpoint]
    if target == val:
      return midpoint
    elif target < val:
      max_index = midpoint - 1
    elif target > val:
      min_index = midpoint + 1

  return -1

if __name__ == '__main__':
  for case in pre_sorted_binary_search:
    print('\nresult   : ', binary_search(case[0], case[1]))
    print('expected : ', case[2])
