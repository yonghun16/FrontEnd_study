# 파일
# - 간단 사용법
f = open("test.txt", 'w')
for i in range(1, 11):
    sentence = "%d번째 줄입니다.\n" % i
    f.write(sentence)
f.close()

# - 파일 읽기 함수
a = open("test.txt", 'r')
for i in range(1, 11):
    data = a.readline()  # 한 줄씩 읽고 그 문자열을 반환
    print(data)
a.close()

a = open("test.txt", 'r')
data = a.readlines()     # 모든 줄 일고, 리스트로 반환
print(data)
a.close()

a = open("test.txt", 'r')
data = a.read()          # 모든 문자열 일고 반환.
print(data)
a.close()

a = open("test.txt", 'r')
while 1:
    line = a.readline()
    if not line:
        break  # line이 None이 되면(=false) 반복문 탈출
    print(line)
a.close()


# 파일 내용 추가하기

f = open("test2.txt", 'w')
data = "1번째 줄입니다.\n"
f.write(data)
f.close()

f = open("test2.txt", 'a')
for i in range(2, 5):
    data = "%d번째 줄입니다.\n" % i
    f.write(data)
f.close()

f = open("test2.txt", 'r')
lines = f.read()
f.close()
print(lines)
