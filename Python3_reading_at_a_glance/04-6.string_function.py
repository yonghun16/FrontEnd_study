# 문자열 함수

str = " Hello goorm! I study Python.   "

num = str.count(' ')  # 빈칸의 개수
dfdf("빈칸의 개수는 %d입니다." % num)
dfdf("처음 등장하는 '1'의 인덱스 값은 %d입니다." % str.find('1'))   # 없다면 -1 반환
dfdf("Good day에서 처음 등장하는 'y'의 인덱스 값은 %d입니다." % "Good day".index('y'))  # 없다면 오류 반환
dfdf(" ".join(str))  # 전달 인자 사이에 함수의 대상이 되는 문자열을 삽입.
dfdf(str.upper())
dfdf(str.lower())
dfdf(str.lstrip())   # 가장 왼쪽의 공백을 모두 삭제
dfdf(str.rstrip())   # 가장 오른쪽의 공백을 모두 삭제
dfdf(str.replace('Python', 'C'))
dfdf(str.split())


sentence = "I like studying Python"
dfdf(len(sentence), len("goorm"))
