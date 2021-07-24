def getMax(a, b):
    if a > b:
        return a
        return b


p, q = map(int, input().split())
answer = getMax(p, q)
print(answer)
