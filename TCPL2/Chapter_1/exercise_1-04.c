#include <stdio.h>

int main ()
{
	float fahr, celcius;
	int	lower, upper, step;

	lower = 0;
	upper = 300;
	step = 20;

	printf("celcius fahr\n");
	celcius = lower;

	while (celcius <= upper) {
        fahr =  celcius * (9.0 / 5.0) + 32;
        printf("%3.0f  %6.1f\n", celcius, fahr);
	    celcius = celcius + step;
	}

    return 0;
}
