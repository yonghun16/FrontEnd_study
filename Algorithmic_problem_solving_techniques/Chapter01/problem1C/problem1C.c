// https://edu.goorm.io/learn/lecture/554/알고리즘-문제해결기법-입문/lesson/22884/문제1c-카운팅하기

#include <stdio.h>
#include <stdlib.h>

/**
*
* @param data 각 사람들의 키를 저장한 배열
* @param n     사람들의 수
* @param m     미주의 키
* @param s     지수의 키
* @return      미주 혹은 지수와  키가 일치하는 사람의 수
*/
int getCount(int data[], int n, int m, int s)
{
    int count = 0; //확인해보아야 할 후보의 수

    for(int i=0; i<n; i++){
        if(data[i] == m || data[i] == s){
            count ++;
        }
    }
    
    return count;
}

int main()
{
    int n, m, s;
    int *data;

    scanf("%d %d %d", &n, &m, &s);
    data = (int*)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &data[i]);
    }

    int answer = getCount(data, n, m, s);

    printf("%d\n", answer);
    free(data);
    return 0;
}
