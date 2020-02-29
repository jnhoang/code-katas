from helper import Helper
HELPER = Helper()

def main():
  question_types = ['bfs', 'dfs', 'queue', 'stack', 'linked-list', 'bst']
  question_type = '''
  what type of question file do you want generated? Enter a number
    1. bfs
    2. dfs
    3. implement a queue
    4. implement a stack
    5. implement a linked-list
    6. binary search tree
  '''
  response         =  int(input(question_type)) - 1
  question_type    =  question_types[response]
  question_details =  HELPER.get_question(question_type)

  with open(question_details['skeleton'], 'r') as input_file:
    lines = input_file.readlines()
  with open(f'algorithms-2.0/{question_details["title"]}-{HELPER.get_date()}.py', 'w') as output_file:
    output_file.writelines(lines)

  print('file generated')

if __name__ == '__main__':
  main()
