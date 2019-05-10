const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const restaurants = data.restaurants;
const restaurantDetails = data.restaurantDetails;

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();

const restaurantList = [
      {
          "id": "H4jJ7XB3CetIr1pg56CczQ",
          "alias": "levain-bakery-new-york",
          "name": "Levain Bakery",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jCdrXah--NjPaOLb-30BUw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 7503,
          "categories": [
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7799404643263,
              "longitude": -73.980282552649
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "167 W 74th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10023",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "167 W 74th St",
                  "New York, NY 10023"
              ]
          },
          "phone": "+12128746080",
          "display_phone": "(212) 874-6080",
          "distance": 8367.197123060287
      },
      {
          "id": "xEnNFXtMLDF5kZDxfaCJgA",
          "alias": "the-halal-guys-new-york-2",
          "name": "The Halal Guys",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/24lb-VP2zVySsY9cq45ETw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 9161,
          "categories": [
              {
                  "alias": "foodstands",
                  "title": "Food Stands"
              },
              {
                  "alias": "mideastern",
                  "title": "Middle Eastern"
              },
              {
                  "alias": "halal",
                  "title": "Halal"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7617559582706,
              "longitude": -73.979229927063
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "W 53rd St 6th Ave",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "W 53rd St 6th Ave",
                  "New York, NY 10019"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 6388.839589432905
      },
      {
          "id": "44SY464xDHbvOcjDzRbKkQ",
          "alias": "ippudo-ny-new-york-7",
          "name": "Ippudo NY",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/zF3EgqHCk7zBUwD2B3WTEA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/ippudo-ny-new-york-7?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 9735,
          "categories": [
              {
                  "alias": "ramen",
                  "title": "Ramen"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.73092,
              "longitude": -73.99015
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "65 4th Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "65 4th Ave",
                  "New York, NY 10003"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 2855.84485141638
      },
      {
          "id": "V7lXZKBDzScDeGB8JmnzSA",
          "alias": "katzs-delicatessen-new-york",
          "name": "Katz's Delicatessen",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/B6xNx79cSE7bFxqERBYOhg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/katzs-delicatessen-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 11090,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "catering",
                  "title": "Caterers"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.72222,
              "longitude": -73.98751
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "205 E Houston St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "205 E Houston St",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12122542246",
          "display_phone": "(212) 254-2246",
          "distance": 1947.3740045141433
      },
      {
          "id": "jVncyqXwlx_D9f2xZn05tg",
          "alias": "the-metropolitan-museum-of-art-new-york-3",
          "name": "The Metropolitan Museum of Art",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UZ5-dy--YG4nq9dXqgsQaw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-metropolitan-museum-of-art-new-york-3?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2691,
          "categories": [
              {
                  "alias": "artmuseums",
                  "title": "Art Museums"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.779254271604,
              "longitude": -73.9628841731528
          },
          "transactions": [],
          "location": {
              "address1": "1000 5th Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10028",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "1000 5th Ave",
                  "New York, NY 10028"
              ]
          },
          "phone": "+12125357710",
          "display_phone": "(212) 535-7710",
          "distance": 8623.2495062311
      },
      {
          "id": "xOw4aafJRji9XomGunlvcQ",
          "alias": "central-park-new-york",
          "name": "Central Park",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/a_T1R7oNyM-5Vtcx5ZiyPw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/central-park-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2306,
          "categories": [
              {
                  "alias": "parks",
                  "title": "Parks"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 40.782418740809,
              "longitude": -73.9656022837641
          },
          "transactions": [],
          "location": {
              "address1": "14 E 60th St",
              "address2": "",
              "address3": "Central Park Conservancy",
              "city": "New York",
              "zip_code": "10022",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "14 E 60th St",
                  "Central Park Conservancy",
                  "New York, NY 10022"
              ]
          },
          "phone": "+12123106600",
          "display_phone": "(212) 310-6600",
          "distance": 8893.835855571413
      },
      {
          "id": "WHRHK3S1mQc3PmhwsGRvbw",
          "alias": "bibble-and-sip-new-york-2",
          "name": "Bibble & Sip",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/b4_G7Dc2l1hpHlTjH48kuw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 4348,
          "categories": [
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              },
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.76282,
              "longitude": -73.98518
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "253 W 51st St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "253 W 51st St",
                  "New York, NY 10019"
              ]
          },
          "phone": "+16466495116",
          "display_phone": "(646) 649-5116",
          "distance": 6427.9212521553545
      },
      {
          "id": "jnEv25Y2DosTq2sNnvmC9g",
          "alias": "los-tacos-no-1-new-york",
          "name": "Los Tacos No.1",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FU44TYl3PzXsE06G4W5aog/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/los-tacos-no-1-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2663,
          "categories": [
              {
                  "alias": "tacos",
                  "title": "Tacos"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7425547,
              "longitude": -74.0060838
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "75 9th Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10011",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "75 9th Ave",
                  "New York, NY 10011"
              ]
          },
          "phone": "+12122560343",
          "display_phone": "(212) 256-0343",
          "distance": 4244.358699250552
      },
      {
          "id": "UA2M9QFZghe-9th2KwLoWQ",
          "alias": "burger-and-lobster-new-york-4",
          "name": "Burger & Lobster",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1rHd7F4zztAsScwzM0vDmw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/burger-and-lobster-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5058,
          "categories": [
              {
                  "alias": "seafood",
                  "title": "Seafood"
              },
              {
                  "alias": "burgers",
                  "title": "Burgers"
              },
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.74007,
              "longitude": -73.99344
          },
          "transactions": [
              "delivery",
              "pickup",
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "39 W 19th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10011",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "39 W 19th St",
                  "New York, NY 10011"
              ]
          },
          "phone": "+16468337532",
          "display_phone": "(646) 833-7532",
          "distance": 3852.2188529432046
      },
      {
          "id": "veq1Bl1DW3UWMekZJUsG1Q",
          "alias": "gramercy-tavern-new-york",
          "name": "Gramercy Tavern",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2747,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.738527,
              "longitude": -73.988417
          },
          "transactions": [],
          "price": "$$$$",
          "location": {
              "address1": "42 E 20th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "42 E 20th St",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12124770777",
          "display_phone": "(212) 477-0777",
          "distance": 3711.7439058285554
      },
      {
          "id": "JION8hhg7q6zyayHYwhxIw",
          "alias": "the-high-line-new-york",
          "name": "The High Line",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Gujj42hSygQGqua-R4iYiQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-high-line-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2234,
          "categories": [
              {
                  "alias": "parks",
                  "title": "Parks"
              },
              {
                  "alias": "localflavor",
                  "title": "Local Flavor"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7479831752801,
              "longitude": -74.0048906107511
          },
          "transactions": [],
          "location": {
              "address1": "820 Washington St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10014",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "820 Washington St",
                  "New York, NY 10014"
              ]
          },
          "phone": "+12122069922",
          "display_phone": "(212) 206-9922",
          "distance": 4813.598883567381
      },
      {
          "id": "lWOkeS-wV4no8qqA9OwwEg",
          "alias": "doughnut-plant-new-york-6",
          "name": "Doughnut Plant",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JpLMXFWyvpstlC9__dlJKA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/doughnut-plant-new-york-6?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 3128,
          "categories": [
              {
                  "alias": "donuts",
                  "title": "Donuts"
              },
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7163944930004,
              "longitude": -73.9886098620298
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "379 Grand St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10002",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "379 Grand St",
                  "New York, NY 10002"
              ]
          },
          "phone": "+12125053700",
          "display_phone": "(212) 505-3700",
          "distance": 1308.3879515578776
      },
      {
          "id": "4yPqqJDJOQX69gC66YUDkA",
          "alias": "peter-luger-brooklyn-2",
          "name": "Peter Luger",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DnReRUkXRtsmKycQEYl0pg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/peter-luger-brooklyn-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5335,
          "categories": [
              {
                  "alias": "steak",
                  "title": "Steakhouses"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.709945,
              "longitude": -73.962478
          },
          "transactions": [],
          "price": "$$$$",
          "location": {
              "address1": "178 Broadway",
              "address2": "",
              "address3": "",
              "city": "Brooklyn",
              "zip_code": "11211",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "178 Broadway",
                  "Brooklyn, NY 11211"
              ]
          },
          "phone": "+17183877400",
          "display_phone": "(718) 387-7400",
          "distance": 2728.016921522817
      },
      {
          "id": "j1S3NUrkB3BVT49n_e76NQ",
          "alias": "best-bagel-and-coffee-new-york",
          "name": "Best Bagel & Coffee",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2826,
          "categories": [
              {
                  "alias": "bagels",
                  "title": "Bagels"
              },
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              },
              {
                  "alias": "breakfast_brunch",
                  "title": "Breakfast & Brunch"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7522683,
              "longitude": -73.9910861
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "225 W 35th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10001",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "225 W 35th St",
                  "New York, NY 10001"
              ]
          },
          "phone": "+12125644409",
          "display_phone": "(212) 564-4409",
          "distance": 5213.5315009761325
      },
      {
          "id": "jjJc_CrkB2HodEinB6cWww",
          "alias": "lovemama-new-york",
          "name": "LoveMama",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/lovemama-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 4181,
          "categories": [
              {
                  "alias": "thai",
                  "title": "Thai"
              },
              {
                  "alias": "malaysian",
                  "title": "Malaysian"
              },
              {
                  "alias": "vietnamese",
                  "title": "Vietnamese"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7303859,
              "longitude": -73.9860613
          },
          "transactions": [
              "delivery",
              "pickup",
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "174 2nd Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "174 2nd Ave",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12122545370",
          "display_phone": "(212) 254-5370",
          "distance": 2858.7729410008346
      },
      {
          "id": "kViIWJFfAfWPpJOwAXBKGA",
          "alias": "national-september-11-memorial-museum-new-york",
          "name": "National September 11 Memorial Museum",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/gFr_zDiUm8QJ-4gkG8v6Uw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/national-september-11-memorial-museum-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1350,
          "categories": [
              {
                  "alias": "museums",
                  "title": "Museums"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.71144,
              "longitude": -74.01301
          },
          "transactions": [],
          "location": {
              "address1": "180 Greenwich St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10007",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "180 Greenwich St",
                  "New York, NY 10007"
              ]
          },
          "phone": "+12122665211",
          "display_phone": "(212) 266-5211",
          "distance": 1670.4082440403122
      },
      {
          "id": "FEVQpbOPOwAPNIgO7D3xxw",
          "alias": "shake-shack-new-york-2",
          "name": "Shake Shack",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5522,
          "categories": [
              {
                  "alias": "burgers",
                  "title": "Burgers"
              },
              {
                  "alias": "foodstands",
                  "title": "Food Stands"
              },
              {
                  "alias": "icecream",
                  "title": "Ice Cream & Frozen Yogurt"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7414000197233,
              "longitude": -73.98815019045
          },
          "transactions": [
              "delivery"
          ],
          "price": "$$",
          "location": {
              "address1": "Madison Square Park",
              "address2": "",
              "address3": "E 23rd St & Madison Ave",
              "city": "New York",
              "zip_code": "10010",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "Madison Square Park",
                  "E 23rd St & Madison Ave",
                  "New York, NY 10010"
              ]
          },
          "phone": "+12128896600",
          "display_phone": "(212) 889-6600",
          "distance": 4031.402495127816
      },
      {
          "id": "zj8Lq1T8KIC5zwFief15jg",
          "alias": "prince-street-pizza-new-york-2",
          "name": "Prince Street Pizza",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/prince-street-pizza-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2733,
          "categories": [
              {
                  "alias": "pizza",
                  "title": "Pizza"
              },
              {
                  "alias": "italian",
                  "title": "Italian"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7229087705545,
              "longitude": -73.9944863319397
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "27 Prince St",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10012",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "27 Prince St",
                  "New York, NY 10012"
              ]
          },
          "phone": "+12129664100",
          "display_phone": "(212) 966-4100",
          "distance": 1941.9638172538225
      },
      {
          "id": "vRrVSB-LegwUwIxpkeRVtQ",
          "alias": "le-bernardin-new-york",
          "name": "Le Bernardin",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/G0wZ6h5KaQG2gJkk8uOkLQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/le-bernardin-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2401,
          "categories": [
              {
                  "alias": "french",
                  "title": "French"
              },
              {
                  "alias": "lounges",
                  "title": "Lounges"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.761557,
              "longitude": -73.981763
          },
          "transactions": [],
          "price": "$$$$",
          "location": {
              "address1": "155 W 51st St",
              "address2": "",
              "address3": "The Equitable Bldg",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "155 W 51st St",
                  "The Equitable Bldg",
                  "New York, NY 10019"
              ]
          },
          "phone": "+12125541515",
          "display_phone": "(212) 554-1515",
          "distance": 6328.07179784047
      },
      {
          "id": "nU4XBdvxDABXqZ6CnB8Dig",
          "alias": "clinton-street-baking-company-new-york-5",
          "name": "Clinton Street Baking Company",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DWHdizJ9bKbXN4yq6nbwAA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/clinton-street-baking-company-new-york-5?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 4643,
          "categories": [
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              },
              {
                  "alias": "breakfast_brunch",
                  "title": "Breakfast & Brunch"
              },
              {
                  "alias": "tradamerican",
                  "title": "American (Traditional)"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.721128,
              "longitude": -73.983933
          },
          "transactions": [
              "delivery",
              "pickup",
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "4 Clinton St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10002",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "4 Clinton St",
                  "New York, NY 10002"
              ]
          },
          "phone": "+16466026263",
          "display_phone": "(646) 602-6263",
          "distance": 1950.282829638887
      },
      {
          "id": "B3_K2kUVbYOU0VaLcj_LTw",
          "alias": "thai-villa-new-york-2",
          "name": "Thai Villa",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/OgCU9NPFIl8hF_04Zani9w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/thai-villa-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2553,
          "categories": [
              {
                  "alias": "thai",
                  "title": "Thai"
              },
              {
                  "alias": "asianfusion",
                  "title": "Asian Fusion"
              },
              {
                  "alias": "vegetarian",
                  "title": "Vegetarian"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.73902,
              "longitude": -73.99065
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "5 E 19th St",
              "address2": "G Floor",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "5 E 19th St",
                  "G Floor",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12128029999",
          "display_phone": "(212) 802-9999",
          "distance": 3744.570399827637
      },
      {
          "id": "mvn2XFJfIPNAlvsy-arzkA",
          "alias": "brooklyn-bridge-brooklyn",
          "name": "Brooklyn Bridge",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1F5Xl0Qn5DW8nzaelPSwMA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/brooklyn-bridge-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1299,
          "categories": [
              {
                  "alias": "landmarks",
                  "title": "Landmarks & Historical Buildings"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7059677364821,
              "longitude": -73.9966657489186
          },
          "transactions": [],
          "location": {
              "address1": "334 Furman St",
              "address2": null,
              "address3": "",
              "city": "Brooklyn",
              "zip_code": "11201",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "334 Furman St",
                  "Brooklyn, NY 11201"
              ]
          },
          "phone": "+17187246434",
          "display_phone": "(718) 724-6434",
          "distance": 208.2689719737892
      },
      {
          "id": "UGECJrPSWy0n7PXykBBWAQ",
          "alias": "two-little-red-hens-new-york-4",
          "name": "Two Little Red Hens",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gF02Oh2PfE2OS7Nz3MqV4g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/two-little-red-hens-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2429,
          "categories": [
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              },
              {
                  "alias": "desserts",
                  "title": "Desserts"
              },
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.777528,
              "longitude": -73.9517869
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1652 2nd Ave",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10028",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "1652 2nd Ave",
                  "New York, NY 10028"
              ]
          },
          "phone": "+12124520476",
          "display_phone": "(212) 452-0476",
          "distance": 8778.875028640752
      },
      {
          "id": "ga6sRtE0l85iftw_5-W84Q",
          "alias": "dominique-ansel-bakery-new-york",
          "name": "Dominique Ansel Bakery",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fs7t18Em3AqLqsQY_l_2_w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/dominique-ansel-bakery-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 4147,
          "categories": [
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              },
              {
                  "alias": "desserts",
                  "title": "Desserts"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.72522,
              "longitude": -74.00291
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "189 Spring St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10012",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "189 Spring St",
                  "New York, NY 10012"
              ]
          },
          "phone": "+12122192773",
          "display_phone": "(212) 219-2773",
          "distance": 2316.930739426023
      },
      {
          "id": "nI1UYDCYUTt23TpGxqnLKg",
          "alias": "buddakan-new-york",
          "name": "Buddakan",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Avw19VU35-FZLen3nl9gYw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/buddakan-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 3748,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              },
              {
                  "alias": "bars",
                  "title": "Bars"
              },
              {
                  "alias": "asianfusion",
                  "title": "Asian Fusion"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7422762672197,
              "longitude": -74.0048000961542
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$$",
          "location": {
              "address1": "75 9th Ave",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10011",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "75 9th Ave",
                  "New York, NY 10011"
              ]
          },
          "phone": "+12129896699",
          "display_phone": "(212) 989-6699",
          "distance": 4190.079294335545
      },
      {
          "id": "vk7W3_sQwr7eZbRFsXv6rw",
          "alias": "taiyaki-nyc-new-york",
          "name": "Taiyaki NYC",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iyj-1IhhvtdNWycNJS17iw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/taiyaki-nyc-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2507,
          "categories": [
              {
                  "alias": "icecream",
                  "title": "Ice Cream & Frozen Yogurt"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.71789,
              "longitude": -73.9988
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "119 Baxter St",
              "address2": "",
              "address3": null,
              "city": "New York",
              "zip_code": "10013",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "119 Baxter St",
                  "New York, NY 10013"
              ]
          },
          "phone": "+12129662882",
          "display_phone": "(212) 966-2882",
          "distance": 1439.7258094631309
      },
      {
          "id": "a0IET3_yCFcO36OqGSsisg",
          "alias": "eataly-nyc-flatiron-new-york",
          "name": "Eataly NYC Flatiron",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9Xzihhf_KcZieyru9TX-pg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/eataly-nyc-flatiron-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5263,
          "categories": [
              {
                  "alias": "italian",
                  "title": "Italian"
              },
              {
                  "alias": "grocery",
                  "title": "Grocery"
              },
              {
                  "alias": "cafes",
                  "title": "Cafes"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.74195877796,
              "longitude": -73.989716662832
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "200 5th Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10010",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "200 5th Ave",
                  "New York, NY 10010"
              ]
          },
          "phone": "+12122292560",
          "display_phone": "(212) 229-2560",
          "distance": 4078.4333537925154
      },
      {
          "id": "ETgJqJHV7BW6pIr9Ox74sA",
          "alias": "amélie-new-york",
          "name": "Amélie",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/cSDgVuPMnJgMLTrTNSEXug/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/am%C3%A9lie-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2450,
          "categories": [
              {
                  "alias": "french",
                  "title": "French"
              },
              {
                  "alias": "wine_bars",
                  "title": "Wine Bars"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7327,
              "longitude": -73.99766
          },
          "transactions": [
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "22 W 8th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10011",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "22 W 8th St",
                  "New York, NY 10011"
              ]
          },
          "phone": "+12125332962",
          "display_phone": "(212) 533-2962",
          "distance": 3038.8699032940094
      },
      {
          "id": "ysqgdbSrezXgVwER2kQWKA",
          "alias": "julianas-pizza-brooklyn-5",
          "name": "Juliana's Pizza",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7JtwTxhWHf3YS70Ss_CfxA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/julianas-pizza-brooklyn-5?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1953,
          "categories": [
              {
                  "alias": "pizza",
                  "title": "Pizza"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7026153030093,
              "longitude": -73.9934159993549
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "19 Old Fulton St",
              "address2": "",
              "address3": "",
              "city": "Brooklyn",
              "zip_code": "11201",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "19 Old Fulton St",
                  "Brooklyn, NY 11201"
              ]
          },
          "phone": "+17185966700",
          "display_phone": "(718) 596-6700",
          "distance": 323.20506308227306
      },
      {
          "id": "A_YpTLbAlEqeLVSs9bxbEA",
          "alias": "club-a-steakhouse-new-york",
          "name": "Club A Steakhouse",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8UNPe4NiTidCHN2VpxGbfg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/club-a-steakhouse-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2570,
          "categories": [
              {
                  "alias": "steak",
                  "title": "Steakhouses"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.76006,
              "longitude": -73.96557
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "240 E 58th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10022",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "240 E 58th St",
                  "New York, NY 10022"
              ]
          },
          "phone": "+12126884190",
          "display_phone": "(212) 688-4190",
          "distance": 6536.244725330688
      },
      {
          "id": "o6q3jm-dU5A6nV3r2lBg9A",
          "alias": "chinatown-ice-cream-factory-new-york",
          "name": "Chinatown Ice Cream Factory",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qefHcdS7L4-8v88Ng4so9g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/chinatown-ice-cream-factory-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2604,
          "categories": [
              {
                  "alias": "icecream",
                  "title": "Ice Cream & Frozen Yogurt"
              },
              {
                  "alias": "desserts",
                  "title": "Desserts"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.715452,
              "longitude": -73.99818
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "65 Bayard St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10013",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "65 Bayard St",
                  "New York, NY 10013"
              ]
          },
          "phone": "+12126084170",
          "display_phone": "(212) 608-4170",
          "distance": 1159.9655063045245
      },
      {
          "id": "QbAfrOxbuYKU248SDXHZEQ",
          "alias": "totto-ramen-new-york-15",
          "name": "Totto Ramen",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DVRyq3tbC8DJ1V3SoC_FBQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/totto-ramen-new-york-15?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5279,
          "categories": [
              {
                  "alias": "ramen",
                  "title": "Ramen"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.76444,
              "longitude": -73.98759
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "366 W 52nd St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "366 W 52nd St",
                  "New York, NY 10019"
              ]
          },
          "phone": "+12125820052",
          "display_phone": "(212) 582-0052",
          "distance": 6577.724985197038
      },
      {
          "id": "xt4sa64WOrpJvZBDPNPNYg",
          "alias": "jacobs-pickles-new-york",
          "name": "Jacob's Pickles",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/167Rl2s1oMge_2ZSDD1z0A/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/jacobs-pickles-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 3674,
          "categories": [
              {
                  "alias": "comfortfood",
                  "title": "Comfort Food"
              },
              {
                  "alias": "southern",
                  "title": "Southern"
              },
              {
                  "alias": "tradamerican",
                  "title": "American (Traditional)"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7866504411994,
              "longitude": -73.9755284786224
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "509 Amsterdam Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10024",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "509 Amsterdam Ave",
                  "New York, NY 10024"
              ]
          },
          "phone": "+12124705566",
          "display_phone": "(212) 470-5566",
          "distance": 9166.964737863183
      },
      {
          "id": "0CjK3esfpFcxIopebzjFxA",
          "alias": "joes-shanghai-new-york-2",
          "name": "Joe's Shanghai",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ekUo5egd4dlE7zJyb4-Leg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/joes-shanghai-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5707,
          "categories": [
              {
                  "alias": "shanghainese",
                  "title": "Shanghainese"
              },
              {
                  "alias": "seafood",
                  "title": "Seafood"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7146691442891,
              "longitude": -73.9977602206654
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "9 Pell St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10013",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "9 Pell St",
                  "New York, NY 10013"
              ]
          },
          "phone": "+12122338888",
          "display_phone": "(212) 233-8888",
          "distance": 1066.5085498349097
      },
      {
          "id": "VrCCr45dhN-RRM107iptdg",
          "alias": "russ-and-daughters-new-york",
          "name": "Russ & Daughters",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VVsTMR57q-_ebqaPKM_Llg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/russ-and-daughters-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1982,
          "categories": [
              {
                  "alias": "bagels",
                  "title": "Bagels"
              },
              {
                  "alias": "smokehouse",
                  "title": "Smokehouse"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.722589,
              "longitude": -73.9882828294139
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "179 E Houston St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10002",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "179 E Houston St",
                  "New York, NY 10002"
              ]
          },
          "phone": "+12124754880",
          "display_phone": "(212) 475-4880",
          "distance": 1972.4966482145887
      },
      {
          "id": "nRO136GRieGtxz18uD61DA",
          "alias": "eleven-madison-park-new-york",
          "name": "Eleven Madison Park",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2035,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "french",
                  "title": "French"
              },
              {
                  "alias": "cocktailbars",
                  "title": "Cocktail Bars"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7416907417333,
              "longitude": -73.9872074872255
          },
          "transactions": [],
          "price": "$$$$",
          "location": {
              "address1": "11 Madison Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10010",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "11 Madison Ave",
                  "New York, NY 10010"
              ]
          },
          "phone": "+12128890905",
          "display_phone": "(212) 889-0905",
          "distance": 4074.3463982775174
      },
      {
          "id": "WIhm0W9197f_rRtDziq5qQ",
          "alias": "lombardis-pizza-new-york-4",
          "name": "Lombardi's Pizza",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/UZ6V_hobp1KpYDPOHNoCKw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/lombardis-pizza-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 5841,
          "categories": [
              {
                  "alias": "pizza",
                  "title": "Pizza"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7215934960083,
              "longitude": -73.9955956044561
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "32 Spring St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10012",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "32 Spring St",
                  "New York, NY 10012"
              ]
          },
          "phone": "+12129417994",
          "display_phone": "(212) 941-7994",
          "distance": 1798.9959778083735
      },
      {
          "id": "b8a-8u_A51v2IzyjLVsx6w",
          "alias": "del-friscos-double-eagle-steakhouse-new-york",
          "name": "Del Frisco's Double Eagle Steakhouse",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FyQ0V-QtndWStk5B8qwjXw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/del-friscos-double-eagle-steakhouse-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2766,
          "categories": [
              {
                  "alias": "steak",
                  "title": "Steakhouses"
              },
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "seafood",
                  "title": "Seafood"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.759412,
              "longitude": -73.982221
          },
          "transactions": [],
          "price": "$$$$",
          "location": {
              "address1": "1221 Ave Of The Americas",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10020",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "1221 Ave Of The Americas",
                  "New York, NY 10020"
              ]
          },
          "phone": "+12125755129",
          "display_phone": "(212) 575-5129",
          "distance": 6086.466539546841
      },
      {
          "id": "TN4RnyqHMSupRFot4Q-_EA",
          "alias": "ippudo-westside-new-york",
          "name": "Ippudo Westside",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/EmJBZo1FvHemEBgyJknEOQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/ippudo-westside-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 3461,
          "categories": [
              {
                  "alias": "ramen",
                  "title": "Ramen"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.76344,
              "longitude": -73.98661
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "321 W 51st St",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "321 W 51st St",
                  "New York, NY 10019"
              ]
          },
          "phone": "+12129742500",
          "display_phone": "(212) 974-2500",
          "distance": 6486.789308886469
      },
      {
          "id": "ikazsJps1k-Br2FbunwCtg",
          "alias": "spot-dessert-bar-new-york-2",
          "name": "Spot Dessert Bar",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/0WUYc9QKwyZHZ1s6niRdmA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/spot-dessert-bar-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2802,
          "categories": [
              {
                  "alias": "desserts",
                  "title": "Desserts"
              },
              {
                  "alias": "macarons",
                  "title": "Macarons"
              },
              {
                  "alias": "creperies",
                  "title": "Creperies"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.72939,
              "longitude": -73.98892
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "13 St Marks Pl",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "13 St Marks Pl",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12126775670",
          "display_phone": "(212) 677-5670",
          "distance": 2697.5233343657724
      },
      {
          "id": "ehUuSk5gPTCQmwS_ubgKRA",
          "alias": "upstate-new-york-2",
          "name": "Upstate",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RvnUVU7MF7DT0RzNL-EebQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1706,
          "categories": [
              {
                  "alias": "seafood",
                  "title": "Seafood"
              },
              {
                  "alias": "wine_bars",
                  "title": "Wine Bars"
              },
              {
                  "alias": "beerbar",
                  "title": "Beer Bar"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.7263139141197,
              "longitude": -73.9864901976935
          },
          "transactions": [
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "95 1st Ave",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "95 1st Ave",
                  "New York, NY 10003"
              ]
          },
          "phone": "+16467915400",
          "display_phone": "(646) 791-5400",
          "distance": 2411.9187177986864
      },
      {
          "id": "P58WuRP1AGD9ruE2bZ2urw",
          "alias": "dough-brooklyn",
          "name": "Dough",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vw6a5HENJwaZByokus4GzQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/dough-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1692,
          "categories": [
              {
                  "alias": "donuts",
                  "title": "Donuts"
              },
              {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.6890699083996,
              "longitude": -73.9571077502625
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "448 Franklin Ave",
              "address2": "",
              "address3": "",
              "city": "Brooklyn",
              "zip_code": "11205",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "448 Franklin Ave",
                  "Brooklyn, NY 11205"
              ]
          },
          "phone": "+13475337544",
          "display_phone": "(347) 533-7544",
          "distance": 3625.307962545161
      },
      {
          "id": "8HkB3JfIj7_g-MN5ujoRig",
          "alias": "grand-central-terminal-new-york",
          "name": "Grand Central Terminal",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1336,
          "categories": [
              {
                  "alias": "landmarks",
                  "title": "Landmarks & Historical Buildings"
              },
              {
                  "alias": "trainstations",
                  "title": "Train Stations"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.752793,
              "longitude": -73.977165
          },
          "transactions": [],
          "location": {
              "address1": "89 E 42nd St",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10017",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "89 E 42nd St",
                  "New York, NY 10017"
              ]
          },
          "phone": "+12123402583",
          "display_phone": "(212) 340-2583",
          "distance": 5459.111478121913
      },
      {
          "id": "iBm8YTqNwrddsxWdqLPK-A",
          "alias": "caracas-arepa-bar-new-york",
          "name": "Caracas Arepa Bar",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/wtb4bAE2a4XHO2xlR_cMkw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/caracas-arepa-bar-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2519,
          "categories": [
              {
                  "alias": "venezuelan",
                  "title": "Venezuelan"
              },
              {
                  "alias": "bars",
                  "title": "Bars"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.7269655,
              "longitude": -73.9854223
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "91 E 7th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10009",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "91 E 7th St",
                  "New York, NY 10009"
              ]
          },
          "phone": "+12122285062",
          "display_phone": "(212) 228-5062",
          "distance": 2507.0569130847275
      },
      {
          "id": "dMhRafXdr765DHe0k-QfaQ",
          "alias": "abc-kitchen-new-york",
          "name": "ABC Kitchen",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/k2V0QyHL_IFbfDnR33S0cg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/abc-kitchen-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2867,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "french",
                  "title": "French"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.738085,
              "longitude": -73.989472
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "35 E 18th St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10003",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "35 E 18th St",
                  "New York, NY 10003"
              ]
          },
          "phone": "+12124755829",
          "display_phone": "(212) 475-5829",
          "distance": 3652.0843791784228
      },
      {
          "id": "Hs1TH_4FpyzbX6_J5r1XXg",
          "alias": "mollys-cupcakes-new-york",
          "name": "Molly's Cupcakes",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7N63eLWpHu-aph3MOo_Viw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/mollys-cupcakes-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1602,
          "categories": [
              {
                  "alias": "bakeries",
                  "title": "Bakeries"
              },
              {
                  "alias": "cupcakes",
                  "title": "Cupcakes"
              },
              {
                  "alias": "customcakes",
                  "title": "Custom Cakes"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.73014,
              "longitude": -74.00248
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "228 Bleecker St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10014",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "228 Bleecker St",
                  "New York, NY 10014"
              ]
          },
          "phone": "+12124142253",
          "display_phone": "(212) 414-2253",
          "distance": 2828.812386861157
      },
      {
          "id": "HxC2ZN010NxAFwjTqUVpzw",
          "alias": "rice-to-riches-new-york",
          "name": "Rice To Riches",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/piqXaAjUb85Pt7n7CNpGVA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/rice-to-riches-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2926,
          "categories": [
              {
                  "alias": "desserts",
                  "title": "Desserts"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.721845,
              "longitude": -73.995802
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "37 Spring St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10012",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "37 Spring St",
                  "New York, NY 10012"
              ]
          },
          "phone": "+12122740008",
          "display_phone": "(212) 274-0008",
          "distance": 1828.0382830472183
      },
      {
          "id": "OUPyV2WKYETuprScXSAtuA",
          "alias": "the-museum-of-modern-art-new-york-3",
          "name": "The Museum of Modern Art",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/aLAhip2kC7DkEIa4M1SzCw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-museum-of-modern-art-new-york-3?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1930,
          "categories": [
              {
                  "alias": "artmuseums",
                  "title": "Art Museums"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.76146,
              "longitude": -73.97736
          },
          "transactions": [],
          "location": {
              "address1": "11 West 53rd St",
              "address2": "",
              "address3": "",
              "city": "New York",
              "zip_code": "10019",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "11 West 53rd St",
                  "New York, NY 10019"
              ]
          },
          "phone": "+12127089400",
          "display_phone": "(212) 708-9400",
          "distance": 6374.590531268748
      },
      {
          "id": "qLLxS7RwNEjP_jq_KQrPfA",
          "alias": "traif-brooklyn",
          "name": "Traif",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_srdk7UPM4mShxAIqm9aqg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/traif-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 1815,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "tapasmallplates",
                  "title": "Tapas/Small Plates"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 40.710658,
              "longitude": -73.958872
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "229 S 4th St",
              "address2": "",
              "address3": "",
              "city": "Brooklyn",
              "zip_code": "11211",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "229 S 4th St",
                  "Brooklyn, NY 11211"
              ]
          },
          "phone": "+13478449578",
          "display_phone": "(347) 844-9578",
          "distance": 3041.420337735676
      },
      {
          "id": "t1w4qyqyfEdTPhoy-5t3FA",
          "alias": "morimoto-new-york",
          "name": "Morimoto",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/r5u2gd0GWd7O5xyVE3K7Aw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/morimoto-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RaHE0BYRotui1mKSr45cEw",
          "review_count": 2933,
          "categories": [
              {
                  "alias": "japanese",
                  "title": "Japanese"
              },
              {
                  "alias": "sushi",
                  "title": "Sushi Bars"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 40.74332,
              "longitude": -74.00713
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$$$",
          "location": {
              "address1": "88 10th Ave",
              "address2": null,
              "address3": "",
              "city": "New York",
              "zip_code": "10011",
              "country": "US",
              "state": "NY",
              "display_address": [
                  "88 10th Ave",
                  "New York, NY 10011"
              ]
          },
          "phone": "+12129898883",
          "display_phone": "(212) 989-8883",
          "distance": 4325.223234489177
      }
  ];

  for(var i=0; i<restaurantList.length; i++)
{
  let res = restaurants.addRestaurant(restaurantList[i]).catch((e) => {console.log(e)});
}

const restaurantDetailsList = [{
    "id": "H4jJ7XB3CetIr1pg56CczQ",
    "alias": "levain-bakery-new-york",
    "name": "Levain Bakery",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jCdrXah--NjPaOLb-30BUw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12128746080",
    "display_phone": "(212) 874-6080",
    "review_count": 7503,
    "categories": [
        {
            "alias": "bakeries",
            "title": "Bakeries"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "167 W 74th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10023",
        "country": "US",
        "state": "NY",
        "display_address": [
            "167 W 74th St",
            "New York, NY 10023"
        ],
        "cross_streets": "Columbus Ave & Amsterdam Ave"
    },
    "coordinates": {
        "latitude": 40.7799404643263,
        "longitude": -73.980282552649
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/jCdrXah--NjPaOLb-30BUw/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/zgjSt_RGjXQMJxYxYSo-bQ/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/OM213Ge8OgD5vOKMdidlyA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "1900",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [],
    "special_hours": [
        {
            "date": "2019-11-28",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-11-29",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-12-25",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-12-26",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        }
    ]
},
{
    "id": "xEnNFXtMLDF5kZDxfaCJgA",
    "alias": "the-halal-guys-new-york-2",
    "name": "The Halal Guys",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/24lb-VP2zVySsY9cq45ETw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "",
    "display_phone": "",
    "review_count": 9161,
    "categories": [
        {
            "alias": "foodstands",
            "title": "Food Stands"
        },
        {
            "alias": "mideastern",
            "title": "Middle Eastern"
        },
        {
            "alias": "halal",
            "title": "Halal"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "W 53rd St 6th Ave",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "W 53rd St 6th Ave",
            "New York, NY 10019"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.7617559582706,
        "longitude": -73.979229927063
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/24lb-VP2zVySsY9cq45ETw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/pRsmaLuBFysJrA5wlO47Lw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/b3l79rHq28Zy9FY_9ZLhag/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "44SY464xDHbvOcjDzRbKkQ",
    "alias": "ippudo-ny-new-york-7",
    "name": "Ippudo NY",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/zF3EgqHCk7zBUwD2B3WTEA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/ippudo-ny-new-york-7?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "",
    "display_phone": "",
    "review_count": 9735,
    "categories": [
        {
            "alias": "ramen",
            "title": "Ramen"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "65 4th Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "65 4th Ave",
            "New York, NY 10003"
        ],
        "cross_streets": "9th St & 10th St"
    },
    "coordinates": {
        "latitude": 40.73092,
        "longitude": -73.99015
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/zF3EgqHCk7zBUwD2B3WTEA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/dqjGk3X9wt_gaszKSNgijA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/BwFk5Bu9mcnfThtf-AO5jg/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2330",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2330",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2230",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup"
    ],
    "special_hours": [
        {
            "date": "2019-05-27",
            "is_closed": null,
            "start": "1100",
            "end": "2230",
            "is_overnight": false
        }
    ]
},
{
    "id": "V7lXZKBDzScDeGB8JmnzSA",
    "alias": "katzs-delicatessen-new-york",
    "name": "Katz's Delicatessen",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/B6xNx79cSE7bFxqERBYOhg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/katzs-delicatessen-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122542246",
    "display_phone": "(212) 254-2246",
    "review_count": 11090,
    "categories": [
        {
            "alias": "delis",
            "title": "Delis"
        },
        {
            "alias": "sandwiches",
            "title": "Sandwiches"
        },
        {
            "alias": "catering",
            "title": "Caterers"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "205 E Houston St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "205 E Houston St",
            "New York, NY 10003"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.72222,
        "longitude": -73.98751
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/B6xNx79cSE7bFxqERBYOhg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/2mvXEMc1bxP0dAVfQPtCsg/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/7Yn37rOW4VQDI396jPPoyA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2230",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2230",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2230",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "0800",
                    "end": "0230",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0000",
                    "end": "2230",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "jVncyqXwlx_D9f2xZn05tg",
    "alias": "the-metropolitan-museum-of-art-new-york-3",
    "name": "The Metropolitan Museum of Art",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UZ5-dy--YG4nq9dXqgsQaw/o.jpg",
    "is_claimed": false,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-metropolitan-museum-of-art-new-york-3?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125357710",
    "display_phone": "(212) 535-7710",
    "review_count": 2691,
    "categories": [
        {
            "alias": "artmuseums",
            "title": "Art Museums"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "1000 5th Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10028",
        "country": "US",
        "state": "NY",
        "display_address": [
            "1000 5th Ave",
            "New York, NY 10028"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.779254271604,
        "longitude": -73.9628841731528
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/UZ5-dy--YG4nq9dXqgsQaw/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/lHEKQRcbGaaEQfVO2P3AMw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/IYGL2yl2Pu6P5wj3rKI_kw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "1730",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "1730",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "1730",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "1730",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2100",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "1730",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "xOw4aafJRji9XomGunlvcQ",
    "alias": "central-park-new-york",
    "name": "Central Park",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/a_T1R7oNyM-5Vtcx5ZiyPw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/central-park-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12123106600",
    "display_phone": "(212) 310-6600",
    "review_count": 2306,
    "categories": [
        {
            "alias": "parks",
            "title": "Parks"
        }
    ],
    "rating": 5,
    "location": {
        "address1": "14 E 60th St",
        "address2": "",
        "address3": "Central Park Conservancy",
        "city": "New York",
        "zip_code": "10022",
        "country": "US",
        "state": "NY",
        "display_address": [
            "14 E 60th St",
            "Central Park Conservancy",
            "New York, NY 10022"
        ],
        "cross_streets": "Madison Ave & 5th Ave"
    },
    "coordinates": {
        "latitude": 40.782418740809,
        "longitude": -73.9656022837641
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/a_T1R7oNyM-5Vtcx5ZiyPw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/dS_JZ-2ukdePm3xJWY2WPg/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/iZGjaQ0P8sNdfSNgdb3VKw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 0
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 1
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "0600",
                    "end": "0100",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": []
},
{
    "id": "WHRHK3S1mQc3PmhwsGRvbw",
    "alias": "bibble-and-sip-new-york-2",
    "name": "Bibble & Sip",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/b4_G7Dc2l1hpHlTjH48kuw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+16466495116",
    "display_phone": "(646) 649-5116",
    "review_count": 4349,
    "categories": [
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        },
        {
            "alias": "bakeries",
            "title": "Bakeries"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "253 W 51st St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "253 W 51st St",
            "New York, NY 10019"
        ],
        "cross_streets": "Broadway & 8th Ave"
    },
    "coordinates": {
        "latitude": 40.76282,
        "longitude": -73.98518
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/b4_G7Dc2l1hpHlTjH48kuw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/C1YfClxkr674ogJXHekI1Q/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/3CJLlqaqd6LfCAqbaf9tiA/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "jnEv25Y2DosTq2sNnvmC9g",
    "alias": "los-tacos-no-1-new-york",
    "name": "Los Tacos No.1",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FU44TYl3PzXsE06G4W5aog/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/los-tacos-no-1-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122560343",
    "display_phone": "(212) 256-0343",
    "review_count": 2663,
    "categories": [
        {
            "alias": "tacos",
            "title": "Tacos"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "75 9th Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10011",
        "country": "US",
        "state": "NY",
        "display_address": [
            "75 9th Ave",
            "New York, NY 10011"
        ],
        "cross_streets": "9th Ave & 10th Ave"
    },
    "coordinates": {
        "latitude": 40.7425547,
        "longitude": -74.0060838
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/FU44TYl3PzXsE06G4W5aog/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/MHZeRDZ09MNJ-O7sC1ULZQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/sRXXc-5kSCdsHQMkA6SDfw/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2100",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "UA2M9QFZghe-9th2KwLoWQ",
    "alias": "burger-and-lobster-new-york-4",
    "name": "Burger & Lobster",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1rHd7F4zztAsScwzM0vDmw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/burger-and-lobster-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+16468337532",
    "display_phone": "(646) 833-7532",
    "review_count": 5058,
    "categories": [
        {
            "alias": "seafood",
            "title": "Seafood"
        },
        {
            "alias": "burgers",
            "title": "Burgers"
        },
        {
            "alias": "newamerican",
            "title": "American (New)"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "39 W 19th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10011",
        "country": "US",
        "state": "NY",
        "display_address": [
            "39 W 19th St",
            "New York, NY 10011"
        ],
        "cross_streets": "Avenue Of The Americas & 5th Ave"
    },
    "coordinates": {
        "latitude": 40.74007,
        "longitude": -73.99344
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/1rHd7F4zztAsScwzM0vDmw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/LLteoVFm9lUAJI0thmMZiA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/Sk0cMISCf4fZZEHAD34CNA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup",
        "restaurant_reservation"
    ],
    "messaging": {
        "url": "https://www.yelp.com/raq/burger-and-lobster-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "veq1Bl1DW3UWMekZJUsG1Q",
    "alias": "gramercy-tavern-new-york",
    "name": "Gramercy Tavern",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124770777",
    "display_phone": "(212) 477-0777",
    "review_count": 2747,
    "categories": [
        {
            "alias": "newamerican",
            "title": "American (New)"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "42 E 20th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "42 E 20th St",
            "New York, NY 10003"
        ],
        "cross_streets": "Broadway & S Park Ave"
    },
    "coordinates": {
        "latitude": 40.738527,
        "longitude": -73.988417
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/v1YxidL4SOq9ofDXiI3wpg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/yGtkcLsZuK0WIFheW-rSwA/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [],
    "special_hours": [
        {
            "date": "2019-05-09",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-05-10",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-05-27",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        },
        {
            "date": "2019-05-28",
            "is_closed": true,
            "start": null,
            "end": null,
            "is_overnight": null
        }
    ]
},
{
    "id": "JION8hhg7q6zyayHYwhxIw",
    "alias": "the-high-line-new-york",
    "name": "The High Line",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Gujj42hSygQGqua-R4iYiQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-high-line-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122069922",
    "display_phone": "(212) 206-9922",
    "review_count": 2234,
    "categories": [
        {
            "alias": "parks",
            "title": "Parks"
        },
        {
            "alias": "localflavor",
            "title": "Local Flavor"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "820 Washington St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10014",
        "country": "US",
        "state": "NY",
        "display_address": [
            "820 Washington St",
            "New York, NY 10014"
        ],
        "cross_streets": "Gansevoort St & Little W 12th St"
    },
    "coordinates": {
        "latitude": 40.7479831752801,
        "longitude": -74.0048906107511
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/Gujj42hSygQGqua-R4iYiQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/WC5xPSqkAL2ZzOoRS0oZtg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/sTIQDH9ULKhqy8mpwMPTRw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0700",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "lWOkeS-wV4no8qqA9OwwEg",
    "alias": "doughnut-plant-new-york-6",
    "name": "Doughnut Plant",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JpLMXFWyvpstlC9__dlJKA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/doughnut-plant-new-york-6?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125053700",
    "display_phone": "(212) 505-3700",
    "review_count": 3128,
    "categories": [
        {
            "alias": "donuts",
            "title": "Donuts"
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "379 Grand St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10002",
        "country": "US",
        "state": "NY",
        "display_address": [
            "379 Grand St",
            "New York, NY 10002"
        ],
        "cross_streets": "Suffolk St & Norfolk St"
    },
    "coordinates": {
        "latitude": 40.7163944930004,
        "longitude": -73.9886098620298
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/JpLMXFWyvpstlC9__dlJKA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/k89Fvpf781TzsyBw2WVSZQ/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/j9K5L5cj4fNFWHK-J7kXqA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2100",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0630",
                    "end": "2000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup"
    ]
},
{
    "id": "4yPqqJDJOQX69gC66YUDkA",
    "alias": "peter-luger-brooklyn-2",
    "name": "Peter Luger",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DnReRUkXRtsmKycQEYl0pg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/peter-luger-brooklyn-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+17183877400",
    "display_phone": "(718) 387-7400",
    "review_count": 5335,
    "categories": [
        {
            "alias": "steak",
            "title": "Steakhouses"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "178 Broadway",
        "address2": "",
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11211",
        "country": "US",
        "state": "NY",
        "display_address": [
            "178 Broadway",
            "Brooklyn, NY 11211"
        ],
        "cross_streets": "Driggs Ave & 6th St"
    },
    "coordinates": {
        "latitude": 40.709945,
        "longitude": -73.962478
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/DnReRUkXRtsmKycQEYl0pg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/jOoRBpCU9_2iS8z306CGOQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/IoUOmcfnYddp9NL4rUVJmw/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2130",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2130",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2130",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2130",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2230",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2230",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1300",
                    "end": "2130",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "j1S3NUrkB3BVT49n_e76NQ",
    "alias": "best-bagel-and-coffee-new-york",
    "name": "Best Bagel & Coffee",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125644409",
    "display_phone": "(212) 564-4409",
    "review_count": 2826,
    "categories": [
        {
            "alias": "bagels",
            "title": "Bagels"
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        },
        {
            "alias": "breakfast_brunch",
            "title": "Breakfast & Brunch"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "225 W 35th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10001",
        "country": "US",
        "state": "NY",
        "display_address": [
            "225 W 35th St",
            "New York, NY 10001"
        ],
        "cross_streets": "7th Ave & 8th Ave"
    },
    "coordinates": {
        "latitude": 40.7522683,
        "longitude": -73.9910861
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/14x9ZUKOiWiD6O6j4OZ4wQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/0dabsj9xQ7w49yPNQAglXA/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "1600",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "1600",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "1600",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "1600",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "1600",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1430",
                    "day": 5
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "jjJc_CrkB2HodEinB6cWww",
    "alias": "lovemama-new-york",
    "name": "LoveMama",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/lovemama-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122545370",
    "display_phone": "(212) 254-5370",
    "review_count": 4181,
    "categories": [
        {
            "alias": "thai",
            "title": "Thai"
        },
        {
            "alias": "malaysian",
            "title": "Malaysian"
        },
        {
            "alias": "vietnamese",
            "title": "Vietnamese"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "174 2nd Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "174 2nd Ave",
            "New York, NY 10003"
        ],
        "cross_streets": "12th St & 11th St"
    },
    "coordinates": {
        "latitude": 40.7303859,
        "longitude": -73.9860613
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/VUZKcwpdMpDRUuh-2A4XPA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/IMCy_HKjbvfVBvY4FV1CRQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup",
        "restaurant_reservation"
    ]
},
{
    "id": "kViIWJFfAfWPpJOwAXBKGA",
    "alias": "national-september-11-memorial-museum-new-york",
    "name": "National September 11 Memorial Museum",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/gFr_zDiUm8QJ-4gkG8v6Uw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/national-september-11-memorial-museum-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122665211",
    "display_phone": "(212) 266-5211",
    "review_count": 1350,
    "categories": [
        {
            "alias": "museums",
            "title": "Museums"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "180 Greenwich St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10007",
        "country": "US",
        "state": "NY",
        "display_address": [
            "180 Greenwich St",
            "New York, NY 10007"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.71144,
        "longitude": -74.01301
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/gFr_zDiUm8QJ-4gkG8v6Uw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/iULZAPT7hSkNE4RBNUKixQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/GDGUvb69DUwN63MaIr93Uw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2100",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "FEVQpbOPOwAPNIgO7D3xxw",
    "alias": "shake-shack-new-york-2",
    "name": "Shake Shack",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12128896600",
    "display_phone": "(212) 889-6600",
    "review_count": 5522,
    "categories": [
        {
            "alias": "burgers",
            "title": "Burgers"
        },
        {
            "alias": "foodstands",
            "title": "Food Stands"
        },
        {
            "alias": "icecream",
            "title": "Ice Cream & Frozen Yogurt"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "Madison Square Park",
        "address2": "",
        "address3": "E 23rd St & Madison Ave",
        "city": "New York",
        "zip_code": "10010",
        "country": "US",
        "state": "NY",
        "display_address": [
            "Madison Square Park",
            "E 23rd St & Madison Ave",
            "New York, NY 10010"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.7414000197233,
        "longitude": -73.98815019045
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/NXfboKAn7ygu-NKYC-fU2w/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/ekXfANJZM6SxUXNK5Z792A/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery"
    ],
    "messaging": {
        "url": "https://www.yelp.com/raq/shake-shack-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "zj8Lq1T8KIC5zwFief15jg",
    "alias": "prince-street-pizza-new-york-2",
    "name": "Prince Street Pizza",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/prince-street-pizza-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129664100",
    "display_phone": "(212) 966-4100",
    "review_count": 2733,
    "categories": [
        {
            "alias": "pizza",
            "title": "Pizza"
        },
        {
            "alias": "italian",
            "title": "Italian"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "27 Prince St",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10012",
        "country": "US",
        "state": "NY",
        "display_address": [
            "27 Prince St",
            "New York, NY 10012"
        ],
        "cross_streets": "Mott St & Elizabeth St"
    },
    "coordinates": {
        "latitude": 40.7229087705545,
        "longitude": -73.9944863319397
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/B_4dw3bsRdC2shgxT8-NRQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/HVjttLctuIzKL3LSlsRf-w/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0200",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1000",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "vRrVSB-LegwUwIxpkeRVtQ",
    "alias": "le-bernardin-new-york",
    "name": "Le Bernardin",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/G0wZ6h5KaQG2gJkk8uOkLQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/le-bernardin-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125541515",
    "display_phone": "(212) 554-1515",
    "review_count": 2401,
    "categories": [
        {
            "alias": "french",
            "title": "French"
        },
        {
            "alias": "lounges",
            "title": "Lounges"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "155 W 51st St",
        "address2": "",
        "address3": "The Equitable Bldg",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "155 W 51st St",
            "The Equitable Bldg",
            "New York, NY 10019"
        ],
        "cross_streets": "Broadway & 8th Ave"
    },
    "coordinates": {
        "latitude": 40.761557,
        "longitude": -73.981763
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/G0wZ6h5KaQG2gJkk8uOkLQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/6T54zhkEOK8wOZR-I4GqUQ/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/BrnCa4XRjpVN9y_YhLq2qA/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1430",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1430",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1430",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1430",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1430",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 5
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "nU4XBdvxDABXqZ6CnB8Dig",
    "alias": "clinton-street-baking-company-new-york-5",
    "name": "Clinton Street Baking Company",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DWHdizJ9bKbXN4yq6nbwAA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/clinton-street-baking-company-new-york-5?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+16466026263",
    "display_phone": "(646) 602-6263",
    "review_count": 4644,
    "categories": [
        {
            "alias": "bakeries",
            "title": "Bakeries"
        },
        {
            "alias": "breakfast_brunch",
            "title": "Breakfast & Brunch"
        },
        {
            "alias": "tradamerican",
            "title": "American (Traditional)"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "4 Clinton St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10002",
        "country": "US",
        "state": "NY",
        "display_address": [
            "4 Clinton St",
            "New York, NY 10002"
        ],
        "cross_streets": "Avenue B & Houston St"
    },
    "coordinates": {
        "latitude": 40.721128,
        "longitude": -73.983933
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/DWHdizJ9bKbXN4yq6nbwAA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/5dunuRyunJfAvnaS9n6T_w/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/1CTyUp3Fz_svoqmvi7hwAw/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1600",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1600",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1600",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1600",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1600",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "1600",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "1700",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup",
        "restaurant_reservation"
    ]
},
{
    "id": "B3_K2kUVbYOU0VaLcj_LTw",
    "alias": "thai-villa-new-york-2",
    "name": "Thai Villa",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/OgCU9NPFIl8hF_04Zani9w/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/thai-villa-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12128029999",
    "display_phone": "(212) 802-9999",
    "review_count": 2553,
    "categories": [
        {
            "alias": "thai",
            "title": "Thai"
        },
        {
            "alias": "asianfusion",
            "title": "Asian Fusion"
        },
        {
            "alias": "vegetarian",
            "title": "Vegetarian"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "5 E 19th St",
        "address2": "G Floor",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "5 E 19th St",
            "G Floor",
            "New York, NY 10003"
        ],
        "cross_streets": "Broadway & 5th Ave"
    },
    "coordinates": {
        "latitude": 40.73902,
        "longitude": -73.99065
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/OgCU9NPFIl8hF_04Zani9w/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/sfEm_sOYglz_ZOiJ_zOQgg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/d0H390eRKBVDUZc0D1Gepw/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2215",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2215",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2215",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2215",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2315",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1545",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2315",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1545",
                    "day": 6
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2215",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "mvn2XFJfIPNAlvsy-arzkA",
    "alias": "brooklyn-bridge-brooklyn",
    "name": "Brooklyn Bridge",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1F5Xl0Qn5DW8nzaelPSwMA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/brooklyn-bridge-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+17187246434",
    "display_phone": "(718) 724-6434",
    "review_count": 1299,
    "categories": [
        {
            "alias": "landmarks",
            "title": "Landmarks & Historical Buildings"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "334 Furman St",
        "address2": null,
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11201",
        "country": "US",
        "state": "NY",
        "display_address": [
            "334 Furman St",
            "Brooklyn, NY 11201"
        ],
        "cross_streets": "Grace Ct & Joralemon St"
    },
    "coordinates": {
        "latitude": 40.7059677364821,
        "longitude": -73.9966657489186
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/TXJyyqdoZv4C_A06b8H6iw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/1F5Xl0Qn5DW8nzaelPSwMA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/n11ySGeLOy8EVCHJP6Z9dw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 0
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 1
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "0000",
                    "end": "0000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": []
},
{
    "id": "UGECJrPSWy0n7PXykBBWAQ",
    "alias": "two-little-red-hens-new-york-4",
    "name": "Two Little Red Hens",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gF02Oh2PfE2OS7Nz3MqV4g/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/two-little-red-hens-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124520476",
    "display_phone": "(212) 452-0476",
    "review_count": 2429,
    "categories": [
        {
            "alias": "bakeries",
            "title": "Bakeries"
        },
        {
            "alias": "desserts",
            "title": "Desserts"
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "1652 2nd Ave",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10028",
        "country": "US",
        "state": "NY",
        "display_address": [
            "1652 2nd Ave",
            "New York, NY 10028"
        ],
        "cross_streets": "85th St & 86th St"
    },
    "coordinates": {
        "latitude": 40.777528,
        "longitude": -73.9517869
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/gF02Oh2PfE2OS7Nz3MqV4g/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/EGnPKq5C8ONTpZ437unAqw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/CbucpcW39hPmP5DDIsDzzQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2100",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2100",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2100",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2100",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0730",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "ga6sRtE0l85iftw_5-W84Q",
    "alias": "dominique-ansel-bakery-new-york",
    "name": "Dominique Ansel Bakery",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fs7t18Em3AqLqsQY_l_2_w/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/dominique-ansel-bakery-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122192773",
    "display_phone": "(212) 219-2773",
    "review_count": 4147,
    "categories": [
        {
            "alias": "bakeries",
            "title": "Bakeries"
        },
        {
            "alias": "desserts",
            "title": "Desserts"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "189 Spring St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10012",
        "country": "US",
        "state": "NY",
        "display_address": [
            "189 Spring St",
            "New York, NY 10012"
        ],
        "cross_streets": "Thompson St & Sullivan St"
    },
    "coordinates": {
        "latitude": 40.72522,
        "longitude": -74.00291
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/fs7t18Em3AqLqsQY_l_2_w/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/VgnUhB5KW6yek9dowgeGAA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/DqJA2yj4kG_raXnL7dFzzQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "1900",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "nI1UYDCYUTt23TpGxqnLKg",
    "alias": "buddakan-new-york",
    "name": "Buddakan",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Avw19VU35-FZLen3nl9gYw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/buddakan-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129896699",
    "display_phone": "(212) 989-6699",
    "review_count": 3748,
    "categories": [
        {
            "alias": "chinese",
            "title": "Chinese"
        },
        {
            "alias": "bars",
            "title": "Bars"
        },
        {
            "alias": "asianfusion",
            "title": "Asian Fusion"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "75 9th Ave",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10011",
        "country": "US",
        "state": "NY",
        "display_address": [
            "75 9th Ave",
            "New York, NY 10011"
        ],
        "cross_streets": "15th and 16th st"
    },
    "coordinates": {
        "latitude": 40.7422762672197,
        "longitude": -74.0048000961542
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/Avw19VU35-FZLen3nl9gYw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/61bvt8oLPtpPzj3Tn9Yw3Q/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/HyzuPedEcCdUrCVXffw3cw/o.jpg"
    ],
    "price": "$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1700",
                    "end": "0100",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1700",
                    "end": "0100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "delivery",
        "pickup"
    ]
},
{
    "id": "vk7W3_sQwr7eZbRFsXv6rw",
    "alias": "taiyaki-nyc-new-york",
    "name": "Taiyaki NYC",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iyj-1IhhvtdNWycNJS17iw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/taiyaki-nyc-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129662882",
    "display_phone": "(212) 966-2882",
    "review_count": 2507,
    "categories": [
        {
            "alias": "icecream",
            "title": "Ice Cream & Frozen Yogurt"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "119 Baxter St",
        "address2": "",
        "address3": null,
        "city": "New York",
        "zip_code": "10013",
        "country": "US",
        "state": "NY",
        "display_address": [
            "119 Baxter St",
            "New York, NY 10013"
        ],
        "cross_streets": "Canal St & Hester St"
    },
    "coordinates": {
        "latitude": 40.71789,
        "longitude": -73.9988
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/Iyj-1IhhvtdNWycNJS17iw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/q1aV6cfgcZLrU81sjIwmdQ/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/NznR4TYCJfcoaTrCVSYiNg/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [],
    "messaging": {
        "url": "https://www.yelp.com/raq/taiyaki-nyc-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "a0IET3_yCFcO36OqGSsisg",
    "alias": "eataly-nyc-flatiron-new-york",
    "name": "Eataly NYC Flatiron",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9Xzihhf_KcZieyru9TX-pg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/eataly-nyc-flatiron-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122292560",
    "display_phone": "(212) 229-2560",
    "review_count": 5263,
    "categories": [
        {
            "alias": "italian",
            "title": "Italian"
        },
        {
            "alias": "grocery",
            "title": "Grocery"
        },
        {
            "alias": "cafes",
            "title": "Cafes"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "200 5th Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10010",
        "country": "US",
        "state": "NY",
        "display_address": [
            "200 5th Ave",
            "New York, NY 10010"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.74195877796,
        "longitude": -73.989716662832
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/9Xzihhf_KcZieyru9TX-pg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/4hTU2cP19I3Ihzm2tunmgQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/Go7aIl75eOmWND_qvNAgCQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "ETgJqJHV7BW6pIr9Ox74sA",
    "alias": "amélie-new-york",
    "name": "Amélie",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/cSDgVuPMnJgMLTrTNSEXug/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/am%C3%A9lie-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125332962",
    "display_phone": "(212) 533-2962",
    "review_count": 2450,
    "categories": [
        {
            "alias": "french",
            "title": "French"
        },
        {
            "alias": "wine_bars",
            "title": "Wine Bars"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "22 W 8th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10011",
        "country": "US",
        "state": "NY",
        "display_address": [
            "22 W 8th St",
            "New York, NY 10011"
        ],
        "cross_streets": "5th Ave & Mac Dougal St"
    },
    "coordinates": {
        "latitude": 40.7327,
        "longitude": -73.99766
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/cSDgVuPMnJgMLTrTNSEXug/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/vmFY7h5byVrl5b1u97iWrg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/zGH871vKqT6-jVvbvabTgg/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "0000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1130",
                    "end": "0200",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1130",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "0000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "restaurant_reservation"
    ]
},
{
    "id": "ysqgdbSrezXgVwER2kQWKA",
    "alias": "julianas-pizza-brooklyn-5",
    "name": "Juliana's Pizza",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7JtwTxhWHf3YS70Ss_CfxA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/julianas-pizza-brooklyn-5?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+17185966700",
    "display_phone": "(718) 596-6700",
    "review_count": 1953,
    "categories": [
        {
            "alias": "pizza",
            "title": "Pizza"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "19 Old Fulton St",
        "address2": "",
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11201",
        "country": "US",
        "state": "NY",
        "display_address": [
            "19 Old Fulton St",
            "Brooklyn, NY 11201"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.7026153030093,
        "longitude": -73.9934159993549
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/7JtwTxhWHf3YS70Ss_CfxA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/-zAVNXSKJDQNYZQYWbqNRA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/clscwgOF9_Ecq-Rwsq7jyQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1515",
                    "day": 6
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "A_YpTLbAlEqeLVSs9bxbEA",
    "alias": "club-a-steakhouse-new-york",
    "name": "Club A Steakhouse",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8UNPe4NiTidCHN2VpxGbfg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/club-a-steakhouse-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12126884190",
    "display_phone": "(212) 688-4190",
    "review_count": 2570,
    "categories": [
        {
            "alias": "steak",
            "title": "Steakhouses"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "240 E 58th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10022",
        "country": "US",
        "state": "NY",
        "display_address": [
            "240 E 58th St",
            "New York, NY 10022"
        ],
        "cross_streets": "2nd Ave & 3rd Ave"
    },
    "coordinates": {
        "latitude": 40.76006,
        "longitude": -73.96557
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/8UNPe4NiTidCHN2VpxGbfg/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/VN92bzIfSojv5iS4W_gajw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/vrrVj5v0eb0gxTPuAXao4Q/o.jpg"
    ],
    "price": "$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 5
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "o6q3jm-dU5A6nV3r2lBg9A",
    "alias": "chinatown-ice-cream-factory-new-york",
    "name": "Chinatown Ice Cream Factory",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qefHcdS7L4-8v88Ng4so9g/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/chinatown-ice-cream-factory-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12126084170",
    "display_phone": "(212) 608-4170",
    "review_count": 2604,
    "categories": [
        {
            "alias": "icecream",
            "title": "Ice Cream & Frozen Yogurt"
        },
        {
            "alias": "desserts",
            "title": "Desserts"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "65 Bayard St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10013",
        "country": "US",
        "state": "NY",
        "display_address": [
            "65 Bayard St",
            "New York, NY 10013"
        ],
        "cross_streets": "Mott St & Elizabeth St"
    },
    "coordinates": {
        "latitude": 40.715452,
        "longitude": -73.99818
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/qefHcdS7L4-8v88Ng4so9g/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/CrSE9KeiWuYqnJk8L6ruUA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/YcPhWjFqjTR4qQFh5Sh8-Q/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "QbAfrOxbuYKU248SDXHZEQ",
    "alias": "totto-ramen-new-york-15",
    "name": "Totto Ramen",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DVRyq3tbC8DJ1V3SoC_FBQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/totto-ramen-new-york-15?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125820052",
    "display_phone": "(212) 582-0052",
    "review_count": 5279,
    "categories": [
        {
            "alias": "ramen",
            "title": "Ramen"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "366 W 52nd St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "366 W 52nd St",
            "New York, NY 10019"
        ],
        "cross_streets": "9th Ave & 8th Ave"
    },
    "coordinates": {
        "latitude": 40.76444,
        "longitude": -73.98759
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/DVRyq3tbC8DJ1V3SoC_FBQ/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/aKAUtSVmHVo1m5HRICQLPg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/Utr1_YCdBdsQ33PH-kygPw/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1630",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1600",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "xt4sa64WOrpJvZBDPNPNYg",
    "alias": "jacobs-pickles-new-york",
    "name": "Jacob's Pickles",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/167Rl2s1oMge_2ZSDD1z0A/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/jacobs-pickles-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124705566",
    "display_phone": "(212) 470-5566",
    "review_count": 3674,
    "categories": [
        {
            "alias": "comfortfood",
            "title": "Comfort Food"
        },
        {
            "alias": "southern",
            "title": "Southern"
        },
        {
            "alias": "tradamerican",
            "title": "American (Traditional)"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "509 Amsterdam Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10024",
        "country": "US",
        "state": "NY",
        "display_address": [
            "509 Amsterdam Ave",
            "New York, NY 10024"
        ],
        "cross_streets": "84th St & 85th St"
    },
    "coordinates": {
        "latitude": 40.7866504411994,
        "longitude": -73.9755284786224
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/167Rl2s1oMge_2ZSDD1z0A/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/EGTtfW4-nnMK_cL_NQ_GLw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/VW8dpBkC3dzTZEV_AAGIkA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0030",
                    "day": 0
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0030",
                    "day": 1
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0030",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0030",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1000",
                    "end": "0200",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "0900",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "0900",
                    "end": "0030",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": [],
    "messaging": {
        "url": "https://www.yelp.com/raq/jacobs-pickles-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "0CjK3esfpFcxIopebzjFxA",
    "alias": "joes-shanghai-new-york-2",
    "name": "Joe's Shanghai",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ekUo5egd4dlE7zJyb4-Leg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/joes-shanghai-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122338888",
    "display_phone": "(212) 233-8888",
    "review_count": 5707,
    "categories": [
        {
            "alias": "shanghainese",
            "title": "Shanghainese"
        },
        {
            "alias": "seafood",
            "title": "Seafood"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "9 Pell St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10013",
        "country": "US",
        "state": "NY",
        "display_address": [
            "9 Pell St",
            "New York, NY 10013"
        ],
        "cross_streets": "Doyers St & Bowery"
    },
    "coordinates": {
        "latitude": 40.7146691442891,
        "longitude": -73.9977602206654
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/ekUo5egd4dlE7zJyb4-Leg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/Zqj2G0yWFgO0yJ5MRb_Dlw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/IIuhnX0PDxYPWd1sHDvKSw/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "VrCCr45dhN-RRM107iptdg",
    "alias": "russ-and-daughters-new-york",
    "name": "Russ & Daughters",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VVsTMR57q-_ebqaPKM_Llg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/russ-and-daughters-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124754880",
    "display_phone": "(212) 475-4880",
    "review_count": 1982,
    "categories": [
        {
            "alias": "bagels",
            "title": "Bagels"
        },
        {
            "alias": "smokehouse",
            "title": "Smokehouse"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "179 E Houston St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10002",
        "country": "US",
        "state": "NY",
        "display_address": [
            "179 E Houston St",
            "New York, NY 10002"
        ],
        "cross_streets": "East Houston St & 2nd Ave"
    },
    "coordinates": {
        "latitude": 40.722589,
        "longitude": -73.9882828294139
    },
    "photos": [
        "https://s3-media4.fl.yelpcdn.com/bphoto/VVsTMR57q-_ebqaPKM_Llg/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/YxacfFxRANswGVCG56lEwg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/WZ_h8ZdoKAhk-x2nYcL8mg/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1900",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "1800",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "nRO136GRieGtxz18uD61DA",
    "alias": "eleven-madison-park-new-york",
    "name": "Eleven Madison Park",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12128890905",
    "display_phone": "(212) 889-0905",
    "review_count": 2035,
    "categories": [
        {
            "alias": "newamerican",
            "title": "American (New)"
        },
        {
            "alias": "french",
            "title": "French"
        },
        {
            "alias": "cocktailbars",
            "title": "Cocktail Bars"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "11 Madison Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10010",
        "country": "US",
        "state": "NY",
        "display_address": [
            "11 Madison Ave",
            "New York, NY 10010"
        ],
        "cross_streets": "24th St"
    },
    "coordinates": {
        "latitude": 40.7416907417333,
        "longitude": -73.9872074872255
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/YfmGcR--_VN6jBGYhVPuSQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/2R30KMeH2ePQOa7JuNgpgg/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1300",
                    "day": 6
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "WIhm0W9197f_rRtDziq5qQ",
    "alias": "lombardis-pizza-new-york-4",
    "name": "Lombardi's Pizza",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/UZ6V_hobp1KpYDPOHNoCKw/o.jpg",
    "is_claimed": false,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/lombardis-pizza-new-york-4?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129417994",
    "display_phone": "(212) 941-7994",
    "review_count": 5841,
    "categories": [
        {
            "alias": "pizza",
            "title": "Pizza"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "32 Spring St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10012",
        "country": "US",
        "state": "NY",
        "display_address": [
            "32 Spring St",
            "New York, NY 10012"
        ],
        "cross_streets": "Mulberry St & Mott St"
    },
    "coordinates": {
        "latitude": 40.7215934960083,
        "longitude": -73.9955956044561
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/UZ6V_hobp1KpYDPOHNoCKw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/Md3ourg4tnuL3-JMrh8jCg/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/XtCyVQ08bShUv8WdK5B-VA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "b8a-8u_A51v2IzyjLVsx6w",
    "alias": "del-friscos-double-eagle-steakhouse-new-york",
    "name": "Del Frisco's Double Eagle Steakhouse",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FyQ0V-QtndWStk5B8qwjXw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/del-friscos-double-eagle-steakhouse-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12125755129",
    "display_phone": "(212) 575-5129",
    "review_count": 2766,
    "categories": [
        {
            "alias": "steak",
            "title": "Steakhouses"
        },
        {
            "alias": "newamerican",
            "title": "American (New)"
        },
        {
            "alias": "seafood",
            "title": "Seafood"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "1221 Ave Of The Americas",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10020",
        "country": "US",
        "state": "NY",
        "display_address": [
            "1221 Ave Of The Americas",
            "New York, NY 10020"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.759412,
        "longitude": -73.982221
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/FyQ0V-QtndWStk5B8qwjXw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/gJ9NyS28_f4nmtr14VvnuA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/y_MltjqAYLOg3cOfhmhMMg/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "0000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "0000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "0000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1500",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "TN4RnyqHMSupRFot4Q-_EA",
    "alias": "ippudo-westside-new-york",
    "name": "Ippudo Westside",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/EmJBZo1FvHemEBgyJknEOQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/ippudo-westside-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129742500",
    "display_phone": "(212) 974-2500",
    "review_count": 3461,
    "categories": [
        {
            "alias": "ramen",
            "title": "Ramen"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "321 W 51st St",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "321 W 51st St",
            "New York, NY 10019"
        ],
        "cross_streets": "9th Ave & 8th Ave"
    },
    "coordinates": {
        "latitude": 40.76344,
        "longitude": -73.98661
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/EmJBZo1FvHemEBgyJknEOQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/BSasG8sY-kl-DLXmXGAsiA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/DAAe3AIoR0_Nbm6URAeAbg/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1530",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2230",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [],
    "special_hours": [
        {
            "date": "2019-05-27",
            "is_closed": null,
            "start": "1100",
            "end": "2230",
            "is_overnight": false
        },
        {
            "date": "2019-09-02",
            "is_closed": null,
            "start": "1100",
            "end": "2230",
            "is_overnight": false
        },
        {
            "date": "2019-10-14",
            "is_closed": null,
            "start": "1100",
            "end": "2230",
            "is_overnight": false
        },
        {
            "date": "2019-11-11",
            "is_closed": null,
            "start": "1100",
            "end": "2330",
            "is_overnight": false
        }
    ]
},
{
    "id": "ikazsJps1k-Br2FbunwCtg",
    "alias": "spot-dessert-bar-new-york-2",
    "name": "Spot Dessert Bar",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/0WUYc9QKwyZHZ1s6niRdmA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/spot-dessert-bar-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12126775670",
    "display_phone": "(212) 677-5670",
    "review_count": 2802,
    "categories": [
        {
            "alias": "desserts",
            "title": "Desserts"
        },
        {
            "alias": "macarons",
            "title": "Macarons"
        },
        {
            "alias": "creperies",
            "title": "Creperies"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "13 St Marks Pl",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "13 St Marks Pl",
            "New York, NY 10003"
        ],
        "cross_streets": "Cooper Sq & Astor Pl"
    },
    "coordinates": {
        "latitude": 40.72939,
        "longitude": -73.98892
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/0WUYc9QKwyZHZ1s6niRdmA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/oigSA0jxnLzoHqt99K2wNw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/gl-mTqZjlFu7iprepWoK5Q/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "0000",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "0000",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "0000",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "1200",
                    "end": "0100",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1200",
                    "end": "0100",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1200",
                    "end": "0100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "0000",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": [
        "delivery",
        "pickup"
    ]
},
{
    "id": "ehUuSk5gPTCQmwS_ubgKRA",
    "alias": "upstate-new-york-2",
    "name": "Upstate",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RvnUVU7MF7DT0RzNL-EebQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+16467915400",
    "display_phone": "(646) 791-5400",
    "review_count": 1706,
    "categories": [
        {
            "alias": "seafood",
            "title": "Seafood"
        },
        {
            "alias": "wine_bars",
            "title": "Wine Bars"
        },
        {
            "alias": "beerbar",
            "title": "Beer Bar"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "95 1st Ave",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "95 1st Ave",
            "New York, NY 10003"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.7263139141197,
        "longitude": -73.9864901976935
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/RvnUVU7MF7DT0RzNL-EebQ/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/32CjStwyQ_G-0vJvXLys4w/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/ED1BxzOVH_8XTQi1rrQ-SQ/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2230",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2230",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2230",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "restaurant_reservation"
    ],
    "messaging": {
        "url": "https://www.yelp.com/raq/upstate-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "P58WuRP1AGD9ruE2bZ2urw",
    "alias": "dough-brooklyn",
    "name": "Dough",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vw6a5HENJwaZByokus4GzQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/dough-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+13475337544",
    "display_phone": "(347) 533-7544",
    "review_count": 1692,
    "categories": [
        {
            "alias": "donuts",
            "title": "Donuts"
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "448 Franklin Ave",
        "address2": "",
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11205",
        "country": "US",
        "state": "NY",
        "display_address": [
            "448 Franklin Ave",
            "Brooklyn, NY 11205"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.6890699083996,
        "longitude": -73.9571077502625
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/vw6a5HENJwaZByokus4GzQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/vaYI8LVytXEndcUocP8PSg/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/KcewvAjmgrW09P2Mb_Rvig/o.jpg"
    ],
    "price": "$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0600",
                    "end": "2100",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "8HkB3JfIj7_g-MN5ujoRig",
    "alias": "grand-central-terminal-new-york",
    "name": "Grand Central Terminal",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12123402583",
    "display_phone": "(212) 340-2583",
    "review_count": 1336,
    "categories": [
        {
            "alias": "landmarks",
            "title": "Landmarks & Historical Buildings"
        },
        {
            "alias": "trainstations",
            "title": "Train Stations"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "89 E 42nd St",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10017",
        "country": "US",
        "state": "NY",
        "display_address": [
            "89 E 42nd St",
            "New York, NY 10017"
        ],
        "cross_streets": "Park Ave & Vanderbilt Ave"
    },
    "coordinates": {
        "latitude": 40.752793,
        "longitude": -73.977165
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/J3_U3OYJ8o8NgDolfJeEXQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/MX2_DRBNMt25hzFa47qVWw/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 0
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 1
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 2
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 5
                },
                {
                    "is_overnight": true,
                    "start": "0530",
                    "end": "0200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": true
        }
    ],
    "transactions": [],
    "messaging": {
        "url": "https://www.yelp.com/raq/grand-central-terminal-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw#popup%3Araq",
        "use_case_text": "Message the Business"
    }
},
{
    "id": "iBm8YTqNwrddsxWdqLPK-A",
    "alias": "caracas-arepa-bar-new-york",
    "name": "Caracas Arepa Bar",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/wtb4bAE2a4XHO2xlR_cMkw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/caracas-arepa-bar-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122285062",
    "display_phone": "(212) 228-5062",
    "review_count": 2519,
    "categories": [
        {
            "alias": "venezuelan",
            "title": "Venezuelan"
        },
        {
            "alias": "bars",
            "title": "Bars"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "91 E 7th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10009",
        "country": "US",
        "state": "NY",
        "display_address": [
            "91 E 7th St",
            "New York, NY 10009"
        ],
        "cross_streets": "Avenue A & 1st Ave"
    },
    "coordinates": {
        "latitude": 40.7269655,
        "longitude": -73.9854223
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/wtb4bAE2a4XHO2xlR_cMkw/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/z5qiQeJqcDMrfvoHHjGNKA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/1_DJs1275DPZ8b5bCBklEg/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2300",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2300",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "dMhRafXdr765DHe0k-QfaQ",
    "alias": "abc-kitchen-new-york",
    "name": "ABC Kitchen",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/k2V0QyHL_IFbfDnR33S0cg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/abc-kitchen-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124755829",
    "display_phone": "(212) 475-5829",
    "review_count": 2867,
    "categories": [
        {
            "alias": "newamerican",
            "title": "American (New)"
        },
        {
            "alias": "french",
            "title": "French"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "35 E 18th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10003",
        "country": "US",
        "state": "NY",
        "display_address": [
            "35 E 18th St",
            "New York, NY 10003"
        ],
        "cross_streets": "Broadway & S Park Ave"
    },
    "coordinates": {
        "latitude": 40.738085,
        "longitude": -73.989472
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/k2V0QyHL_IFbfDnR33S0cg/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/CaUP1LxKOImt0zS5k33Rlw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/ShTpUCiIf2GuJSzyKWatgw/o.jpg"
    ],
    "price": "$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1500",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1500",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1500",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2230",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1500",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "1500",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2330",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1500",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2330",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "1500",
                    "day": 6
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "Hs1TH_4FpyzbX6_J5r1XXg",
    "alias": "mollys-cupcakes-new-york",
    "name": "Molly's Cupcakes",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7N63eLWpHu-aph3MOo_Viw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/mollys-cupcakes-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12124142253",
    "display_phone": "(212) 414-2253",
    "review_count": 1602,
    "categories": [
        {
            "alias": "bakeries",
            "title": "Bakeries"
        },
        {
            "alias": "cupcakes",
            "title": "Cupcakes"
        },
        {
            "alias": "customcakes",
            "title": "Custom Cakes"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "228 Bleecker St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10014",
        "country": "US",
        "state": "NY",
        "display_address": [
            "228 Bleecker St",
            "New York, NY 10014"
        ],
        "cross_streets": ""
    },
    "coordinates": {
        "latitude": 40.73014,
        "longitude": -74.00248
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/7N63eLWpHu-aph3MOo_Viw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/awjKslzevIdnksPzbNEDWA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/ip9luDApCYM4e5uz2PScCw/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1200",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "0800",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "0900",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "HxC2ZN010NxAFwjTqUVpzw",
    "alias": "rice-to-riches-new-york",
    "name": "Rice To Riches",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/piqXaAjUb85Pt7n7CNpGVA/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/rice-to-riches-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12122740008",
    "display_phone": "(212) 274-0008",
    "review_count": 2926,
    "categories": [
        {
            "alias": "desserts",
            "title": "Desserts"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "37 Spring St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10012",
        "country": "US",
        "state": "NY",
        "display_address": [
            "37 Spring St",
            "New York, NY 10012"
        ],
        "cross_streets": "Mulberry St & Mott St"
    },
    "coordinates": {
        "latitude": 40.721845,
        "longitude": -73.995802
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/piqXaAjUb85Pt7n7CNpGVA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/Z_poFhnD0w-IyPu8T6VrBw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/adrlae24bE_e38haOE6ngA/o.jpg"
    ],
    "price": "$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0100",
                    "day": 4
                },
                {
                    "is_overnight": true,
                    "start": "1100",
                    "end": "0100",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1100",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
},
{
    "id": "OUPyV2WKYETuprScXSAtuA",
    "alias": "the-museum-of-modern-art-new-york-3",
    "name": "The Museum of Modern Art",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/aLAhip2kC7DkEIa4M1SzCw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-museum-of-modern-art-new-york-3?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12127089400",
    "display_phone": "(212) 708-9400",
    "review_count": 1930,
    "categories": [
        {
            "alias": "artmuseums",
            "title": "Art Museums"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "11 West 53rd St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10019",
        "country": "US",
        "state": "NY",
        "display_address": [
            "11 West 53rd St",
            "New York, NY 10019"
        ],
        "cross_streets": "Avenue Of The Americas & 5th Ave"
    },
    "coordinates": {
        "latitude": 40.76146,
        "longitude": -73.97736
    },
    "photos": [
        "https://s3-media1.fl.yelpcdn.com/bphoto/aLAhip2kC7DkEIa4M1SzCw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/PDnQWSiamQNDIQtEuhYOIQ/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/ORGu5XSecriAYPyv2pL3HQ/o.jpg"
    ],
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "1730",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "1730",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "1730",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "2000",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "2000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "1730",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1030",
                    "end": "1730",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "qLLxS7RwNEjP_jq_KQrPfA",
    "alias": "traif-brooklyn",
    "name": "Traif",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_srdk7UPM4mShxAIqm9aqg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/traif-brooklyn?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+13478449578",
    "display_phone": "(347) 844-9578",
    "review_count": 1815,
    "categories": [
        {
            "alias": "newamerican",
            "title": "American (New)"
        },
        {
            "alias": "tapasmallplates",
            "title": "Tapas/Small Plates"
        }
    ],
    "rating": 4.5,
    "location": {
        "address1": "229 S 4th St",
        "address2": "",
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11211",
        "country": "US",
        "state": "NY",
        "display_address": [
            "229 S 4th St",
            "Brooklyn, NY 11211"
        ],
        "cross_streets": "Driggs Ave & Roebling St"
    },
    "coordinates": {
        "latitude": 40.710658,
        "longitude": -73.958872
    },
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/_srdk7UPM4mShxAIqm9aqg/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/4SRgQZJ6rQtz3ybpWxwTrA/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/Za4pn9JuannSep8ErVhA9w/o.jpg"
    ],
    "price": "$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "2300",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "2300",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "0000",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "0000",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1800",
                    "end": "2300",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": []
},
{
    "id": "t1w4qyqyfEdTPhoy-5t3FA",
    "alias": "morimoto-new-york",
    "name": "Morimoto",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/r5u2gd0GWd7O5xyVE3K7Aw/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/morimoto-new-york?adjust_creative=RaHE0BYRotui1mKSr45cEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=RaHE0BYRotui1mKSr45cEw",
    "phone": "+12129898883",
    "display_phone": "(212) 989-8883",
    "review_count": 2933,
    "categories": [
        {
            "alias": "japanese",
            "title": "Japanese"
        },
        {
            "alias": "sushi",
            "title": "Sushi Bars"
        }
    ],
    "rating": 4,
    "location": {
        "address1": "88 10th Ave",
        "address2": null,
        "address3": "",
        "city": "New York",
        "zip_code": "10011",
        "country": "US",
        "state": "NY",
        "display_address": [
            "88 10th Ave",
            "New York, NY 10011"
        ],
        "cross_streets": "Between 15th & 16th St"
    },
    "coordinates": {
        "latitude": 40.74332,
        "longitude": -74.00713
    },
    "photos": [
        "https://s3-media3.fl.yelpcdn.com/bphoto/r5u2gd0GWd7O5xyVE3K7Aw/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/amRzuBnBGLEnWSxQf2nuYA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/1wT7L5jkJtSzm59qmtHmrA/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1430",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1430",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1430",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1430",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1730",
                    "end": "2300",
                    "day": 3
                },
                {
                    "is_overnight": false,
                    "start": "1130",
                    "end": "1430",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 4
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2330",
                    "day": 5
                },
                {
                    "is_overnight": false,
                    "start": "1700",
                    "end": "2200",
                    "day": 6
                }
            ],
            "hours_type": "REGULAR",
            "is_open_now": false
        }
    ],
    "transactions": [
        "pickup",
        "delivery"
    ]
}];


for(i=0; i<restaurantDetailsList.length; i++)
{
  let res = restaurantDetails.addRestaurantDetails(restaurantDetailsList[i]).catch((e) => {console.log(e)});
}

  console.log("Done seeding database");
  //await db.serverConfig.close();
};

main().catch(console.log);