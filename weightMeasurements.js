// The average Big Mac is about 9 ounces.

function calculateBigMacs()
{
    let unit = document.querySelector('#weight').value;
    let number = parseInt(document.querySelector('#wNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "ounces":
            answer = number / 9;
            break;

        case "pounds":
            answer = (number*16) / 9;
            break;

        case "tons":
            answer = (number*32000) / 9;
            break;

        default:
            answer = number / 9;
            break;
    }

    document.querySelector('#weightFinal').textContent = `That is equal to ${answer} Big Macs.`;
}

// On average, elephants are about 8000 pounds.

function calculateElephants()
{
    let unit = document.querySelector('#weight').value;
    let number = parseInt(document.querySelector('#wNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "ounces":
            answer = number / 128000;
            break;

        case "pounds":
            answer = (number*16) / 128000;
            break;

        case "tons":
            answer = (number*32000) / 128000;
            break;

        default:
            answer = number / 128000;
            break;
    }

    document.querySelector('#weightFinal').textContent = `That is equal to ${answer} elephants.`;
}

// Adult kidneys weight about 4 ounces on average.

function calculateAdultKidneys()
{
    let unit = document.querySelector('#weight').value;
    let number = parseInt(document.querySelector('#wNumber').value);
    let answer = 0;

    switch (unit)
    {
        case "ounces":
            answer = number / 4;
            break;

        case "pounds":
            answer = (number*16) / 4;
            break;

        case "tons":
            answer = (number*32000) / 4;
            break;

        default:
            answer = number / 4;
            break;
    }

    document.querySelector('#weightFinal').textContent = `That is equal to ${answer} adult kidneys.`;
}

export
{
    calculateBigMacs,
    calculateElephants,
    calculateAdultKidneys
};