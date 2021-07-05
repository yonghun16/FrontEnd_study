// http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=2076&sca=20

#include <stdio.h>

int main(){
    int s, e, i;
    scanf("%d %d", &s, &e);

    if(s <= e){
        while(s <= e){
            for(i=1; i<=9; i++){
                printf("%d * %d = %2d   ", s, i, s*i);
                if(i%3 == 0) printf("\n");
            }
            printf("\n");
            s += 1;
        }
    }
    else if(s > e){
        while(s >= e){
            for(i=1; i<=9; i++){
                printf("%d * %d = %2d   ", s, i, s*i);
                if(i%3 == 0) printf("\n");
            }
            printf("\n");
            s -= 1;
        }
    }

    return 0;
}
