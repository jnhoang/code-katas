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
  # look at midpoint
    # get biggest index array (also the highest value)
    # get the smallest index of array (also the smallest value)
    # midpoint = (smallest + biggest) / 2 - floor value to remove floats
  smallest_index =  0
  biggest_index  =  len(arr) - 1
  # while smallest < biggest
    # if midpoint equal to target
      # return index
    # else if the midpoint smaller than target
      # biggest = midpoint index - 1
    # else if midpoint bigger than target
      # smallest = midpoint index + 1
  while smallest_index <= biggest_index:
    midpoint_index =  (smallest_index + biggest_index) // 2
    if arr[midpoint_index] == target:
      return midpoint_index
    elif arr[midpoint_index] < target:
      smallest_index = midpoint_index + 1
    elif arr[midpoint_index] > target:
      biggest_index = midpoint_index - 1


  # did not find target, return -1
  return -1

if __name__ == '__main__':
  test_cases = [
    ([1, 3, 5, 7, 8, 12], 8, 4),
    ([1, 3, 5, 7, 8, 12], 6, -1),
    ([1, 3, 5, 7, 8, 12], 12, 5),
    ([1, 3, 5, 7, 8, 12], 1, 0)
  ]

  for case in test_cases:
    # print(case[1], case[2])
    print('\nexpected: ', binary_search(case[0], case[1]))
    print('result  : ', case[2])

