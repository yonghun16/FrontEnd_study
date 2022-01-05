# 모듈 imort calculator.py
# 예제1
import calculator

add_result = calculator.add(10, 2)
sub_result = calculator.sub(10, 2)
mul_result = calculator.mul(10, 2)
div_result = calculator.div(10, 2)
mod_result = calculator.mod(10, 2)

print(add_result)  # => 12
print(sub_result)  # => 8
print(mul_result)  # => 20
print(div_result)  # => 5
print(mod_result)  # => 0


# 예제2
# form 모듈이름 import 모듈함수

from my_module import three_times
from my_module import ten_times

print(three_times(10))  # => 30
print(ten_times(10))    # => 100