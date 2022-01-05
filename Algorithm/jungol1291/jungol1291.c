// http://www.jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=574&sca=2010

#include <stdio.h>

void printResult(int, int);

int main(){
    int s, e;
    while(1){
        scanf("%d %d", &s, &e);
        if(2<=s && s<=9 && 2<=e && e<=9) break;
        else {
            printf("INPUT ERROR!\n");
        }
    }
    printResult(s, e);

    return 0;
}

void printResult(int s, int e){
    int i, j;
    if(s<e){
        for(i=1; i<=9; i++){
            for(j=s; j<=e; j++){
                printf("%d * %d = %2d   ", j, i, j*i);
            }
            printf("\n");
        }
    }
    else{
        for(i=1; i<=9; i++){
            for(j=s; j>=e; j--){
                printf("%d * %d = %2d   ", j, i, j*i);
            }
            printf("\n");
        }
    }
}
