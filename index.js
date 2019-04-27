const data =  "http://localhost:3000/cards"


function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function appendchild(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

fetch(data)
.then((resp) => resp.json())
  .then(function(data){
    const ul = document.getElementById("content")
    let cards = data // Get the results
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

    appendchild(li,div)
    appendchild(div,div1)
    appendchild(div1,imagenode)
    appendchild(div,div2)
    appendchild(div2,authorname)
    appendchild(div2,cardtitle)
    appendchild(div2,cardtext)
    appendchild(div2,learnmore)
    appendchild(ul,li)
  })
})
