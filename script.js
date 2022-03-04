const appData = [
  {
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    img: 'https://picsum.photos/id/101/2621/1747',
    href: 'https://google.com/',
  },
  {
    title: 'Title 2',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    img: 'https://picsum.photos/id/114/3264/2448',
    href: 'https://google.com/',
  },
  {
    title: 'Title 3',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    img: 'https://picsum.photos/id/135/2560/1920',
    href: 'https://google.com/',
  },
];
//to reference the select menu easier later
	var toy = document.getElementById('toys');
	//to do this when the selection changes
	toys.onchange = function() {
		//states array; logging information
		console.log('toy: ' + toys.selectedIndex);
		console.log('toy: ' + toys.options[toys.selectedIndex].text);
		console.log( toys.value + '.jpg')
		//change background to postcard
		document.getElementById('toy-pic').style.backgroundImage = 'url( 'toys.value + '.jpg)';
		//'To Generate a Postcard' changes to 'Greetings from'
		document.getElementById('toy-name').innerHTML = toys.value;
		//change 'postcard' to say the state name
		document.getElementById('toy-desc').innerHTML = toys.options[toys.selectedIndex].text;
	}
