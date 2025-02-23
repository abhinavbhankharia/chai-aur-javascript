const coding = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

coding.forEach( function (item){
    console.log(item);
} )  //prints each element of the array

coding.forEach( (item) => {
    console.log(item);
}
)  //prints each element of the array using arrow function


function printme(item){
    console.log(item)
}
coding.forEach(printme)  //prints each element of the array using a function

coding.forEach( (item,index,arr) => {
    console.log(`${item} is at index ${index} in the array ${arr}`)
}
)

mycoding = [
    {
    languageName: 'JavaScript',
    languageFileName: 'js',
    },
    {
    languageName: 'Python',
    languageFileName: 'py',
    },
    {
    languageName: 'Java',
    languageFileName: 'java',
    }
];

mycoding.forEach((item)=>{console.log(item.languageName)})  //prints the languageName of each object in the array
