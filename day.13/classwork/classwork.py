heart_rate = int(input("შეიყვანეთ თქვენი გულის ცემა (წუთში): "))

if heart_rate > 180:
    print("გულის ცემა მაღალია")
elif 160 <= heart_rate <= 170:
    print("გულის ცემა ნორმალურია")
elif heart_rate < 160:
    print("გულის ცემა დაბალია")
else:
    print("გთხოვთ, შეიყვანეთ სწორი მონაცემი")





age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if age < 0:
    print("არასწორი ასაკი")
elif age < 13:
    print("ბავშვი")
elif 13 <= age <= 19:
    print("თინეიჯერი")
elif 20 <= age <= 59:
    print("ზრდასრული")
else:
    print("პენსიონერი")