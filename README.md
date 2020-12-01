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

![main screen img](https://s3.amazonaws.com/awesomescreenshot/image/1663621/5743634-5789f68b430efaf479704727ca44aeb2.png?AWSAccessKeyId=AKIAJSCJQ2NM3XLFPVKA&Expires=1606823913&Signature=GvGTGEc6VoJ4xiAQBKhEZCN4pwg%3D "main screen")

#### Chat window toggle added
![Chat window toggle img](https://s3.amazonaws.com/awesomescreenshot/image/1663621/5743652-d2629f18cda3580b06af4b9a0efb046a.png?AWSAccessKeyId=AKIAJSCJQ2NM3XLFPVKA&Expires=1606824161&Signature=3wABh0xhju08OTgmvmpjlUgnCLE%3D "Chat window toggle")

#### Room id clipboard added
![Room id clipboard img](https://1.bp.blogspot.com/-kKN2X5Sg6lw/X7qcbO5rCbI/AAAAAAAAGzE/iSnobWbSzx4WShoiNRrwiwwt7bpFWRVWQCNcBGAsYHQ/s0/room-id-clipboard.gif "Room id clipboard")
