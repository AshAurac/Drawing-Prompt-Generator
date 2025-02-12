const prompts = [
    "A shark playing a trumpet",
    "A medieval knight trying to use a smartphone",
    "A group of vegetables running a marathon",
    "A pizza delivery person on a unicycle delivering slices to a birthday party",
    "A loaf of bread playing in a rock band",
    "A detective trying to crack a case with egg-sperimental methods",
    "A cat in a purr-suit chasing a laser pointer",
    "A robot baking cookies",
    "A person reading a book in the middle of a tornado",
    "A flying pizza with wings",
    "A treehouse built inside a giant teacup",
    "A magician pulling a rabbit out of a hat, but it’s a hat full of spaghetti",
    "A superhero who saves the world, but only with pun-tastic lines",
    "A snail at the finish line of a 100m sprint, winning a gold medal",
    "A detective interrogating a hotdog",
    "A pizza slice on vacation, lounging on a tropical beach",
    "A sandwich dressed as a businessman, giving a presentation",
    "A penguin trying to blend into a formal event crowd",
    "A dog in a yoga class, trying to do a “downward dog” pose",
];

function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    document.getElementById('prompt').textContent = randomPrompt;
}
