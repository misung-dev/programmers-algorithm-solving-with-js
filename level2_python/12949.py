# 행렬의 곱셈
def solution(arr1, arr2):
    len1 = len(arr1)          # arr1의 행 수
    len2 = len(arr2[0])       # arr2의 열 수
    common = len(arr2)        # 곱셈의 기준이 되는 중간 차원 (arr1의 열 == arr2의 행)
    answer = []

    for i in range(len1):
        arr = []

        for j in range(len2):
            val = 0
            
            for k in range(common):  # 공통 차원 순회하며 누적 곱셈
                val += arr1[i][k] * arr2[k][j]
            arr.append(val)

        answer.append(arr)

    return answer

# 어려웠던 부분
# val += arr1[i][k] * arr2[k][j] 을 바로 떠올리기
