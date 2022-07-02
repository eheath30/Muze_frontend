/*key variables
- 1. parentsection, which is called to read emoji or comment submit button interaction
- 2. btn, which is called to read post submit button interaction (could be included in parentSection)
*/
const parentSection = document.querySelector('.parentsection')
const btn = document.getElementById("submitButton");

/*Event listeners 1.load content from DB on DOM load
- 2. submit post on click
- 3. run printComment or updateReaction on event */
document.addEventListener("DOMContentLoaded",  () => {
  fetchData();
});

btn.addEventListener("click", submitPost);

parentSection.addEventListener('click', (e) => {
      e.preventDefault();

      if(e.target.innerText.includes('Submit')){
        console.log('running printComment');
        submitComment(e);
      } else if(e.target.parentElement.className.includes('emojicontainer')) {
        console.log('running updateReaction');
        updateReaction(e);
      }
  })


// Post character counter and user alert
// collect elements
let textArea = document.getElementById("postText");
let characterCounter = document.getElementById("charCount");
const maxNum = 255;
// update char-count function
const countCharacters = () => {
 let numOfCharsEntered = textArea.value.length;
 let counter = maxNum - numOfCharsEntered;
 characterCounter.textContent = counter
//styling changer
 if (counter < 100) {
  characterCounter.style.color = "red";
}
// alert box
if (counter < 1) {
    alert("Maximum number of characters Entered")
}

}
// activation
textArea.addEventListener("input", countCharacters);
