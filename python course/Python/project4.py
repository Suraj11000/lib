#program to make a coin virtually toss.
# import random
# a = random.randint(0, 1)
# if a == 1:
#     print("Heads")
# else:
#     print("Tails")


# # program of banker roulette: who will oay the will
# import random
# name_str = input("Enter the everyones names follow by ',' and a space: ")
# name_list = name_str.split(",")
# ind = len(name_list)
# rand_ind = random.randint(0, ind -1)
# rand_name = name_list[rand_ind]
# print(f"{rand_name} is going to pay the hole bill.")

# xxxx
# fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"]
# vegetables = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"]
 
# dirty_dozen = [fruits, vegetables]
# print(dirty_dozen[0])
# print(dirty_dozen[1][2])
# print(dirty_dozen[1][3])
 
# print(dirty_dozen[1][1])

# program map a tresure

# row1 = ["#", "#", "#"]
# row2 = ["#", "#", "#"]
# row3 = ["#", "#", "#"]
# map = [row1, row2, row3]
# print(f"{row1}\n{row2}\n{row3}")
# position = input("Enrter where do you want to map the tresure?")
# horizonal = int(position[0])
# vertical = int(position[1])
# selected_row = map[vertical -1]
# selected_row[horizonal - 1] = "X"
# print(f"{row1}\n{row2}\n{row3}")


#rock paper scissor game:
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
import random
game_img = [rock, paper, scissors]
user = int(input("Enter your choice between 0 to 2 only \n"))
if user >= 3 or user < 0:
    print("You enter a invalid choice")
else:
    print(game_img[user])
    com_ch = random.randint(0, 2)
    print(f"Computer choice:{com_ch}")
    print(game_img[com_ch])
    if user == 0 and com_ch == 2:
        print("User win")
    elif com_ch == 0 and user == 2:
        print("Computer wins")
    elif user > com_ch:
        print("User wins")
    elif com_ch > user:
        print("Computer wins")
    elif user == com_ch:
        print("It's a draw")
