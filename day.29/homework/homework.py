def count_chars_in_words(sentence):
    words = sentence.split()
    for word in words:
        print(f"'{word}' has {len(word)} characters")

text = "გამარჯობა როგორ ხარ"
count_chars_in_words(text)




def remove_extra_spaces(sentence):
    words = sentence.split()  
    new_sentence = " ".join(words)  
    return new_sentence

text = "ეს   არის   ტესტი   ტექსტი"
print(remove_extra_spaces(text))





def replace_spaces_with_dash(sentence):
    words = sentence.split()
    new_sentence = "-".join(words)
    return new_sentence

text = "ეს არის ტესტი ტექსტი"
print(replace_spaces_with_dash(text))