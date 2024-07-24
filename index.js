
const express = require("express");

const app = express();


const users = [{
name: "John",
 kidneys: [{
healthy: false
 }]

}];
app.use(express.json());

app.get("/", function(req, res) {
const johnkidneys = users [0] . kidneys;
const numberofkidneys = johnkidneys.length;
let numberofhealthykidneys = 0;
for(let i = 0; i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
        numberofhealthykidneys = numberofhealthykidneys + 1;
    }
}
const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
})

})
app.post("/", function(req,res){

    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"Done!"
    })

})


app. listen (4000);