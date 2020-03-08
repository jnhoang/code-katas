import time
from datetime import datetime

class Helper():
  def __init__(self):
    self.skeleton_folder = 'skeleton_files'
    self.config = {
      'bfs' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'dfs' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'queue' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'stack' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'linked_list' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'binary_search' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'fibonacci' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'pre_sorted_two_sum' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
      'two_pointer_technique' : {
        'skeleton' :  f'{self.skeleton_folder}/%s_skeleton.py',
      },
    }


  def get_date(self):
    ''' returns todays date '''
    return datetime.now().strftime('%m-%d-%y')


  def get_question(self, type):
    return self.config[type]


  def print_test_time(self, start_time, end_time):
    print("--- %.5f seconds ---" % ((time.time() - start_time)))
    print("--- %.5f ms      ---" % ((time.time() - start_time) / 1000))
    return


def get_queue_skeleton():
  return '''

"""
  implement a queue class with the following methods:
  [push, shift, peek, is_empty]
"""
class Queue():
  def __init__(self):
    pass

  def push(self):
    pass

  def shift(self):
    pass

  def peek(self):
    pass

  def is_empty(self):
    pass

if __name__ == '__main__':
  queue = Queue()'''
