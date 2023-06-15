class Bus:
    fees = 150000
    duration = "yearly"
    def details(self, name,course, add):
        self.name = name
        self.course = course
        self.add = add

    def getdetails(self):
        print(f"The name of student is {self.name} and couse is {self.course} & the stop is {self.add}")

student = Bus()
print(student.fees)
print(student.duration)
student.getdetails()