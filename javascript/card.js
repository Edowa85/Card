

const card = document.querySelector(".Pingvinecard");
const cardText = document.getElementById("card-text");
const cardList1 = document.getElementById("card-list1");
const cardList2 = document.getElementById("card-list2");
const cardList3 = document.getElementById("card-list3");

const stories = [
    { 
        title: "Who is the frend you will call", 
        items: ["when you killed some one", "need to move somewhere", "ask for beer"],
        colors: ["red", "yellow", "green"] // Assign colors
    },
    { 
        title: "Some silly things to ask ", 
        items: ["if you had to fake your own death, how would you do it", "if yo where a ghost who you will haunt for fun", "if yo where a ghost who you will haunt for fun"],
        colors: ["red", "yellow", "green"] // Assign colors
    },
    { 
        title: "Onko sampo ", 
        items: ["killer", "mhw hunter", "coder"],
        colors: ["red", "yellow", "green"] // Assign colors
    }
];

let clickCount = 0;

card.addEventListener("click", function() {
    clickCount++;
    card.classList.toggle("flipped");

    if (clickCount % 2 === 1) {
        let storyIndex = Math.floor(clickCount / 2) % stories.length;
        cardText.textContent = stories[storyIndex].title;

        // Clear previous lists
        cardList1.innerHTML = "";
        cardList2.innerHTML = "";
        cardList3.innerHTML = "";

        // Loop through story items and apply colors
        stories[storyIndex].items.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item;
            li.style.color = stories[storyIndex].colors[index]; // Assign corresponding color

            // Append items to a specific list
            cardList1.appendChild(li); 
        });

    } else {
        // Reset when flipped back
        cardText.textContent = "";
        cardList1.innerHTML = "";
        cardList2.innerHTML = "";
        cardList3.innerHTML = "";
    }
});