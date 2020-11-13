const policies_brand = {
    "health_insurance":{
        name:"maxbupa",duration:10,price:"50",category:"health_insurance",
        name:"edelweiss",duration:10,price:"50",category:"health_insurance",
        name:"ifccotokio",duration:10,price:"50",category:"health_insurance",
        name:"tataiz",duration:10,price:"50",category:"health_insurance",
        name:"axa",duration:10,price:"50",category:"health_insurance",
        name:"Navi",duration:10,price:"50",category:"health_insurance",
        name:"digit",duration:10,price:"50",category:"health_insurance",
        name:"edelweiss",duration:20,price:"90",category:"health_insurance",
        name:"futuregenerali",duration:20,price:"100",category:"health_insurance",
        name:"icicilombard",duration:20,price:"120",category:"health_insurance",
        name:"liberty",duration:20,price:"80",category:"health_insurance",
        name:"magmahdi",duration:20,price:"70",category:"health_insurance",
        name:"manipalcigna",duration:20,price:"90",category:"health_insurance",
        name:"maxbupa",duration:20,price:"85",category:"health_insurance",
        name:"navi",duration:30,price:"120",category:"health_insurance",
        name:"star",duration:30,price:"150",category:"health_insurance",
        name:"tataaig",duration:30,price:"250",category:"health_insurance",
        name:"universalsompo",duration:30,price:"250",category:"health_insurance",
        name:"star",duration:30,price:"120",category:"health_insurance",
        name:"liberty",duration:30,price:"145",category:"health_insurance",
        name:"digit",duration:30,price:"180",category:"health_insurance",
        name:"edelweiss",duration:30,price:"170",category:"health_insurance",
    }

};


const name = document.querySelector(".name");
const age = document.querySelector(".age");
// const gender = document.querySelector(".gender");
const budget = document.querySelector(".budget");
const duration  = document.querySelector(".duration");
const policy = document.querySelector(".policy");
const submitBtn  = document.querySelector(".submitBtn");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
 
      
    for(policytype in policies_brand){
        console.log(policy.value,policytype);
        if(policytype === policy.value){ 
            for(selected_policy in policytype){
                const data = policies_brand[policytype];
              //filter data here
            }   
        }
    }
});

