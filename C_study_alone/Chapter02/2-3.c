#include <stdio.h>

int main(void)
{
    printf("Be happy\n");
    printf("1234567890123456789\n");
    printf("My\tfriend\n");  // 탭이동(\t)
    printf("Goot\bd\tchance\n"); // 앞으로 한칸 이동(\b)
    printf("Cow\rW\a\n");  // 맨 앞으로 이동(\r) W 입력(C가 W로 교체됨)후 벨소리(\a)

    return 0;
}
