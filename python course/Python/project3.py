#  #program to check it is even or odd number.
#  num=int(input("Enter a number to check ?"))
#  if num % 2 == 0:
#      print("This is an even number.")
#  else:
#      print("This is an odd number.")

# #program to calculate BMI.
# height=float(input("Enter your height in 'm' ?"))
# weight=int(input("Enter your weight in 'kg' ?"))
# bmi=round(weight/height**2)
# if bmi < 18.5:
#     print(f"Your BMI is {bmi}, you are underweight")
# elif bmi < 25:
#     print(f"Your BMI is {bmi}, you are normal weight")
# elif bmi < 30:
#     print(f"Your BMI is {bmi}, you are slightly overweight")
# elif bmi < 35:
#     print(f"Your BMI is {bmi}, you are obese")
# else:
#     print(f"Your BMI is {bmi}, you are clinically underweight")


#program to find out a year is a leap or not a leap year
# year=int(iput("Enter any year you want to check?"))
# if year % 4 == 0:
#     if year % 100 == 0:
#         if year % 400 == 0:
#             print("This is a leap year")
#         else:
#             print("This is not a leap year")
#     else:
#         print("This is a leap year")
# else:
#     print("This is not a leap year")


#program to order a pizzza 
# print("Welcome to the suraj's Pizza Shop:")
# bill = 0
# size = input("Please enter a size you want?, S, M or L?")
# add_pepperroni = input("Do you want to add papperoni?, Y or N?")
# add_cheese = input("Do you want to add cheese?, Y or N?")
# if size == "S":
#     bill +=15
# elif size == "M":
#     bill +=20
# elif size == "L":
#     bill +=25

# if add_pepperroni == "Y":
#     if size == "S":
#         bill +=2
#     else:
#         bill +=3

# if add_cheese == "Y":
#     bill +=1
# print(f"Your total bill is ${bill}")


#program to make a love calculator
# print("Welcome to the love calculator:")
# name1 = input("Enter your name:?")
# name2 = input("Enter their name:?")
# str_combine = name1 + name2 
# lower_str = str_combine.lower()
# t = lower_str.count("t")
# r = lower_str.count("r")
# u = lower_str.count("u")
# e = lower_str.count("e")

# true = t + r + u + e

# l = lower_str.count("l")
# o = lower_str.count("o")
# v = lower_str.count("v")
# e = lower_str.count("e")

# love = l + o + v + e

# love_score = int(str(true) + str(love))

# if (love_score < 9) or (love_score > 90):
#     print(f"Your love score is {love_score}, you both are superb")
# elif (love_score >= 40) and (love_score <= 50):
#     print(f"Your love score is {love_score}, your like tea and biscuits")
# else:
#     print(f"Your love score is {love_score},")


#tresure hunt program.

# print('''
# *******************************************************************************
#           |                   |                  |                     |
#  _________|________________.=""_;=.______________|_____________________|_______
# |                   |  ,-"_,=""     `"=.|                  |
# |___________________|__"=._o`"-._        `"=.______________|___________________
#           |                `"=._o`"=._      _`"=._                     |
#  _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
# |                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
# |___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
#           |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
#  _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
# |                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
# |___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
# ____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
# /______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
# ____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
# /______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
# ____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
# /______/______/______/______/______/______/______/______/______/______/_____ /
# *******************************************************************************
# ''')
# print("Welcome to Treasure Island.")
# print("Your mission is to find the treasure.") 
# * 'You\'re at a crossroad. Where do you want to go? Type "left" or "right"'
# * 'You\'ve come to a lake. There is an island in the middle of the lake. Type "wait" to wait for a boat. Type "swim" to swim across.'
# * "You arrive at the island unharmed. There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose?"
# * "It\'s a room full of fire. Game Over."
# * "You found the treasure! You Win!"
# * "You enter a room of beasts. Game Over."
# * "You chose a door that doesn\'t exist. Game Over."
# * "You get attacked by an angry trout. Game Over."
# * "You fell into a hole. Game Over."
# cross_road = input('You\'re at a crossroad. Where do you want to go? Type "left" or "right"')

# if cross_road == "left":
#     print("'You\'ve come to a lake.")
#     island = input('There is an island in the middle of the lake. Type "wait" to wait for a boat. Type "swim" to swim across.')

#     if island == "wait":
#         print("You arrive at the island unharmed.")
#         door = input("There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose?")

#         if door == "red":
#             print("It\'s a room full of fire. Game Over.")

#         elif door == "yellow":
#             print("You found the treasure! You Win!")

#         elif door == "blue":
#             print("You enter a room of beasts. Game Over.")

#         else:
#             print("You chose a door that doesn\'t exist. Game Over.")

#     else:
#         print("You get attacked by an angry trout. Game Over.")

# else:
#     print('"You fell into a hole. Game Over."')

year = int(input("Enter a year to check: "))
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("it is a leap year")
        else:
            print("Not leap year")
    else:
        print("Its a leap year")
else:
    print("not a leap year")



