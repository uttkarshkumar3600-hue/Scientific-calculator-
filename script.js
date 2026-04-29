// Script for Scientific Calculator

class ScientificCalculator {
    constructor() {
        this.memory = 0;
        this.angleMode = 'degrees'; // Default angle mode
    }

    setAngleMode(mode) {
        if (mode === 'degrees' || mode === 'radians') {
            this.angleMode = mode;
        } else {
            throw new Error('Invalid angle mode. Use degrees or radians.');
        }
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    }

    sin(x) {
        return this.angleMode === 'degrees' ? Math.sin(this.toRadians(x)) : Math.sin(x);
    }

    cos(x) {
        return this.angleMode === 'degrees' ? Math.cos(this.toRadians(x)) : Math.cos(x);
    }

    tan(x) {
        return this.angleMode === 'degrees' ? Math.tan(this.toRadians(x)) : Math.tan(x);
    }

    log(x) {
        return Math.log(x);
    }

    exp(x) {
        return Math.exp(x);
    }

    memoryStore(value) {
        this.memory = value;
    }

    memoryRecall() {
        return this.memory;
    }

    memoryClear() {
        this.memory = 0;
    }
}

// Example of usage:
const calc = new ScientificCalculator();

// Set angle mode
calc.setAngleMode('degrees');

// Perform calculations
const sum = calc.add(2, 3);
const sinValue = calc.sin(45);
const logValue = calc.log(10);

// Memory operations
calc.memoryStore(sum);
const recalledValue = calc.memoryRecall();