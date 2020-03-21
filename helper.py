import time
from os import listdir
from datetime import datetime

class Helper():
  def __init__(self):
    self.skeleton_folder = 'skeleton_files'
    self.config = {
      file.split('_skeleton')[0]: f'skeleton_files/{file}'
      for file in listdir('./skeleton_files')
      if file.endswith('.py')
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


class Node:
  def __init__(self, val=None, left=None, right=None):
    self.val   =  val
    self.left  =  left
    self.right =  right

class BinaryTree:
  # source: https://stackoverflow.com/questions/2598437/how-to-implement-a-binary-tree
  def __init__(tree_vals=None):
    self.root = self.generate_binary_tree(tree_vals)

  def generate_binary_tree(self, tree_vals):
    tree = Node()

    for node in tree_vals:

      print('tree: ', tree.__dict__)

    return tree

  def getRoot(self):
    pass

  def add(self, val):
    pass

  def find(self, val):
    pass

  def deleteTree(self):
    pass

  def printTree(self):
    pass

if __name__ == '__main__':
  helper = Helper()

  # foo = helper.generate_binary_tree([1, 2, 3, None, 4, 5])
  # print(foo)
