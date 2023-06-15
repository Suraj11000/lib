class Student:

    def __init__(self,name,roll_no):
        self.name = name
        self.roll_no = roll_no
        self.lap = self.Laptop()
    
    def show(self):
        print(self.name,self.roll_no)
        self.lap.show()

    class Laptop:
        def __init__(self):
            self.brand = 'HP'
            self.cpu = "Ryzen 9"
            self.ram = '8gb'

        def show(self):
            print(self.brand,self.cpu,self.ram)
s1 = Student('suraj',51)
s2 = Student('dhiraj',52)
s1.show()
# lap1 = s1.lap
# lap2 = s2.lap
# lap1 = Student.Laptop()

