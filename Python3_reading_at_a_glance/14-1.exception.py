# 예외처리
# try:
#   실행할 코드
# except 에러이름 as 메세지변수:
#   에러 발생시 실행할 코드
try:
    10 / 2
except ZeroDivisionError as e:
    print(e)
else:
    print("Success!")

    
# try ~ finally 구문
try:
    10 / 0
except ZeroDivisionError as e:
    print(e)
else:
    print("Success!")
finally:
	print("ZeroDivisionError Check")
    
    
# 오류를 회피하는 방법
try:
    10 / 0
except ZeroDivisionError:
    pass    # pass 사용
    
    
# 오류를 발생시키는 법
try:
    raise NameError  # 오류를 발생시킴 raise로 
except NameError:
    print("NameError occurred")