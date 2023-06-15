class Employee:
    company = "Tesla"
    ecode = 120

class Freelancer:
    company = "Tcs"
    level = 0

    def upgradeLevel(self): 
        self.level = self.level+1

class Programmer(Employee,Freelancer):
    name = "Suraj"

p = Programmer()
print(p.level)
print(p.company)
