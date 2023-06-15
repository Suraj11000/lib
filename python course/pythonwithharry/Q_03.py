class Employee:
    salary = 1000
    increment = 1.5
    @property
    def salary_after_increment(self):
        return self.salary*self.increment
    @salary_after_increment.setter
    def salary_after_increment(self,sai):
        self.increment = sai/self.salary

e = Employee()
print(e.salary_after_increment)
print(e.increment)
e.salary_after_increment = 2000
print(e.increment)