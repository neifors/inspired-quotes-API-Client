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

![2022-03-01 (2)](https://user-images.githubusercontent.com/11410620/156181212-c5095255-38ed-4795-9d47-6cb6d49cf730.png)

By adding "quotes/" (http://localhost:3000/quotes/) you'll get all the quotes.

![2022-03-01 (3)](https://user-images.githubusercontent.com/11410620/156181278-8c5bbf93-4bbb-4e81-9efa-59a0e18cc3ed.png)


Also, adding "random/" (http://localhost:3000/quotes/random/) you'll get a single random quote.

![2022-03-01 (4)](https://user-images.githubusercontent.com/11410620/156181424-a6b70d58-51b3-4827-adc4-658c06250286.png)

And if you also add a number between 1 and 15 you can see the quote with that ID. (http://localhost:3000/quotes/2/)


![2022-03-01 (5)](https://user-images.githubusercontent.com/11410620/156181569-748396c4-00ed-4196-8d9d-e5002c29c1bb.png)




#### Client

- Change the directory to /client and just run the html file with the live server (click with the right buttom and select "Open With Live Server" option)
If you can't see this option you may need to install the VS Code extension, or run it with any othe tool. (In a different port than the server is)

This client is fetching the server to get random quotes to get inspired every time you click on the buttom "get inspired"

![2022-03-01 (1)](https://user-images.githubusercontent.com/11410620/156181073-1c8eeeb6-3a22-40e2-9f56-c7302339c2d1.png)
