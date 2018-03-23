// Component Author
let author = document.body.appendChild( document.createElement( 'h4' ) );
author.id = 'author';
author.title = 'GossJS';
author.textContent = 'Данил Ростов';

// Component TransformString
let input = document.body.appendChild( document.createElement( 'input' ) );

let resultBox = document.body.appendChild( document.createElement( 'span' ) );
resultBox.textContent = 'Результат: ';

let resultLine = document.body.appendChild( document.createElement( 'span' ) );

input.oninput = () => {
	resultLine.textContent = generateStr( input.value );
};

const generateStr = ( str ) => {
	const result = str
		|> upperCase
		|> toLength
		|> multiplyer
		|> reverse;
	return result;
};

const upperCase = ( str ) => str.toUpperCase();

const toLength = ( str ) => { 
	while( str.length < 10 ) {
		str += '*';
	}
	return str;
};

const multiplyer = ( str ) => str + str;

const reverse = ( str ) => {
	let result = '';
	for( let i = str.length; i > 0; i-- ) {
		result += str[i - 1];
	}
	return result;
};