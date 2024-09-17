# Task 1
temp = 72
if temp > 85:
    print("It's hot")
elif temp < 60:
    print("It's cold")
else:
    print("It's just right")

# Task 2
score = 85
if score >= 60:
    if score >= 70:
        if score >= 80:
            if score >= 90:
                print("A")
            else:
                print("B")
        else:
            print("C")
    else:
        print("D")
else:
    print("F")

# Task 3
age = 16
has_drivers_license = False
if age >= 16 and has_drivers_license:
    print(True)
else:
    print(False)

# Task 4
age = 21
has_ID = True
is_VIP = False
if is_VIP:
    print("Access granted")
else:
    if age >= 21 and has_ID:
        print("Access granted")
    else:
        print("Access denied")

# Task 5
age = 30
is_member = False
purchase_amount = 56
if is_member:
    if purchase_amount > 100:
        print("20% discount")
    else:
        print("10% discount")
else:
    if age > 65 and purchase_amount > 50:
        print("15% discount")
    else:
        print("No discount")

# Task 6
gpa = 3.6
in_activities = False
needs_money = True
if gpa >= 3:
    if (gpa >= 3.5 and in_activities) or needs_money:
        print("Student qualifies")
    else:
        print("Student does NOT qualify")
else:
    print("Student does NOT qualify")