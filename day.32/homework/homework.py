A = {1, 2, 3, 4, 5}
print(len(A))
print(3 in A)
A.add(6)
print(A)
A.remove(2)
print(A)



A = {1, 2, 3}
B = {3, 4, 5}
print(A.union(B))
print(A.intersection(B))
print(A.difference(B))



A = {'a', 'b', 'c'}
B = {'b', 'c', 'd'}
print(A.symmetric_difference(B))