<template>
  <main>
    <div id="homewrapper">
      <div id="homerow1">
        <h2 id="usernamehere">Username</h2>
        <img id="candybowl" src="/images/tencandy.png" />
        <!-- <a href="profile">
          <img id="accounticon" src="/images/accounticon.png" />
        </a> -->
      </div>
      <div id="activity">
        <h3 id="qNum">Operations and Algebraic Thinking: Q</h3>
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
          <img id="back" @click="onAddHWOne" src="/images/back_arrow.png">
          <img id="next" @click="onAddHWOne" src="/images/next_arrow.png">
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
        </div>
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
      async onAddHWOne({ $axios }) {
        let numberCorrect = 0;
        let numberDone = 0;
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
        console.log("one",one.classList.value)

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].classList.value == "backgroundColorBlue") {
              console.log("blueeee")
                numberCorrect++;
                numberDone++
            } else if (answers[i].classList.value == "backgroundColorRed") {
              numberDone++
              console.log("pinkkk")
            }
        }

        if (numberDone == 10) {
            
            this.studentEmail = this.$auth.$state.user.email;
            this.numberCorrect = numberCorrect;
            
            let data = new FormData();
            data.append("studentEmail", this.studentEmail);
            data.append("numberCorrect", this.numberCorrect);
            
            console.log("data.get('studentemail'):", data.get("studentEmail"))
            console.log("data.get('numberCorrect'):", data.get("numberCorrect"))
            let result = await this.$axios.$post("/api/hwOnes", data);
            this.$router.push("/profile"); 
        }

      },
  },
  
  mounted() {
    
    var grade = this.$auth.user.gradeLevel;

    /********************* Updating Username at top of Page ************/

    // store the DOM node with id="username" in a variable
    var updateUsername = document.getElementById('usernamehere'); 

    // update the inner HTML of this node to the name from the student object
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/p-create");
      return
    }
    else {
      updateUsername.innerHTML = this.$auth.user.email;
    }

    /****** Declare variables for the question answer set and it's pictures *******/
    var questionSet = new Map();
    var answerSet = new Map();
    var imageSet0 = new Map();
    var firstTry = new Map();
    var i = 1;
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
      questionSet.set(1, "2 + 3 = ?");
      questionSet.set(2, "Add:");
      questionSet.set(3, "Fill in the first blank");
      questionSet.set(4, "Fill in the second blank");
      questionSet.set(5, "Fill in the third blank");
      questionSet.set(6, "Add:");
      questionSet.set(7, "Add:");
      questionSet.set(8, "4 + 3 = ");
      questionSet.set(9, "Add:");
      questionSet.set(10, "5 + 3 = ?");

      answerSet.set(1, "2");
      answerSet.set(2, "1");
      answerSet.set(3, "3");
      answerSet.set(4, "1");
      answerSet.set(5, "2");
      answerSet.set(6, "2");
      answerSet.set(7, "3");
      answerSet.set(8, "1");
      answerSet.set(9, "2");
      answerSet.set(10, "3");

      imageSet0.set(1, "../images/hw/koa_rec_1.png");
      imageSet0.set(2, "../images/hw/koa_rec_2.png");  
      imageSet0.set(3, "../images/hw/koa_rec_3.png");
      imageSet0.set(4, "../images/hw/koa_rec_4.png");
      imageSet0.set(5, "../images/hw/koa_rec_5.png");
      imageSet0.set(6, "../images/hw/koa_rec_6.png");
      imageSet0.set(7, "../images/hw/koa_rec_7.png");
      imageSet0.set(8, "../images/hw/koa_rec_8.png");
      imageSet0.set(9, "../images/hw/koa_rec_9.png");
      imageSet0.set(10, "../images/hw/koa_rec_10.png");
      
      // answer options will be a two-dimensional array
      answerOptions = [
        ['3','5','6'],
        ['8','6','7'],
        ['2','5','1'],
        ['5','2','4'],
        ['7','6','5'],
        ['2','6','8'],
        ['0','9','8'],
        ['7','4','6'],
        ['8','9','4'],
        ['9','6','8'],
      ];
    }
    if(grade=='1') {
      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "Add:");
      questionSet.set(2, "7 + 2 + 3 = 12");
      questionSet.set(3, "2 + 8 + 3 can be reduced to ? + 3 = 13");
      questionSet.set(4, "10 + ? = 18");
      questionSet.set(5, "10 + 6");
      questionSet.set(6, "6 + 2 + 4");
      questionSet.set(7, "6 + 6 + 1 = 15");
      questionSet.set(8, "5 + 5 + 4 can be reduced to ? + 4 = 14");
      questionSet.set(9, "3 + 5 + 4 = ?");
      questionSet.set(10, "? + 3 = 5");

      answerSet.set(1, "2");
      answerSet.set(2, "1");
      answerSet.set(3, "2");
      answerSet.set(4, "3");
      answerSet.set(5, "1");
      answerSet.set(6, "2");
      answerSet.set(7, "3");
      answerSet.set(8, "2");
      answerSet.set(9, "2");
      answerSet.set(10, "1");

      imageSet0.set(1, "../images/hw/1oa_rec_1.png");
      imageSet0.set(2, "../images/hw/1oa_rec_tf.png");  
      imageSet0.set(3, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(4, "../images/hw/1oa_rec_4.png");
      imageSet0.set(5, "../images/hw/1oa_rec_5.png");
      imageSet0.set(6, "../images/hw/1oa_rec_6.png");
      imageSet0.set(7, "../images/hw/1oa_rec_tf.png");
      imageSet0.set(8, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(9, "../images/hw/1oa_rec_9.png");
      imageSet0.set(10, "../images/hw/1oa_rec_10.png");

      // answer options will be a two-dimensional array
      answerOptions = [
        ['16','17','18'],
        ['True','Unknown','False'],
        ['3','10','13'],
        ['6','7','8'],
        ['16','18','36'],
        ['10','12','16'],
        ['True','Unknown','False'],
        ['4','10','14'],
        ['11','12','14'],
        ['2','3','4'],
      ];
    }
    if(grade=='2') {
      /* Set up the Map() objects for the questions, answers, and image for the answer options */
      questionSet.set(1, "Pablo has 3 apples. Maria has 8 apples. They decide to combine their apples together. How many apples do they have together?:");
      questionSet.set(2, "11 - 5 = ?");
      questionSet.set(3, "Shaquille has 17 pet hermit crabs. Does he have an even or odd number of hermit crabs?");
      questionSet.set(4, "Janet has an ice tray with two rows and 6 columns. How many pieces of ice will she have if she fills the whole tray?");
      questionSet.set(5, "20 - 13 = ?");
      questionSet.set(6, "Shiva has 10 books. He decides to give one book to Joan. How many books does he have left?");
      questionSet.set(7, "5 + 14 = ?");
      questionSet.set(8, "Mark has 8 siblings. Does he have an even or odd number of siblings?");
      questionSet.set(9, "Ha-yoon has 3 shelves on his bookshelf. Each shelf can fit 10 books. How many books can he fit on his bookshelf?");
      questionSet.set(10, "Akua has 20 cookies. She gives 3 to Jonas. How many cookies does she have left?");

      answerSet.set(1, "2");
      answerSet.set(2, "1");
      answerSet.set(3, "3");
      answerSet.set(4, "2");
      answerSet.set(5, "2");
      answerSet.set(6, "3");
      answerSet.set(7, "2");
      answerSet.set(8, "1");
      answerSet.set(9, "2");
      answerSet.set(10, "3");

      imageSet0.set(1, "../images/hw/2oa_rec_1.png");
      imageSet0.set(2, "../images/hw/2oa_rec_2.png");  
      imageSet0.set(3, "../images/hw/2oa_rec_3.png");
      imageSet0.set(4, "../images/hw/2oa_rec_4.png");
      imageSet0.set(5, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(6, "../images/hw/2oa_rec_6.png");
      imageSet0.set(7, "../images/hw/1oa_rec_nl.png");
      imageSet0.set(8, "../images/hw/2oa_rec_8.png");
      imageSet0.set(9, "../images/hw/2oa_rec_9.png");
      imageSet0.set(10, "../images/hw/2oa_rec_10.png");

      // answer options will be a two-dimensional array
      answerOptions = [
        ['6','11','13'],
        ['6','8','10'],
        ['Even','Unknown','Odd'],
        ['10','12','14'],
        ['5','7','10'],
        ['6','8','9'],
        ['17','19','20'],
        ['Even','Unknown','Odd'],
        ['10','30','40'],
        ['3','15','17'],
      ];
    }

    /* Display the right question on the page*/
    document.getElementById('question').innerHTML = "" + questionSet.get(i);
    document.getElementById('qNum').innerHTML = "Grade " + grade + " Operations and Algebraic Thinking: Q" + i;

    /* Display the correct question image re-setting the image src */
    var a0 = document.getElementById('question_image');
    a0.setAttribute('src', imageSet0.get(i));

    // display the answer set
    document.getElementById('answer1').innerHTML = answerOptions[0][0];
    document.getElementById('answer2').innerHTML = answerOptions[0][1];
    document.getElementById('answer3').innerHTML = answerOptions[0][2];

    // call the function to display the right number of rewards
    displayReward();
    
    /* Function to change the panda pic to show if they got the answer right or wrong */
    function processAnswer(option) {
      // run only if this is their first try for this question, otherwise do nothing
      if(firstTry.get(i) == true) {
        /* if the answer is right, show the right panda and increment how  many they have correct */
        if(option == answerSet.get(i)) {
          var panda = document.getElementById('responding_panda');
          panda.setAttribute('src', "../images/great_job_panda.png");
          numCorrect++;

          // call the function to display the right number of rewards
          displayReward();

          // Permanently update the background color of that question on the progress bar
          document.getElementById(i).setAttribute('class', 'backgroundColorBlue');

          // select the DOM element from the progress bar with an ID corresponding to the question
          // number and then update it's text to show a checkmark
          document.getElementById(i).innerHTML = "Q" + i + " &#10003";
        // If the answer is wrong, show the wrong_panda
        } else {
          var panda = document.getElementById('responding_panda');
          panda.setAttribute('src', "../images/wrong_panda.png");
          
          // Permanently update the background color of that question on the progress bar
          document.getElementById(i).setAttribute('class', 'backgroundColorRed');
          // select the DOM element from the progress bar with an ID corresponding to the question
          // number and then update it's text to show a checkmark
          document.getElementById(i).innerHTML = "Q" + i + " X";
        }

        firstTry.set(i, false); // change to false so they can't try this question again

        // Permanently increase the % complete
        numAnswered++;
        document.getElementById('percentComplete').innerHTML = numAnswered * 10 +"% Complete";
        let pctComplete = document.getElementById("percentComplete");
        console.log("pctComplete.innerHTML", pctComplete.innerHTML)
        if (pctComplete.innerHTML == "100% Complete") {
              // let numberCorrect = 0;
              // let one = document.getElementById("1")
              // let two = document.getElementById("2")
              // let three = document.getElementById("3")
              // let four = document.getElementById("4")
              // let five = document.getElementById("5")
              // let six = document.getElementById("6")
              // let seven = document.getElementById("7")
              // let eight = document.getElementById("8")
              // let nine = document.getElementById("9")
              // let ten = document.getElementById("10")
              // let answers = [one, two, three, four, five, six, seven, eight, nine, ten]
              // for (let i = 0; i < answers.length; i++) {
              //     if (answers[i].style.backgroundColor == "blue") {
              //         numberCorrect++;
              //     }
              // }
              // onAddHWOne();
          }
      }
    }

    /* Function to move to the next question */
    function nextQ() {
      // if there's no more questions, show the last thing
      if (i == 10) {
        //firstTry.set(i, false); // change to false so they can't answer this
        if(numAnswered == 10) {
              // let numberCorrect = 0;
              // let one = document.getElementById("1")
              // let two = document.getElementById("2")
              // let three = document.getElementById("3")
              // let four = document.getElementById("4")
              // let five = document.getElementById("5")
              // let six = document.getElementById("6")
              // let seven = document.getElementById("7")
              // let eight = document.getElementById("8")
              // let nine = document.getElementById("9")
              // let ten = document.getElementById("10")
              // let answers = [one, two, three, four, five, six, seven, eight, nine, ten]
              // for (let i = 0; i < answers.length; i++) {
              //     if (answers[i].style.backgroundColor == "blue") {
              //         numberCorrect++;
              //     }
              // }
              // onAddHWOne
              // this.onAddHWOne();
          // window.location.assign("p-goodjob");
        } else {
          alert("This is the last question, but it looks like you missed a few. Please finish the questions");
        }
      } else {
        i++;
        document.getElementById('qNum').innerHTML = "Grade " + grade + " Number and Operations in Base Ten: Q" + i;

        /* When go to the next question, Re-set the panda pic back to the neutral panda */
        var panda = document.getElementById('responding_panda');
        panda.setAttribute('src', "../images/waiting_panda.png");

        /* Update question on the page*/
        document.getElementById('question').innerHTML = questionSet.get(i);
        
        // update the question image
        var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));
        
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
        document.getElementById('qNum').innerHTML = "Grade " + grade + " Operations and Algebraic Thinking: Q" + i;

        /* Update question on the page*/
        document.getElementById('question').innerHTML = questionSet.get(i);

        /* When go to the next question, Re-set the panda pic back to the neutral panda */
        var a1 = document.getElementById('responding_panda');
        a1.setAttribute('src', "../images/waiting_panda.png");

        /* Update the question image by re-setting the image src */
        var a0 = document.getElementById('question_image');
        a0.setAttribute('src', imageSet0.get(i));

        // update the 3 answer options on the page
        document.getElementById('answer1').innerHTML = answerOptions[i-1][0];
        document.getElementById('answer2').innerHTML = answerOptions[i-1][1];
        document.getElementById('answer3').innerHTML = answerOptions[i-1][2];
      }
    }

    /* Use event listener to respond to a click on the next/back arrow, and call the next/previous functions */
    var el1 = document.getElementById('next');
    el1.addEventListener('click', nextQ, false);
    var el2 = document.getElementById('back');
    el2.addEventListener('click', previousQ, false);

    /* use event listener to respond to click on the answer1 option */
    var an1 = document.getElementById('answer1');

    //an1.addEventListener('click', processAnswer, false);
    an1.addEventListener('click', function(){processAnswer(1);}, false); 

    // wrap the function in an anonymous function and pass the number 1 to the function
    var an2 = document.getElementById('answer2');
    an2.addEventListener('click', function(){processAnswer(2);}, false); 
    var an3 = document.getElementById('answer3');
    an3.addEventListener('click', function(){processAnswer(3);}, false); 
    
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

#activity>h2, #activity>h3, #answer-label>h3 {
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

#answer_options {
  float: left;
}

.answer_option {
  float: left;
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

#bar {
  float: left;
  text-align: center;
}

#bar>h3 {
  float: left;
  color: #0080FF;
  margin: 30px 0px 0px 0px;
  text-align: center;
  background-color: white;
  min-height: 25px;
  border-width: 2px;
  border-style: solid;
  border-color: #0080FF;
  border-radius: 0px;
}

#bar>.backgroundColorBlue {
  background-color: blue;
}

#bar>.backgroundColorRed {
  background-color: #ff8080;
}

#percentComplete {
  width: 100%;
  text-align: center;
  margin: 0px 0% 40px 0%;
  background-color: #B3D9FF;
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
  font-size: 100%;
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
  h2 {width: 30%; margin: 30px 0% 0px 22%; }
  #accounticon {  width:4%;}
  .row4>p{font-size: 100%;}

  #question_answer {width: 100%;}

  #question_image {
    width: 40%;
    margin: 20px 0% 20px 30%;
  }

  #responding_panda {
    width: 20%;
  }

  #answer_options {width: 100%;}

  .answer_option {
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

  #bar {
    width: 70%;
    margin: 0px 0% 0px 15%;
  }

  #bar>h3 {
    font-size: 100%;
    min-height: 25px;
    padding: 5px;
  }
}

/* Style for medium iPad-size screen */
@media (max-width: 1000px) {
  #homelink {width: 10%;}
  #candybowl {width: 13%;}

  h2 {
    width: 30%;
    margin: 15px 0% 0px 18%;
  }

  #accounticon {width:4%;}
  .row4>p{font-size: 70%;}
  #question_answer{width: 100%;}

  #question_image {
    width: 40%;
    margin: 20px 0% 20px 30%;
  }

  #responding_panda {width: 20%;}
  #answer_options {width: 100%;}

  .answer_option {
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

  #bar {
    width: 100%;
    margin: 0px 0% 0px 0%;
  }

  #bar>h3 {
    font-size: 100%;
    min-height: 25px;
    padding: 5px;
  }
}

/* Style for very small screens */
@media (max-width: 610px) { 
  #homelink {width: 10%;}
  #candybowl {width: 20%;}
  #usernamehere {margin-top: 20px;}

  h2 {
    font-size: 90%;
    width: 30%;
    margin: 5px 0% 0px 15%;
  }

  #accounticon {width:6%;}
  .row4>p{font-size: 50%;}
  #question_answer {width: 75%;}
  h3 {font-size: 80%;}

  #question {
    font-size: 110%;
    min-height: 70px;
  }

  #question_image {
    width: 100%;
    margin: 30px 0% 20px 0%;
  }

  #responding_panda {
    width: 50%;
    margin: 0px 20% 0px 0%;
  }

  #answer_options {
    width: 10%;
    float: right;
    margin: 40px 3% 0px 0%;
  }

  .answer_option {
    width: 100%;
    margin: 0px 0% 30px 0%;
    border-width: 2px;
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
