# 리스트 값 할당
# - 빈 리스트를 먼저 생성하고 값을 초기화하면 오류 발생
# ---------------------
# drawer = []
# drawer[0] = "양말"    // 에러
# ---------------------
drawer = []
drawer.append("양말")    # 공간을 마련해준 뒤 할당
print(drawer, drawer[0])

drawer.extend(["속옷", "모자", "반팔", "바지"])
print(drawer)

del drawer[3]   # index 3번 공간과 값을 삭제
drawer[3] = ""  # index 3번 값을 공백으로 수정함. 
print(drawer)