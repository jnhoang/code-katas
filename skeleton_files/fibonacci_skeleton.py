"""
  implement function that will return the ith position in the fibonacci sequence
    * starts with 1
    * handle < 1 input
  implement it in different ways:
    1. recursively
    2. with some dynamic programming (memoization)
    3. iteratively
"""

def fibonacci(index):
  pass

if __name__ == '__main__':
  expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
 987, 1597, 2584, 4181, 6765]
  result = [ fibonacci(i) for i in range(1, 20 + 1) ]
  # uncomment this one after memoized solution is done
  # result = [ fibonacci(i) for i in range(1, 100) ]
  print('results     : ', result)
  print('20 expected : ', expected)
