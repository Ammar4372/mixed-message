const randomWordsFirst = ['Abjure','Blackboard',,"Future","Picnic","Agonistic","Garland","Protect","Airline",'Reporter','Board','Indulge','Ring','Bookworm','Inflatable','Salesclerk','Himself'];
const randomWordsSecond =["Gigantic","Publish","Bandit","Goofy","Quadrangle","Banquet","Government","Recount","Binoculars","Grandnieces",'Redoubtable','Biologist','Handbook','Reflection'];
const randomWordsThird =["Gigantic","Publish","Bandit","Goofy","Quadrangle","Banquet","Government","Recount","Binoculars","Grandnieces",'Redoubtable','Biologist','Handbook','Reflection'];

const words=[randomWordsFirst,randomWordsSecond,randomWordsThird];

const randomSentenceGenerator =(arr) =>{
    let sentence ='';
    for (let i = 0; i < 10; i++) {
        let arrSelector = Math.floor(Math.random()*arr.length);
        sentence += arr[arrSelector][Math.floor(Math.random() * arr[arrSelector].length)] +" ";
    }
    return sentence += '.';
};
console.log(randomSentenceGenerator(words));