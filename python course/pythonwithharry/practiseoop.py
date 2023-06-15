# class Programmer:
#     company = "Microsoft"
#     def __init__(self,name,product):
#         self.name=name
#         self.product=product
    
#     def getdetails(self):
#             print(f"Name of the {self.company} programmer is {self.name} & the product is {self.product}")
            
# suraj = Programmer("suraj","Tesla")
# dhiraj = Programmer("Dhiraj", "Tcs")
# suraj.getdetails()
# dhiraj.getdetails()

# class Calculator:
#     def __init__(self,num):
#         self.number=num

#     def square(self):
#         print(f"The value of {self.number} square is {self.number**2}")

#     def squareroot(self):
#         print(f"The value of {self.number} square root is {self.number**0.5}")

#     def cube(self):
#         print(f"The value of {self.number} cube is {self.number**3}")
    
#     @staticmethod    
#     def greet():
#         print("Welcome to the calculator") 

# a = Calculator(9)
# a.greet()
# a.square()
# a.squareroot()
# a.cube()


# class Sample:
#     a = "Suraj"
# obj = Sample()
# obj.a="Dhiraj"
# print(Sample.a)
# print(obj.a)


class Train:
    def __init__(self, name, fare, seats):
        self.name = name
        self.fare = fare
        self.seats = seats
    def getstatus(self):
        print(f"The Name of the train is {self.name}")
        print(f"The price of the ticket is RS {self.fare}")
        print(f"Available NO of seats in the train are {self.seats}")

    def bookticketr(self):
        if(self.seats>0):
            print(f"You ticket is booked, your seat number is{self.seats}")
            self.seats = self.seats-1
        else:
            print("NO seat are available")

    def cancelticket(self):
        self.seats = self.seats+1



intercity = Train("Marathhaa Express: 1100", 96 , 2)
intercity.getstatus()
intercity.bookticketr()
intercity.getstatus()
