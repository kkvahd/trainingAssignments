/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable padded-blocks */
function processClick(event) {
    if (window.addEventListener) {
        window.addEventListener('click', function(event) {
            processClickEvent(event);
        }, true);
    } else if (window.attachEvent) {
        window.attachEvent("onclick", function(event) {
            processClickEvent(event);
        });
    }
};

function processClickEvent(event) {
    event = event || window.event;
    let target = event.target || event.srcElement;
    if (target.className.indexOf("favButton") > -1) {
        getMovies("?id=" + target.parentNode.id)
    }
}

function attachDom(data, moviesList) {
    moviesList.innerHTML = '';
    console.log(data);
    let myData = data;
    for (let i = 0; i < myData.length; i++) {
        let listItem = '<li ' + 'id = ' + myData[i].id + '>' + myData[i].title +
            '<br>' + '<img src="' + myData[i].posterPath + '">' +
            '<br>' + '<button type="button" class="btn btn-default favButton">Add to Favourites</button></li>';
        moviesList.innerHTML = moviesList.innerHTML + listItem;
    }
}

function getMovies(param) {
    if (param) {
        fetch('http://localhost:3000/movies' + param)
            .then(function(res) {
                if (res.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        res.status);
                    return;
                }
                return res.json();
            })
            .then(function(data) {
                // eslint-disable-next-line no-empty

                addFavourite(data[0]);

            }).catch(function(err) {
                console.log(err);
            });
    } else {
        fetch('http://localhost:3000/movies')
            .then(function(res) {
                if (res.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        res.status);
                    return;
                }
                return res.json();
            })
            .then(function(data) {
                // eslint-disable-next-line no-empty
                attachDom(data, document.getElementById('moviesList'));

            }).catch(function(err) {
                console.log(err);
            });
    }


}

function getFavourites() {
    fetch('http://localhost:3000/favourites')
        .then(function(res) {
            if (res.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    res.status);
                return;
            }
            return res.json();
        })
        .then(function(data) {
            attachDom(data, document.getElementById("favouritesList"));
        }).catch(function(err) {
            console.log(err);
        });
}

function addFavourite(receivedObject) {
    fetch('http://localhost:3000/favourites', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: receivedObject.id,
                title: receivedObject.title,
                posterPath: receivedObject.posterPath
            })
        }).then((res) => res.json())
        .then((data) => getFavourites())
        .catch((err) => console.log(err));
}

let interval = setInterval(function() {
    if (document.readyState == 'complete') {
        clearInterval(interval);
        processClick();
    }
}, 500);

module.exports = {
    getMovies,
    getFavourites,
    addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution