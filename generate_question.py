from helper import Helper
HELPER = Helper()

def main():
  # generate prompt and ask user for a file to create
  question_types  =  [ title for title in HELPER.config ]
  question_prompt =  'What type of question file do you want generated? Enter a number:'
  for i, option in enumerate(question_types) :
    question_prompt +=  f'\n  {i + 1}: {option}'
  question_promt  += '\n\n'

  # process request
  response         =  int(input(question_prompt)) - 1
  option           =  question_types[response]
  question_details =  HELPER.get_question(option)

  # generate file
  with open(question_details['skeleton'], 'r') as input_file:
    lines = input_file.readlines()
  with open(f'algorithms-2.0/{question_details["title"]}-{HELPER.get_date()}.py', 'w') as output_file:
    output_file.writelines(lines)

  print('file generated')

if __name__ == '__main__':
  main()
