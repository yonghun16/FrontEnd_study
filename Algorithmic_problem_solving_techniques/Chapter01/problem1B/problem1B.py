# https://edu.goorm.io/learn/lecture/554/알고리즘-문제해결기법-입문/lesson/22753/문제1b-배열의-최대값
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
