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
 * Todo: send the user email and recieve from the backend
 * Todo: find that user and check the role 
 * Todo: response true or false based on the role you're checking
 * Todo: recieve that response from the client side
 * Todo:
 * 
 * 
 * 
   
  
 */
