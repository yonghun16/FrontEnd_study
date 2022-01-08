#include <stdio.h>

int main()
{
	int	c;

	c = getchar() != EOF;
	printf("c = getchar() != EOF is %d\n", c);

    return 0;
}
