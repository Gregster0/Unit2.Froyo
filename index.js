const userInputFlavors = prompt(
    "Please enter Froyo Flavors in lowercase Separated by Commas",
    "chocolate,vanilla,strawberry,coffee,mystery"
  );

const flavorArray = userInputFlavors.split(",");

const sortFlavors = () => {
    const orderedFlavors = [
        {flavor: "vanilla", orderCount: 0},
        {flavor: "chocolate", orderCount: 0},
        {flavor: "strawberry", orderCount: 0},
        {flavor: "coffee", orderCount: 0},
        {flavor: "mystery", orderCount: 0},
    ]

    flavorArray.forEach((input) => {
        for(let i = 0; i < orderedFlavors.length; i++){
            if(orderedFlavors[i].flavor === input){
                orderedFlavors[i].orderCount++
            }
        }
    })

    return orderedFlavors
}




console.log(sortFlavors());