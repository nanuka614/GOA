def remove_first_last(lst):
    return lst[1:-1]

chars = ['a', 'b', 'c', 'd']
print(remove_first_last(chars))



def multiply_sums(list1, list2):
    sum1 = sum(list1)
    sum2 = sum(list2)
    return sum1 * sum2

numbers1 = [1, 2, 3]
numbers2 = [4, 5]
print(multiply_sums(numbers1, numbers2))



def double_numbers(lst):
    new_list = []
    i = 0
    while i < len(lst):
        new_list.append(lst[i] * 2)
        i += 1
    return new_list

nums = [1, 2, 3]
print(double_numbers(nums))



def names_starting_with_n(names):
    new_list = []
    for name in names:
        if name.startswith("N"):
            new_list.append(name)
    return new_list

names = ["Nino", "Ana", "Nika", "Giorgi"]
print(names_starting_with_n(names))