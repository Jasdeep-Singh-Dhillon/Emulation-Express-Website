const faker = require('faker');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var name = faker.name.findName();
var avatar = faker.internet.avatar();
var email = faker.internet.email();

const getData = (head, current) => {
    return {
        'name': name,
        'image': avatar,
        'email': email,
        'head': head,
        'current': current
    }
}

app.get('/', (req, res) => {
    name = faker.name.findName();
    avatar = faker.internet.avatar();
    email = faker.internet.email();
    let data = getData('Emulation', 'home');
    res.render('home', data);
})

app.get('/hardware_emulation', (req, res) => {
    let data = getData('Hardware Emulation', 'hardware_emulation');
    res.render('hardware_emulation', data);
})

app.get('/virtual_machine', (req, res) => {
    let data = getData('Virtual Machine', 'virtual_machine');
    res.render('virtual_machine', data);
})

app.get('/emulator_list', (req, res) => {
    let data = getData('List of emulators', 'emulator_list');

    res.render('emulator_list', data);
})

app.listen(3000, () => {
    console.log('Server Started');
})

