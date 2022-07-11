export function formatCurrency(number) {
    const temp = number.toString().split("");

    let x = "$";

    for (let size = (temp.length - 1), i = size; i >= 0; i--) {
        x += temp[Math.abs(i - size)];

        if (i % 3 === 0 && i !== 0) {
            x += ",";
        }
    }

    return x += ".00";
}