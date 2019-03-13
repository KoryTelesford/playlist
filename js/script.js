/* global $ */



var songs = [
    { song_name: "Shape Of You", images_links: "", artists: "Ed" },
    { song_name: "High Hopes", images_links: "", artists: "Panic! at the Disco" },
    { song_name: "Crazy", images_links: "", artists: "Gnarls" },
    { song_name: "What about us", images_links: "", artists: "P!nk" },
];


function displaySongs() {
    // write code to display guests here
    songs.forEach(function(song) {
        $(".songs").append(song.song_name);
        $(".songs").append(song.images_links);
        $(".songs").append(song.artists);
    });
}

$('.addButton').click(function() {
    $(".songs").empty();
    var newSong = {
        song_name: $(".name").val(),
        images_links: $(".image_link").val(),
        artists: $(".artist").val(),
        // set the properties for the guest here
    };
    
    songs.push(newSong);
    displaySongs();
});

displaySongs();