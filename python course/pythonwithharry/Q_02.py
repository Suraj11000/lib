class Animal:
    animal_type = "Mammala"

class Pets(Animal):
    color = "White"

class Dog(Pets):
    @staticmethod
    def bark():
        print("Bow bow!")

a = Animal()
b = Pets()
c = Dog()
print(c.animal_type)