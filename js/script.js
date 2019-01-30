/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Shape Of You", "High Hopes", "Crazy", "What about us"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
"https://img.sheetmusic.direct/catalogue/product/smd_h_1225024pTKw50Amm2/large.jpg"
, "https://i.axs.com/2018/05/54798-image_5b06e97b0c1b5.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/GnarlsBarkleyCrazyCover.JPG/220px-GnarlsBarkleyCrazyCover.JPG", 
"https://i.ytimg.com/vi/wKOEJs602uk/maxresdefault.jpg"];
var artists = ["Ed", "Panic! at the Disco", "Gnarls", "P!nk"];
var song_lengths = ["3:53", "", "", ""];
var links = ["", "", "", ""];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var SongName = $(".Song Name").val();
    var ArtistName = $(".Artist Name").val();
    var SongLength = $(".Song Length").val();
    var ImageURL = $(".Image URL").val();
    var SongLinkAddress = $(".Song Link Address").val();
    
    
    // 3
    songs.push(SongName);
    artists.push(ArtistName);
    song_lengths.push(SongLength);
    images_links.push(ImageURL);
    links.push(SongLinkAddress);
    
    // 4
    $(".song").empty();
    $(".artist").empty();
    $(".length").empty();
    $(".image").empty();
    $(".link").empty();
     
    // 5
    songs.forEach(function(song) {
        $(".song").append(song);
    });
    
    artists.forEach(function(artist) {
        $(".artist").append(artist);
    });

    song_lengths.forEach(function(song_length) {
        $(".length").append(song_length);
    });
    
    images_links.forEach(function(img_link) {
        $(".image").append(img_link);
    });
    
    links.forEach(function(address) {
        $(".link").append(address);
    }); 
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
   
});

//displaySongInfo();
