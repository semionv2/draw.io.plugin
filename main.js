var system = {
    "devices": {
        "MPPT": {
            "terminals": {
                "input": {
                    "voltage": 24
                },
                "output": {
                    "voltage": 12,
                    "currentLimit": 40,
                    "connection": {
                        "Battery junction": "input"
                    }
                }
            }
        },
        "Solar panels": {
            "modes": {
                "full-power": {
                    "power": 300
                },
                "half-power": {
                    "power": 150
                }
            },
            "terminals": {
                "output": {
                    "voltage": 24,
                    "connection": {
                        "MPPT": "input"
                    }
                }
            },
            "connection": {
                "output": {
                    "MPPT": "input"
                }
            }
        },
        "Inverter": {
            "terminals": {
                "input": {
                    "voltage": 12
                },
                "output": {
                    "voltage": 230,
                    "connection": {
                        "Terminal 230V": "input"
                    }
                }
            },
            "modes": {
                "full-power": {
                    "power": 6000
                },
                "normal-power": {
                    "power": 3000
                }
            }
        },
        "Battery junction": {
            "terminals": {
                "input": {
                    "voltage": 12
                },
                "output": {
                    "voltage": 12,
                    "connection": {
                        "Battery bank": "input",
                        "Inverter": "input",
                        "Terminal 12V": "input"
                    }
                }
            }
        },
        "Battery bank": {
            "terminals": {
                "input": {
                    "voltage": 12
                },
                "output": {
                    "voltage": 12,
                    "connection": {
                        "Battery junction": "input"
                    }
                }
            }
        },
        "Terminal 12V": {
            "terminals": {
                "input": {
                    "voltage": 12
                },
                "output": {
                    "voltage": 12,
                    "connection": {
                        "AIR 2D Heater": "input",
                        "Water Pump": "input",
                        "Compressor Fridge": "input"
                    }
                }
            }
        },
        "Terminal 230V": {
            "terminals": {
                "input": {
                    "voltage": 230
                },
                "output": {
                    "voltage": 230,
                    "connection": {
                        "Cooktop": "input",
                        "Water Boiler": "input"
                    }
                }
            }
        },
        "Cooktop": {
            "terminals": {
                "input": {
                    "voltage": 230
                }
            },
            "modes": {
                "full-power": {
                    "power": 2000
                },
                "half-power": {
                    "power": 1000
                }
            }
        },
        "Water Boiler": {
            "terminals": {
                "input": {
                    "voltage": 230
                }
            },
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
            "terminals": {
                "input": {
                    "voltage": 12
                }
            },
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
            "terminals": {
                "input": {
                    "voltage": 12
                }
            },
            "modes": {
                "full-power": {
                    "power": 50
                }
            }
        },
        "Compressor Fridge": {
            "terminals": {
                "input": {
                    "voltage": 12
                }
            },
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
    "energySources": [ "Solar panels" ],
    "energyStorages": [ "Battery bank" ],
    "energyConsumptionProfiles": {
        "winterDay": 
        {
            "loads": 
            [
                {
                    "appliance": "Cooktop",
                    "durationMinutes": 30,
                    "mode": "full-power"
                },
                {
                    "appliance": "Cooktop",
                    "durationMinutes": 30,
                    "mode": "half-power"
                },
                {
                    "appliance": "Water Boiler",
                    "durationMinutes": 20,
                    "mode": "full-power"
                },
                {
                    "appliance": "AIR 2D Heater",
                    "durationHours": 2,
                    "mode": "full-power"
                },
                {
                    "appliance": "AIR 2D Heater",
                    "durationHours": 3,
                    "mode": "low-power"
                },
                {
                    "appliance": "Compressor Fridge",
                    "durationHours": 5,
                    "mode": "full-power"
                },
                {
                    "appliance": "Compressor Fridge",
                    "durationHours": 5,
                    "mode": "low-power"
                },
                {
                    "appliance": "Water Pump",
                    "durationMinutes": 10,
                    "mode": "full-power"
                }
            ],
            "energySources": [
                {
                    "source": "Solar panels",
                    "mode": "full-power",
                    "durationHours": 2
                },
                {
                    "source": "Solar panels",
                    "mode": "half-power",
                    "durationHours": 4
                }
            ],
            "energyStorage": {
                "Battery bank": {
                    "initialEnergy": 200
                }
            },
            "peakPowerProfile": {
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
        }
    }
};

var systemAnalysisReport = {
    "profilesAnalysis": {
        "winterDay": {
            "consumedEnergy": 2208.33,
            "consumedEnergyUnit": "Wh",
            "peakPower": 2800,
            "peakPowerUnit": "W",
            "storageChargingChains": [
        
            ],
            "storageConsumptionTree": {
                "Battery bank": {
                    "targets": {
                        "Battery junction": {
                            "peakCurrent": 166.66,
                            "peakCurrentUnit": "A",
                            "targets": {
                                "Inverter": {
                                    "peakCurrent": 166.66,
                                    "peakCurrentUnit": "A",
                                    "targets": {
                                        "Terminal 230V": {
                                            "peakCurrent": 166.66,
                                            "peakCurrentUnit": "A",
                                            "targets": {
                                                "Cooktop": {
                                                    "consumedEnergy": 1500,
                                                    "consumedEnergyUnit": "Wh",
                                                    "peakCurrent": 166.66,
                                                    "peakCurrentUnit": "A",
                                                    "timeWorked": 60,
                                                    "timeWorkedUnit": "minutes"
                                                },
                                                "Water Boiler": {

                                                }
                                            }
                                        }
                                    }
                                }
                            } 
                        }
                    }                   
                }
            }
        }
    },
    "peakPowerPossible": 2800,
    "peakPowerPossibleUnit": "W"
}

function getSystemInfo() {
    var systemSize = new SystemSize();

    var batteryBankVoltage = 12;
    var dayProfile = "winterDay";

    var peakConsumption = systemSize.getPeakPower(system, [dayProfile]);
    var energyConsumption = systemSize.getConsumptionEnergy(system, [dayProfile]);
    var batteryBankSize = systemSize.getBatteryBankSize(energyConsumption, batteryBankVoltage);
    var batteryPeakCurrent = systemSize.getBatteryPeakCurrent(peakConsumption, batteryBankVoltage);

    console.log("peak power consumption: " + peakConsumption + " W");
    console.log("energy consumption for " + dayProfile + ": " + energyConsumption +" Wh");
    console.log("battery bank: " + batteryBankSize +" Ah, " + batteryBankVoltage + " V");
    console.log("battery peak current: " + batteryPeakCurrent +" A");

    dayProfile = "winterDayNoCooktop";

    peakConsumption = systemSize.getPeakPower(system, [dayProfile]);
    energyConsumption = systemSize.getConsumptionEnergy(system, [dayProfile]);
    batteryBankSize = systemSize.getBatteryBankSize(energyConsumption, batteryBankVoltage);
    batteryPeakCurrent = systemSize.getBatteryPeakCurrent(peakConsumption, batteryBankVoltage);

    console.log("peak power consumption: " + peakConsumption + " W");
    console.log("energy consumption for " + dayProfile + ": " + energyConsumption +" Wh");
    console.log("battery bank: " + batteryBankSize +" Ah, " + batteryBankVoltage + " V");
    console.log("battery peak current: " + batteryPeakCurrent +" A");
}