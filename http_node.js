let array=[]
let temp;
let temp1;
let obj_array = []
let http = require("http")
// let client = require("pg");
// let c1 = client.Client
// let credentials = new c1({
//   user: "harish",
//   host: "localhost",
//   database: "harishdb",
//   password: "harish123",
//   port: 5432,
// })
// credentials.connect((err)=>{
//     if(err) throw err;
//     console.log("connected");
// })
http.createServer(function(req,res){ 
    // post api
    if(req.method==="POST" && req.url=="/create_user"){    
        req.setEncoding("utf-8")
        req.on("data",(data1)=>{ //server is getting requested data to (data1)
            temp1 = data1 // and storing it to temp variable
            //console.log("server is listening",temp1)
            res.end(data1+" it is stored")
        })
        
        req.on("end",()=>{
            
            // let d1 = new Date();
            // let date = d1.getFullYear()+'-'+(d1.getMonth()+1)+'-'+d1.getDate();
            // let time  = d1.getHours()+':'+d1.getMinutes()+':'+d1.getSeconds();
            // let date_time = date+' '+time;
            
            //let text = `insert into usersecret values($1,$2,$3,$4,$5,$6,$7,$8);`
            //let values = [temp.family,temp.field,temp.fun,temp.finance,temp.fitness,temp.faith,temp.friends,date_time]
            //array.push(JSON.parse(temp)); // finally pusing the temp data to an array
            // credentials.query(text,values,(err,data)=>{
            //     if(err) throw err;
            //     res.write(JSON.stringify(data))
            //     console.log("database data",data);
            // });

            array.push(JSON.parse(temp1))
            console.log(array)
            res.end();   
        });
    }
    

     //get api
     if(req.method=="GET" && req.url=="/find_user"){
        
             res.write(JSON.stringify(array)); // getting data from the array as response
             console.log(array)
             res.end("displayed")
    //         // let text = `select * from usersecret;`
    //         // credentials.query(text,(err,data)=>{
    //         //     if (err) throw err;
    //         //     console.log(data)
    //         //     res.write(JSON.stringify(data.rows));
    //         //     
    //         // })
            
     }

    
     if(req.method=='GET' && req.url=="/areas_to_focus"){
    //     let text = `select * from usersecret order by date desc limit 1;`
    //     credentials.query(text,(err,data)=>{
    //         if(err) throw err;
    //         console.log("hey",data)
            
    //         let object  = data.rows 

    //         //console.log("string format",object)
                let len = array.length;
                let len1 = array[len-1]
               
                for([key,value] of Object.entries(len1)){
                       if (value<=3){
                          obj_array.push(key)
                    }
                  }
              
            
              res.write(JSON.stringify(obj_array));
              console.log("areas_to_focus",obj_array)
               res.end()
            }

     
    
}).listen(process.env.PORT || 8081)