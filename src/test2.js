const test2 = (...line) =>{ 
     const arrayInt=line.split(`\n`).slice(1).map(i=>i.split(` `));
     let entry=0;
     let min=0;
     let max=0;
     let result;
     for(let i=0; i<arrayInt.length; i++){
          for(let j=i+1;j<arrayInt.length; j++) {
           if(Math.max(arrayInt[i][0],arrayInt[j][0])<=Math.min(arrayInt[i][1],arrayInt[j][1])){
                max=Math.min(arrayInt[i][1],arrayInt[j][1]);
                min=Math.max(arrayInt[i][0],arrayInt[j][0]);
                entry++;
           }
            else if(!entry){
                min=Math.min(arrayInt[i][0],arrayInt[j][0]);
                max=Math.max(arrayInt[i][1],arrayInt[j][1]);
            }
         }
     }
     if(!entry){
           min=arrayInt[0][0];
           max=arrayInt[arrayInt.length-1][1];
           entry=arrayInt.length;
     }
      result=Number(max)-Number(min)+1;
      return entry+" "+result;
 }
 
