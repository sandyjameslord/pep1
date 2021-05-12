<template>
  <main>
    <div id="homewrapper">
      <div id="homerow1">
          <h2 id="usernamehere">Username</h2>
          <img id="candybowl" src="/images/tencandy.png" />
          <!-- <a href="../profile">
            <img id="accounticon" src="/images/accounticon.png" />
          </a> -->
      </div>
      <div id="instructions" class ="feedback">
        <h2 id="instruct1">INSTRUCTIONS</h2>
        <p id="instruct2">You can skip a question and come back to it.</p>
        <p id="instruct3">You can go back and change your answers.</p>
        <p id="instruct4">When the test is 100% complete a submit button will appear. Click to see your grade.</p>
        <p id="instruct5">Good luck!</p>
        <img id="instructPanda" src="/images/goodluckpanda.png">
        <h2 id="instruct6">Click to start</h2>
      </div>
      <div id="activity">
        <h3 id="qNum">Test: Q</h3>
        <div id="question_answer">
          <div id="col1">
            <h1 id="question"></h1>
            <img id="question_image" src="/images/hw/2nbt_rec_blank.png">
          </div>
          <div id="col2">
            <img id="responding_panda" src="/images/waiting_panda.png" />
          </div>
        </div>
        <div id="answer_options">
          <h1 class="answer_option" id="answer1">10</h1>
          <h1 class="answer_option" id="answer2">20</h1>
          <h1 class="answer_option" id="answer3">30</h1>
        </div>
        <div id="back_next">
            <img id="back"  src="/images/back_arrow.png">
            <img id="next"  src="/images/next_arrow.png">
        </div>
        <div id="progressbar">
            <div id="bar">
              <h3 id="1">Q1 _</h3>
              <h3 id="2">Q2 _</h3>
              <h3 id="3">Q3 _</h3>
              <h3 id="4">Q4 _</h3>
              <h3 id="5">Q5 _</h3>
              <h3 id="6">Q6 _</h3>
              <h3 id="7">Q7 _</h3>
              <h3 id="8">Q8 _</h3>
              <h3 id="9">Q9 _</h3>
              <h3 id="10">Q10 _</h3>
            </div>
            <h3 id="percentComplete">0% Complete</h3>
            <h3 class="submitButton"  id="hidden">Submit</h3>
        </div>
      </div>
      <div id="hidden2" class ="feedback">
        <h2 id="message">Great job!</h2>
        <img id="panda" src="/images/great_job_panda.png">
        <h2 id="home" @click='onAddTest'>Click to return home</h2>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
        return {
            studentEmail: "",
            numberCorrect: "",
        }
    },
  methods: {
      async onAddTest({ $axios }) {
        let numberCorrect = 0;
        // let numberDone = 0;
        let one = document.getElementById("1")
        let two = document.getElementById("2")
        let three = document.getElementById("3")
        let four = document.getElementById("4")
        let five = document.getElementById("5")
        let six = document.getElementById("6")
        let seven = document.getElementById("7")
        let eight = document.getElementById("8")
        let nine = document.getElementById("9")
        let ten = document.getElementById("10")
        let answers = [one, two, three, four, five, six, seven, eight, nine, ten]
        // console.log("one.alt",one.style.backgroundColor)

        for (let i = 0; i < answers.length; i++) {
            let element = answers[i];
            // console.log("element.alt, i",element.alt, i)
            if (element.alt == "correct") {
              numberCorrect++
            }
            
            
            
            // if (answers[i].style.backgroundColor == "rgb(0, 0, 255) !important") {
            // if (answers[i].classList.value == "backgroundColorBlue") {
            //     console.log("blueeee")
                
            //     numberDone++
            // }
            // } else if (answers[i].style.backgroundColor == "rgb(0, 0, 254) !important") {
            //   numberDone++
            //   console.log("pinkkk")
            // }




        }

        // for (var k = 1; k<11; k++) {
        // if(answerSet.get(k) == studentAnswers[k]) {
        //   numberCorrect++;
        // }
      // }

        // if (numberDone == 10) {
            
            this.studentEmail = this.$auth.$state.user.email;
            this.numberCorrect = numberCorrect;
            
            let data = new FormData();
            data.append("studentEmail", this.studentEmail);
            data.append("numberCorrect", this.numberCorrect);
            
            // console.log("data.get('studentemail'):", data.get("studentEmail"))
            // console.log("data.get('numberCorrect'):", data.get("numberCorrect"))
            let result = await this.$axios.$post("/api/tests", data);
            // this.$router.push("/profile"); 
        // }

      },
  },
  mounted() {
    // prompt user for grade or change code to get it from a database
    var grade = this.$auth.user.gradeLevel;

    /********************* Updating Username at top of Page ************/
    // store the DOM node with id="username" in a variable
    var updateUsername = document.getElementById('usernamehere'); 

    // // update the inner HTML of this node to the name from the student object
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/p-create");
      return
    } else {
      updateUsername.innerHTML = this.$auth.user.email;
    }

    /**************** Event listener to respond to a click to hide instructions *****************/
    /* event listener on the feedback section so they can click to return to the right home page */
    var instructions = document.getElementById('instructions');
    instructions.addEventListener('click', hide, false); 

    function hide() {
      instructions.setAttribute('class', 'hidden3');
      document.getElementById('instruct1').setAttribute('class', 'hidden3');
      document.getElementById('instruct2').setAttribute('class', 'hidden3');
      document.getElementById('instruct3').setAttribute('class', 'hidden3');
      document.getElementById('instruct4').setAttribute('class', 'hidden3');
      document.getElementById('instruct5').setAttribute('class', 'hidden3');
      document.getElementById('instruct6').setAttribute('class', 'hidden3');
      document.getElementById('instructPanda').setAttribute('class', 'hidden3');
    }

    /****** Declare variables for the question answer set and it's pictures *******/
    var questionSet = new Map();
    var answerSet = new Map();
    var imageSet0 = new Map();
    var firstTry = new Map();
    var i = 1;
    var studentAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // This array will keep track of their answers
    var numAnswered = 0; // keeps track of how many they've answered
    var numCorrect = 0; // will be used to keep track of the number correct

    // answer options will be a two-dimensional array
    let answerOptions = [
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
      ['','',''],
    ];

    // These variables ensure they can only try each question once per HW session
    firstTry.set(1, true);
    firstTry.set(2, true);
    firstTry.set(3, true);
    firstTry.set(4, true);
    firstTry.set(5, true);
    firstTry.set(6, true);
    firstTry.set(7, true);
    firstTry.set(8, true);
    firstTry.set(9, true);
    firstTry.set(10, true);

    /****** Load the question/answer set and associated pictures depending on grade *******/
    if(grade=='K') {
      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "5 + 3 = ?");
      questionSet.set(2, "Add:");
      questionSet.set(3, "4 + 3 = ");
      questionSet.set(4, "Add:");
      questionSet.set(5, "2 + 3 = ?");
      questionSet.set(6, "Add:");
      questionSet.set(7, "Add:");
      questionSet.set(8, "Add:");
      questionSet.set(9, "Add:");
      questionSet.set(10, "Add:");

      answerSet.set(1, "3");
      answerSet.set(2, "2");
      answerSet.set(3, "1");
      answerSet.set(4, "2");
      answerSet.set(5, "2");
      answerSet.set(6, "2");
      answerSet.set(7, "3");
      answerSet.set(8, "2");
      answerSet.set(9, "3");
      answerSet.set(10, "2");

      imageSet0.set(1, "../images/hw/koa_rec_10.png");
      imageSet0.set(2, "../images/hw/koa_rec_9.png"); 
      imageSet0.set(3, "../images/hw/koa_rec_8.png");
      imageSet0.set(4, "../images/hw/koa_rec_6.png");
      imageSet0.set(5, "../images/hw/koa_rec_1.png");
      imageSet0.set(6, "../images/hw/knbt_rec_10.png");
      imageSet0.set(7, "../images/hw/knbt_rec_6.png");
      imageSet0.set(8, "../images/hw/knbt_rec_8.png");
      imageSet0.set(9, "../images/hw/knbt_rec_1.png");
      imageSet0.set(10, "../images/hw/knbt_rec_2.png");

      // answer options will be a two-dimensional array
      answerOptions = [
        ['9','6','8'],
        ['8','9','4'],
        ['7','4','6'],
        ['2','6','8'],
        ['3','5','6'],
        ['10','13','16'],
        ['12','13','14'],
        ['14','13','19'],
        ['10','11','12'],
        ['10','11','15'],
      ];
    } else if(grade=='1') {
      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "? + 3 = 5");
      questionSet.set(2, "10 + 6");
      questionSet.set(3, "6 + 2 + 4");
      questionSet.set(4, "6 + 6 + 1 = 15");
      questionSet.set(5, "2 + 8 + 3 can be reduced to ? + 3 = 13");
      questionSet.set(6, "How much?");
      questionSet.set(7, "How much?");
      questionSet.set(8, "Subtract:");
      questionSet.set(9, "Add:");
      questionSet.set(10, "How much?");

      answerSet.set(1, "1");
      answerSet.set(2, "1");
      answerSet.set(3, "2");
      answerSet.set(4, "3");
      answerSet.set(5, "2");
      answerSet.set(6, "2");
      answerSet.set(7, "1");
      answerSet.set(8, "1");
      answerSet.set(9, "3");
      answerSet.set(10, "2");

      imageSet0.set(1, "../images/hw/1oa_rec_10.png");
      imageSet0.set(2, "../images/hw/1oa_rec_5.png");
      imageSet0.set(3, "../images/hw/1oa_rec_6.png");
      imageSet0.set(4, "../images/hw/1oa_rec_tf.png");
      imageSet0.set(5, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(6, "../images/hw/1nbt_rec_8.png");
      imageSet0.set(7, "../images/hw/1nbt_rec_6.png");
      imageSet0.set(8, "../images/hw/1nbt_rec_3.png");
      imageSet0.set(9, "../images/hw/1nbt_rec_4.png");
      imageSet0.set(10, "../images/hw/1nbt_rec_1.png");

      // answer options will be a two-dimensional array
      answerOptions = [
        ['2','3','4'],
        ['16','18','36'],
        ['10','12','16'],
        ['True','Unknown','False'],
        ['3','10','13'],
        ['20','30','40'],
        ['13','30','33'],
        ['10','20','30'],
        ['10','20','40'],
        ['10','20','30'],
      ];
    } else if(grade=='2') {
      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "Shiva has 10 books. He decides to give one book to Joan. How many books does he have left?");
      questionSet.set(2, "5 + 14 = ?");
      questionSet.set(3, "Mark has 8 siblings. Does he have an even or odd number of siblings?");
      questionSet.set(4, "Ha-yoon has 3 shelves on his bookshelf. Each shelf can fit 10 books. How many books can he fit on his bookshelf?");
      questionSet.set(5, "Shaquille has 17 pet hermit crabs. Does he have an even or odd number of hermit crabs?");
      questionSet.set(6, "What is the right symbol for the following?");
      questionSet.set(7, "What is the right symbol for the following?");
      questionSet.set(8, "Which bundle represents ten?");
      questionSet.set(9, "What represents 13?");
      questionSet.set(10, "Without counting, add ten to 36");

      answerSet.set(1, "3");
      answerSet.set(2, "2");
      answerSet.set(3, "1");
      answerSet.set(4, "2");
      answerSet.set(5, "3");
      answerSet.set(6, "3");
      answerSet.set(7, "2");
      answerSet.set(8, "2");
      answerSet.set(9, "3");
      answerSet.set(10, "3");

      imageSet0.set(1, "../images/hw/2oa_rec_6.png");
      imageSet0.set(2, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(3, "../images/hw/2oa_rec_8.png");
      imageSet0.set(4, "../images/hw/2oa_rec_9.png");
      imageSet0.set(5, "../images/hw/2oa_rec_3.png");
      imageSet0.set(6, "../images/hw/2nbt_rec_12.png");
      imageSet0.set(7, "../images/hw/2nbt_rec_8.png");
      imageSet0.set(8, "../images/hw/2nbt_rec_2.png");  
      imageSet0.set(9, "../images/hw/2nbt_rec_4.png");
      imageSet0.set(10, "../images/hw/2nbt_rec_7.png");

      // answer options will be a two-dimensional array
      answerOptions = [
        ['6','8','9'],
        ['17','19','20'],
        ['Even','Unknown','Odd'],
        ['10','30','40'],
        ['Even','Unknown','Odd'],
        ['>','<','='],
        ['>','<','='],
        ['A','B','C'],
        ['A','B','C'],
        ['36','37','46'],
      ];
    }

    /* Display the right question on the page*/
    document.getElementById('question').innerHTML = "" + questionSet.get(i);
    document.getElementById('qNum').innerHTML = "Grade " + grade + " Number and Operations in Base Ten: Q" + i;

    /* Display the correct question image re-setting the image src */
    var a0 = document.getElementById('question_image');
    a0.setAttribute('src', imageSet0.get(i));

    // display the answer set
    document.getElementById('answer1').innerHTML = answerOptions[0][0];
    document.getElementById('answer2').innerHTML = answerOptions[0][1];
    document.getElementById('answer3').innerHTML = answerOptions[0][2];

    // call the function to display the right number of rewards
    displayReward();

    /* Function to record completion of the question and update the progress bar/answer list */
    function updateAnswer(option) {
      if(firstTry.get(i) == true) {
        // if(answerSet.get(i) == studentAnswers[i]){
        //   document.getElementById(i).style.backgroundColor = "#0000FF"
        // } else {
        //   document.getElementById(i).style.backgroundColor = "#0000FE"
        // }
        // Permanently update the background color of that question on the progress bar
        document.getElementById(i).setAttribute('class', 'updateBackgroundColor');
        






        // Permanently increase the % complete
        numAnswered++;
        percentComplete.innerHTML = numAnswered * 10 +"% Complete";

        // set firstTry to false, so this won't update again for the same question
        firstTry.set(i, false);
      }

      // select the DOM element from the progress bar with an ID corresponding to the question
      // number and then update it's text to show the option they selected
      document.getElementById(i).innerHTML = "Q" + i + " " + answerOptions[i-1][option-1];

      // Update the array that stores their answers;
      studentAnswers[i] = option;

      //if numAnswered has reached 10, display the submit button will appear by removing it's class attribute of hidden
      if(numAnswered == 10) {
        document.getElementById('hidden').setAttribute('id', 'submit');
        /* once submit button apperas, set up event listener to respond to click and call submit function */
        var submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', submit, false);
      }
    }

    /* Function to move to the next question */
    function nextQ() {
      // if there's no more questions, show the last thing
      if (i == 10) {
        /*window.location.assign("goodjob.html");*/
        alert("This is the last question. Please press Submit or finish the questions.");
      } else {
        i++;

        /* Display the right question on the page*/
        document.getElementById('question').innerHTML = "" + questionSet.get(i);
        document.getElementById('qNum').innerHTML = "Grade " + grade + " Test: Q" + i;

        /* Update question on the page*/
        document.getElementById('question').innerHTML = questionSet.get(i);

        /* Update the question image by re-setting the image src */
        var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));
        var a1 = document.getElementById('answer1');
        
        // update the 3 answer options on the page
        document.getElementById('answer1').innerHTML = answerOptions[i-1][0];
        document.getElementById('answer2').innerHTML = answerOptions[i-1][1];
        document.getElementById('answer3').innerHTML = answerOptions[i-1][2];
      }
    }

    /* Function to move to the previous question */
    function previousQ() {
      if (i == 1) {
        alert("This is the 1st question!");
      } else {
        i--;

        /* Display the right question on the page*/
        document.getElementById('question').innerHTML = "" + questionSet.get(i);
        document.getElementById('qNum').innerHTML = "Grade " + grade + " Test: Q" + i;

        /* Update question on the page*/
        document.getElementById('question').innerHTML = questionSet.get(i);

        /* Update the question image by re-setting the image src */
        var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));
        
        // update the 3 answer options on the page
        document.getElementById('answer1').innerHTML = answerOptions[i-1][0];
        document.getElementById('answer2').innerHTML = answerOptions[i-1][1];
        document.getElementById('answer3').innerHTML = answerOptions[i-1][2];
      }
    }

    /* function for when they click on submit */
    function submit() {
      // Calculate how many they got correct based on their final answers
      for (var k = 1; k<11; k++) {
        if(answerSet.get(k) == studentAnswers[k]) {
          let item = document.getElementById(k);
          item.alt = "correct"
          numCorrect++;
        }
        else {
          let item = document.getElementById(k);
          item.alt = "incorrect"
        }
      }
      

      // create variables for message and pic to display in the feedback section
      var message;
      var pic;

      // create a message and pick a picture based on how many they got correct
      if(numCorrect > 7) {
        message = "You got " + numCorrect + " out of 10 correct! Great job!";
        pic = "../images/pandaconfetti.png";
      } else if(numCorrect > 5) {
        message = "You got " + numCorrect + " out of 10 correct. Good work, you passed!";
        pic = "../images/pandathumbsup.png";
      } else {
        message = "You got " + numCorrect + " out of 10 correct. Good effort, try again next time";
        pic = "../images/pandashrug.png";
      }
      // setTimeout(() => this.onAddTest(), 2000);
      // Now show them how their rewards have increased
      displayReward();

      // remove the hidden ID from the feedback section to show it
      document.getElementById('hidden2').setAttribute('id', 'feedback');

      // update the message shown in the feedback section
      document.getElementById('message').innerHTML = message;
      document.getElementById('panda').src = pic;

      /* event listener on the feedback section so they can click to return to the right home page */
      var feedback = document.getElementById('feedback');
      feedback.addEventListener('click', returnHome, false);
      
      
    }

    // return home function
    function returnHome() {
      // Add line of code to add numCorrect to database
      window.location.assign("../p-homek12");
    }

    /* Use event listener to respond to a click on the next/back arrow, and call the next/previous functions */
    var el1 = document.getElementById('next');
    el1.addEventListener('click', nextQ, false);
    var el2 = document.getElementById('back');
    el2.addEventListener('click', previousQ, false);

    /* use event listener to respond to click on the answer options */
    var an1 = document.getElementById('answer1');

    /* use event listener to respond to click on the answer1 option */
    an1.addEventListener('click', function(){updateAnswer(1);}, false); 
    
    // wrap the function in an anonymous function and pass the number 1 to the function
    var an2 = document.getElementById('answer2');
    an2.addEventListener('click', function(){updateAnswer(2);}, false); 
    var an3 = document.getElementById('answer3');
    an3.addEventListener('click', function(){updateAnswer(3);}, false); 

    /* Function to show the right reward picture */
    // Depending on the number of rewards stored in the student object
    // display the right picture by changing the image source
    function displayReward() {
      switch(numCorrect) {
        case 0:
          document.getElementById("candybowl").src='../images/zerocandy.png';
          break;
        case 1:
          document.getElementById("candybowl").src='../images/onecandy.png';
          break;
        case 2:
          document.getElementById("candybowl").src='../images/twocandy.png';
          break;
        case 3:
          document.getElementById("candybowl").src='../images/threecandy.png';
          break;
        case 4:
          document.getElementById("candybowl").src='../images/fourcandy.png';
          break;
        case 5:
          document.getElementById("candybowl").src='../images/fivecandy.png';
          break;
        case 6:
          document.getElementById("candybowl").src='../images/sixcandy.png';
          break;
        case 7:
          document.getElementById("candybowl").src='../images/sevencandy.png';
          break;
        case 8:
          document.getElementById("candybowl").src='../images/eightcandy.png';
          break;
        case 9:
          document.getElementById("candybowl").src='../images/ninecandy.png';
          break;
        case 10:
          document.getElementById("candybowl").src='../images/tencandy.png';
          break;
        default:
          document.getElementById("candybowl").src='../images/zerocandy.png';
          break;
      }
    } 
  }
}
</script>

<style scoped>
body{
  background-color: #C3ECDC;
  font-family: Arial, Verdana, sans-serif;
}

a{
  color: #2C8C67;
  text-decoration: none;
}

/************* top row *******************/

#homerow1 {
  float: left;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

#homelink {
  float: left;
  padding: 0px;
  margin: 4px 0% 0px 0%;
}

h2, h3 {
  float: left;
  color: #2C8C67;
  background-color: white;
  border-radius: 5px;
  padding: 5px 0% 5px 0%;
  text-align: center;
}

#candybowl {
  float: left;
  padding: 0px 0% 0px 0%;
  margin: 5px 0% 0px 0%;
}

#accounticon {
  float: right;
  padding: 0px;
  margin: 4px 1% 0px 0%;
}

/************* activity section *******************/

#activity {
  float: left;
  width: 100%;
  background-color: #ECF9F3;
}

#activity>h2, #activity>h3 {
  width: 100%;
  margin: 20px 0% 0px 0%;
  text-align: center;
  background-color: #ECF9F3;
}

#question_answer {
  float: left;}

#question {
  text-align: center;
  float: left;
  width: 100%;
  margin: 20px 0% 0px 0%;
  background-color: #ECF9F3;
}

#question_image {
  float: left;
}

#responding_panda {
  float: right;
}

.answer_option {
  text-align: center;
}

#back_next {
  width: 100%;
  float: left;
}

#back {float: left;}

#next {float: right;}

/**************************** Progress bar section ************************/
#progressbar {
  float: left;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #B3D9FF;
}

#progressbar>h3 {
  float: left;
  color: #0080FF;
}

#yourAnswers {
  width: 30%;
  text-align: right;
  margin: 35px 10px 0px 0px;
  padding: 0;
  background-color: #B3D9FF;
}

#bar>h3 {
  float: left;
  color: #0080FF;
  padding: 5px;
  margin: 30px 0px 0px 0px;
  border-width: 2px 2px 2px 2px;
  border-style: solid;
  border-color: #0080FF;
  border-radius: 0px;
  text-align: center;
  background-color: white;
}

#bar>.updateBackgroundColor {
  background-color: blue;
}

#percentComplete {
  width: 50%;
  text-align: right;
  margin: 20px 0% 40px 0%;
  background-color: #B3D9FF;
}

.submitButton {
  padding: 5px;
  text-align: center;
  border-width: 6px;
  border-style: solid;
  border-color: #0080FF;
  margin: 20px 0% 20px 0%;
  background-color: white;
}

#hidden, #hidden2, .hidden3 {
  display: none;
}

/************* instructions and feedback section *******************/
.feedback {
  position: absolute;
  float: left;
  padding: 0px;
  background-color: #B3D9FF;
  border-width: 6px;
  border-style: solid;
  border-radius: 50px;
  border-color: #0080FF;
}

#panda, #instructPanda {
  width: 20%;
  margin: 0px 40% 0px 40%;
}

.feedback>h2 {
  width: 100%;
  text-align: center;
  background-color: #B3D9FF;
  margin: 50px 0% 50px 0%;
}

.feedback>p {
  float: left;
  text-align: center;
  width: 100%;
  margin: 4px 0% 0px 0%;
}

/************* bottom row *******************/
.row4 {
  float: left;
  width: 100%;
  padding: 0px 0% 20px 0%;
  margin: 0px;
  background-color: #2C8C67;
}

.row4>p, .row4>p>a{
  color: white;
  text-align: center;
  font-size: 80%;
  line-height: .5em;
  text-decoration: none;
}

.row4>p>a:hover{
  color: #ECF9F3;
}

/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
  #homelink {width: 7%;}
  #candybowl {width: 12%;}

  h2 {
    width: 30%;
    margin: 30px 0% 0px 22%;
  }

  #accounticon {  width:4%;}
  .row4>p{font-size: 70%;}

  .feedback {
    width: 95%;
    margin: 100px 0% 0px 1.5%;
  }

  #question_answer {width: 100%;}

  #question_image {
    width: 40%;
    margin: 20px 0% 20px 30%;
  }

  #responding_panda {width: 20%;}

  #answer_options {
    width: 100%;
    float: left;
  }

  .answer_option {
    float: left;
    width: 10%;
    margin: 1px 0.2% 1px 17.5%;
    font-size: 130%;
    border-width: 6px;
    border-style: solid;
    border-color: #2C8C67;
    border-radius: 10px;
    padding: 10px;
  }

  .answer_option:hover {
    border-color: black;
  }
  
  #back {
    width: 5%;
    margin: 10px 0% 10px 5%;
  }

  #back:hover {
    width: 5.2%;
    margin: 9.8px 0% 9px 4.5%;
  }

  #next {
    width: 5%;
    margin: 10px 5% 10px 0%;
  }

  #next:hover {
    width: 5.2%;
    margin: 9.8px 4.5% 9px 0%;
  }
}

/* Style for medium iPad-size screen */
@media (max-width: 1000px) {
  #homelink {width: 10%;}
  #candybowl {width: 13%;}
  h2 {width: 30%; margin: 15px 0% 0px 18%; }
  #accounticon {  width:4%;}
  .row4>p{font-size: 70%;}
  #question_answer {width: 100%;}

  #question_image {
    width: 40%;
    margin: 20px 0% 20px 30%;
  }

  #responding_panda {width: 20%;}

  .feedback {
    width: 95%;
    margin: 100px 0% 0px 1.5%;
  }

  #answer_options {width: 100%; float: left;}

  .answer_option {
    float: left;
    width: 10%;
    margin: 0px 0% 0px 17.5%;
    font-size: 100%;
    border-width: 6px;
    border-style: solid;
    border-color: #2C8C67;
    border-radius: 10px;
    padding: 10px;
  }

  #back {
    width: 5%;
    margin: 10px 0% 10px 5%;
  }

  #next {
    width: 5%;
    margin: 10px 5% 10px 0%;
  }

  #yourAnswers {display: none;}
  #bar {width: 100%; margin: 0px 0% 0px 0%;}
  #bar>h3 {font-size: 100%; min-height: 25px; padding: 5px;}
}

/* Style for very small screens */
@media (max-width: 610px) { 
  #homelink {width: 10%;}
  #candybowl {width: 20%;}
  #usernamehere {margin-top: 20px;}
  h2 {font-size: 90%; width: 30%; margin: 5px 0% 0px 15%; }
  #accounticon {  width:6%;}
  .row4>p{font-size: 50%;}
  #question_answer {width: 75%;}
  h3 {font-size: 80%;}

  #question {
    font-size: 110%;
    min-height: 70px;
  }

  #question_image {
    width: 100%;
    margin: 0px 0% 20px 0%;
  }

  .feedback {
    width: 93%;
    margin: 0px 0% 0px 0%;
  }

  #responding_panda {
    width: 50%;
    margin: 0px 20% 0px 0%;
  }

  #answer_options {
      width: 20%;
      float: right;
      margin: 40px 1% 0px 0%;
    }

  .answer_option {
    width: 100%;
    margin: 0px 0% 20px 0%;
    border-width: 1px;
    border-style: solid;
    border-color: #2C8C67;
    border-radius: 10px;
    padding: 2px;
  }

  #back {
    width: 15%;
    margin: 30px 0% 0% 10%;
  }

  #next {
    width: 15%;
    margin: 30px 10% 0px 0%;
  }

  #bar>h3 {
    font-size: 50%;
    min-height: 15px;
    padding: 1px;
  }
}
</style>