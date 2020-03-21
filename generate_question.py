#!/usr/bin/env python3

from helper import Helper
HELPER = Helper()

def main():
  # generate prompt and ask user for a file to create
  question_types  =  [ k for k in HELPER.config.keys() ]
  question_prompt =  'What type of question file do you want generated? Enter a number:'
  for i, option in enumerate(question_types) :
    question_prompt +=  f'\n  {i + 1}: {option}'
  question_prompt  += '\n\n'

  # process request
  response          =  int(input(question_prompt)) - 1
  requested_choice  =  question_types[response]
  skeleton_filename =  HELPER.get_question(requested_choice)

  # generate file
  with open(skeleton_filename, 'r') as input_file:
    lines = input_file.readlines()

  new_filename = f'algorithms-2.0/%s-{HELPER.get_date()}.py' %  requested_choice
  with open(new_filename, 'w') as output_file:
    output_file.writelines(lines)

  print(f'{new_filename} generated: ')

if __name__ == '__main__':
  main()
