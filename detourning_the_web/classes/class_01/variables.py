import random

print(random.randint(0,100));

some_integer = 1

some_float = 3.14159

some_string = "hello!"

#in python booleans are capitalized
some_boolean = True;

some_other_boolean = False;

# lists in python, they are arrays
some_list = [];

some_list = ["one thing", "another thing", 22, True]

print(some_list)

print(len(some_list))

some_list.append("one more thing")

print(some_list)

print(some_list[0])

print(some_list[1])

print(some_list[-1])

for item in some_list:
    print(item)

def say_hi(name):
    if name == "karl":
        message = "hello " + name
    else:
        message = "whatever"
    print(message)

say_hi("karl")

say_hi("sam")
