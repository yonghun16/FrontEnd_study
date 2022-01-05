# http://www.jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=574&sca=2010

def printResult(s, e):
    if s < e:
        for i in range(1, 10):
            for j in range(s, e+1):
                print('{0} * {1} = {2:2}'.format(j, i, j*i), end='   ')
            print(sep='\n')
        else:
            for i in range(1, 10):
                for j in range(s, e-1, -1):
                    print('{0} * {1} = {2:2}'.format(j, i, j*i), end='   ')
                print(sep='\n')


while(True):
    s, e = map(int, input().split())
    if s >= 2 and s <= 9 and e >= 2 and e <= 9:
        break
    else:
        print("INPUT ERROR!")

printResult(s, e)
