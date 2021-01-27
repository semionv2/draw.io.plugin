function device() {
     device.prototype.poles = [];

     device.prototype.battery = null;
     device.prototype.chargeController = null;
     device.prototype.load = null;
     device.prototype.ground = null;
     device.prototype.cableSwitch = null;
     device.prototype.fuse = null;
}

function pole() {
    pole.prototype.cable = null;
    pole.prototype.potentialVolt = 0.0;
}

function cable() {
    cable.prototype.devices = [];
    cable.prototype.cableBundle = null;
}

function cableBundle() {
    
}

function battery() {
    battery.prototype.energyAmperHour = 0.0;
}

function chargeController() {

}

function load() {
    load.prototype.powerWatt = 0.0;
}

function ground() {

}

function fuse() {

}

function cableSwitch() {

}

function circuitSimulator() {
    circuitSimulator.prototype.calculateEnergyConsumption = function(devices) {
        
    }
}