# This variable will be used to keep track of the user's score.
score = 0

# The user will be asked ten questions by the program
# The program will tell the user if they're right or wrong
# If the user is right, it'll increase the score by 1
answer_1 = input("What is 1 + 1?")
if answer_1 == "2":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_2 = input("What is 7 - 3?")
if answer_2 == "4":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_3 = input("What is 24 / 2?")
if answer_3 == "12":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_4 = input("What is 15 * 3?")
if answer_4 == "45":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_5 = input("What is 3 + 6 - 2?")
if answer_5 == "7":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_6 = input("What is 8 - 2 * 2?")
if answer_6 == "4":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_7 = input("What is 9 * 9 + 1?")
if answer_7 == "82":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_8 = input("What is (3 * 2) + (4 * 1)?")
if answer_8 == "10":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_9 = input("What is (12 * 12) + (2 - 1)?")
if answer_9 == "145":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

answer_10 = input("What is 100 + (274 - 36) * (18 + 33)?")
if answer_10 == "12238":
    print("Good Job!")
    score += 1
else:
    print("WRONG :(")

# This tells the user what their total score is
# If they get ten out of ten, they'll be congratulated
print("Your final score is...")
print(str(score) + " out of 10")
if score == 10:
    print("Perfect!!")