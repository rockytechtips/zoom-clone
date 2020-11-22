# zoom-clone
Credit to [CleverProgrammer](https://www.youtube.com/watch?v=ZVznzY7EjuY&t=3423s&ab_channel=CleverProgrammer)

### To run in localhost server
***

Replace the code in the following file

**server.js**
Replace this code
```javascript
server.listen(3030);
```
with
```javascript
server.listen(process.env.PORT||3030);
```

 **script.js**
 Replace this code
```javascript
port: "3030",
```
with
```javascript
port: "443",
```


## Installation
In the project directory, you can run:
#### `npm install`
Install the dependencies in the local node_modules folder

#### `nodemon server.js`
Runs the app in the development mode.
Open http://localhost:3030 to view it in the browser.

## Screenshot

![main screen img](https://i.imgur.com/a6D6Ya0.jpg "main screen")

#### Chat window toggle added
![Chat window toggle img](https://lh5.googleusercontent.com/Eh85ziaiQH6eWe9Ja31QiHnEidx2j4EvOOC_OUCmqGfrKrBdazo3w6t8u0tF7jAKC88o5jIcW7tokNVKMPTZ=w1360-h663-rw "Chat window toggle")

#### Room id clipboard added
![Room id clipboard img](https://lh6.googleusercontent.com/qZDl_Jr57ntYGVXoozF_ULPzqdupKwIJJSdaihRnAREa7X9tBhFmYdL7VPXC7wRw6FD7VxK5ZStCKSgjJ1Vz=w1360-h663-rw "Room id clipboard")
