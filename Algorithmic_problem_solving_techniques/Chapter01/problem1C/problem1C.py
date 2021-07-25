# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

# 데이터 N, M, S을 입력받는다
n, m, s = map(int, input().split())

# 공백으로 구분된 N개의 정수(사람들의 키)를 입력받는다
data = [int(word) for word in input().split()]

# 사람들의 수를 셀 변수 count를 0으로 초기화한다
count = 0

# [BEGIN ]
# count 변수에 정답(조사해야 할 사람의 수)이 저장되도록 코드를 작성해보자
for values in data:
    if(values == m or values == s):
        count += 1

# [END]


print(count)
