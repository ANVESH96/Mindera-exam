const data =  "http://localhost:3000/cards"


function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }


fetch(data)
.then((resp) => resp.json())
  .then(function(data){
    const ul = document.getElementById("content")
    let cards = data // Get the results
    var listofcards = document.getElementById('content')
    listofcards.style.width=((cards.length)*336)+"px"

    return cards.map(function(card) { // Map through the results and for each run the code below
    let li =createNode('li')
        div =createNode('div')
        div.className="card"
        div1 = createNode('div')
        div1.className="card-image"
        div2 = createNode('div')
        div2.className="card-container"
        authorname =createNode('p')
        authorname.className="authorname"
        authorname.innerHTML=card.author
        cardtitle =createNode('p')
        cardtitle.className="cardtitle"
        cardtitle.innerHTML=card.title
        cardtext =createNode('p')
        cardtext.className="cardtext"
        cardtext.innerHTML=card.text
        learnmore=createNode('p')
        learnmore.className="card-learnmore"
        learnmore.innerHTML="Learn More"
        imagenode =createNode('img')
        imagenode.src=card.image_url

    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(imagenode)
    div2.appendChild(authorname)
    div2.appendChild(cardtitle)
    div2.appendChild(cardtext)
    div2.appendChild(learnmore)
  })
}).catch(function(err){
  console.log(err)
})

