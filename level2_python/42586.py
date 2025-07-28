def solution(progresses, speeds):
    workDay = []
    answer = []
    
    # 각 작업마다 완료까지 걸리는 시간
    for i in range(len(progresses)):
        remain = 100 - progresses[i]
        days = remain // speeds[i]
        if remain % speeds[i] != 0:
            days += 1
        workDay.append(days)
    
    # 배포 로직
    current = workDay[0]
    count = 1
    for i in range(1, len(workDay)):
        if workDay[i] <= current:
            count += 1
        else:
            answer.append(count)
            current = workDay[i]
            count = 1
    
    answer.append(count)
    return answer
            
    return answer