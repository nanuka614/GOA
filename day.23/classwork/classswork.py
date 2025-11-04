vowels = "aeiouAEIOU"
word = input("Enter a word: ")
while not (word[0] in vowels and word[-1] in vowels):
    word = input("Try again. Enter a word that starts and ends with a vowel: ")
print("Good! Your word:", word)