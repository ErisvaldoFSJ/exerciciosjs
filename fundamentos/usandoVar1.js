{
    {
        {
            {
                var sera = "Será???"
                console.log(sera) //escopo davariavel também esta fora, 
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123 //escopo da variavel apenas dentro da function
}
teste()
console.log(local)

