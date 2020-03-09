"""
  implement function that will return the ith position in the fibonacci sequence
    * starts with 1
    * handle < 1 input
  implement it in different ways:
    1. recursively
    2. with some dynamic programming (memoization)
    3. iteratively
"""

# recursive / dynamic approach
# def fibonacci(i, cache={}):
#   if i == 0 or i == 1:
#     return 1
#   elif cache.get(i):
#     return cache[i]
#   else:
#     val = fibonacci(i - 1, cache) + fibonacci(i - 2, cache)
#     cache[i] = val
#     return val

# iterative
def fibonacci(index):
  sequence = []

  for i in range(index):
    val = 1 if (i == 0 or i == 1) else (sequence[i - 1] + sequence[i - 2])
    sequence.append(val)
  return sequence[i]


if __name__ == '__main__':
  expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
 987, 1597, 2584, 4181, 6765]
  result = [ fibonacci(i) for i in range(1, 5 + 1) ]
  # uncomment this one after memoized solution is done
  # result = [ fibonacci(i) for i in range(1, 100) ]
  print('results     : ', result)
  print('20 expected : ', expected)
