# 리스트 함수
def print_info(info, numbers):
    line = 33
    print(f"{info: <{line}} → ", numbers)


# - 1.리스트의 추가
# - insert(x, y) → 리스트 x 번째 위치에 y값(리스트 가능)을 추가( 한번에 하나씩)
# - extend(x)    → 리스트 맨 마지막에 '인자'를 병합(추가)
# - append(x)    → 리스트 맨 마지막에 '리스트'를 추가(x는 리스트만 가능)
print("1. 리스트의 추가")
numbers = [2, 4, 6, 8, 10, 1, 3, 5, 6, 9]
print_info("numbers", numbers)

numbers.insert(3, [11, 12, 13])
print_info("numbers.insert(3, [11, 12, 13])", numbers)

numbers.insert(5, 111)
print_info("numbers.insert(5, 111)", numbers)

numbers.extend(['a', 'b', 'c'])
print_info("numbers.extend(['a', 'b', 'c'])", numbers)

numbers.append(['a', 'b', 'c'])
print_info("numbers.append(['a', 'b', 'c'])", numbers)


# - 2. 리스트의 삭제
# - remove(x)   → 리스트에서 가장 처음 나오는 x값을 삭제 (없으면 오류)
# - pop()       → 리스트의 마지막 요소를 반환한 뒤 리스트에서 삭제
print("\n2. 리스트의 삭제")
line = 33
numbers = [2, 4, 6, 8, 1, 3, 5, 7, 3, 19]
print_info("numbers", numbers)

numbers.remove(3)
print_info("numbers.remove(3)", numbers)

return_value = numbers.pop()
print_info("return_value = numbers.pop()", numbers)
print_info("return_value", return_value)


# - 3. 리스트 정렬
# - sort()      → 리스트의 요소를 순서대로 정렬한다.(전달인자 필요없음)
# - reverse()   → 리스트의 순서를 반대로 지집는다. (전달인자 필요없음.)
print("\n3. 리스트의 정렬")
evennumbers = [2, 4, 6, 8]
oddnumbers = [1, 3, 5, 7]
print(evennumbers, oddnumbers)

numbers = evennumbers + oddnumbers
print(numbers)

numbers.sort()
print(numbers)

numbers.reverse()
print(numbers)


# - 4. 리스트 탐색
# - index(x)   → 전달인자가 리스트 안에 있으면 반환, 없으면 오류
# - count(x)   → 리스트에 있는 x값의 개수를 반환
print("\n4. 리스트 탐색")
numbers = [1, 6, 7, 3, 5, 6, 8, 3, 3]
print_info("numbers", numbers)
print_info("numbers.index(6)", numbers.index(6))
print_info("numbers.count(3)", numbers.count(3))
