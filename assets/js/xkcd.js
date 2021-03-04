
const Xkcd = {
    url: 'search.php',
    searchItems: '',

    getComicByID: (id) => {
        let formData = new FormData();
        formData.append('getComic', '1');
        if (id)
            formData.append('comicID', id);

        fetch(Xkcd.url, {
            'method': 'post',
            'body': formData
        })
            .then(res => res.json())
            .then(function (res) {
                Xkcd.setComicHtml(res);
            })
            .catch(e => console.log('Error: ' + e))
    },

    getComicBySearch: (searchQuery) => {
        let formData = new FormData();
        formData.append('getComic', '1');

        if (searchQuery)
            formData.append('searchQuery', searchQuery);

        fetch(Xkcd.url, {
            'method': 'post',
            'body': formData
        })
            .then( res => res.json())
            .then( function (res) {
                Xkcd.setComicHtml(res);
                Xkcd.searchItems = res.other_result_ids;
                let comicIDsArr = res.other_result_ids.split(',');
                console.log(comicIDsArr.length);
                if ( comicIDsArr.length > 1 ) {
                    document.getElementById('comic-nav').classList.add('active');
                }

            })
            .catch(e => console.log('Error: ' + e))
    },

    putStatus: (msg) => {
        const statusMsgContainer = document.getElementById('status-msg');
        statusMsgContainer.innerHTML = msg;
    },

    setComicHtml: (values) => {
        const comicOutput = document.getElementById('comic-data');
        comicOutput.querySelector('header h2').innerHTML = values.safe_title;
        comicOutput.querySelector('img').setAttribute('src', values.img);
        comicOutput.querySelector('img').setAttribute('alt', values.safe_title);
        comicOutput.querySelector('#transcript p').innerHTML = values.transcript;
    },

    nextPrev: () => {
        const nextPrevButtons = document.querySelectorAll('#comic-nav nav a');
        const nextButton = document.querySelector('#comic-nav nav a.next');
        const prevButton = document.querySelector('#comic-nav nav a.prev');

        nextPrevButtons.forEach(function(elm) {
            elm.addEventListener( 'click', function(e) {
                e.preventDefault();

                let comicIDsArr = Xkcd.searchItems.split(',');

                let nextPageID = elm.getAttribute('data-nextPageID'),
                    buttonType = elm.className,
                    nextID;

                nextID = parseInt(nextPageID);
                Xkcd.getComicByID(comicIDsArr[nextID]);

                if ( buttonType === 'next' ) {
                    nextButton.setAttribute('data-nextPageID', nextID + 1 );
                    prevButton.setAttribute('data-nextPageID', nextID - 1 );
                } else {
                    prevButton.setAttribute('data-nextPageID', nextID - 1);
                    nextButton.setAttribute('data-nextPageID', nextID + 1);
                }
            });
        });
    },

    init: () => {
        const srcBtn = document.getElementById('do-search');
        srcBtn.addEventListener( 'click', function(e) {
            e.preventDefault();
            let comicName = document.getElementById('comic_name').value;
            if ( comicName !== '' ) {
                Xkcd.getComicBySearch( comicName );
            } else {
                Xkcd.putStatus('Please enter a search topic');
            }
        });
        Xkcd.nextPrev();
    }
}

export default Xkcd;