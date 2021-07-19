# == 리스트의 연산과 수정 ==
# 1.리스트의 덧셈과 반복
print("\n1.리스트의 덧셈과 반복")
evennumbers = [2, 4, 6, 8, 10]
oddnumbers = [1, 3, 5, 7, 9]

numbers = evennumbers + oddnumbers
print(numbers)
print(numbers * 4)


# 2.리스트 수정
# - 리스트 요소를 수정하기 위해서 인덱스로 접근이 가능
# - 리스트의 요소로 정수, 실수, 문자열, 리스트도 사용 가능
# - 리스트도 인뎅싱과 슬라이싱이 가능
print("\n2.리스트 수정")
numbers = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
print("numbers 초기화 -> ", numbers)
numbers[4] = 100
print("numbers[4] = 100 -> ", numbers)
numbers[2] = "hello"
print("numbers[2] = \"hello\" -> ", numbers)
numbers[8] = ['a', 'b', 'c']
print("numbers[8] = [\'a\', \'b\', \'c\'] -> ", numbers)

numbers = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
print("numbers 초기화 -> ", numbers)
numbers[4:5] = [80]
print("numbers[4:5] = [80] -> ", numbers)
numbers[2:6] = "hello"
print("numbers[2:6] = \"hello\" -> ", numbers)

print("\n3.리스트의 삭제")
numbers = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
print("numbers 초기화 -> ", numbers)
numbers[3] = ""
print("numbers[3] 삭제 -> ", numbers)
del numbers[4]
print("numbers[4] 공간까지 삭제 -> ", numbers)
del numbers[:5]
print("numbers[:5] 공간까지 삭제 -> ", numbers)
del numbers  # 객체 자체를 삭제
