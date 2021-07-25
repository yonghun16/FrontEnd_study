// https://edu.goorm.io/learn/lecture/554/알고리즘-문제해결기법-입문/lesson/22753/문제1b-배열의-최대값

#include <stdio.h>
#include <stdlib.h>

/**
 * 배열의 최대값을 계산하는 함수.
 *
 * @param data
 * @param n
 * @return data[0] ~ data[n-1]중 최대값.
 */
int getMax(int data[], int n)
{
    int answer = data[0];
    
    for(int i=0; i<n; i++){
        if (answer < data[i]){
            answer = data[i];
        }
    }

    return answer;
}

int main()
{
    int n;
    int* data;

    scanf("%d", &n);
    data = (int*)malloc(sizeof(int)*n);

    for (int i = 0; i < n; i++) {
        scanf("%d", &data[i]);
    }

    int answer = getMax(data, n);

    printf("%d\n", answer);

    free(data);
    return 0;
}
