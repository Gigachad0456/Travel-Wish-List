(function(){

    "use strict";

    const detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e){
        e.preventDefault();

        const destName = e.target.elements['name'].value;
        const destLocation = e.target.elements['location'].value;
        const destPhoto = e.target.elements['photo'].value;
        const destDescription = e.target.elements['description'].value;

        for(let i=0; i<detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        const destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription);
        //create card here

        const wishListContainer = document.getElementById('destinations_container');

        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = 'My Wish list';
        }
        document.querySelector('#destinations_container').appendChild(destCard);

    }

    function createDestinationCard(name,location,photoURL,description) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt',name);

        const constantPhotoUrl = 'images/signpost.jpg';

        if( photoURL.length === 0) {
            img.setAttribute('src',constantPhotoUrl);
        }else {
            img.setAttribute('src',photoURL);
        }

        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement('h4');
        cardSubTitle.innerText = location;
        cardBody.appendChild(cardSubTitle);

        if(description.length !== 0) {
            const cardText =document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDelBtn = document.createElement('button');
        cardDelBtn.innerText = "Remove";

        cardDelBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDelBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
}());