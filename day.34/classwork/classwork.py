fruits = ("apple", "banana", "orange", "grape", "kiwi")
print("პირველი ელემენტი:", fruits[0])
print("ბოლო ელემენტი:", fruits[-1])



numbers = (10, 20, 30, 40)
num_list = list(numbers) 


num_list[1] = 99  
numbers = tuple(num_list)
print("ახალი tuple შეცვლილი ელემენტით:", numbers)


tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print("გაერთიანებული tuple:", combined)


multiplied = tuple1 * 3
print("გამრავლებული tuple:", multiplied)
