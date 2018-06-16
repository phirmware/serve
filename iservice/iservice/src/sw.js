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
    <style>
    .landing{
      background: rgba(109, 135, 168, 0.5);
      height: 65vh;
      z-index:1;
  }
  img{
      height: 100%;
      width: 100vw;
      z-index: -1;
  }
  span{
      margin-top: 10vh;
      width: 30vw;
      border-top: 4px solid rgb(22, 22, 165);
      letter-spacing: 1px;
      font-weight: lighter;
      padding: 10px 4px 10px 4px;
  }
  .ui.menu{
    margin: 0rem 0em;
  }
  .info{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
  }
  #small-nav{
    margin-bottom:0px;
  }
  @media(max-width:700px){
      span{
          width: 80vw;
      }
  }
    </style>
  </head>
  <body>
  <div class="ui secondary pointing menu" id="small-nav">
  <a class="item" routerLink="/home" routerLinkActive="active">
    Home
  </a>
  <a class="item" routerLink="/services" routerLinkActive="active">
    Services
  </a>
  <a class="item" *ngIf="loggedIn()" routerLink="/register" routerLinkActive="active">
    Register company
  </a>
  <a class="item" *ngIf="loggedIn()" routerLink="/loggedinuser" routerLinkActive="active">
    <i class="user icon"></i>
  </a>
  <div class="right menu">
    <a class="ui item" *ngIf="loggedIn()" routerLinkActive="active" (click)="logOut()">
      Logout
    </a>
  </div>
</div>
<div class="container">
  <div class="landing">
    <img src="../../assets/bg.jpg" alt="">
  </div>
  <div class="info">
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab cupiditate nostrum magni nisi! Dolores excepturi placeat, accusamus atque, laudantium perferendis pariatur tempora, aliquam porro omnis at sit reiciendis id!</span>
    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque dolorem quam, deleniti corrupti a qui ipsum eius pariatur nihil fugiat id totam temporibus quidem dignissimos, suscipit, voluptate autem ratione?</span>
  </div>
  <div class="info">
    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam exercitationem rem labore eveniet, enim non libero autem illum ipsam nesciunt voluptate nam tenetur mollitia provident iure esse laudantium vero corporis.</span>
  </div>
</div>
    
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
  