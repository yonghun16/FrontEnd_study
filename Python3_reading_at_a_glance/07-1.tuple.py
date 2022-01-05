# 튜플과 집합
t1 = ('a', 'b', 'c', 1, 2, 3)
print(t1, t1[2])

t2 = ("hello",)  # 하나의 값이면 뒤에 콤마 입력
print(t2)

t3 = "goorm", 'b', "hello", 1, 2, 3  # 괄호 생략 가능
print(t3, t3[2])

s1 = list(set([1, 2, 3]))
t4 = ([1, 2, 3], {"사과": "apple", "포도": "grape"}, ('a', 'b', 'c'), s1)
print(t4, t4[1])

t4[3][2] = "edit"  # 중요 : 튜플 요소가 Mutable하면 수정 가능
t4[1]["사과"] = "edit"
t4[0][2] = "edit"
print(t4)

# 튜플의 연산
t1 = ('a', 'b', 'c', 1, 2, 3)
t2 = ("hello",)
t3 = "goorm", 'b', "hello", 1, 2, 3

print(t1 + t2 + t3)   # 튜플 결합
print(t2 * t3[4])     # 곱셈으로 반복 출력
print(t1[1:3])        # 튜플 슬라이싱

t = (13, 6, 9)
print(t)
print(t.index(13), t.count(6))  # 리스트의 함수 일부 사용가능.
