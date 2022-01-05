# 클래스의 생정자와 메소드
# 예제 1
class Triangle1:
    def setData(self, b, h):  # 메소드
        self.b = b
        self.h = h


tri1 = Triangle1()  # 객체 생성


# 예제 2 - 생성자 사용 전
class Triangle2:
    def setData(self, b, h):
        self.b = b
        self.h = h

    def area(self):
        return self.b * self.h / 2


tri1 = Triangle2()
tri1.setData(4, 5)

tri2 = Triangle2()
tri2.setData(6, 10)

print(tri1.b, tri1.h, tri1.area())
print(tri2.b, tri2.h, tri2.area())
print()


# 예제 3 - 생성자 사용 후
class Triangle3:
    def __init__(self, b, h):  # 생성자
        self.b = b
        self.h = h

    def area(self):
        return self.b * self.h / 2


tri1 = Triangle3(4, 5)  # 호출하면서 바로 인자 전달
tri2 = Triangle3(6, 10)

print(tri1.b, tri1.h, tri1.area())
print(tri2.b, tri2.h, tri2.area())
print()


# 예제4 - 정적 메소드
# 스테틱 메소드 - 인스턴스나 클래스를 인자로 받지 않는 메소드
class Triangle4:
    cal_count = 0

    def __init__(self, b, h=5):
        self.b = b
        self.h = h

    def area(self):
        Triangle4.cal_count += 1

        return self.b * self.h / 2

    @staticmethod
    def isIsosceles(a, b):  # self나 cls를 인자로 받지 않음.
        Triangle4.cal_count += 1
        return a == b


tri1 = Triangle4(4)  # 밑변 4, 삼각형 객체 생성

print(tri1.b, tri1.h, tri1.area(), tri1.cal_count)
print(tri1.isIsosceles(5, 5), tri1.cal_count)
print(Triangle4.isIsosceles(5, 4))
print()


# 예제 4 - 클래스 메소드
# '클래스 메소드'는 클래스 변수에 접근할 때 사용함.
# cls로 클래스 변수를 전달받음.
class Triangle5:
    cal_count = 0

    def __init__(self, b, h=5):
        self.b = b
        self.h = h

    def area(self):
        Triangle5.cal_count += 1

        return self.b * self.h / 2

    @staticmethod
    def isIsosceles(a, b):
        Triangle5.cal_count += 1
        return a == b

    @classmethod
    def printCount(cls):
        print(cls.cal_count)


tri1 = Triangle5(4)    # 밑변 4 삼각형 객체 생성

print(tri1.b, tri1.h, tri1.area(), tri1.cal_count)
print(Triangle5.isIsosceles(5, 4))

tri1.printCount()       # 인스턴스로 접근
Triangle5.printCount()  # 클래스로 직접 접근
print()


# 예제 5 - 클래스 메소드2
class Store:
    def __init__(self, jjajang, jjampong):
        self.jjajang = jjajang
        self.jjampong = jjampong

    def total_order(self):
        return (self.jjajang + self.jjampong)

    @classmethod
    def same4each(cls, double):
        return cls(double, double)


Order1 = Store(3, 2)
print(Order1.total_order())

Order2 = Store.same4each(3)
print(Order2.total_order())
