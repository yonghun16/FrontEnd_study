#문자열 포멧팅
# %S  = 문자열
# %c  = 문자 1개
# %d  = 정수(integer)
# %f  = 실수/부동소수
# %x  = 16진수
# %%  = %를 출력

city = "seoul"
today = 12
day = "화요일"
temperature = 26
announcement = "%s의 %d일 %s 기온은 %d도 입니다." %(city, today, day, temperature)
print(announcement)
print("%s의 %d일 %s 기온은 %d도 입니다." %(city, today, day, temperature))

# ------------------

name = "goorm"
age = 25
height = 181.523456

print("저의 이름은 %s입니다." %name)

print("저는 %d살입니다." %25)
print("제 나이는 %d살입니다." %age)
print("제 나이는 %s살입니다." %age)
print("제 나이는 %.2f살입니다." %age)

print("저의 키는 %fcm입니다." %height)
print("저의 키는 %.2fcm입니다." %height)  #소수 둘째자리까지 표현
print("저의 키는 %dcm입니다." %height)

print("저의 성은 '%c'입니다." %"남")

print("저의 나이는 16진수로 표현하면 %x, 8진수로 표현하면 %o입니다." %(age, age))

print("%10d %010d" %(10, 10))


# ------------------
n1 = 2
n2 = 6
print("%3d x %d = %d" %(n1, n2, n1*n2))