print("Hello, world");
print("3 + 5 =" add(3 5))

hello = (subject) {
    print(concat("Hello, " subject))
    print(concat("Hello, " subject))
}

// This is a comment

doIt = ()  {
    print("Do it!")
}

doIt()

hello("Brother")

classmates = split("Jerry Jordan Johnny Jack Jeffery" " ")

each(classmates (peep) 
    print(concat("Hello " peep))
)

fib = (n)
    if(eq(n 1)
        ()  1
        () 
            if(eq(n 2)
                ()  1
                () 
                    add(
                        fib(subtract(n 1))
                        fib(subtract(n 2))
                    )
            )
        )

print(fib(9))