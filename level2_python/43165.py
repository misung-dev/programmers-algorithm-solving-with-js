def solution(numbers, target):
    answer = 0 # 가능한 방법의 수를 저장할 변수
    
    def dfs(index, result): # 현재 몇 번째 숫자인지, 현재까지 결과값
        if index == len(numbers): # numbers 숫자를 다 사용했는지 (즉, 다 순회했는지)
            if result == target: # 현재까지의 계산이 result와 같다면
                nonlocal answer # 외부변수 answer를 수정할 수 있도록 선언 (없으면 += 1 연산 오류 발생)
                answer += 1
            return
        else: # 아래 두 갈래로 뻗어나가면 모든 조합을 탐색
            dfs(index + 1, result + numbers[index])
            dfs(index + 1, result - numbers[index])
    
    dfs(0, 0) # 인덱스 0부터 시작하며, 합이 0으로 시작
    return answer