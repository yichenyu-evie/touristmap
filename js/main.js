let mapSwitch = document.getElementById("map-switch");
let map = document.getElementById("map");
let listSwitch = document.getElementById("list-switch");
let list = document.getElementById("list");
mapSwitch.onclick = function(){
    map.style.display = "block";
    list.style.display = "none";
    console.log("map switch");
};

listSwitch.onclick = function(){
    map.style.display = "none";
    list.style.display = "block";
    console.log("list switch");
};

function initMap(){
      // Map options
      var options = {
        zoom:5,
        center:{lat:29.433053,lng:106.898626},
        styles:[
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          }
        ],



      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

     //array--loop
      var markers = [];  
        for (let i = 0; i < locationArray.length; i++) {
            var marker = {};
            let name = locationArray[i]['name'];
            let lat = locationArray[i]['lat'];
            let lng = locationArray[i]['lng'];
            let des = locationArray[i]['des'];
            let img = locationArray[i]['img'];
            let icon = locationArray[i]['icon'];
            let coord = {lat: lat, lng: lng};
            let link = locationArray[i]['link'];
            marker['coords'] = coord;
            marker['iconImage'] = icon;
            marker['content'] = `<h4 class="wintit">${name}</h4><img class="winimg" src=${img}><br><br><button class="winbut" onClick="infoButtonOnClick('${name}', '${img}', '${des}', '${link}')">More</button>`;
            markers.push(marker);
            
        }
        
       
      //Markers on the map
      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }
    
     var infoWindow = new google.maps.InfoWindow();

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          

          marker.addListener('click', function(){
//              infoWindow.setContent(
//      '<button onclick="infoButtonOnClick()">Click me</button>');
            infoWindow.setContent(props.content);
            infoWindow.open(map, marker);
          });
        }
      }
       
    }

   
    //modal
    // Get the modal
    var modal = document.getElementById("myModal"); 
    function infoButtonOnClick(name, img, des, link) {
            modal.style.display = "block";
            var modaltitle = document.getElementById("modaltitle");
            var description = document.getElementById("description");
            var modalimg = document.getElementById("modalimg");
            var modallink = document.getElementById("modallink");
            modaltitle.innerHTML = name;
            description.innerHTML = des;
            modalimg.src = img;
            modallink.href = link;
        console.log(link);
      
        
    }
    // Get the button that opens the modal
    var btns = document.getElementsByClassName("infoButton");
    console.log(btns);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    //array
let locationArray = [
    { 
        "name": "Xiamen",
        "lat": 24.478806,
        "lng": 118.089278,
        "des": "Xiamen is a port city on China’s southeast coast, across a strait from Taiwan. It encompasses 2 main islands and a region on the mainland. Formerly known as Amoy, it was a British-run treaty port from 1842 to 1912. Many Europeans and Japanese lived on Gulangyu, today a vehicle-free island with beaches and meandering streets lined with old colonial villas. <br><br>The livable, lovable city of Xiamen teems with university students buzzing amid Buddhist temples, art galleries and beautiful parks. Nibble on some glass noodles or juicy dumplings while perusing shops stuffed with antiques, delicate beads or ceramics.",
        "img": "img/xiamen.jpg",
        "icon": "img/xiamen-air.png",
        "link": "https://www.tripadvisor.com/Tourism-g297407-Xiamen_Fujian-Vacations.html"
    }, 
    { 
        "name": "Beijing",
        "lat": 39.961668,
        "lng": 116.412024,
        "des": "Welcome to the capital city whose story goes back at least 3000 years. Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics.<br><br>For the best market experience, choose the Dirt Market over the touristy Silk Market. A visit to the Great Wall, the longest manmade structure in the world, is absolutely essential.",
        "img": "img/beijing.jpg",
        "icon": "img/lantern.png",
        "link": "https://www.tripadvisor.com/Tourism-g294212-Beijing-Vacations.html"
    }, 
    { 
        "name": "Shanghai",
        "lat": 31.249823,
        "lng": 121.447350,
        "des": "Shanghai, on China’s central coast, is the country’s biggest city and a global financial hub. It offers visitors a chance to experience the past, present, and future all at once. Its heart is the Bund, the Huangpu River, a famous waterfront promenade lined with colonial-era buildings.<br><br>The Bund splits Shanghai into two districts: Pudong and Puxi. The Pudong skyline looks like it was ripped from the Jetsons, with the bulbous Oriental Pearl TV and 632m Radio Tower looking a bit like a two headed lollipop. On the Puxi side, you can walk the Bund riverside district to get a taste of old Shanghai.Sprawling Yu Garden has traditional pavilions, towers and ponds.",
        "img": "img/shanghai.jpg",
        "icon": "img/oriental-pearl-tower.png",
        "link": "https://www.tripadvisor.com/Tourism-g308272-Shanghai-Vacations.html"
    },
    { 
        "name": "Lijiang",
        "lat": 26.854327,
        "lng": 100.231483,
        "des": "Lijiang, a city in the northwest part of China’s Yunnan province, is home to the Naxi and several other ethnic minority groups. <br><br>A commercial center in the 1300s, its ancient town, infused with cultural flavor, encompasses cobblestone streets, canals and Central Market Square with shops and restaurants. Strolling along the 800-year-old bridges and waterways of the world-famous Old Town district is like stepping back in time. Black Dragon Pool has famed views of the Jade Dragon Snow Mountain range, fronted by the Moon Embracing Pavilion. ",
        "img": "img/lijiang.jpg",
        "icon": "img/flower.png",
        "link": "https://www.tripadvisor.com/Tourism-g303783-Lijiang_Yunnan-Vacations.html"
    },
    { 
        "name": "Hong Kong",
        "lat": 22.322632,
        "lng": 114.142765,
        "des": "Hong Kong, officially the Hong Kong Special Administrative Region of the People’s Republic of China, is a metropolitan area and special administrative region of the People’s Republic of China on the eastern Pearl River Delta of the South China Sea. <br><br>It’s a vibrant harbor city with an unbeatbale food scene. Delectable dim sum, floating islands, and a one-of-a-kind skyline are just some of Hong Kong’s enchanting features. Eat your way across Temple Street Night Market with its fish balls and stinky tofu, or settle in for dim sum at Michelin-starred venues like Tim Ho Wan. For traditional Chinese architecture, head to Ngong Ping Village, then take the tram to the tippity-top of Victoria Peak for skyscraper views. The gentle hills of Nan Lian Garden will deliver serenity, but a detour through the city’s cocktail bars will bring back Hong Kong’s urban buzz.",
        "img": "img/hk.jpg",
        "icon": "img/hong-kong.png",
        "link": "https://www.tripadvisor.com/Tourism-g294217-Hong_Kong-Vacations.html"
    },
    { 
        "name": "Taipei",
        "lat": 25.091777,
        "lng": 121.576087,
        "des": "Taipei is a modern metropolis with busy shopping streets and contemporary buildings. It’s acity where gleaming modernity and ancient meet. <br><br>The bustling metropolis of Taipei is where you’ll find shiny skyscrapers and ancient temples hazy with incense standing side by side. Spend your day taking in the view from up above at the 509m-tall, bamboo-shaped Taipei 101 skycraper and try the rapid elevator to its observatory near the top before shopping your way down the streets of Ximending (with a bubble tea in hand, of course). As night falls, eat your way across the numerous night markets. From the XXL fried chicken cutlets to the stinky tofu, the street food here is addictive and will leave you hankering for more.",
        "img": "img/taipei.jpg",
        "icon": "img/taipei-101.png",
        "link": "https://www.tripadvisor.com/Tourism-g293913-Taipei-Vacations.html"
    },
    { 
        "name": "Xi’an",
        "lat": 34.338715,
        "lng": 108.937675,
        "des": "Xi’an is a large city and capital of Shaanxi Province in central China. Once known as Chang’an (Eternal Peace), it marks the Silk Road’s eastern end and was home to the Zhou, Qin, Han and Tang dynasties’ ruling houses. <br><br>Today the walls of the Ming dynasty and the Tang palace walls hint at the Xi’an’s glorious past. Staring in awe at the Terracotta Army, you can see 7,000 terracotta life-size statues of warriors and soldiers. Dating from 210 BCE, they were discovered in 1974 and are still being excavated. Don’t miss the Shaanxi History Museum or a chance to heat up at former imperial bathing spot, Huaqing Hot Springs.",
        "img": "img/xian.jpg",
        "icon": "img/noodle.png",
        "link": "https://www.tripadvisor.com/Tourism-g298557-Xi_an_Shaanxi-Vacations.html"
    },
    { 
        "name": "Lhasa",
        "lat": 29.651261,
        "lng": 91.177049,
        "des": "Deep in the spectacular Himalayan Mountains, Lhasa is a jewel of a destination. It is the capital of the Tibet Autonomous Region, lies on the Lhasa River’s north bank in a valley of the Himalayas. <br><br>Rising atop Red Mountain at an altitude of 3,700m, the red-and-white Potala Palace once served as the winter home of the Dalai Lama. The palace’s rooms, numbering around 1,000, include the Dalai Lama’s living quarters, as well as murals, chapels and tombs. Now Potala Palace is the major attraction of Lhasa. You’ll also find numerous important temples and even the world’s highest brewery.",
        "img": "img/lhasa.jpg",
        "icon": "img/potala-palace.png",
        "link": "https://www.tripadvisor.com/Tourism-g294223-Lhasa_Tibet-Vacations.html"
    },
    { 
        "name": "Hohhot",
        "lat": 40.843472,
        "lng": 111.752058,
        "des": "Hohhot, abbreviated Hushi, formerly known as Kweisui, is the capital of Inner Mongolia in the north of China, serving as the region’s administrative, economic and cultural center. <br><br>The city is a national historical culture city and China’s excellent tourism city. There are many urban historical heritages, such as the ancient Great Wall from the Warring States, the Qin, Han and Ming dynasties; the symbol of national unity - Zhaojun Museum; the oldest Shamanism temple with the highest status and biggest influence - Dazhao Temple; China’s existing and the world’s only astronomical stone carving diagram in mongolian label - Five Pagodas Temple; the place where the earliest paper money were found - Wanbu Huayanjing Pagoda and etc. It will also be a good place to learn life style of Mongolian.",
        "img": "img/hohhot.jpg",
        "icon": "img/yurt.png",
        "link": "https://www.tripadvisor.com/Tourism-g297440-Hohhot_Inner_Mongolia-Vacations.html"
    },
    { 
        "name": "Urumqi",
        "lat": 43.899752,
        "lng": 87.630736,
        "des": "Ürümqi or Urumchi, abbreviated Wushi, formerly known as Tihwa, is the capital of the Xinjiang Uyghur Autonomous Region in the far northwest of China. <br><br>The city is just like a piece of emerald embedded at the foot of the Tianshan Mountains. As home to 49 minority ethnic groups, this graceful prairie city is an important stop along the ancient Silk Road, leading to Central Asia and even as far as Europe. The city lies in the shadow of the lofty ice-capped Bogda Peak with vast Salt Lake to the east, rolling pine-covered Southern Hill to the south, and alternating fields and sand dunes of Zunggar Basin to the northwest. With shorter spring and autumn but longer winter and summer, May to October is the golden season for travelling, when flowers are in full bloom and the fruits, like melons and grape, are ripe with fragrance.",
        "img": "img/urumqi.jpg",
        "icon": "img/rouchuan.png",
        "link": "https://www.tripadvisor.com/Tourism-g297466-Urumqi_Xinjiang_Uygur-Vacations.html"
    },
    { 
        "name": "Chengdu",
        "lat": 30.568039,
        "lng": 104.062492,
        "des": "Chengdu is the capital of southwestern China’s Sichuan province. Chengdu’s history dates back to at least the 4th century B.C., when it served as capital for the Shu Kingdom. Artifacts from that dynasty are the focus of the Jinsha Site Museum. <br><br>Perched in a high mountain valley, Huanglong or Yellow Dragon National Park offers invigorating adventure options. The ambitious can trek to Lhasa, whitewater raft or embark on multi-day river journeys. Alternatively, a five-mile trot brings you to five terraced, temple pools glowing with stunning hues. The city is also home to the famous Chengdu Research Base of Giant Panda Breeding, a conservation center where visitors can view endangered giant pandas in a natural habitat.",
        "img": "img/chengdu.jpg",
        "icon": "img/hot-pot.png",
        "link": "https://www.tripadvisor.com/Tourism-g297463-Chengdu_Sichuan-Vacations.html"
    },
    { 
        "name": "Nanjing",
        "lat": 32.057070,
        "lng": 118.813250,
        "des": "Nanjing, capital of China’s eastern Jiangsu province, is roughly 300km up the Yangtze River from the city of Shanghai. It was the national capital during part of the Ming dynasty. Many monuments and landmarks remain, including Zhonghua Gate (Gate of China), a preserved 14th-century section of the massive wall that contained the old city’s southern entrance. <br><br>Nanjing is the origin for one of China’s Four Great Cuisines, Nanjing Food is an adventure in itself. It’s also a good place to feel the interesection of ancient Chinese traditions and contemporary Chinese culture.",
        "img": "img/nanjing.jpg",
        "icon": "img/roast-duck.png",
        "link": "https://www.tripadvisor.com/Tourism-g294220-Nanjing_Jiangsu-Vacations.html"
    },
];


//list view
    var htmlbuilder = "";
    for (let i = 0; i < locationArray.length; i++) {
            var marker = {};
            let name = locationArray[i]['name'];
            let lat = locationArray[i]['lat'];
            let lng = locationArray[i]['lng'];
            let des = locationArray[i]['des'];
            let img = locationArray[i]['img'];
            let icon = locationArray[i]['icon'];
            let coord = {lat: lat, lng: lng};
            let link = locationArray[i]['link'];
            
            htmlbuilder += `<div class="row">
            <div class="col"> <img class="float-right listimg" src=${img}> </div>`;

            htmlbuilder += `<div class="col"><h4>${name}</h4>`;
            htmlbuilder += `<h6>Latitude: ${lat}°</h6>`;
            htmlbuilder += `<h6>Longitude: ${lng}°</h6>`;
            htmlbuilder += `<br><img src="${icon}" alt="icon">`;
            htmlbuilder += `<br><button class="listbut" onClick="infoButtonOnClick('${name}', '${img}', '${des}', '${link}')">More</button></div>`;
            htmlbuilder += `</div><br><br>`;

            
           
            console.log(htmlbuilder);
        }

       list.innerHTML = htmlbuilder;




//References：
//https://demos.jquerymobile.com/1.4.0/map-list-toggle/
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
