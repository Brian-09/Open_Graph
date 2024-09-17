school = "west-mec"
# Snake Case Example
first_name = "Brian"
last_name = "Verdugo"
print(first_name)
print(school)
print(type(last_name))


message = """I just
made my own
multi-line
message"""
print(message)


rand_name = "Brian"
age = 16
alive = True
fav_foods = ["mexican", "italian", "american"]
print(rand_name + " " + str(age) + " " + str(alive) + " " + str(fav_foods))


stranger_name = "John"
lucky_number = 7
winner = True
print(stranger_name + " " + str(lucky_number) + " " + str(winner))


print(str(None))
print(str(True))
print(str(84))
print(str(False))


age_1 = 23
age_2 = 56
bf = "Tina"
thinks_bf = "Karen"
if age_2 > 45:
    print("They are dinosaurs")
if bf != thinks_bf:
    print("Way to avoid a Karen")
if "25" == str(25):
    print("Wow... you can count good for you")


still_alive = True
year = 2024
groceries = ["Spaghetti", "Tomato sauce", "Cheese", "Meatballs"]
if still_alive == True:
    if year == 2024:
        print("Yay")
    print("Level 1")


money = 25
if 0 <= money <= 20:
    print("Broke Netflix")
elif 21 <= money <= 60:
    print("Movie theatre")
elif 61 <= money <= 80:
    print("Dinner")
elif 81 <= money <= 150:
    print("Sky Diving")
else:
    print("Rich")


person = input("Name sombody you know")
print(person)


bytes = float(input("How many bits are there? "))
bits = bytes*8
kilobytes = bytes/1024
megabytes = bytes/(1024*2)
gigabytes = bytes/(1024**3)
terrabytes = bytes/(1024**4)
print("Bytes = " + str(bytes))
print("Kilobytes = " + str(kilobytes))
print("Megabytes = " + str(megabytes))
print("Gigabytes = " + str(gigabytes))
print("Terrabytes = " + str(terrabytes))


num1 = 14
num2 = 25
def add_function(x, y):
    print(str(x+y))

add_function(num1,num2)


new_name = "Josh"
def name(name_par):
    print(str(name_par) + " needs to go outside")

name(new_name)