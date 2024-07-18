// Helper function myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

// Function to map values
function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, function (value, key, collection) {
        mappedArray.push(callback(value, key, collection));
    });
    return mappedArray;
}

// Function to reduce values
function myReduce(collection, callback, acc) {
    let initialized = arguments.length > 2;
    myEach(collection, function (value, key, collection) {
        if (!initialized) {
            acc = value;
            initialized = true;
        } else {
            acc = callback(acc, value, collection);
        }
    });
    return acc;
}

// Function to find a value
function myFind(collection, predicate) {
    let result;
    let found = false; // Flag to track if value is found
    myEach(collection, function (value, key, collection) {
        if (!found && predicate(value)) {
            result = value;
            found = true; // Set flag to true when value is found
        }
    });
    return result;
}

// Function to filter values
function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, function (value, key, collection) {
        if (predicate(value)) {
            filteredArray.push(value);
        }
    });
    return filteredArray;
}

// Function to get size of collection
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// Function to get first elements of collection
function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    } else {
        return array[0];
    }
}

// Function to get last elements of collection
function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    } else {
        return array[array.length - 1];
    }
}

// Function to get keys of object
function myKeys(object) {
    return myMap(object, function (value, key) {
        return key;
    });
}

// Function to get values of object
function myValues(object) {
    return myMap(object, function (value) {
        return value;
    });
}

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};
