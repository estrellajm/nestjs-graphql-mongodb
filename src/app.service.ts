import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Welcome! Visit the GraphQL playground <a href="/graphql">GraphQL</a>`;
  }

  getWelcomePage(): string {
    return `
    <!DOCTYPE html>

    <head>
        <title>Scores API</title>
        <style>
            body {
                margin: 0;
                background-color: rgb(236, 152, 42);
            }
            .container {
                display: grid;
                color: white;
                font-family: "Trebuchet MS", Helvetica, sans-serif;
                height: 100vh;
            }
            
            .center {
                margin: auto;
                display: grid;
                justify-items: center;
            }
            
            h1 {
                font-size: 144px;
                margin: auto;
            }
            
            p {
                font-size: 64px;
                margin: auto;
            }
            a {
                font-size: 32px;
                margin: auto;
                padding-top: 20px
            }
        </style>
    </head>

    <body>
    <div class="container">
        <div class="center">
        <h1>Welcome!</h1>
        <p>Scores API</p>
        <a href="http://localhost:3000/graphql">Access GraphQL</a>
        </div>
    </div>
  
    </body>

    </html>

    `;
  }
}
