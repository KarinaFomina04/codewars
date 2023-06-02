//Grasshopper - Messi Goals

//Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
//
// Information
// Messi goal scoring statistics:
//
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.


var totalGoals = 58
var laLigaGoals = totalGoals - 10 -5
var championsLeagueGoals = totalGoals - laLigaGoals - 5
var copaDelReyGoals = totalGoals - laLigaGoals - championsLeagueGoals