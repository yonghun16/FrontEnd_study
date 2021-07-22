# 함수의 역할1
# 함수 선언

year = 2018


def stdInfo(rrn):
    if int(rrn[6]) == 3 or int(rrn[6]) == 4:
        biryear = int(rrn[0]+rrn[1]) + 2000
    else:
        biryear = int(rrn[0]+rrn[1]) + 1900

    age = year - biryear + 1
    birmonth = int(rrn[2] + rrn[3])
    birday = int(rrn[4] + rrn[5])

    if rrn[6] == "2" or rrn[6] == "4":
        gen = "여자"
    else:
        gen = "남자"

    return [age, birmonth, birday, gen]  # 리스트 형식으로 반환


stdlist = []
stdrrn = input("학생의 주민번호를 7자리 입력하세요:")
stdlist.append(stdInfo(stdrrn))
print(stdlist[0])
print()

print()


# 매개변수
def recArea(a, b):
    return a * b


print(recArea(10, 20))
print()


# 가변 인자 매개변수
# - 매개변수 앞에 *만 입력한다.
# - 가변 인자 매개변수 = 인자의 개수가 제한이 없음
# - 가변 인자 매개변수 = 튜플로 자료형이 고정
def subNums(*t):
    print(t, type(t))
    total = 0

    for i in t:
        total = total + i

    return total


print(subNums(1, 5, 32, 3, 4, 57, 5))
print(subNums(5, 29))
print()


def calNums(ch, *t):
    if ch == "sum":
        total = 0
        for i in t:
            total = total + i
    elif ch == "mul":
        total = 1
        for i in t:
            total = total * i
    else:
        print("실행할 수 없습니다.")

    return total


choice = input("덧셈은 sum, 곱셈은 mul를 입력하세요:")
print(calNums(choice, 1, 2, 3, 2, 5, 3, 2))


# 키워드 매개변수
# - 매개변수를 key:value 식으로 받을 수 있다.
# - key는 따옴표를 감싸지 않는다.
# - 가변인자 매개변수랑 같이 쓸 수 있다.

def func(*nums, **kwargs):
    print(nums)
    print(kwargs)


num = 10
func(1, 3, 2, 4, apple="사과", a=num, num=4)
