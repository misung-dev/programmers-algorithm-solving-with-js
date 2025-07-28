def solution(k, dungeons):
    answer = []

    def dfs(current_k, count, visited):
        answer.append(count)

        for i in range(len(dungeons)):
            if not visited[i] and current_k >= dungeons[i][0]:
                visited[i] = True
                dfs(current_k - dungeons[i][1], count + 1, visited)
                visited[i] = False

    visited = [False] * len(dungeons)
    dfs(k, 0, visited)

    return max(answer)
