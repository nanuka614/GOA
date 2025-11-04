a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

print("The sum is:", a + b + c)




for i in range(10, 0, -1):
    print(i)





for i in range(1, 101):
    if i % 2 != 0:
        print(i)







for i in range(1, 101):
    if i % 3 == 0:
        print(i)







total = 0

for i in range(1, 101):
    total += i

print("The sum of numbers from 1 to 100 is:", total)