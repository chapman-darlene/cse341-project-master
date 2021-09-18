const fs = require('fs');
let users = ['John', 'Henry', 'James'];


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><head></head>
            <body><h1>Welcome to My Page</h1>
            <h2>What is your name?</h2>
            <form action="/create-user" method="POST">
                <label for="username">Enter Name</label>
                <input type="text" name="username">
                <button type="submit">Submit</button>
            </form>
            <br>
        </body>
        </html>`
        );
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const username = parsedBody.split('=')[1];
            console.log(username);
            users.push(username);
            console.log(users);
        
            res.write("<html><head></head>");
            res.write("<body><h1>Welcome ");
            res.write(username);
            res.write("</h1></body></html>");
            res.write("<a href='/users'>See User List</a>");
            return res.end();
        });
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><head></head>
            <body><h1>Welcome Users</h1>
            <ul>`
        );
        for (const user of users) {
            res.write(`<li>${user}</li>`);
        }        
        res.write(`
            <ul>
            <br>
            <a href="/">Return to Home Page</a>
            </body>
            </html>`
        );
    
        return res.end();
    }
}

module.exports = requestHandler;
   