# 딕셔너리 함수
# x.keys()    -> 딕셔너리 x의 key만 모아 객체 형식으로 반환
# x.values()  -> 딕셔너리 x의 values만 모아 객체 형식으로 반환
# x.items()   -> 딕셔너리 x의 key와 values를 튜플로 묶어 반환
# x.clear()   -> 딕셔너리의 모든 값을 삭제(del 키워드는 객체 자체를 삭제)
# x.get(key)  -> x[key]와 마찬가지로 해당 key의 value 반환
# key in x    -> key값이 x딕셔너리에 존재하는지 판별하는 키워드는
mem = {"김구름":25, "박에듀":23, "온라인":24}
print(mem.keys())
names = list(mem.keys())  # 새로운 리스트 변수에 초기화
names.append("윤레벨")
print("새로운 리스트", names)
print("기존 딕셔너리에서 key 모음", list(mem.keys()))

print(mem.values())
print("key와 value를 튜플로", mem.items())
print(mem.get("정판교", "없습니다"), mem.get("온라인", "없습니다"))

exist = '박에듀' in mem
print("박에듀 = ", exist)

exist = '한바로' in mem
print("한바로 = ", exist)

mem.clear()
print(mem)