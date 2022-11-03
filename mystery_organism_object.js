// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  }
  //you can return objects as is...or make an object and return that! in the code below I'm returning object as is...
  function pAequorFactory(num, arr){
   // let mypAequor = {
     return { specimenNum: num,
      dna: arr,
      mutate(){
        let randNum = Math.floor(Math.random() * 15);
        let newDna = returnRandBase(this.dna[randNum]);
        console.log(randNum);
        while (this.dna[randNum] === newDna){
          returnRandBase(this.dna[randNum]);
        }
        if (this.dna[randNum] !== newDna){
          this.dna[randNum] = newDna;
        } 
      },
      compareDNA(pAequorTwo){
        let match = 0;
        
        //compare current & pAequorTwo's dna (loop?)
        //percentage= (Value/Total Value)×100
        //for loop - if they match > match += 1;
        // this.dna[i] === pAequorTwo.dna[i];
        for(let i = 0; i < 15; i++){
          if (this.dna[i] === pAequorTwo.dna[i])
          match += 1;
        }
        let percentage = Math.floor((match / 15) * 100);
        console.log(`${this.specimenNum} and ${pAequorTwo.specimenNum} have ${percentage}% DNA in common`);
      },
      willLikelySurvive(){
        let cee = 0;
        let gee = 0;
        for(let i = 0; i < 15; i++){
          if (this.dna[i] === 'C'){
            cee += 1;
          }
          else if (this.dna[i] === 'G'){
            gee += 1;
          }
        }
        let percentage = ((cee + gee) / 15) * 100;
        if (percentage >= 60){
          return true;
        } else {return false;}
      }
    };
  //  return mypAequor;
  
  }
  const firstOne = pAequorFactory(12, mockUpStrand());
  const secondOne = pAequorFactory(22, mockUpStrand());
  
  function makepAequor (){
    let thirtypAequor = [];
    while (thirtypAequor.length < 30){
      let num = Math.floor(Math.random() * 99);
      let arr = mockUpStrand();
      let pAequor = pAequorFactory(num, arr);
      let survival = pAequor.willLikelySurvive();
      if (survival){
        thirtypAequor.push(pAequor);
      }
    }
    return thirtypAequor;
  }
  //console.log(makepAequor());
  
  firstOne.compareDNA(secondOne);
  // console.log(firstOne);
  // firstOne.mutate();
  // console.log(firstOne);
  
  let survive = firstOne.willLikelySurvive();
  console.log(survive);
  
  
  
  
  