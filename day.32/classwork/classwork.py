#  SET-ის პლიუსები
#  ელემენტები არ მეორდება (automatically removes duplicates)
#  სწრაფია ძიება, დამატება და წაშლა
#  მარტივია მათემატიკური ოპერაციების გამოყენება (union, intersection...)
#  შეიძლება სხვადასხვა ტიპის ელემენტების შენახვა (მაგ: str, int)


#  SET-ის მინუსები
#  ელემენტების რიგი არ არის დალაგებული (unordered)
#  ვერ შეიცავს ცვლად ტიპებს (მაგ. list, dictionary)
#  ინდექსით ელემენტებზე წვდომა შეუძლებელია (set[0] არ იმუშავებს)
#  არ არის შესაფერისი, როცა საჭიროა მონაცემთა ზუსტი თანმიმდევრობა




a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a.union(b))  
print(a | b)      




print(a.intersection(b))  
print(a & b)      



print(a.difference(b))  
print(a - b)      



print(a.symmetric_difference(b))  
print(a ^ b)   

a.add(7)
print(a)

a.remove(2)
print(a)

a.clear()
print(a)