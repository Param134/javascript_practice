// Defining a memoize function
const memoize = (func) => {
    // Creating a cache using a Map
    const cache = new Map();
    
    // Returning a new function that will be the memoized version of the original function
    return (...args) => {
        // Generating a unique key based on the function arguments
        const key = args.toString();
        
        // Checking if the result for the given key is already in the cache
        if (cache.has(key)) {
            console.log("Fetching from cache");
            // Returning the cached result if available
            return cache.get(key);
        } else {
            // If the result is not in the cache, invoking the original function
            const result = func(...args);
            
            // Caching the result for future use
            cache.set(key, result);
            
            // Returning the newly calculated result
            return result;
        }
    };
};

// Defining an example function (add) that performs an expensive calculation
const add = (a, b) => {
    console.log("Performing expensive calculation");
    return a + b;
};

// Creating a memoized version of the add function using the memoize function
const memoizedAdd = memoize(add);

// Calling the memoized function with the same arguments
console.log(memoizedAdd(5, 3)); // Output: Performing expensive calculation, 8

// Calling the memoized function again with the same arguments
console.log(memoizedAdd(5, 3)); // Output: Fetching from cache, 8
