class Student:
    school = "Csmss"
    def __init__(self,m1,m2,m3):
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3
    
    def avg(self):
        return (self.m1 + self.m2 +self.m3)/3
    
    @classmethod#classmethod use tom access class
    def getSchool(cls):
        return cls.school

    @staticmethod
    def info():
        print("This is a student class")

    # def get_m1(self):#accessor
    #     return(self.m1)

    # def set_m1(self, value):#mutator
    #     self.m1 = value

s1 = Student(55,65,88)
s2 = Student(56,95,68)
s1.avg
print(s1.avg())
print(Student.getSchool())
Student.info()