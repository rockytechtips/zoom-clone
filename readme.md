# zoom-clone
Credit to [CleverProgrammer](https://www.youtube.com/watch?v=ZVznzY7EjuY&t=3423s&ab_channel=CleverProgrammer)

[App Demo](https://sheltered-refuge-13992.herokuapp.com/)

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
![Chat window toggle img](https://1.bp.blogspot.com/-UZFVe4RpbTs/X7qca6JIp8I/AAAAAAAAGzA/VO4ucZF1-WMnmvUEzjBbZxgLKOuFiBRcgCNcBGAsYHQ/s0/Toggle_chat_window.gif "Chat window toggle")

#### Room id clipboard added
![Room id clipboard img](https://1.bp.blogspot.com/-kKN2X5Sg6lw/X7qcbO5rCbI/AAAAAAAAGzE/iSnobWbSzx4WShoiNRrwiwwt7bpFWRVWQCNcBGAsYHQ/s0/room-id-clipboard.gif "Room id clipboard")
