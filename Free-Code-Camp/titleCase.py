from datetime import datetime
# https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

testCases = [
  ["I'm a little tea pot",  "I'm A Little Tea Pot"],
  ["sHoRt AnD sToUt", "Short And Stout"],
  ["HERE IS MY HANDLE HERE IS MY SPOUT", "Here Is My Handle Here Is My Spout"]
]

def titleCase(str):
  words   = str.split(' ')
  capCase = [ word[0].upper() + word[1:].lower() for word in words]
  return ' '.join(capCase)


for test in testCases:
  start    =  datetime.now()
  testCase =  titleCase(test[0])
  msTime   =  str(datetime.now() - start)
  print(f'\ntest ran in {msTime}')


  assertCase =  test[1]
  print('pass' if testCase == assertCase else 'fail')

