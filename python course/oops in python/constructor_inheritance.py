class A:
    def __init__(self):
        print("in A init")
    def Feature1(self):
        print("Feature 1 working")

    def Feature2(self):
        print("Feature 2 working")

class B:

    # def __init__(self):
        # super().__init__( )
        # print("in B init")
    def Feature3(self):
        print("Feature 3 working")

    def Feature4(self):
        print("Feature 4 working")

class C(A,B):
    def __init__(self):
        super().__init__()
        print("in C init")

    def feat(self):
        super().Feature2()

a1 = C()
a1.Feature1()


# MRO = method resolution order