const data =  "http://localhost:3000/cards"

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

function assignclassName(element,classname){   //Assign classnames to elemenst
    return element.className= classname
  }
 
function appendchild(parent,child){           //Append child to parent
    return parent.appendChild(child)
}
function insertinnerHTML(element,value){     //Insert inner HTML values to specified elements
  return element.innerHTML=value
}

fetch(data)                                //Fetch data from the JSON api
.then((resp) => resp.json())               //Conver the data to JSON
  .then(function(data){
    const ul = document.getElementById("content")        //Get the Card List 
    let cards = data                                     // Get the results
    ul.style.width=((cards.length)*336)+"px"             //set the width of ul to facilitate the total cards
    cards.map(function(card) {                          // Map through the results and for each run the code below                                         
    
      const li =createNode('li')                         //create all HTML Tags needed for card using createNode function 
      const  div =createNode('div')
      const  cardimage = createNode('div')
      const  cardcontainer = createNode('div')
      const  authorname =createNode('p')
      const  cardtitle =createNode('p')
      const  cardtext =createNode('p')
      const  learnmore=createNode('p')
      const  imagenode =createNode('img')

      assignclassName(div,"card")                               //create  ClassNames for the respective HMTL tags above
      assignclassName(cardimage,"card-image")
      assignclassName(cardcontainer,"card-container")
      assignclassName(authorname,"authorname")
      assignclassName(cardtitle,"cardtitle")
      assignclassName(cardtext,"cardtext")
      assignclassName(learnmore,"card-learnmore")
                           
      insertinnerHTML(authorname,card.author)                  //Insert data inside the HTML Tags
      insertinnerHTML(cardtitle,card.title)
      insertinnerHTML(cardtext,card.text)
      insertinnerHTML(learnmore,"Learn More")
      imagenode.src=card.image_url
                                                              
      appendchild(ul,li)                                      // Create structural hierarchy   
      appendchild(li,div)
      appendchild(div,cardimage)
      appendchild(div,cardcontainer)
      appendchild(cardimage,imagenode)
      appendchild(cardcontainer,authorname)
      appendchild(cardcontainer,cardtitle)
      appendchild(cardcontainer,cardtext)
      appendchild(cardcontainer,learnmore)

  })
  navigte();                                           //call the navigate function from navigate.js file
})
.catch(function(err){                                   //catch function to display error
  console.log(err)
})

