const data =  "http://localhost:3000/cards"

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
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

      div.className="card"                               //create  ClassNames for the respective HMTL tags above
      cardimage.className="card-image"
      cardcontainer.className="card-container"
      authorname.className="authorname"
      cardtitle.className="cardtitle"
      cardtext.className="cardtext"
      learnmore.className="card-learnmore"

      authorname.innerHTML=card.author                   //Insert data inside the HTML Tags         
      cardtitle.innerHTML=card.title
      cardtext.innerHTML=card.text
      learnmore.innerHTML="Learn More"
      imagenode.src=card.image_url

      ul.appendChild(li)                                // Create structural hierarchy
      li.appendChild(div)
      div.appendChild(cardimage)
      div.appendChild(cardcontainer)
      cardimage.appendChild(imagenode)
      cardcontainer.appendChild(authorname)
      cardcontainer.appendChild(cardtitle)
      cardcontainer.appendChild(cardtext)
      cardcontainer.appendChild(learnmore)
  })
  navigte();                                           //call the navigate function from navigate.js file
})
.catch(function(err){                                   //catch function to display error
  console.log(err)
})

