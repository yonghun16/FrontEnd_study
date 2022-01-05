# 객체와 클래스 변수
class Triangle1:
    height = 10
    bottom = 4


tri1 = Triangle1()
print(tri1.height)
print(tri1.bottom)

tri2 = Triangle1()
print(tri2.height)
print(tri2.bottom)

tri1.height = 8
print(tri1.height)
print(tri2.height)
print()


# 인스턴스 변수와 메소드
# 메소드 - 클래스 안에서 어떠한 기능을 수행하는 함수
# 매개변수 self - 사용자가 전달 인자를 입력하지 매개변수 (메소드를 지칭)
class Triangle2:
    def setData(self, b, h):
        self.b = b
        self.h = h


tri1 = Triangle2()     # 객체 생성
tri1.setData(4, 5)     # 객체 메소드 실행
print(tri1.b, tri1.h)
print()


class Triangle3:
    def setData(self, b, h):
        self.b = b
        self.h = h

    def area(self):    # def area() → 불가능
        return self.b * self.h / 2


tri1 = Triangle3()     # 객체 생성
tri1.setData(4, 5)     # 객체 메소드 실행

tri2 = Triangle3()
tri2.setData(6, 10)  # 객체 메소드 실행

print(tri1.b, tri1.h, tri1.area())
print(tri2.b, tri2.h, tri2.area())
print()


# 클래스 변수와 인스턴스 변수 비교
class Triangle4:
    cal_count = 0

    def __init__(self, b, h=5):  # 클래스 초기화 메소드 __init__
        self.b = b
        self.h = h

    def area(self):
        Triangle4.cal_count += 1

        return self.b * self.h / 2


tri1 = Triangle4(4)
tri2 = Triangle4(6, 10)

print(tri1.b, tri1.h, tri1.area(), tri1.cal_count)
print(tri2.b, tri2.h, tri2.area(), tri2.cal_count)

print(Triangle4.cal_count)
