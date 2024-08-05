def solution(s):
    answer = False
    p_num = 0
    y_num = 0
        
    for i in s:
        if i == 'p':
            p_num += 1
        elif i == 'y':
            y_num += 1
            
    if p_num == y_num:
        answer = True

    return answer