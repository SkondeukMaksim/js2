const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    speed: 80, // км/год
};

function displayCarInfo(car) {
    console.log(`Виробник: ${car.manufacturer}`);
    console.log(`Модель: ${car.model}`);
    console.log(`Рік випуску: ${car.year}`);
    console.log(`Середня швидкість: ${car.speed} км/год`);
}

function calculateTravelTime(distance, car) {
    const travelTime = distance / car.speed;
    const restTime = Math.floor(travelTime / 4); 
    return travelTime + restTime;
}

displayCarInfo(car);
const distance = 400; 
console.log(`Час для подолання ${distance} км: ${calculateTravelTime(distance, car)} годин`);

const fraction1 = { numerator: 3, denominator: 4 };
const fraction2 = { numerator: 5, denominator: 6 };

function addFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}

function subtractFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}

function multiplyFractions(f1, f2) {
    const numerator = f1.numerator * f2.numerator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}

function divideFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator;
    const denominator = f1.denominator * f2.numerator;
    return simplifyFraction({ numerator, denominator });
}

function simplifyFraction(fraction) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / commonDivisor,
        denominator: fraction.denominator / commonDivisor,
    };
}
console.log("Додавання:", addFractions(fraction1, fraction2));
console.log("Віднімання:", subtractFractions(fraction1, fraction2));
console.log("Множення:", multiplyFractions(fraction1, fraction2));
console.log("Ділення:", divideFractions(fraction1, fraction2));