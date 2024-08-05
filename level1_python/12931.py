# solution1
def solution1(n):
    answer = 0

    for i in str(n):
        answer += int(i)

    return answer

# solution2
def solution(n):
    return sum([int(i) for i in (str(n))])