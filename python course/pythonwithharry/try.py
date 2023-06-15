class Driver:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def getDetails(self):
        print("The name of driver is",self.name)
        print("The age of driver is",self.age)

class cars(Driver):
    def __init__(self,color,company):
        self.color = color
        self.company = company

    def carInfo(self):
        print("car color : ",self.color)
        print("car company : ",self.company)

a = Driver('yash',15)
b = Driver('sura',12)
c = cars('red', 'Hyundai')
# a.getDetails()
# b.getDetails()
c.carInfo()
c.getDetails()

