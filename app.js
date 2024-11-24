class Smoothie {
    constructor(name, base, fruits, size, extras) {
        this.name = name;
        this.base = base;
        this.fruits = fruits;
        this.size = size;
        this.extras = extras;
    }

    getDescription() {
        return `
            <h2>Smoothie Order Summary</h2>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.length > 0 ? this.fruits.join(", ") : "None"}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Extras:</strong> ${this.extras.length > 0 ? this.extras.join(", ") : "None"}</p>
        `;
    }
}

document.getElementById("orderBtn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const base = document.querySelector('input[name="base"]:checked')?.value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(fruit => fruit.value);
    const size = document.getElementById("size").value;
    const extras
