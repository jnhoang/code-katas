import unittest

HELPER = Helper()

'''
  problem description...
'''

def function_name():
  pass


class TestFunction(unittest.TestCase):

  def test_run(self):
    # test_cases = get_test_cases()
    test_cases = []

    for case in test_cases:
      result    =  function_name() # pass params
      assertion =  case.assertion

    self.assertEqual(result, assertion)
    return



if __name__ == '__main__':
  unittest.main()
