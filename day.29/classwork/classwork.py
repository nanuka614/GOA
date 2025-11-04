
def count_words(sentence):
    words = sentence.split()
    return len(words)





def sum_of_evens(numbers):
    total = 0
    for n in numbers:
        if n % 2 == 0:
            total += n
    return total
