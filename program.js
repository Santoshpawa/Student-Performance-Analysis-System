function createStudentManager(){
let record=[
    {
        id: 0,
        name: "Santosh",
        marks: {
            Maths: 90,
            English: 87,
            Physics: 70
        }
    },
    {
        id: 1,
        name: "Amit",
        marks: {
            Maths: 92,
            English: 85,
            Physics: 90
        }
    },{
        id: 2,
        name: "Vishal",
        marks: {
            Maths: 90,
            English: 80,
            Physics: 78
        }
    }

];

return {
    addStudent: function(obj){
        record.push(obj)
    },

    updateScore: function(id,sub,newMarks){
        record.filter((ele)=>ele.id==id).map((ele)=>ele.marks["sub"]=newMarks)
    },

    getStudentDetails: function(id){

        let ans=record.filter((ele)=> ele.id==id)
        if(ans.length==1)
            console.log(ans)
        else
            console.log("Student not found")
    },
    displayStudents: function(){
        record.forEach((ele)=>{
            console.log(ele)
        })
    }
   
    
}

}


let user=createStudentManager();

//user.getStudentDetails(2)

user.updateScore(4,"Physics",35)

user.addStudent({
    id: 4,
    name: "Sanju",
    marks: {
        Maths: 40,
        English: 35,
        Physics: 30
    }
})

user.displayStudents()


