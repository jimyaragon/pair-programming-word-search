const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false
    }


    const horizontalJoin = letters.map(ls => ls.join(''));

    const verticalJoin = Array.from({ length: letters[0].length }, (_, i) =>
    letters.map(row => row[i]).join('')
);

for (const l of [...horizontalJoin, ...verticalJoin]) {
    if (l.includes(word)) {
        return true;
    }
        
     }
     return false;
};

module.exports = wordSearch