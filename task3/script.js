document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            id: 1,
            title: 'guntur karam',
            description: 'Guntur Kaaram is a 2024 Indian Telugu-language action drama film written and directed by Trivikram Srinivas and produced by S. Radha Krishna',
            imageFile: 'images/gk.jpg',
            videoUrl: ''
        },
        {
            id: 2,
            title: 'Miss India',
            description: 'Uprooted to the United States, an aspiring Indian entrepreneur deals with sexism, rivalry and disapproval as she draws from her culture to start a tea business.',
            imageFile: 'images/mi.avif',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 3,
            title: 'Pitta Kathalu',
            description: 'Amidst the emotional confusion caused by two men who love her, Venkata, a simple girl, is faced with an imminent danger that could potentially be life-threatening.',
            imageFile: 'images/pk.jpg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 4,
            title: 'Hii Nanna',
            description: 'A doting father and his 6-year-old daughter find their lives taking a dramatic turn when the woman he loves marries someone else.',
            imageFile: 'images/hii.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 5,
            title: 'MANAMEY',
            description: 'A charismatic playboy takes an unexpected turn when a young boy enters his world. Initially causing chaos, the boy gradually becomes an integral part of his life.',
            imageFile: 'images/man.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 6,
            title: 'Devara',
            description: 'Weapons recite the story of one man and his terrifying tale',
            imageFile: 'images/devara.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 7,
            title: '[TILLU]',
            description: 'One year after a love affair bound him up in a murder case, a foolish DJ has a one-night encounter that leads to even bigger kerfuffles related to his past.',
            imageFile: 'images/tillu.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 8,
            title: 'Animal',
            description: 'The son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father life..',
            imageFile: 'images/animal.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 7,
            title: 'Back',
            description: 'The crime free life of Majnu and Uday Shetty comes to a halt when they struggle to find a suitable groom for their sister. Meanwhile, the duo also tries to woo Chandani, their newfound love interest.',
            imageFile: 'images/back.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 8,
            title: 'Ambajeepeta bandu',
            description: 'In a small village during the early 2000s, happy twins Mallikarjuna and Padmavati find their lives changing on their 25th birthday.',
            imageFile: 'images/ambajeepeta.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 7,
            title: 'Amigos',
            description: 'Three identical men befriend each other through a doppelganger-finding application and things go well until the criminal past of one amongst them emerges.',
            imageFile: 'images/ami.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
        {
            id: 8,
            title: 'Prasannavandhanam',
            description: 'A carefree individual grapples with the challenges of face blindness, a condition that thrusts him into the midst of a gripping murder mystery.',
            imageFile: 'images/vu.jpeg',
            videoUrl: 'https://vimeo.com/475068701'
        },
    ];

    const movieList = document.getElementById('movie-list');
    const movieDetail = document.getElementById('movie-detail');
    const videoPlayer = document.getElementById('video-player');
    const video = document.getElementById('video');
    const videoSource = document.getElementById('video-source');

    function displayMovies() {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.imageFile}" alt="${movie.title}">
                <h2>${movie.title}</h2>
            `;
            movieItem.addEventListener('click', () => selectMovie(movie));
            movieList.appendChild(movieItem);
        });
    }

    function selectMovie(movie) {
        movieDetail.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;
        movieDetail.classList.add('active');
        videoSource.src = movie.videoUrl;
        video.load();
        videoPlayer.classList.add('active');
    }

    displayMovies();
});
