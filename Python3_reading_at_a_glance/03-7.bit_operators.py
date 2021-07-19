# 비트연산자
# 비트에 대한 안다면 코드를 좀 더 효율적으로 짤 수 있다.

a = 0b10110
b = 0b10011
print(a, b)

print(a&b)
print(a|b)
print(a^b)

a = 3
a &= 2
print("a &= 2 : ", a)
a |= 5
print("a |= 5 : ", a)
a ^= 4
print("a ^= 4 : ", a)