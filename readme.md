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
