#include <stdio.h>

int main() {
    int c, nl, space, tab;

    nl = 0;
    space = 0;
    tab = 0;

    while ((c = getchar()) != EOF)
        if (c == '\n')
            ++nl;
        else if(c == ' ')
            ++space;
        else if(c == '\t')
            ++tab;

    printf("newline = %d\n", nl);
    printf("space = %d\n", space);
    printf("tab = %d\n", tab);

    return 0;
}
