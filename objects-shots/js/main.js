//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click',getDrink)

// function getDrink(){
//     let drink = document.querySelector('input').value

 
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//         .then (res => res.json())
//         .then (data => {
//             console.log(data.drinks[0])
//             document.querySelector('h2').innerText =data.drinks[0].strDrink
//             document.querySelector('img').src=data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText=data.drinks[0].strInstructions
//         })
//         .catch(err =>{
//             console.log(`error ${err}`)
//         })
//     } 

    let currentIndex = 0; // To keep track of the current drink

    document.querySelector('button[name="button"]').addEventListener('click', () => {
        getDrink(0); // Get the first drink based on input
    });
    
    document.getElementById('nextDrink').addEventListener('click', () => {
        getDrink(1); // Get the next drink
    });
    
    document.getElementById('prevDrink').addEventListener('click', () => {
        getDrink(-1); // Get the previous drink
    });
    
    function getDrink(direction) {
        let drink = document.querySelector('input').value;
    
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
            .then(res => res.json())
            .then(data => {
                currentIndex += direction; // Increment or decrement based on the arrow pressed
    
                if (currentIndex >= data.drinks.length) currentIndex = 0; // Loop to the start if at the end
                if (currentIndex < 0) currentIndex = data.drinks.length - 1; // Loop to the end if at the start
    
                document.querySelector('h2').innerText = data.drinks[currentIndex].strDrink;
                document.querySelector('img').src = data.drinks[currentIndex].strDrinkThumb;
                document.querySelector('h3').innerText = data.drinks[currentIndex].strInstructions;
            })
            .catch(err => {
                console.log(`error ${err}`);
            });
    }
    