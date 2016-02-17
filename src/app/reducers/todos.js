"use strict";
var initialTodos = [
    { text: 'one' },
    { text: 'two' },
    { text: 'three' }
];
exports.todos = function (todos, action) {
    if (todos === void 0) { todos = initialTodos; }
    if (action.type === 'CREATE_TODO') {
        return todos.concat([{ text: 'Hello there' }]);
    }
    return todos;
};
