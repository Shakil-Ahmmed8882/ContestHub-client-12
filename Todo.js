/**
 * TODO: reset the form after all testingh
 - create hook and get data 
 - to collect user data and store it to mongoDB
 *TODO: vlaidate the form
  -create the all contests route

 -Make the login and user-profile conditional 
 -Replace user profile image dynamically     

 ----------------------------
      All contest 
 ----------------------------
 *: show contest based on category
 *: keep one all button in tab to see all contests regardless of the type or tag
 *TODO: Make the contest creator responsive
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 ----------------------------
          Navbar
 ----------------------------
 : set user name (not clicble in dropdown)
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 ----------------------------
      Home
 ----------------------------
 ----------------------------
      Banner setion
 ----------------------------
 *TODO: fix the right side overlay issue
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:


 ----------------------------
          Form
 ----------------------------
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:

 -----------------------------
   Register or google signin
 ----------------------------
 TODO: compile object with user info
 TODO: store user to the database (userCollecition) after signup or goggle sigin in
 TODO: let the user select photo from their device and store them in database
 TODO: navigate user to the home page when logout


 -----------------------------
 * user dashboard access  
 ----------------------------
  create dashboard route for 3 roles user, admin, contest_creator
  Show contest in tav view 
  Show single contest redirecting by detail button 
  make the dynamic timer to calculate contest deadline
  * TODO: Make the route secure and make sure user get the route they supposed ot get
  
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
 *TODO:
  
  -------------------------------
            Payment
  -------------------------------
  Create payment page 
  Add and set up the stripe with api key
 * set up payment and tested in the console 
 * TODO: backend stripe payment
 * TODO: Client side response handling
 *  create private route & redirect them to their distination  
 *  store contest in data base
 * TODO: Payment functionality
 * TODO:Make admin route secure
 * Add manage user and contest page
 *  install chart to show data
 *  store the contest id in user attemptedContest:[contestId,contestId]
 * 
 * --------------------
 *     user D
 * --------------------
 *  TODO: Implement a sorting feature to show My upcoming Contests to the use
 *  TODO: My profile > chart > winning page > 
 * --------------------
 *     Admin panel
 * --------------------
 * *Manage usser
 * toggle role and path it in data base
 * delete the user
 * 
 * *Manage contest
 *  Fetch all contest data
 *  Show all contest data in table format with 2 delete and update button
 *   delete contest
 *   recieve id from the backend to confirm a contest
 *   confirm contest
 * 
 * 
 * -------------------------
 *    Contest creator
 * -------------------------
 *  craft dashboard layout
 *  set up the routes
 *  add contest form and get the value 
 * TODO: apload image to the image bb and get ther url
 *  send the data to the badkend & receive
 *  store info to the database
 * 
 * 
 * 
 * ---------------------
 * My created contests
 * ----------------------
 *: Load all the contest filtering by creator id
 * : Show in tabular form
 * : update and delete button
 *  write logic to remove update and edit option after admin approves (pending.. => ap)
 * crate see submission button for each contest 
 * 
 * ---------------------------
 * Contest submitted page
 * --------------------------
 * : send the email of participants to find
 * : push them in db array of participants
 * : load those participants clicking each contest 
 * : show those paritipants info in table format
 * 
 //  
 * ---------------------------
 *    JSON WEB TOKEN
 * --------------------------
 * install jwt
 *  create secret key
 *  send it to the client
 *  recieve from the client and set to the local storage
 *  set up axios header to send in every secure api request
 *  recieve from the reqest and split from the backend
 *  get the token and verify
 * TODO: 
 * TODO: 
 * TODO: 
 * ----------------------------
       upload image 
 ----------------------------
 * : get image hosting key 
 * : merge it with image hosting api
 * : get the image file
 * : post it to the server
 * : res.ok? console log and get image link
 * TODO:
 * TODO:
 * TODO:
 * TODO:
 * TODO:
 * TODO:
 * TODO:
 * TODO:
 * 
 * * -----------------------------
      Secure api based on role
 ---------------------------------
 *  send the user email and recieve from the backend
 * : find that user and check the role 
 * : response true or false based on the role you're checking
 * : recieve that response from the client side
 * 
 * --------------------------------
 *  Contest creator role checking
 * --------------------------------
 *  send the user email and recieve from the backend
 *  find that user and check the role 
 *  response true or false based on the role you're checking
 *   recieve that response from the client side
 * Todo: ( create edit page )
 * Todo: fetched the data by id 
 * Todo: show them in default 
 * Todo: fetch with post method and send the updated value 
 * Todo: recieve form the backend and make change to the database
 * 
 * 
 * 
 * 
   --------------------------------
          popular seciton
   --------------------------------
    create static look 5/6 card view
    load hit api
    recive reqest write logic for 6 pupular contest based on participation count
    recieve form client 
    repalce the static data with dynamic contents
   *TODO: 
   *TODO:
   *TODO:
   *TODO:


    --------------------------------
       Registered contests
   --------------------------------
   create api route in backend will recive user email
   :search the user in collecition with that email
   : enter user.particpants 
   : map and get all the ids
   : now find() all by the ids found in particpand []
   : send the found result to client
   : recieve the data and show in ui


   --------------------------------
      user participated contest
   --------------------------------
   TODO: write logic to swap (hide and show) participate button based on the contest deadline
   TODO: 
   TODO:
   TODO:
   TODO:
   TODO:
   TODO:
 


   ----------------------------
   user wining contest
   ---------------------------
   : send type in the backend (/user/participatedContests/:email/:winning)
   : recieve form the backend 
   : reqest to the database and send the found data the client side
   : recieve the data and display in the
   *TODO: Design the page awasome way that attract the users 
   *TODO:
   *TODO:

   

   ----------------------------
     Best contes creators
   ---------------------------
     make route for contest creator
      request for all the contest creators
      write logic in the backend to filter all user with role contest creator
      send the data and recieve from the frontend
      display in ui
     
     : keep button in ui to select best 
      send this creatorStatus to the badkend and recieve
      now from the user collection find that creator and update the value
      send the response to the client and show toast success or error
     
       create route in the backend for creators who have this 'best' status 
       load the data and send it to the client 
     TODO: recieve the best contest creators and show it uniquely
     TODO:
     TODO:
     TODO:

   
 ---------------------------
 *   Winner section
 * --------------------------
    show image of the winner
    use relevate text that syncs to the winning page
    make the ui appealing





 */
