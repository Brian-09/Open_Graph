# 1. Operators
print(5 + 3 * 2)
print((10 - 4) / 2)
print(7 % 3)
print(2 ** 3 + 1)

num_str = input("Enter a number: ")
num = float(num_str)
if (num % 3) == 0 and (num % 5)  == 0:
    print(num_str + " is divisible by both 3 and 5.")
else:
    if num%3 == 0:
        print(num_str + " is divisible by 3.")
    elif num%5 == 0:
        print(num_str + " is divisible by 5.")
    else:
        print(num_str + " is NOT divisible by either 3 or 5.")


# 2. Functions
def square_and_cube(num):
    squared = str(num*num)
    cubed = str(num*num*num)
    return "(" + squared + "," + cubed + ")"
print(square_and_cube(5))

def greet_user(name):
    return "Hello, " + name + "!"
print(greet_user("Alice"))


# 3. Loops
for x in range(2, 22, 2):
    print(x)

user_input = ""
while (user_input != "exit"):
    user_input = input("Input something ('exit' to stop): ")
    if user_input.isnumeric():
        value = float(user_input)
        if (value%2) == 0:
            print(user_input + " is even.")
        else:
            print(user_input + " is odd.")


# Bonus Challenge
def factorial(n):
    result = 1
    for x in range(1, n):
        result *= x
    return result*n
f_num = input("Enter an integer: ")
print(factorial(int(f_num)))