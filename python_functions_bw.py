def factorial(n):
    x = 1
    result = 1
    while x <= n:
        result *= x
        x+=1
    return result

print(factorial(5))
print(factorial(3))