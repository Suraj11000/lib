# class Employee:
#     company = "Tesla"
#     salary = 3000
# suraj = Employee()
# dhiraj = Employee()
# # suraj.salary=5000 
# # dhiraj.salary=5500
# print(suraj.salary)
# print(dhiraj.salary)

class Employee:
    company = "google"
    def getsalary(self, signature):
        print(f"Salary fot this employee working in {self.company} is {self.salary}\n {signature}")
    @staticmethod
    def greet():
        print("Good Morning, sir")
suraj = Employee()
suraj.salary = 100000
suraj.getsalary("thanks")
suraj.greet()
