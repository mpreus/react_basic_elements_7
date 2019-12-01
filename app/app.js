const UserAge = () => {
	
	const year = parseFloat(prompt("Enter year of birth"));   	/* getting user's year of birth*/
	const thisYear = new Date().getFullYear();				/* getting current year */
	const userAge = thisYear - year;
	
	return (
		if ( isNaN(userAge) ) {
			return <h2>Only numbers are allowed</h2>
		}

		<h2>Your age: {thisYear - year}</h2>
	)
}

ReactDOM.render(
  	<UserAge />, 
 	document.getElementById("app")
);
