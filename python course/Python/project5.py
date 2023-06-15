# for loop with the python lists
# brands = ["samsung", "Apple", "realme", "Asus"]
# for brand in brands:
#     print(brand)
#     print(brands)


#program to calculate the avgerange of any type using for loop with lists
# student_height = input("Please the height of all studentds??").split()
# for n in range(0, len(student_height)):
#     student_height[n] = int(student_height[n])
# tot_height = 0
# for height in student_height:
#     tot_height += height
# print(tot_height)
# tot_student = 0
# for student in student_height:
#     tot_student += 1
# print(tot_student)    
# avg_height = tot_height/tot_student
# print(round(avg_height))


# program to calculate maximum of a number
# student_score = input("Enter the students marks: ").split()
# for n in range(0, len(student_score)):
#     student_score[n] = int(student_score[n])
# print(student_score)
# max_mark = 0
# for score in student_score:
#     if score > max_mark:
#         max_mark = score
# print(max_mark)

# program to find out additon of 1 to 100 even numbers
# total = 0
# for num in range(2, 101,2):
#     total += num
# print(total)
# tot = 0
# for num in range(1,101,2):
#     tot += num
# print(tot)


# #FizzBuzz program.
# for num in range(0,101):
#     if num % 3 == 0 and num % 5 == 0:
#         print("FizzBuzz")
#     elif num % 3 == 0:
#         print("fizz")
#     elif num % 5 == 0:
#         print("Buzz") 
#     else:
#         print(num)


import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
print("Welcome to the PyPassword Generator!")
nr_letters= int(input("How many letters would you like in your password?\n")) 
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))
# password = ""
# for char in range(1, nr_letters+1):
#     password += random.choice(letters)
# for char in range(1, nr_symbols+1):
#     password += random.choice(symbols)
# for char in range(1, nr_numbers+1):
#     password += random.choice(numbers)
# print(password)

pass_list =[]
for char in range(1, nr_letters+1):
    pass_list.append(random.choice(letters))
for char in range(1, nr_symbols+1):
    pass_list.append(random.choice(symbols))
for char in range(1, nr_numbers):
    pass_list.append(random.choice(numbers))
print(pass_list)
random.shuffle(pass_list)
print(pass_list)
password = ""
for char in pass_list:
    password += char
print(password)



