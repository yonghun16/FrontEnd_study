# 전역변수와 지역변수

num = 3  # 전역 변수 num 선언
globallist = []  # 전역 변수 globallist 선언


def mulNum(a):   # 지역 변수 a 선언
    a = a * num
    globallist.append(3)
    return a     # a 소멸


def subNum(a):   # 지역 변수 a 선언
    a = a - num
    print(a)     # a 소멸


res = mulNum(4)  # 전역 변수 res 선언
print(res)

subNum(7)
print(num)
print(globallist)  # 프로그램 종료, 전역 변수 num, res, globallist 소멸
print()


# 전역변수 수정
# - global 사용
num = 1  # 전역변수 선언


def plusNum():
    global num   # 전역변수를 함수 내에서 사용함을 선언
    num += 1
    print("함수 내에서 num = ", num)


plusNum()
print("함수 밖에서 num = ", num)


# - global 미사용 (추천)
num = 1  # 전역변수 선언


def plusNum(a):
	a += 1
	print(a)
	return a

num = plusNum(num)
print("함수 밖에서 num = ", num)
