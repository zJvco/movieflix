export function formatCurrency(number) {
    const temp = number.toString().split("");

    let _ = "$";
    
    for (let i = temp.length - 1; i >= 0; i--) {
        if ((i + 1) % 3 === 0) {
            _ += ",";
        }
        
        _ += temp[i];
    }

    return _ += ".00";
}