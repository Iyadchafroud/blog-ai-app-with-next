//GET HTTP WITH NEXTJS  
//  create array ou users by id and name 

  

 export async function GET(request){
    const users = [{id:1,name:"John"},{id:2,name:"Mary"},{id:3,name:"Peter"}]

return new Response(JSON.stringify(users));
 }