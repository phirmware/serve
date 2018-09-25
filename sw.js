self.addEventListener('fetch',(e)=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            if(response) return response;
            return fetch(e.request);
        })
    )
});

self.addEventListener('install',(e)=>{
    var urls = [
        '/',
        'assets/images/slice.jpg',
        'assets/images/slice1.jpg',
        'assets/images/slice2.jpg'
    ];

    e.waitUntil(
        caches.open('jeff-tutors-v1').then(cache=>{
            return cache.addAll(urls)
        })
    )
})