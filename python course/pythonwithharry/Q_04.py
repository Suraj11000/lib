class Complex:
    def __init__(self,r,i):
        self.real = r
        self.imaginary =  i
    def __add__(self,c):
        return Complex(self.real + c.real, + self.imaginary + c.imaginary)
    
    def __str__(self):
        return f"{self.real} + {self.imaginary}i"
    
    def __mul__(self,c):
        mulreal = self.real * c.real - self.imaginary*c.imaginary
        mulimg = self.real * c.imaginary - self.imaginary*c.real
        return Complex(mulreal,mulimg)
    
    def __str__(self):
        return f"{self.real} + {self.imaginary}i"


        # return Complex(self.real * c.real, * self.imaginary * c.imaginary)
    
    
c1 = complex(1,4)
c2 = complex(8,5)
print(c1 + c2)
print(c1*c2)