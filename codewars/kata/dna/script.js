function DNAStrand(dna) {
	/*   let result = "";
		for (let i = 0; i < dna.length; i++) {
			if (dna[i] === "A") {
				result += "T";
			} else if (dna[i] === "T") {
				result += "A";
			} else if (dna[i] === "C") {
				result += "G";
			} else if (dna[i] === "G") {
				result += "C";
			}
		}
		return result; */
	return dna.replace(/./g, function (c) {
		return DNAStrand.pairs[c]
	}
}

// Example usage:
console.log(DNAStrand("ATTGC")); // Output: "TAACG"
console.log(DNAStrand("GTAT")); // Output: "CATA"
