function ipsInRange(ip1, ip2) {
    const ip1Numbers = ip1.split(".");
    const ip2Numbers = ip2.split(".");
    let rango = 0;
    let n = 1;
    for (let i = ip1Numbers.length - 1; i > -1; i--) {
        rango = rango + (parseInt(ip2Numbers[i]) - parseInt(ip1Numbers[i])) * n;
        n = n * 256;
    }
    return rango;
}
console.log(ipsInRange("10.0.0.0", "10.2.0.0"));
console.log(ipsInRange("10.0.0.0", "10.0.1.0"));
console.log(ipsInRange("20.0.0.10", "20.0.1.0"));
