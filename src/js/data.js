
let places = [
  {
    image: 'https://www.mibor.com/clientuploads/_photos/_6/pexels-photo-1396122.jpeg',
    type: "Apartment",
    location: "Paarl",
    price: 1000,
    bedrooms: 1,
    bedrooms: 1,
    status: "For rent",
  },
  {
    image: "https://www.investopedia.com/thmb/7GOsX_NmY3KrIYoZPWOu6SldNFI=/735x0/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    type: "Estate House",
    location: "Constantia",
    price: 2500,
    bedrooms: 2,
    bedrooms: 2,
    status: "For sale",
  },
  {
    image: "https://assets1.biggerpockets.com/uploads/wordpress_blog_post/image/12514/featured_big-suburb-homes.jpg",
    type: "Condo",
    location: "Rondebosch",
    price: 1500,
    bedrooms: 3,
    bedrooms: 2,
    status: "For rent",
  },
  {
    image: "https://lid.zoocdn.com/645/430/c7a891fc78c1eda67433cd5782ff989f7e7e9d37.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 5000,
    bedrooms: 4,
    status: "For sale",
  },
  {
    image: "",
    type: "Apartment",
    location: "Paarl",
    price: 3500,
    bedrooms: 4,
    baths : 2,
    status: "For sale",
  },
  {
    image: "",
    type: "Estate House",
    location: "Constantia",
    price: 4000,
    bedrooms: 3,
    baths : 2,
    status: "For rent",
  },
  {
    image: "",
    type: "Condo",
    location: "Rondebosch",
    price: 1000,
    bedrooms: 2,
    baths : 1,
    status: "For sale",
  },
  {
    image: "",
    type: "Villa",
    location: "Camps Bay",
    price: 4500,
    bedrooms: 1,
    baths : 1,
    status: "For rent",
  },
];

function search() {

  // get input from dropdown
  let searchType = document.getElementById("type").value;
  let searchLocation = document.getElementById("location").value;
  let searchBed = document.getElementById("bedrooms").value;
  let searchStatus = document.getElementById("status").value;

  let card = "";
  // filter
  var myPlaces = places.filter((e) => {
    if (
      e.type == searchType &&
      e.location == searchLocation &&
      e.status == searchStatus &&
      e.bedrooms == searchBed
    ) {
      return e;
    }
    
  });
  console.log(myPlaces);
  if(myPlaces.length === 0){
    card += `<h2> No match Found</h2>`
  }
  // the card
  
  for (let i = 0; i < myPlaces.length; i++) {
    card += `<div class="card">
        <div class="card-header">
        <img class="card-img" src=${myPlaces[i].image} alt="property-img">
        </div>
        <div class="card-content">
            <h3>${myPlaces[i].type}</h3>
            <p>
            
            ${myPlaces[i].location}</p>
            <p>Price : R${myPlaces[i].price}
            <span>${myPlaces[i].status}</span>
        </div>
        <hr>
        <div class="card-footer">
            <ul>
                <li>
                    ${myPlaces[i].bedrooms} Bedrooms
                </li>
                <li>
                    ${myPlaces[i].baths} Bedrooms
                </li>
            </ul>
           
        </div>
    </div>`;
  }
  document.getElementById("properties-slider").innerHTML = card;
};

