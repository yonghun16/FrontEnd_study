# 딕셔너리 자료형에 대해서
# - {Key:value} 구조
dic1 = {"apple": "사과", "bird": "새", "bug": "벌레"}
print(dic1)
dic2 = dict(apple="사과", bird="새", bug="벌레")
print(dic2, "\n")


dic = {}
dic["apple"] = "사과"
dic["grape"] = "포도"
dic["fruits"] = ["바나나", "딸기", "오렌지"]
print(dic, "\n")


dic1 = {"apple": "사과", "bird": "새", "bug": "벌레"}
print(dic1)
del dic1["bug"]     # key값을 삭제
print(dic1, "\n")


dic = {"num": 3}
dic["num"] = 4     # 중복저장되지 않고 4로 수정
# dic[[1]] = True   # 리스트는 key로 저장할 수 없음
dic[False] = 0     # value는 어느 값이든 저장 가능
dic[True] = [1, 10, 100]          # 딕셔너리 value로 리스트
dic["nums"] = {"one": 1, "two": 2}  # 딕셔너리 value로 딕셔너리
print(dic)
