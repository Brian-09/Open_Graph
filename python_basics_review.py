#1. String Manipulation
#This takes a string inputted by the user and changes it to all uppercase, lowercase, reverses the string,
#replaces any vowels with an asterisks, and counts the total number of characters

string = input("Enter a string: ")
print("Uppercase: " + string.upper())
print("Lowercase: " + string.lower())
print("Reverse: " + string[::-1])
new_string = string.replace("A", "*")
new_string = new_string.replace("E", "*")
new_string = new_string.replace("I", "*")
new_string = new_string.replace("O", "*")
new_string = new_string.replace("U", "*")
new_string = new_string.replace("a", "*")
new_string = new_string.replace("e", "*")
new_string = new_string.replace("i", "*")
new_string = new_string.replace("o", "*")
new_string = new_string.replace("u", "*")
print("Vowel Replacement: " + new_string)
print("Character Count: " + str(len(string)))

#2. Math Operators
#This takes two numbers inputted by the user and prints the result of them being added, subtracted, multiplied,
#divided, modulus, and exponentiation

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
import math
add = num1 + num2
subtract = num1 - num2
multiply = num1 * num2
divide = num1 / num2
modulus = num1 % num2
exponent = math.pow(num1, num2)
print("Addition: " + str(add))
print("Subtraction: " + str(subtract))
print("Multiplication: " + str(multiply))
print("Division: " + str(divide))
print("Modulus: " + str(modulus))
print("Exponentiation: " + str(exponent))

#3. Concatenation
#This takes two strings inputted by the user that represent their first and last name, then prints a hello
#message that includes the full name. The code then asks the user for their favorite number, then prints
#the user's full name followed by their favorite number

first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
print("Hello, " + first_name + " " + last_name + "!")
fav_num = input("Enter your favorite number: ")
print(first_name + " " + last_name + fav_num)

#4. Functions
#This defines three functions. The first one prints a greeting that includes the name parameter. The second
#one takes the length and width parameters, calculates the area, and prints it. The third one takes the
#temperature parameter in fahrenheit, converts it to celsius, and prints the temperature in celsius. The
#three functions are called afterwards

def greet_user(name):
    print("Greetings, " + name + "!!")

def calculate_area(length, width):
    area = length * width
    print("Area of rectangle: " + str(area))

def convert_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    print("Temperature in Celsius: " + str(celsius))

greet_user("Alice")
calculate_area(4, 6)
convert_to_celsius(72)