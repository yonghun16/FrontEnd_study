# 집합
# - 집합은 중복과 순서가 없다. 중괄호({})를 이용하여 선언한다
# - 집합의 특징
#   - 1) 요소의 순서가 없다.
#   - 2) 중복되는 값은 한 개만 저장한다.
#   - 3) 딕셔너리는 key만 저장한다.
print("# 집합")
s1 = {3, 2, 5, 1, 8, 4, 3}
print(s1, type(s1), "\n")

str = "Hello goorm!!!"
print(str, type(str))
s0 = set(str)
print(s0, type(s0), "\n")

l = ['a', 'a', 'c', "goorm", "hello", 10, 30, 30]
print(l, type(l))
s1 = set(l)
print(s1, type(s1), "\n")

d = {"Anna": 25, "Bob": 23}
print(d, type(d))
s2 = set(d)
print(s2, type(s2), "\n")

t = (190,)
print(t, type(t))
s3 = set(t)
print(s3, type(s3), "\n")


# 집합의 자료형 변환
print("\n# 집합의 자료형 변환")
str = "Hello goorm!!!"
print(str, type(str))

s0 = set(str)
print(s0, type(s0))

newstr = tuple(s0)   # 튜플로 변환
print(newstr, newstr[4], newstr[5:], type(newstr))  # 인덱싱, 슬라이싱 가능

l = [1, 2, 3, 4, 5, 6, 7, 8]
print(l, type(l))

s1 = set(l)
print(s1, type(s1))

newlist = list(s1)   # 리스트로 변환
print(newlist, newlist[4], newlist[:-5], type(newlist), "\n")


# 집합 함수
# - 교집합 &, intersection()
# - 합집합 |, union()
# - 차집합 -, difference()
print("\n# 집합 함수")
s1 = set([2, 4, 6, 8, 10])
s2 = set([1, 2, 3, 4, 5, 6, 7, 8])
print("s1 = ", s1)
print("s2 = ", s2)

interset = s1 & s2  # 교집합
print("\ns1 & s2 = ", interset)
print(s1.intersection(s2), s2.intersection(s1))

uniset = s1 | s2
print("\ns1 | s2 = ", uniset)
print(s1.union(s2), s2.union(s1))

difset1 = s1 - s2
difset2 = s2 - s1
print("\ns1 - s2 = ", difset1)
print("s2 - s1 = ", difset2)


# 집합의 연산
s1 = {1, 2, 3, 4}

s1.add("hello")
print("\n", s1)

s1.add(10)
print(s1)

s1.add((1, 2, 3))  # add() 사용 시 튜플/문자열은 값 하나로 인식
print(s1)


s1.update(['a', 'b', 'c'])  # set()과 같이 여러 값을 한 요소로 저장
s1.update((11, 12))
print(s1)

s1.update("zyx")  # s1.add("hello")와의 차이
print(s1)

s1.remove("hello")  # 하나의 값만 제거 가능
print(s1)
