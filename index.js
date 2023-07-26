let name1  = 'Md.Tufan ali';


// document.write(name1);
// document.write(name1.toUpperCase());
document.write(name1.toLowerCase());

// 111111111111111111

const name2='Toli';
const name3='Toli';

if(name2.toUpperCase()==name3.toLowerCase()){
   // console.log('This is right ');
}else{
   // console.log('you are woung');
}

// 2222222222222222

const name5 =['toli','I am hiro ','rabbi','tufan','roki','hassan','alime','9',' yyyy 1212 888 9999'];

const namesearching = '1212';
const output = [];

for(const newname of name5 ){
    // console.log(newname);

    if(newname.indexOf(namesearching) != -1){
        output.push(newname);
    }
}
// console.log(output);

// 333333333333333

const song = 'amar sonar bangla ami tumai valovasi';
// console.log(song);
// console.log(song.split('o'));
// console.log(song.slice(2,5));
// console.log(song.substring(5,7));


// 444444444444

const FastName = 'MD';
const LastName = ' Tufan';
const FullName =FastName.concat(LastName).concat(' Ali');
// console.log(FullName);

// 555555555555


function Allnumber( num1,num2){
    // console.log(arguments)
}

const result = Allnumber(3,6,7,9,12,8,46,10,32,98,);

// 66666666666


const FastNunber= [1,2,3,4,5];
const LastNumber=[6,7,8,9,10];
const TotalNumber=FastNunber.concat(LastNumber);
// console.log(TotalNumber);
// console.log(TotalNumber.slice(3,7));
// console.log(TotalNumber.splice(4,8));


const parson1=['ali','rabbi','roki','hassan','asif'];
const parson2=['toli','jannatun','rumi','asha'];
const totalparson = parson1.concat(parson2);
// console.log(totalparson);

// 77777777777777777


try{
    // code test
   console.log("Hello Everyone");
    console.log(x);
    console.log("Not gonna work");   

}catch(err){
    console.log(err);
}finally{
    console.log("Bye Everyone");
}