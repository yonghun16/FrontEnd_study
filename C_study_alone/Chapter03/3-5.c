#include <stdio.h>

int main(void)
{
    // 유효 숫자 확인
    float ft = 1.234567890123456789;
    double db = 1.234567890123456789;
    
    printf("float형 변수의 값  : %.20f\n", ft);
    printf("double형 변수의 값 : %.20lf\n", db);

    return 0;
}
