# 문자열의 인덱싱
# 인덱싱은 문자열의 요솟값에 직접 접근 할 수 있다. 

print(ord("A"))  # 문자열을 아스키코드로 변환
print(chr(65))   # 아스키코드에서 문자열로 변환
print(chr(int('1000001', 2))) #2진수를 문자열로 변환

str = "apple"
print("str의 첫 번째 문자는", str[0], "네 번째 문자는", str[3])

a = "Hello goorm!"
b = a[4] + a[5] + a[6]
print(a[0], a[1], a[2], a[3], a[4])
print(b)

a = "Hello goorm!"
b = a[-1] + a[-2] + a[-3]
c = a[-0]
print(b)
print(c)


# 문자열의 슬라이싱

a = "Hello goorm!"
b = a[0:5]
print(b)      #Hello

a = "Hello goorm!"
b = a[:5]
c = a[5:]
print(b)     #Hello
print(c)     # goorm!

a = "Hello goorm!"
b = a[0:-5]
c = a[6:-11]
print(b)
print(c)