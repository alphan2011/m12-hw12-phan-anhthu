var quotes = [
    "Well, um, actually a pretty nice little Saturday, we’re going to go to Home Depot. Yeah, buy some wallpaper, maybe get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time.",
    "I'm Ron Burgundy?",
    "HEY MOM! CAN WE GET SOME MEATLOAF? What is she doing back there? I never know what she’s doing.",
    "We elves try to stick to the four main food groups, candy, candy cane, candy corn, and syrup…",
    "You site on a throne of lies!",
    "I freaking love you!",
    "I really regret opening my mouth and talking to you.",
    "Let's capture the dream.",
    "Hey. They laughed at Louis Armstrong when he said he was gonna go to the moon. Now he’s up there, laughing at them.",
    "If we went to a Halloween party dressed as Batman and Robin, I’d go as Robin. That’s how much you mean to me."
    ];
    
    var q_article = document.getElementById("my_quote");

    var button = document.getElementById("button");
    var rand_int = Math.floor(Math.random() * 10);
    q_article.innerHTML = quotes[rand_int];

    button.addEventListener("click",
        function() {
            var rand_int = Math.floor(Math.random() * 10);
            q_article.innerHTML = quotes[rand_int];
        }, false
    );