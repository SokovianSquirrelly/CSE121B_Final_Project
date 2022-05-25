import { calculateBaldEagles, calculateWashingMachines, calculateGuns } from './distanceMeasurements.js';
import { calculateBigMacs, calculateElephants, calculateAdultKidneys } from './weightMeasurements.js';

// This is a random number generator.  This is what determines what unit of
// measurement we'll be using.

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// Depending on what the random number generator returns, we will call a
// conversion function for distance.

function chooseDistanceUnit()
{
    let unitSelector = getRandomInt(3);
    if (unitSelector === 0)
    {
        calculateBaldEagles();
    }
    else if (unitSelector === 1)
    {
        calculateWashingMachines();
    }
    else
    {
        calculateGuns();
    }
}

// Same as chooseDistanceUnit() but for weight.

function chooseWeightUnit()
{
    let unitSelector = getRandomInt(3);
    if (unitSelector === 0)
    {
        calculateBigMacs()
    }
    else if (unitSelector === 1)
    {
        calculateElephants();
    }
    else
    {
        calculateAdultKidneys();
    }
}

document.querySelector('#calculateDistance').addEventListener('click', chooseDistanceUnit);
document.querySelector('#calculateWeight').addEventListener('click', chooseWeightUnit);