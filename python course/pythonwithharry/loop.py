# num=0
# while num <50:
#     num +=1
#     print(num)

# a=[1,2,3,4,5,66,88,778,"suraj","harshal"]
# b=0
# while b<len(a):
#     print(a[b])
#     b=b+1
# for b in a:
#     print(b)

# num=int(input("Enter a number"))
# for i in range(11,1):
#     print(f"{num}X{i}={num*i}")


# l1=["suraj","rohan","rohit","dhiraj"]
# for i in l1:
#     if i.startswith("r"):
#         print("hello"+i)

# num=int(input("Enter a number"))
# while (1,11):
#     print(num)

# num=int(input("please enter a number:"))
# prime = True
# for i in range(2,num):
#     if(num%i == 0):
#         prime=False
#         break
# if prime:
#     print("this  is a prime number")
# else:
#     print("this is not a prime number")

# num=int(input("Enter a number:"))
# fact=1
# for i in range(1,num+1):
#     fact=fact*i
# print(f"the factorial of {num} is {fact}")

# n=5
# for i in range(5):
#     print("*"*(i+1))

# n=3
# for i in range(3):
#     print(" " * (n-i-1), end="")
#     print("*" * (2*i+1),end="")
#     print(" "*(n-i-1))

# def max(num1,num2,num3):
#     if(num1>num2):
#         if(num1>num3):
#             return num1
#         else:
#             return num3
#     else:
#         if(num2>num3):
#             return num2
#         else:
#             return num3

# m=max(45,88,99)
# print("the value of max is "+str(m))

def fahr(cel):
    return((cel*(9/5)) + 32)
c=0
f=fahr(c)
print("Fahrenheit temperature is "+ str(f))