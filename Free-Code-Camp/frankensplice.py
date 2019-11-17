from datetime import datetime
# https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

testCases = [
  [[1, 2, 3], [4, 5], 1, [4, 1, 2, 3, 5]],
  [[1, 2] , ["a", "b"], 1, ["a", 1, 2, "b"]],
  [["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2, ["head", "shoulders", "claw", "tentacle", "knees", "toes"]]
]

def franken_splice(arr1, arr2, n):
  return arr2[0:n] + arr1 + arr2[n:]


for test in testCases:
  start    =  datetime.now()
  testCase =  franken_splice(test[0], test[1], test[2])
  msTime   =  str(datetime.now() - start)
  print(f'\ntest ran in {msTime}')

  assertCase =  test[3]
  print('pass' if testCase == assertCase else 'fail')

