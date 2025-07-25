from calculator import calculate_rank

def main():
    print("=== Ranked Matches Calculator ===")
    try:
        wins = int(input("Enter the number of wins: "))
        losses = int(input("Enter the number of losses: "))
    except ValueError:
        print("Please enter valid integer numbers.")
        return
    
    balance, rank = calculate_rank(wins, losses)
    print(f"The Hero has a balance of {balance} and is at the rank of {rank}.")

if __name__ == "__main__":
    main()
