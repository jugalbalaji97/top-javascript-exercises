const findTheOldest = function(people) {
    return people.sort((personA, personB) => {
        if (!("yearOfDeath" in personA)) personA.yearOfDeath = new Date().getFullYear();
        if (!("yearOfDeath" in personB)) personB.yearOfDeath = new Date().getFullYear();
        return (personB.yearOfDeath - personB.yearOfBirth) - (personA.yearOfDeath - personA.yearOfBirth)
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
