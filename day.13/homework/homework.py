x=int(input("enter your wneva: "))
y=int(input("enter your wneva: "))

if x>140 or y>90:
    print("magali wneva")
elif x<90 or y<60:
    print("dabali wneva")
else: print("wneba is good!")





age = int(input("შეიყვანეთ თქვენი ასაკი: "))
weight = float(input("შეიყვანეთ თქვენი წონა (კგ): "))

if age < 10:
    if weight < 20:
        print("წონა დაბალია")
    elif 20 <= weight <= 40:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")
elif 10 <= age <= 17:
    if weight < 40:
        print("წონა დაბალია")
    elif 40 <= weight <= 65:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")
else:  # age 18 ან მეტი
    if weight < 50:
        print("წონა დაბალია")
    elif 50 <= weight <= 90:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")




age = int(input("შეიყვანეთ თქვენი ასაკი: "))
heart_rate = int(input("შეიყვანეთ გულის ცემა (წუთში): "))

if age < 30 and heart_rate < 140:
    print("შეგიძლიათ მეტი ივარჯიშოთ")
elif age >= 30 and heart_rate > 170:
    print("დასვენება გჭირდებათ")
else:
    print("აქტივობის დონე ნორმალურია")







age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if 0 <= age <= 12:
    print("ბევრი ვიტამინიანი საკვები")
elif 13 <= age <= 25:
    print("ენერგიის მომცემი საკვები")
elif 26 <= age <= 59:
    print("ბალანსირებული რაციონი")
elif age >= 60:
    print("დაბალკალორიული და მსუბუქი საკვები")
else:
    print("არასწორი ასაკი")