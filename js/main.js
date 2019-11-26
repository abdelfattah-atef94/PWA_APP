const createNode = (element) => {
    return document.createElement(element);
}

const appendElement = (parent, element) => {
    return parent.appendChild(element);
}

const ul = document.getElementById('users');

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