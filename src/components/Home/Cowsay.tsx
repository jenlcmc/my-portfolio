import { useState, useEffect } from "react";

const cowArts = [
	`      \\     ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
	`       \\     ^__^
         \\  (@@)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||`,
	`           \\ ^__^
         \\  (--)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,

	`       \\ 
         \\ 
      .--. 
     |o_o | 
     |:_/ | 
    //   \\ \\ 
   (|     | ) 
  /'\\_   _/\`\\ 
  \\___)=(___/`,
];

const CowSay = () => {
	// State to store the cow art
	const [cowArt, setCowArt] = useState("");

	// Select a random cow art on initial render
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * cowArts.length);
		setCowArt(cowArts[randomIndex]);
	}, []);

	return <pre>{cowArt}</pre>;
};

export default CowSay;
