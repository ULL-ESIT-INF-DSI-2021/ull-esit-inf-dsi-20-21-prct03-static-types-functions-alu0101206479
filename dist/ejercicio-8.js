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
console.log("\nRangos IPs == IPs disponibles en ese rango:");
let ip1 = "10.0.0.0";
let ip2 = "10.2.0.0";
let funcionEj8 = ipsInRange(ip1, ip2);
console.log(`\n${ip1}, ${ip2} == ${funcionEj8}`);
ip1 = "10.0.0.0";
ip2 = "10.0.1.0";
funcionEj8 = ipsInRange(ip1, ip2);
console.log(`${ip1}, ${ip2} == ${funcionEj8}`);
ip1 = "20.0.0.10";
ip2 = "20.0.1.0";
funcionEj8 = ipsInRange(ip1, ip2);
console.log(`${ip1}, ${ip2} == ${funcionEj8}`);
