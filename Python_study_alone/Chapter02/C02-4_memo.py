#-------------------------------
# 02-4 문자열의 format()함수
#-------------------------------


# format() 함수로 숫자를 문자열로 변환하기
string_a = "{}".format(10)
# 출력하기
print(string_a)
print(type(string_a))


# format() 함수로 숫자를 문자열로 변환하기
format_a = "{}만 원".format(5000)
format_b = "파이썬 열공하여 첫 연봉 {}만 원 만들기".format(5000)
format_c = "{} {} {}".format(3000, 4000, 5000)
format_d = "{} {} {}".format(1, "문자열", True)


# 정수를 특정 칸에 출력하기
output_a = "{:d}".format(52)
# 특정 칸에 출력하기
output_b = "{:5d}".format(52)    # 5칸
output_c = "{:10d}".format(52)   # 10칸
# 빈칸을 0으로 채우기
output_d = "{:05d}".format(52)   # 양수
output_e = "{:05d}".format(-52)  # 음수


# 기호와 함께 출력하기
output_f = "{:+d}".format(52)    # 양수
output_g = "{:+d}".format(-52)   # 음수
output_h = "{: d}".format(52)    # 양수 : 기호 부분 공백
output_i = "{: d}".format(-52)   # 음수 : 기호 부분 공백


# 조합하기
output_h = "{:+5d}".format(52)     # 기호를 뒤로 밀기: 양수
output_i = "{:+5d}".format(-52)    # 기호를 뒤로 밀기: 음수
output_j = "{:=+5d}".format(52)    # 기호를 앞으로 밀기: 양수
output_k = "{:=+5d}".format(-52)   # 기호를 앞으로 밀기: 음수
output_l = "{:+05d}".format(52)    # 0으로 채우기: 양수
output_m = "{:+05d}".format(-52)   # 0으로 채우기: 양수


# float 자료형 기본
output_a = "{:f}".format(52.273)
output_b = "{:15f}".format(52.273)   # 15칸 만들기
output_c = "{:+15f}".format(52.273)  # 15칸에 부호 추가하기
output_d = "{:+015f}".format(52.273) # 15칸에 부호 추가하고 0으로 채우기


# 소수점 아래 자릿수 지정하기
output_a="{:15.3f}".format(52.273)
output_b="{:15.2f}".format(52.273)
output_c="{:15.1f}".format(52.273)


# 의미 없는 소수점 제거하기
output_a = 52.0
output_b = "{:g}".format(output_a)


# 문자열 양옆의 공백 제거하기: strip()
# strip()  : 문자열 양옆의 공백을 제거
# lstrip() : 문자열 왼쪽의 공백을 제거
# rstrip() : 문자열 오른쪽의 공백을 제거
intput_a = """
   안녕하세요
   """
input_b = intput_a.strip()


# 문자열의 구성 파악하기
string_a = "TrainA10".isalnum()
string_b = "10".isdigit()


# 문자열 찾기: find()와 rfind()
# find() 왼쪽 부터 찾아서 처음 등장하는 위치를 찾음
# rfind() 오른쪽 부터 찾아서 처음 등장하는 위치를 찾음
output_a = "안녕안녕하세요".find("안녕")   # 0
output_b = "안녕안녕하세요".rfind("안녕")  # 2


# 문자열과 in 연산자
print("안녕" in "안녕하세요")  # true


# 문자열 자르기: split()
a = "10 20 30 40 50".split(" ")  # 실행결과로 리스트가 나옴
