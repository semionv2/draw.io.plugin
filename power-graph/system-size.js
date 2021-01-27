function SystemSize() {
    SystemSize.prototype.getConsumptionPower = function(systemSetup, powerProfile) {
        var totalPowerConsumption = 0;        
        var profile = systemSetup.powerProfiles[powerProfile];
        var appliances = systemSetup.appliances;
        for(var applianceKey in profile) {
            var load = profile[applianceKey];            
            var appliance = appliances[applianceKey];

            var power = 0;
            var mode = appliance.modes[load.mode];
            if(mode) {
                power = mode.power;
            }

            totalPowerConsumption += power;
        }

        return totalPowerConsumption;
    };

    SystemSize.prototype.getConsumptionEnergy = function(systemSetup, usageProfiles) {
        var totalConsumptionEnergy = 0;        
        var appliances = systemSetup.appliances;
        var profiles = systemSetup.energyConsumptionProfiles;
        
        var l = usageProfiles.length;
        for(var i = 0; i < l; i++) {
            var profile = profiles[usageProfiles[i]];

            totalConsumptionEnergy += this.getConsumptionEnergyPerProfile(profile, appliances);
        }

        return totalConsumptionEnergy;
    };

    SystemSize.prototype.getConsumptionEnergyPerProfile = function(profile, appliances) {
        var totalConsumptionEnergy = 0;        
        var loads = profile.loads;

        var l = loads.length;
        for(var i = 0; i < l; i++) {
            var load = loads[i];
            var appliance = appliances[load.appliance];
            var energy = 0;

            var mode = appliance.modes[load.mode];
            if(mode) {
                var timeHours = 0;
                if(load.timeHours) {
                    timeHours = load.timeHours;
                } else if(load.timeMinutes){
                    timeHours = load.timeMinutes / 60;
                }

                energy = mode.power * timeHours;
            }

            totalConsumptionEnergy += energy;
        }

        return totalConsumptionEnergy;
    };

    SystemSize.prototype.getBatteryBankSize = function(energy, batteryBankVoltage) {
        return energy / batteryBankVoltage;
    };
}