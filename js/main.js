// To create a new node inside the document
const createNode = (element) => {
    return document.createElement(element);
}

/**
 * Append Element inside the parent element
 * @param {*} parent 
 * @param {*} element 
 */
const appendElement = (parent, element) => {
    return parent.appendChild(element);
}

const ul = document.getElementById('users');

// To fetch users api and append this data inside the list
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    return users.map(user => {
        let li = createNode('li');
            span = createNode('span');
            p = createNode('p');
        p.innerHTML = `${user.address.suite}, ${user.address.street}, ${user.address.city}`;
        span.innerHTML = user.email;
        li.innerHTML = user.name;
        appendElement(li , span);
        appendElement(li , p);
        appendElement(ul , li);
    })
})