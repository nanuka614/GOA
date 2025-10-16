i = 1
while i <= 10:
    print(i)
    i += 1 


i = 10
while i >= 1:
    print(i)
    i -= 1 


# while ციკლი მუშაობს მანამ, სანამ პირობა არის ჭეშმარიტი

correct_password = "python123"
input = input("შეიყვანე პაროლი: ")

while input != correct_password:
    print("არასწორი პაროლი. სცადე თავიდან.")
    nput = input("შეიყვანე პაროლი: ")

print("პაროლი სწორია")





n = int(input("შეიყვანე რიცხვი: "))
sum = 0
i = 1

while i <= n:
    sum = sum + i
    i = i + 1

print(sum)
