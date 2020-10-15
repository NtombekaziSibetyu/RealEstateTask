
let places = [
  {
    image: 'https://www.mibor.com/clientuploads/_photos/_6/pexels-photo-1396122.jpeg',
    type: "Apartment",
    location: "Paarl",
    price: 1000,
    bedrooms: 1,
    status: "For rent",size: "100sqm"
  },
  {
    image: "https://www.investopedia.com/thmb/7GOsX_NmY3KrIYoZPWOu6SldNFI=/735x0/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    type: "Estate House",
    location: "Constantia",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    status: "For sale",
    size: "250sqm"
  },
  {
    image: "https://assets1.biggerpockets.com/uploads/wordpress_blog_post/image/12514/featured_big-suburb-homes.jpg",
    type: "Condo",
    location: "Rondebosch",
    price: 1500,
    bedrooms: 3,
    bathrooms: 1,
    status: "For rent",
    size: "300sqm"
  },
  {
    image: "https://lid.zoocdn.com/645/430/c7a891fc78c1eda67433cd5782ff989f7e7e9d37.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 5000,
    bedrooms: 4,
    bathrooms: 3,
    status: "For sale",
    size: "400sqm"
  },
  {
    image: 'https://www.mibor.com/clientuploads/_photos/_6/pexels-photo-1396122.jpeg',

    type: "Apartment",
    location: "Paarl",
    price: 3500,
    bedrooms: 3,
    bathrooms: 2,
    status: "For sale",
    size: "350sqm"
  },
  {
    image: "https://www.investopedia.com/thmb/7GOsX_NmY3KrIYoZPWOu6SldNFI=/735x0/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    type: "Estate House",
    location: "Constantia",
    price: 4000,
    bedrooms: 3,
    baths : 2,
    status: "For rent",
    size: "300sqm"
  },
  {
    image: "https://www.investopedia.com/thmb/7GOsX_NmY3KrIYoZPWOu6SldNFI=/735x0/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    type: "Condo",
    location: "Rondebosch",
    price: 1000,
    bedrooms: 2,
    baths : 1,
    status: "For sale",
    size: "230sqm"
  },
  {
    image: "https://lid.zoocdn.com/645/430/c7a891fc78c1eda67433cd5782ff989f7e7e9d37.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 4500,
    bedrooms: 1,
    baths : 1,
    status: "For rent",
    size: "200sqm"
  },
  {
    image: "https://www.investopedia.com/thmb/7GOsX_NmY3KrIYoZPWOu6SldNFI=/735x0/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 5500,
    bedrooms: 1,
    baths : 1,
    status: "For rent",
    size: "250sqm"
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
  //when the search does not match any property in the data
  console.log(myPlaces);
  if(myPlaces.length === 0){
    card += `<h2 class="text-center"> Search does not match any property</h2>`
  }
  // the card
  
  for (let i = 0; i < myPlaces.length; i++) {
    card += `<div class="card">
      <div >
        
        <img class="card-img" src=${myPlaces[i].image} alt="property-img">
        <span class="card-img-overlay">${myPlaces[i].status}</span>
      </div>
        <div class="card-content">
            <h4>${myPlaces[i].type}</h4 >
            <ul>
              <li><img src="https://img.icons8.com/dotty/24/000000/marker.png"/>
              ${myPlaces[i].location}</li>
              <li>
              <li><img src="https://img.icons8.com/fluent-systems-filled/24/000000/price-tag.png"/>
              Price : R${myPlaces[i].price}</li>
            </ul>
        </div>
        <div class="card-footer">
            <ul>
                <li><img src="https://img.icons8.com/small/24/000000/empty-bed.png"/>
                    ${myPlaces[i].bedrooms} 
                </li>
                <li>
                <img src="https://img.icons8.com/dotty/24/000000/shower-and-tub.png"/>                    
                ${myPlaces[i].baths} 
                </li>
                <li>
                <img src="https://img.icons8.com/ios-glyphs/24/000000/surface.png"/>
                ${myPlaces[i].size} 
              </li>
            </ul>   
        </div>
    </div>`;
  }
  document.getElementById("properties").innerHTML = card;
};

