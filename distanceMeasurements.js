
// The average wingspan of a bald eagle is 125 inches.

function calculateBaldEagles()
{
    let unit = document.querySelector('#distance').value;
    let number = parseInt(document.querySelector('#dNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "inches":
            answer = number / 125;
            break;

        case "feet":
            answer = (number*12) / 125;
            break;

        case "miles":
            answer = (number*63360) / 125;
            break;

        default:
            answer = number /125;
            break;
    }

    document.querySelector('#distanceFinal').textContent = `That is equal to the wing span of ${answer} bald eagles.`;
}

// The average width of a washing machine is 27 inches.

function calculateWashingMachines()
{
    let unit = document.querySelector('#distance').value;
    let number = parseInt(document.querySelector('#dNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "inches":
            answer = number / 27;
            break;

        case "feet":
            answer = (number*12) / 27;
            break;

        case "miles":
            answer = (number*63360) / 27;
            break;

        default:
            answer = number /27;
            break;
    }

    document.querySelector('#distanceFinal').textContent = `That is equal to ${answer} washing machines.`;
}

// An AR-15 is 16 inches in length.

function calculateGuns()
{
    let unit = document.querySelector('#distance').value;
    let number = parseInt(document.querySelector('#dNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "inches":
            answer = number / 16;
            break;

        case "feet":
            answer = (number*12) / 16;
            break;

        case "miles":
            answer = (number*63360) / 16;
            break;

        default:
            answer = number / 16;
            break;
    }

    document.querySelector('#distanceFinal').textContent = `That is equal to ${answer} AR-15's.`;
}

export 
{
    calculateBaldEagles,
    calculateWashingMachines,
    calculateGuns
};