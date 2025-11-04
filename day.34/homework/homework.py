numbers = (1, 2, 3, 4, 5)
colors = ('red', 'blue', 'green')
combined = numbers + colors
print(combined)



my_tuple = (10, 20, 30, 40)
print(30 in my_tuple)
print(50 in my_tuple)


nums = (1, 2, 3, 4, 5, 6, 7, 8)
for n in nums:
    if n % 2 == 0:
        print(n, end=' ')
print()



numbers_tuple = (3, 6, 8, 1, 9, 12, 4)
score = 0
for n in numbers_tuple:
    if n % 2 == 0:
        print(n, end=' ')
        score += 1
print()
print(score)