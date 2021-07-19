# 집합
# - 집합은 중복과 순서가 없다. 중괄호({})를 이용하여 선언한다
# - 집합의 특징
#   - 1) 요소의 순서가 없다.
#   - 2) 중복되는 값은 한 개만 저장한다.
#   - 3) 딕셔너리는 key만 저장한다.  
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

d = {"Anna":25, "Bob": 23}
print(d, type(d))
s2 = set(d)
print(s2, type(s2), "\n")

t = (190,)
print(t, type(t))
s3 = set(t)
print(s3, type(s3), "\n")


# 자료형 변환
str = "Hello goorm!!!"
print(str, type(str))

s0 = set(str) 
print(s0, type(s0))

newstr = tuple(s0)   # 튜플로 변환
print(newstr, newstr[4], newstr[5:], type(newstr))  # 인덱싱, 슬라이싱 가능

l = [1,2,3,4,5,6,7,8]
print(l, type(l))

s1 = set(l)
print(s1, type(s1))

newlist = list(s1)   # 리스트로 변환
print(newlist, newlist[4], newlist[:-5], type(newlist))


