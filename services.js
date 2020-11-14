const policies_brand = [
{name:"maxbupa",duration:10,price:"50"},
{name:"edelweiss",duration:10,price:"50"},
{name:"ifccotokio",duration:10,price:"50"},
{name:"tataiz",duration:10,price:"50"},
{name:"axa",duration:10,price:"50"},
{name:"navi",duration:10,price:"50"},
{name:"digit",duration:10,price:"50"},
{name:"edelweiss",duration:20,price:"90"},
{name:"futuregenerali",duration:20,price:"100"},
{name:"icicilombard",duration:20,price:"120"},
{name:"liberty",duration:20,price:"80"},
{name:"magmahdi",duration:20,price:"70"},
{name:"manipalcigna",duration:20,price:"90"},
{name:"maxbupa",duration:20,price:"85"},
{name:"navi",duration:30,price:"120"},
{name:"star",duration:30,price:"150"},
{name:"tataaig",duration:30,price:"250"},
{name:"universalsompo",duration:30,price:"250"},
{name:"star",duration:30,price:"120"},
{name:"liberty",duration:30,price:"145"},
{name:"digit",duration:30,price:"180"},
];



const name = document.querySelector(".name");
const age = document.querySelector(".age");
// const gender = document.querySelector(".gender");
const budget = document.querySelector(".budget");
const duration  = document.querySelector(".duration");
const policy = document.querySelector(".policy");
const submitBtn  = document.querySelector(".submitBtn");
const results = document.querySelector(".results");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
 
      
   policies_brand.map(policies=>{
       const divelem = document.createElement("div");
     if(policies.price <= parseInt(budget.value) && policies.duration == parseInt(duration.value)){
         const elem = `  <div class="results">
         <div class="policy">
             <img src="./assets/health/${policies.name}.jpg" alt="">
             <h3>${policies.name}</h3>
             <h3>${policies.price}$</h3>
             <h3>${policy.value}$</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, quod aliquam aliquid reprehenderit impedit assumenda incidunt dicta deleniti laboriosam est!</p>
         </div>
     </div>`;
        divelem.innerHTML = elem;
     results.appendChild(divelem);
     }
   });
});

