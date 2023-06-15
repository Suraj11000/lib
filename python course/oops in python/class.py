class Computer:
    def __init__(self,cpu,ram):
        self.cpu = cpu
        self.ram = ram
    def config(self):
        print("config is",self.cpu,self.ram)
    
    def update(self):
        self.age =30
    def compare(self,other):
        if self.ram == other.ram:
            print("both are same")
        else:
            print("not same")


com1 = Computer('15', 16)
com2 = Computer('ryzen3',16)
if com1 == com2:
    print("both are same")
com1.config()
com2.config()
