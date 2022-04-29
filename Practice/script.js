heading = document.getElementById('subHeading');
heading.innerHTML = "Math is Fun!";

//This is a stub for improving the code by using an array
items = document.getElementsByClassName('valueItem');

//What would chanage below if the items array existed?
startValue = Math.trunc(Math.random() * 10) + 1;
current = items[0]
current.innerHTML = startValue
missValue = Math.trunc(Math.random() * 5) + 2; //2 - 6
operator = Math.trunc(Math.random() * 2); //0 or 1
nextValue = startValue;

//The code below could be MUCH more efficient.  What changes would you make?
myArray = [];
myArray.push('car');
console.log(myArray);
if (operator == 0)
{
    step = Math.trunc(Math.random() * 25) + 1;
    for (i = 2; i < 7; i++)
    {

    }
}

if (operator == 0)
{
    {
        nextValue = nextValue + step;
        if (i != missValue)
            (document.getElementById('item' + String(i))).innerHTML = nextValue;
        else
        {
            answer = nextValue;
            (document.getElementById('item' + String(i))).setAttribute("onclick","checkAnswer()");
        }
    }
}
else
{
    step = Math.trunc(Math.random() * 3) + 2;
        for (i = 2; i < 7; i++)
        {
            nextValue = nextValue * step;
            if (i != missValue)
                (document.getElementById('item' + String(i))).innerHTML = nextValue;
            else
            {
                answer = nextValue;
                (document.getElementById('item' + String(i))).setAttribute("onclick","checkAnswer()");
            }
        }
}

function checkAnswer()
{
    console.log(answer);
    response = prompt("Enter the missing value");
    if (answer == response)
    {
        alert("Congratulations - Correct");
        (document.getElementById('item' + String(missValue))).innerHTML = response;
    }
    else
        alert("Sorry, that is not correct.  Feel free to try again");

}