//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var managerData=[managerName,managerAge,currentTeam,trophiesWon];
  return managerData;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationData){
  if(formationData.length==0){
    return null;
  }
  let object={
    "defender":formationData[0],
    "midfield":formationData[1],
    "forward":formationData[2]
  };
  return object;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  if(year==null)
  {
     return null;
  }
  return players.filter(player=>player.debut==year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter(player=>player.position==position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  
  return players.filter(function(player){
    for(each of player.awards){
      if(each.name===awardName){
        return player
      }
    }
  })
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){

  let val = [];
  for (var i = 0; i < players.length; i++) {
    var c = 0;
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
      c+=1;
    }
      if (c == noOfTimes)
      val.push(players[i]);
  }
  return val;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, Country){
  return players.filter(function(player){
    if(player.country===Country){
      for(each of player.awards){
        if(each.name===awardName)return player
      }
    }
  })
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => player.awards.length >= noOfAwards && player.team == team && player.age < age);
  
}
//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  return players.sort((a,b)=>(a.age<b.age)? 1 :((a.age>b.age)?-1:0))
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(Team){
  let list=players.filter(data=>{
    return data.team===Team;});
  return list.sort((a,b)=>(a.awards.length<b.awards.length)? 1 :((a.awards.length>b.awards.length)?-1:0))
  }
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
