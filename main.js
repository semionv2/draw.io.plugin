var system = {
    "appliances": {
        "Cooktop": {
            "voltage": 230,
            "modes": {
                "full-power": {
                    "power": 2000
                },
                "half-power": {
                    "power": 1000
                },
            }
        },
        "Water Boiler": {
            "voltage": 230,
            "modes": {
                "full-power": {
                    "power": 660
                },
                "half-power": {
                    "power": 330
                },
            }
        },
        "AIR 2D Heater": {
            "voltage": 230,
            "modes": {
                "full-power": {
                    "power": 30
                },
                "low-power": {
                    "power": 15
                },
            }
        },
        "Water Pump": {
            "voltage": 12,
            "modes": {
                "full-power": {
                    "power": 50
                }
            }
        },
        "Compressor Fridge": {
            "voltage": 12,
            "modes": {
                "full-power": {
                    "power": 60
                },
                "low-power": {
                    "power": 15
                }
            }
        }
    },
    "usageProfiles": {
        "winterDay": 
        {
            "loads": 
            [
                {
                    "appliance": "Cooktop",
                    "timeMinutes": 30,
                    "mode": "full-power"
                },
                {
                    "appliance": "Cooktop",
                    "timeMinutes": 30,
                    "mode": "half-power"
                },
                {
                    "appliance": "Water Boiler",
                    "timeMinutes": 20,
                    "mode": "full-power"
                },
                {
                    "appliance": "AIR 2D Heater",
                    "timeHours": 2,
                    "mode": "full-power"
                },
                {
                    "appliance": "AIR 2D Heater",
                    "timeHours": 3,
                    "mode": "low-power"
                },
                {
                    "appliance": "Compressor Fridge",
                    "timeHours": 5,
                    "mode": "full-power"
                },
                {
                    "appliance": "Compressor Fridge",
                    "timeHours": 5,
                    "mode": "low-power"
                },
                {
                    "appliance": "Water Pump",
                    "timeMinutes": 10,
                    "mode": "full-power"
                }
            ]
        }
    }
};

var configuration = {
    "name": "full-power",
    "loads": {
        "Cooktop": {
            "mode": "full-power"
        },
        "Water Boiler": {
            "mode": "full-power"
        },
        "AIR 2D Heater": {
            "mode": "full-power"
        },
        "Water Pump": {
            "mode": "full-power"
        },
        "Compressor Fridge": {
            "mode": "full-power"
        }
    }
};

function getSystemInfo() {
    var systemSize = new SystemSize();

    var batteryBankVoltage = 12;

    var totalConsumption = systemSize.getPowerConsumption(system, configuration);
    var energyConsumption = systemSize.getConsumptionEnergyPerHour(totalConsumption, 6);
    var batteryBankSize = systemSize.getBatteryBankSize(energyConsumption, batteryBankVoltage);

    console.log("system power consumption: " + totalConsumption + " W");
    console.log("system energy consumption: " + energyConsumption +" Wh");
    console.log("battery bank: " + batteryBankSize +" Ah, " + batteryBankVoltage + " V");
}