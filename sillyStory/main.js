const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 farenheit outside , so :insertx: laid in an ice box while listening to r&b. When they got inside the box :inserty:, they were shocked, and then :insertz:. Bob took pictures of the whole thing — :insertx: weighs 300 pounds, and it was a very lazily hot day.";

var insertX = ["Trina the Wizard","Sushi Mama","Unnamed Gremlin"];

var insertY = ["the skatepark","CU Boulder","Cosmo's Pizza"];

var insertZ = ["turned into pink flames and vanished","particles got rearranged into being the sidewalk", "turned really small and got into a hot wheels and drove away"];

randomize.addEventListener('click', result);


function result() {

    var newStory = storyText;

    var xItem, yItem, zItem;

    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replace(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);
    newStory = newStory.replace(":insertx:",xItem);
      
      if(customName.value != '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
      }
    
      if(document.getElementById("uk").checked) {
        var stonesPerPound = 0.0714286;
        var weight = Math.round(300*stonesPerPound)+' stone';
        var temperature =  Math.round((94-32)*5/9)+' centigrade';
        newStory = newStory.replace("94 farenheit", temperature);  
        newStory = newStory.replace("300 pounds", weight); 
      }
      
      story.textContent = newStory;
      story.style.visibility = 'visible';
    }
