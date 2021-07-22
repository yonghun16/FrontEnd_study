# for 반복문
# range
for num in range(10):
    print(num)

print()
for a in range(4, 8):
    print("<%d>" % a)

print()
for i in range(3):
    for j in range(5):
        print(i)

print()
li = [1, 3, 5, 6, 7]
for i in range(len(li)):
    print(li[i])
print()

# 딕셔너리 및 리스트에서 사용
dic = {
        "human": "사람",
        "dog": "강아지",
        "carrot": "당근"
        }
oddnums = {1, 3, 5, 7, 9}
evennums = [6, 8, 10, 22, 50]
str = "Hello goorm!"
for i in oddnums:
    print(i, end=' ')
print()
for i in evennums:
    print(i, end=' ')
print()
for key, val in dic.items():
    print(key, val, end=' ')
print()
for num in [1, 2, 3, 4, 5, 6, 7]:
    print(num)
for num in [1, 2, 3, 4, 5, 6, 7]:
    print(num, end=',')
print()


nums1 = [
        [1, 2, 3],
        [4, 5, 6],
        ['a', 'b', 'c']
        ]
nums2 = [
        (1, 2),
        (3, 4)
        ]
for i, j, k in nums1:
    print(i, j, k)
print()

for i, j in nums2:
    print(i, j)


fruits = {
        "apple": "red",
        "banana": "yellow",
        "grape": "purple",
        "melon": "green"
        }
for color in fruits.values():
    print(color, end=' ')
print()

for fruit in fruits.keys():
    print(fruit, end=' ')
print()

for fruit, color in fruits.items():
    print("%s의 색은 %s" % (fruit, color), end=', ')
