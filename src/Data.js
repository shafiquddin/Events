const Animal =[
    {name:"cat",
    sound:"meow",
    feedreq:{
        water:2,
        food:3}
    },
        {name:"dog",sound:"woof"}
];

function useAnimal(animal){
    return [
        animal.name,
        function() {
            console.log(animal.sound);
        }
    ]
}

export default Animal;
export {useAnimal};