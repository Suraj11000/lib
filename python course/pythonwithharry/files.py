# used open function to read the content of a file.
# f=open('sample.txt','r')
# data = f.readline()
# print(data)
# data = f.readline()
# print(data)
# f.close() 

# f=open('another.txt','a')
# f.write("i will become rich now but kindly")
# f.close()

# f=open('another.txt','w')
# f.write("This is nice")
# f.close()

with open('sample.txt','r') as f:
    a=f.read()
print(a)

with open('sample.txt','w') as f:
    a=f.write("kill you")
print(a)