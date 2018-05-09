

const initialData =[
    {
      name: "java",
      id: 1,
      subjects: [
        {
          name: "core java",
          id: 1,
          subjects: {}
        },
        {
          name: "advanced java",
          id: 2
        },
        {
          name: "android",
          id: 3
        }
      ]
    },
    {
      name: "js",
      id: 2,
      subjects: [
        {
          name: "angular",
          id: 1,
          subjects: {}
        },
        {
          name: "react",
          id: 2
        },
        {
          name: "ES6",
          id: 3
        }
      ]
    },
    {
      name: "python",
      id: 3
    },
    {
      name: "sql",
      id: 4
    }
  ];


export var getData = function(firebase){

     firebase.database().ref('user/001').once('value',(data)=>{
       console.log(data.toJSON());
       return data.toJSON();
     });

}
