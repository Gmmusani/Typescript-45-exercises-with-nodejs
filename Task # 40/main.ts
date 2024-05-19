// creating a function with object
function make_album (artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: String, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three function and creating 3 variables with different values
let album1 = make_album("Hamza", "Album Title 1");

let album2 = make_album("Ausaf", "Album Title 2");

// Calling a function with the third parameter
let album3 = make_album("Jamshed", "Album Title 3", 10);

// printing the variables
console.log(album1);

console.log(album2);

console.log(album3);
