// https://edu.goorm.io/learn/lecture/554/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0%EA%B8%B0%EB%B2%95-%EC%9E%85%EB%AC%B8/lesson/22753/%EB%AC%B8%EC%A0%9C1b-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%B5%9C%EB%8C%80%EA%B0%92

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
