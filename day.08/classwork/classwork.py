name = input("შეიყვანე შენი სახელი: ")

for i in range(10):
    print(name)


names = ""

for i in range(5):
    name = input("შეიყვანე სახელი: ")
    names += name + ", "

print("შეყვანილი სახელები:", names)