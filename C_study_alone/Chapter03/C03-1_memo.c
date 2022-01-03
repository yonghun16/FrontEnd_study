/*----------------------
 * 03-1. 변수
 * --------------------*/

#include <stdio.h>
#include <string.h>

int main(void)
{
    // char형 변수의 사용
    char ch1 = 'A';
    char ch2 = 65;
    printf("문자 %c의 아스키 코드 값 : %d\n", ch1, ch1);
    printf("아스키 코드 값이 %d인 문자 : %c\n", ch2, ch2);

    //unsigned를 잘못 사용한 경우
    unsigned int a;
    a = 4294967295;      // 큰 양수 저장
    printf("%d\n", a);   // %d로 출력
    a = -1;              // 음수 저장
    printf("%u\n", a);   // %u로 출력

    // 유효 숫자 확인
    float ft = 1.234567890123456789;
    double db = 1.234567890123456789;
    printf("float형 변수의 값  : %.20f\n", ft);
    printf("double형 변수의 값 : %.20lf\n", db);

    // char 배열에 문자열 저장
    char fruit[20] = "strawberry";
    printf("딸기 : %s\n", fruit);
    printf("딸기잼 : %s %s\n", fruit, "jam");

    // char 배열에 문자열 복사
    char fruit2[20] = "strawberry";
    printf("%s\n", fruit2);
    strcpy(fruit, "banana");
    printf("%s\n", fruit2);

    //const를 사용한 변수
    int income = 0;                 // 소득액 초기화
    double tax;                     // 세금
    const double tax_rate = 0.12;   // 세율 초기화
    income = 456;                   // 소득액 저장
    tax = income * tax_rate;        // 세금 계산
    printf("세금은 : %.1lf입니다.\n", tax);

    return 0;
}
