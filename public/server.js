// Node.js Server Code (server.js)
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const SerialPort = require('serialport');
const bodyParser = require('body-parser');

const PORT = 3000;
const COM_PORT = 'COM4';
const port = new SerialPort(COM_PORT, {
  baudRate: 9600,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public1'));

// Simple authentication
const validCredentials = {
  username: 'user1',
  password: '123',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validCredentials.username && password === validCredentials.password) {
    res.redirect('/mode.html');
  } else {
    res.send('Invalid credentials');
  }
});


let automaticMode = false;

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public1/mode.html');
});

app.get('/automatic', (req, res) => {
  res.sendFile(__dirname + '/public1/automatic.html');
});

// Endpoint for turning on in automatic mode
app.post('/turnOnAutomatic', (req, res) => {
  if (automaticMode) {
    console.log('Already in Automatic Mode');
  } else {
    console.log('Turning On in Automatic Mode');
    // Add logic for turning on in automatic mode

    // Update the mode status
    automaticMode = true;
  }
  res.sendStatus(200);
});
app.get('/manual', (req, res) => {
  res.sendFile(__dirname + '/public/manual.html');
});

// Endpoint for turning on in automatic mode
app.post('/turnOnManual', (req, res) => {
  if (manualMode) {
    console.log('Already in manual Mode');
  } else {
    console.log('Turning On in manual Mode');
    // Add logic for turning on in automatic mode

    // Update the mode status
    manualMode = true;
  }
  res.sendStatus(200);
});

//arduino codings server side

io.on('connection', (socket) => {
  socket.on('activateIrrigation1', () => {
    console.log('Activating irrigation1');
    port.write('A'); // Send 'A' to Arduino
  });
});

io.on('connection', (socket) => {
  socket.on('activateIrrigation2', () => {
    console.log('Activating irrigation2');
    port.write('B'); // Send 'A' to Arduino
  });
});

io.on('connection', (socket) => {
  socket.on('deactivateIrrigation', () => {
    console.log('deactivating irrigation');
    port.write('C'); 
  });
});

io.on('connection', (socket) => {
  socket.on('activateIrrigation11', () => {
    console.log('activating manual mode');
    port.write('D'); 
  });
});

io.on('connection', (socket) => {
  socket.on('deactivateIrrigation', () => {
    console.log('deactivating manual mode');
    port.write('E'); 
  });
});



server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
