class Employee:
    company = "Tesla"
    
    def __init__(self, name, salary, subunit):
        self.name=name
        self.salary=salary
        self.subunit=subunit
        print("Use of constructor.")

    def getdetails(self):
        print(f"The name of employee is {self.name}")
        print(f"The salary of employee is {self.salary}")
        print(f"The subunit of employee is {self.subunit}")


    def getsalary(self, signature):
        print(f"Salary fot this employee working in {self.company} is {self.salary}\n {signature}")

    @staticmethod
    def greet():
        print("Good Morning, sir")
suraj = Employee("suraj",10000,"spacex")
suraj.getdetails()