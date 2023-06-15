# # #print("hello"[0])
# # # a=str(123)
# # #print(type(a))
# # weight=(input("Enter your weight:"))
# # height=(input("Enter your height:"))
# # bmi=int(weight)/float(height)**2
# # print(int(bmi))
# a=input("Enter your current age:")
# x=365
# y=52
# z=12
# rem_age=90-int(a)
# print(rem_age)
# rem_day=rem_age*x
# rem_week=rem_age*y
# rem_month=rem_age*z
# print(f"you have {rem_day}days, {rem_week}weeks, and {rem_month}months left")
# print("Welcome to the tip calculator !")
# bill=float(input("What was the total bill? $"))
# tip=int(input("How much tip would you like to give? 10, 12, or 15?"))
# peo=int(input("How many people to split the bill?"))
# tip_per=tip/100
# tot_tip=bill*tip_per
# tot_bill=bill+tot_tip
# bill_per_per=tot_bill/peo
# final_bill=round(bill_per_per,2)
# print(f"Each person should pay ${final_bill}")

# cur_age = int(input("please enter your age"))
# rem_age = 90 - cur_age
# rem_day = 365*rem_age
# rem_week = 52*rem_age
# rem_mon = 12*rem_age
# print(f"you have {rem_day}days, {rem_week}weeks and {rem_mon}months left")

# tip calculator
bill = float(input("what was the total bill?"))
tip = int(input("How much tip you want to give, 10 12 or 15"))
spli = int(input("number of people to split the bill"))

tot_tip = tip/100 * bill
tot_bill = bill + tot_tip
each_bill = tot_bill/spli
print(f"Each person should pay:{each_bill}")
print(tot_tip)