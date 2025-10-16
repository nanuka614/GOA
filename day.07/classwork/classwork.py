a=1
b=1

while a==b:
    print("hello")



name=input("enter your name: ")
for i in range(10):
    print("my name is:" , name)



    num=int("enter any number: ")
    while num <= 100:  #head
        num=int(input("enter something higher than 100: "))  #body
print("number is" , num)



names = []

for i in range(5):
    name= input("enter your name: ")
    names.append(name)

res= ", ".join(names)
print(res)