class A:
    def Feature1(sself):
        print("Feature 1 working")

    def Feature2(self):
        print("Feature 2 working")

class B(A):
    def Feature3(sself):
        print("Feature 3 working")

    def Feature4(self):
        print("Feature 4 working")

class C(B):
    def Feature5(self):
        print("Feature 5 working")

    def Feature6(self):
        print("Feature 6 working")

a1 = A()
b1 = B()
a1.Feature1()
a1.Feature2()
c1 = C()
c1.Feature1()