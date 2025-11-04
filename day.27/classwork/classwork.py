
word = input("Enter a word: ")

if len(word) > 5:
    print(word.lower())  
else:
    print(word.upper())  



def find_letter(text, letter):
    for i in range(len(text)):
        if text[i] == letter:
            return i
    return -1



def show_message():
    print("This is a void function")

def get_message():
    return "This function returns a string"



print(find_letter("programming", "g"))
show_message()
print(get_message())