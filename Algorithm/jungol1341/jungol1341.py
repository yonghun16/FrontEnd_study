# http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=2076&sca=20

s, e = input().split()
s = int(s)
e = int(e)

if(s <= e):
    while(s <= e):
        for i in range(1, 10):
            print(f"{s} * {i} = {s*i: >2}   ", end='')
            if(i % 3 == 0):
                print()
        print()
        s += 1
elif(s > e):
    while(s >= e):
        for i in range(1, 10):
            print(f"{s} * {i} = {s*i: >2}   ", end='')
            if(i % 3 == 0):
                print()
        print()
        s -= 1
