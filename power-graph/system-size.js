function SystemSize() {

    SystemSize.prototype.getPeakPower = function(systemSetup, consumptionProfile) {
        var peakPower = 0;        
        var appliances = systemSetup.appliances;
        var profiles = systemSetup.energyConsumptionProfiles;
        
        var l = consumptionProfile.length;
        for(var i = 0; i < l; i++) {
            var profile = profiles[consumptionProfile[i]];

            var profilePeakPower = this.getPeakPowerPerProfile(profile.peakPowerProfile, appliances);
            if (profilePeakPower != peakPower) {
                peakPower = profilePeakPower;
            }
        }

        return peakPower;
    };

    SystemSize.prototype.getPeakPowerPerProfile = function(peakPowerProfile, appliances) {
        var peakPower = 0;

        for(var applianceKey in peakPowerProfile) {
            var load = peakPowerProfile[applianceKey];            
            var appliance = appliances[applianceKey];

            var power = 0;
            var mode = appliance.modes[load.mode];
            if(mode) {
                power = mode.power;
            }

            peakPower += power;
        }

        return peakPower;
    };

    SystemSize.prototype.getConsumptionEnergy = function(systemSetup, consumptionProfile) {
        var totalConsumptionEnergy = 0;        
        var appliances = systemSetup.appliances;
        var profiles = systemSetup.energyConsumptionProfiles;
        
        var l = consumptionProfile.length;
        for(var i = 0; i < l; i++) {
            var profile = profiles[consumptionProfile[i]];

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

    SystemSize.prototype.getBatteryPeakCurrent = function(peakPower, batteryBankVoltage) {
        return peakPower / batteryBankVoltage;
    };
}