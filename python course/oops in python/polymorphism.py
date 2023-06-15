# poly = many
# morphism = forms

# Duck Typing
class Vs_code:
    def execute(self):
        print("compiling")
        print("Running")

class MyEditor:

    def execute(self):
        print("spell Check")
        print("var type")


class Laptop:
    def code(self,ide):
        ide.execute()

ide = MyEditor
lap1 = Laptop()
lap1.code(ide)
