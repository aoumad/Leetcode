function isValid(s: string): boolean 
{
    const stack: string [] = [];   
    const opens: string = '({[';

    for (let paren of s)
    {
        if (opens.includes(paren))
            stack.push(paren);
        else
        {
            if (!stack.length)
                return (false);
            
            const open: string | undefined = stack.pop();
            if (paren === ')')
            {
                if (open !== '(')
                    return (false);
            }
            else if (paren === '}')
            {
                if (open !== '{')
                    return (false);
            }
            else if (paren === ']')
            {
                if (open !== '[')
                    return (false);
            }
            else
                return (false);
        }
    }
    return (stack.length === 0);
};

// this is an implementation of a stack class in typescript just to see how could it be implemented not associated with this particular problem 


class Stack<T> 
{
    private items: T[] = []; // when i did this it will contains whatever the type of the considered parameter `string []` == an array of characters ...etc

    // push an element onto the stack
    push(item: T): void
    {
        this.items.push(item);
    }

    // Pop an element from the stack
    pop(): T | undefined // pop syntaxlly returns the element it removes as i remember in C++
    {
        return (this.items.pop()); 
    }

    // Peek at the top element of the stack without removing it
    peek(): T | undefined
    {
        return (this.items[this.items.length - 1]);
    }

    // Check if the stack is empty
    isEmpty(): boolean
    {
        return this.items.length === 0;
    }

    // Get the size of the stack 
    size(): number
    {
        return this.items.length;
    }

    // CLear all the elements from the stack
    clear(): void
    {
        this.items = [];
    }
}

// testing had l3jb

const test = new Stack<number>();

test.push(1);
test.push(3);
test.push(5);

console.log(test.peek()); // Output : 5
console.log(test.pop()); // output: 5 then removes it
console.log(test.isEmpty()); // output: false coz still contains two remaining numbers

test.clear();
console.log(test.isEmpty()); // output: true