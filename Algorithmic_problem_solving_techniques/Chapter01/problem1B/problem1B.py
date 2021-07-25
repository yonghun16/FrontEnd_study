def get_max(data, n):
    answer = data[0]

    for value in data:
        if answer < value:
            answer = value

    return answer


if __name__ == "__main__":
    n = int(input())

    data = [int(word) for word in input().split()]

    answer = get_max(data, n)
    print(answer)
