var createHelloWorld = function() {
    return function(...args)
    {
        return ("Hello World");
    }
};

/**
 * const f = creatHelloWorld();
 * f(); // "Hello World"
 */

/*
Explanation of this concept:
In programming, a closure is a combination of a function and it's lexical environment.
The lexical environment consists of any variables that were in scope at the time the closure was created.
To understand closures, it's important to first understand lexical scoping. in JS, variables declared within a function are only
accessible within that function, and any nested functions within it. However,a nested function can "remember" the variables
from the outer function even after the outer function has returned. This is because the inner function has access to the variables
in the outer function's lexical scoupe.
9t3 laydir lkhir;
*/