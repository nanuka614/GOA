consonants = "ბგდვზკლმნპრკსტფქღყშჩჯხცჩთთ" 
vowels = "აეიოუ"

while True:
    word = input("შეიყვანე სიტყვა: ")
    first = word[0].lower()   
    last = word[-1].lower()   

    if first not in vowels and last not in vowels:
        print("სწორი სიტყვაა")
        break
    else:
        print("არასწორია, სცადე თავიდან")



vowels = "აეიოუ"
attempts = 0

while True:
    word = input("შეიყვანე სიტყვა: ")
    attempts += 1
    first = word[0].lower()
    last = word[-1].lower()
    
    if first not in vowels and last not in vowels:
        print(f"სწორი სიტყვაა სცადე {attempts}–ჯერ")
        break
    else:
        print("არასწორია, სცადე თავიდან")





vowels = "აეიოუ"
saved_words = []
print("შეიყვანე 10 სიტყვა:")

for i in range(10):
    word = input(f"{i+1}-ე სიტყვა: ")
    first = word[0].lower()
    last = word[-1].lower()
    
    if first not in vowels and last not in vowels:
        saved_words.append(word)

print("სწორი სიტყვები:", saved_words)