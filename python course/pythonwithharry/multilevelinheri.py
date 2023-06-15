class Person:
    country = "India"
    salary = 1000
    
    def takeBreak(self):
        print("I am taking a Break")
                                                  
class Employee(Person):
    company = "honda"

    def getSalary(self):
        print(f"salary is {self.salary}")

    def takeBreak(self):
        print("I am an employee and luckily taking a Break")
class Programmer(Employee):
    company = "Fiverr"

    def getSalary(self):
        print(f"No salary for Programmer")

    def takeBreak(self):
        print("I am programmer so i am taking a break")

p = Person()
p.takeBreak()
print(p.country)
e = Employee()
e.takeBreak()
# e.getSalary()
# print(e.country)
pr = Programmer()
pr.takeBreak()
pr.getSalary()
print(pr.country)
print(pr.salary)  