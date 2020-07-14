//Year and movie array
var movies={"1980":"Star Wars: Episode V - The Empire Strikes Back","1981":"Raiders of the Lost Ark","1982":"E.T. - The Extra Terrestrial","1983":"Star Wars: Episode VI - Return of the Jedi","1984":"Indiana Jones and the Temple of Doom","1985":"Back to the Future","1986":"Top Gun","1987":"Fatal Attraction","1988":"Rain Man","1989":"Indiana Jones and the Last Crusade","1990":"Ghost","1991":"Terminator 2: Judgment Day","1992":"Aladdin","1993":"Jurassic Park","1994":"The Lion King","1995":"Die Hard: With A Vengeance","1996":"Independence Day","1997":"Titanic","1998":"Armageddon","1999":"Star Wars: Episode I - The Phantom Menace","2000":"Mission: Impossible II","2001":"Harry Potter and the Sorcerer's Stone","2002":"The Lord of the Rings: The Two Towers","2003":"The Lord of the Rings: The Return of the King","2004":"Shrek 2","2005":"Harry Potter and the Goblet of Fire","2006":"Pirates of the Caribbean: Dead Man's Chest","2007":"Pirates of the Caribbean: At World's End"};

//Year and photo array
var photos={"1980":"https://images-na.ssl-images-amazon.com/images/I/51QvoX064kL._SX303_BO1,204,203,200_.jpg","1981":"https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg","1982":"https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg","1983":"https://images-na.ssl-images-amazon.com/images/I/91LlN7J%2BZ9L._SY445_.jpg","1984":"https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","1985":"https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg","1986":"https://prodimage.images-bn.com/pimages/0097360563849_p0_v3_s1200x630.jpg","1987":"https://e.snmc.io/i/300/w/7c7d8b29d2494b4a7bc114903620740c/5018861","1988":"https://e.snmc.io/i/300/w/eedc0d684809db88ab20becbb4b97404/7285424","1989":"https://upload.wikimedia.org/wikipedia/en/8/8c/Indiana_Jones_and_the_Last_Crusade.png","1990":"https://www.clearplay.com/MovieBattle/images/tt0099653-1.jpg","1991":"https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg","1992":"https://imgix.ranker.com/user_node_img/21/417657/original/aladdin-photo-u64?w=650&q=50&fm=pjpg&fit=fill&bg=fff","1993":"https://lh3.googleusercontent.com/BVSejbKFir0thw8OmJKsWL-uDexGT9LDwSOcDuGE7vTC13b2JxjBHGzby7suSzvzziI","1994":"https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg","1995":"https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg","1996":"https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Independence_day_movieposter.jpg/220px-Independence_day_movieposter.jpg","1997":"https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_intl_styleA_1993_original_film_art_648c1612-e0e7-475d-a20f-18a8f59bd655_2000x.jpg?v=1587219429","1998":"https://upload.wikimedia.org/wikipedia/en/f/fc/Armageddon-poster06.jpg","1999":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg","2000":"https://vignette.wikia.nocookie.net/missionimpossible/images/8/83/2poster.jpg/revision/latest/scale-to-width-down/340?cb=20110713143102","2001":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5578/5578983_so.jpg","2002":"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","2003":"https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg","2004":"https://images-na.ssl-images-amazon.com/images/I/71HQiOZsZ6L._SY445_.jpg","2005":"https://vignette.wikia.nocookie.net/harrypotter/images/2/2c/Goblet_of_Fire_Film_Poster.jpg/revision/latest?cb=20140817011104","2006":"https://images-na.ssl-images-amazon.com/images/I/61tFa4yPaUL._SY445_.jpg","2007":"https://images-na.ssl-images-amazon.com/images/I/61kgXfdsG1L.jpg"}

var btn = $(".submit");
btn.on("click", print);
btn.on("click", photo);

//Print text function
function print(){
  event.preventDefault();
  var result=$(".result");
  var name=$(".nameInput").val();
  var userYear=$(".yearInput").val();
  for (let[key,value] of Object.entries(movies)){
    var year=key;
    var movie=value;
    if (userYear==year){
      result.empty()
      result.append(`${name}, the most popular movie in ${userYear} was "${movie}".`);
      console.log(`${name}, the most popular movie in ${userYear} was "${movie}".`);
    };
  };
};

//Display photo function
function photo(){
  event.preventDefault();
  var photoSpot=$(".photo");
  var year=$(".yearInput").val();
  for (let[key2,value2] of Object.entries(photos)){
    var yearTwo=key2;
    var imageURL=value2;
    if (year==yearTwo){
      photoSpot.empty()
      photoSpot.append(`<img src="${imageURL}">`);
      console.log(`<img src=${imageURL}>`);
    };
  };
};