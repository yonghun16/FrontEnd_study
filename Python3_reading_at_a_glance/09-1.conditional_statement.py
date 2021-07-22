# 조건문
if "":
    print("빈칸")
elif "":
    print("공백")

if [1, 2, 3]:
    print("리스트")
elif []:
    print("빈리스트")

if 0:
    print("0")
elif 1:
    print("1")
print()


ch = True
num = 1
while ch:      # while True
    print(num, "실행")
    num += 1
    if num == 20:
        ch = False


# and, or, not
money = int(input("가지고 있는 금액을 입력하세요: "))
if money >= 5000:
    print("택시를 탈 수 있습니다.")
elif money < 5000 and money >= 2000:
    print("버스를 탈 수 있습니다.")
else:
    print("걸어가야 합니다.")
print()


# 요소 in 튜플/리스트/문자열
li = [10, 20, 30, 'a', 'b', 'c', "hello"]

if 20 in li:
    print("요소가 존재합니다.")

if "Hello" not in li:
    print("요소가 존재하지 않습니다.")
else:
    print("요소가 존재합니다.")
