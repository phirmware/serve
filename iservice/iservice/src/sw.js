this.addEventListener("fetch", function(event) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          return response;
        })
        .catch(function() {
          return new Response(
            `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>News</title>
    <base href="/">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="blue">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="icons/n.png">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Rock+Salt" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Convergence" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amaranth" />
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#1976d2">
  </head>
  <body>
  <style>
  body{
    margin:0px;
  
  }
  nav{
    height: 5vh;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
.hide{
    display: none;
}
ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
li{
    padding: 4px 4px 4px 4px;
    letter-spacing: normal;
}
.logo{
    display: none;
    font-size: 15px;
    letter-spacing: normal;
    font-weight: lighter;
}
  
  </style>
  <nav>
  <ul class="hide">
    <li class="logo">I service</li>
  </ul>
  <ul>
    <li routerLink="/home" routerLinkActive="active">Home</li>
    <li routerLink="/services" routerLinkActive="active">Services</li>
    <li *ngIf="loggedIn()" routerLink="/register" routerLinkActive="active">Register Company</li>
    <li *ngIf="loggedIn()" routerLink="/loggedinuser" routerLinkActive="active"><i class="user icon"></i></li>
    <li class="logout" *ngIf="loggedIn()" routerLinkActive="active" (click)="logOut()">LogOut</li>
  </ul>
</nav>
  </body>
  </html> 
                  `,
            {
              headers: {
                "Content-Type": "text/html"
              }
            }
          );
        })
    );
  });
  