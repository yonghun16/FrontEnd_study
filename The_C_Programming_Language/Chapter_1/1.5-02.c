#include <stdio.h>

/* copy input to output; 2st verstion */

int main()
{
    int c;

    while ((c = getchar()) != EOF)
        putchar (c);

    return 0;
}
