# LAP 1 Debugging Assignment

API of inspired quotes. Client based on that API that generate random quotes to get inspired every time you submit.


### Installation and usage

- Clone this repository
- Using your terminal change the directory to server (cd fp-lap1-assignment-neifors/server)
- To install everything you need to run this project just run:
    npm install

#### Server

- To start the server (still into server directory):
    npm run dev

Once the server is running you can go to http://localhost:3000/ and will see a message "Hello world!"

By adding "quotes/" (http://localhost:3000/quotes/) you'll get all the quotes.
Also, adding "random/" (http://localhost:3000/quotes/random/) you'll get a single random quote.
And if you also add a number between 1 and 15 you can see the quote with that ID. (http://localhost:3000/quotes/2/)

#### Client

- Change the directory to /client and just run the html file with the live server (click with the right buttom and select "Open With Live Server" option)
If you can't see this option you may need to install the VS Code extension, or run it with any othe tool. (In a different port than the server is)

This client is fetching the server to get random quotes to get inspired every time you click on the buttom "get inspired"


