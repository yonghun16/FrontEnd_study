# while 반복문

jump_count = 0  # 줄넘기 횟수 설정

while jump_count != 20:
    jump_count += 1
    print("줄넘기를 %d회 했습니다." % (jump_count))

evennumbers = []  # 빈 리스트 생성
num = 2

while num <= 30:
    evennumbers.append(num)
    num += 2
print(evennumbers)
