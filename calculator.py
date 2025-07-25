def calculate_rank(wins, losses):
    balance = wins - losses
    
    if wins < 10:
        rank = "Iron"
    elif 11 <= wins <= 20:
        rank = "Bronze"
    elif 21 <= wins <= 50:
        rank = "Silver"
    elif 51 <= wins <= 80:
        rank = "Gold"
    elif 81 <= wins <= 90:
        rank = "Diamond"
    elif 91 <= wins <= 100:
        rank = "Legendary"
    else:  # wins >= 101
        rank = "Immortal"
    
    return balance, rank
