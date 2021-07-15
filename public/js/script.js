// function rotateFunction() {
//   var min = 1024;
//   var max = 9999;
//   var deg = Math.floor(Math.random() * (max - min)) + min;
//   document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
// }

// var element = document.getElementById("mainbox");
// element.classList.remove("animate");

// setTimeout(function () {
//   element.classList.add("animate");
// }, 5000);

// document
//   .querySelectorAll(".category")
//   .addEventListener("click", () => console.log("This is too hard"));

var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();

//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

var data = [
  {
    label: "Question 1",
    value: 1,
    question: "What is Earth's largest continent?",
    choices: ["Europe", "Asia ", "North America", "Antarctica"],
    solution: 2,
  }, //Asia
  {
    label: "Question 2",
    value: 1,
    question: "What country has the most natural lakes?",
    choices: ["United States", "China", "Canada", "Russia"],
    solution: 3,
  }, //Canada
  {
    label: "Question 3",
    value: 1,
    question: "What is the only sea without any coasts?",
    choices: ["Sargasso Sea", "Baltic Sea", "Caspian Sea", "Mediterranean Sea"],
    solution: 1,
  }, //Sargasso Sea
  {
    label: "Question 4",
    value: 1,
    question: "What European country is home to Transylvania?",
    choices: ["Romania", "Bulgaria", "Albania", "Croatia"],
    solution: 1,
  }, //Romania
  {
    label: "Question 5",
    value: 1,
    question: "What is the deepest point on Earth?",
    choices: [
      "Grand Canyon",
      "Mariana Trench",
      "Eurasian Basin",
      "Krubera Cave",
    ],
    solution: 2,
  }, //Mariana Trench
  {
    label: "Question 6",
    value: 1,
    question: "What mountain is closest to the Moon?",
    choices: [
      "Mount Everest",
      "Mount Hood",
      "Mount Pandim",
      "Mount Chimborazo",
    ],
    solution: 4,
  }, //Mount Chimborazo
  {
    label: "Question 7",
    value: 1,
    question: "What do you call it when a bowler makes three strikes in a row?",
    choices: ["Trike", "Turkey", "Bullseye", "Winner Winner Chicken Dinner"],
    solution: 2,
  }, //Turkey
  {
    label: "Question 8",
    value: 1,
    question: "What is the National sport of Canada?",
    choices: ["Hockey", "Fencing", "Lacrosse", "Curling"],
    solution: 3,
  }, //Lacrosse
  {
    label: "Question 9",
    value: 1,
    question:
      "A sporting event is held every year on Memorial Day. What is it?",
    choices: [
      "Kentucky Derby",
      "Masters Championship",
      "Wimbledon",
      "Indianapolis 500",
    ],
    solution: 4,
  }, //Indianapolis 500
  {
    label: "Question 10",
    value: 1,
    question: "Who was the youngest player to score 10,000 points in the NBA?",
    choices: [
      "Kobe Bryant",
      "Lebron James",
      "Michael Jordan",
      "Oscar Robertson",
    ],
    solution: 2,
  }, //Lebron James
  {
    label: "Question 11",
    value: 1,
    question: "What’s the diameter of a basketball hoop in inches?",
    choices: ["18 inches", "16 inches", "20 inches", "14 inches"],
    solution: 1,
  }, //18 inches
  {
    label: "Question 12",
    value: 1,
    question:
      "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
    choices: [
      "2007 Patriots",
      "1972 Miami Dolphins ",
      "1984 San Francisco 49ers",
      "1976 Oakland Raiders",
    ],
    solution: 2,
  }, //1972 Miami Dolphins
  {
    label: "Question 13",
    value: 1,
    question: "In Greek Mythology, who killed Achilles?",
    choices: ["Ajax", "Hector", "Paris", "Perseus"],
    solution: 3,
  }, //Paris
  {
    label: "Question 14",
    value: 1,
    question: "Which Norse God has a horse named Sleipnir?",
    choices: ["Odin", "Vidar", "Balder", "Thor"],
    solution: 1,
  }, //Odin
  {
    label: "Question 15",
    value: 1,
    question:
      "Which of these mythological creatures is said to be half-man and half-horse?",
    choices: ["Siren", "Chimera", "Minotaur", "Centaur"],
    solution: 4,
  }, //Centaur
  {
    label: "Question 16",
    value: 1,
    question:
      "What immense structure is referred to in Norse Mythology as the Yggdrasil?",
    choices: ["Tree", "Mountain", "Waterfall", "Pyramid"],
    solution: 1,
  }, //Tree
  {
    label: "Question 17",
    value: 1,
    question: "What fruit did Persephone eat that sent her to the Underworld",
    choices: ["Grape", "Apple", "Pomegranate", "Mango"],
    solution: 3,
  }, //Pomegranate
  {
    label: "Question 18",
    value: 1,
    question: "According to the Egyptian Myth of Osiris, who murdered Osiris?",
    choices: ["Anubis", "Horus", "Set", "Ra"],
    solution: 3,
  }, // Set
  {
    label: "Question 19",
    value: 1,
    question: "What is the largest bone in the human body?",
    choices: ["Tibia", "Ulna", "Fibula", "Femur"],
    solution: 4,
  }, // Femur
  {
    label: "Question 20",
    value: 1,
    question: "What does a “Geiger Counter” measure?",
    choices: ["Radiation", "Electrical Charge", "Voltage", "Amperage"],
    solution: 1,
  }, // .html
  {
    label: "Question 21",
    value: 1,
    question:
      "What word do scientists use to describe a unit of measure that is also the name of an animal?",
    choices: ["Ant", "Dog", "Cat", "Mole"],
    solution: 4,
  }, // HTML
  {
    label: "Question 22",
    value: 1,
    question: "What two elements is water made of?",
    choices: [
      "Boron and Chlorine",
      "Hydrogen and Nitrogen",
      "Hydrogen and Oxygen",
      "Nitrogen and Oxygen",
    ],
    solution: 3,
  }, // CSS
  {
    label: "Question 23",
    value: 1,
    question: "How many elements are listed in the periodic table?",
    choices: ["122", "112", "118", "110"],
    solution: 3,
  }, // JavaScript
  {
    label: "Question 24",
    value: 1,
    question:
      "Electron pairs, when shared between two atoms, help create what kind of bond?",
    choices: [
      "Covalent Bonds",
      "Metallic Bonds",
      "Ionic Bonds",
      "Hydrogen Bonds",
    ],
    solution: 1,
  }, // border
  {
    label: "Question 25",
    value: 1,
    question:
      "In 1927, who became the first person to fly solo and non-stop across the Atlantic?",
    choices: [
      "Amelia Earhart",
      "Wilbur Wright",
      "Orville Wright",
      "Charles Lindbergh",
    ],
    solution: 4,
  }, //semi-colon
  {
    label: "Question 26",
    value: 1,
    question: "What nation separated from the United Kingdom in 1921?",
    choices: ["Wales", "Scotland", "Ireland", "Iceland"],
    solution: 3,
  }, //Ireland
  {
    label: "Question 27",
    value: 1,
    question: "How many U.S. presidents have been assassinated?",
    choices: ["Two", "Four", "Three", "Five"],
    solution: 2,
  }, //Four
  {
    label: "Question 28",
    value: 1,
    question:
      "How did Alexander the Great solve the puzzle of the Gordion knot?",
    choices: [
      "Burned it",
      "Cut it with a sword",
      "Untied it with his hands",
      "Pulled one end of it using a chariot",
    ],
    solution: 2,
  }, //Cut it with a sword
  {
    label: "Question 29",
    value: 1,
    question: "Where were the first modern Olympics held?",
    choices: ["Athens", "Paris", "Rome", "London"],
    solution: 1,
  }, //Athens
  {
    label: "Question 30",
    value: 1,
    question: "What group of people discovered Greenland?",
    choices: ["Conquistadors", "Vikings", "Pilgrims", "Romans"],
    solution: 2,
  }, //Vikings
];

var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    let j = 0;
    if (i > 4) {
      j = i % 5;
    } else {
      j = i;
    }
    // const j = Math.floor(Math.random() * 4);
    return color(j);
  })
  .attr("d", function (d) {
    return arc(d);
  });

// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d) {
  container.on("click", null);

  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;

  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }

  rotation += 90 - Math.round(ps / 2);

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //mark question as seen
      d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
        "fill",
        "#111"
      );

      //populate question
      d3.select("#question h1").text(data[picked].question);
      document.querySelector("#answers").classList.remove("hide");

      document.querySelector(".form").innerHTML = `
         <input type="radio" id="choices0" name="choices" value="${data[picked].choices[0]}">
              <label for="age1">${data[picked].choices[0]}</label><br>
              <input type="radio" id="choices1" name="choices" value="${data[picked].choices[1]}">
              <label for="age2">${data[picked].choices[1]}</label><br>
              <input type="radio" id="choices2" name="choices" value="${data[picked].choices[2]}">
              <label for="age3">${data[picked].choices[2]}</label><br><br>
              <input type="radio" id="choices3" name="choices" value="${data[picked].choices[3]}">
              <label for="age3">${data[picked].choices[3]}</label><br><br>
              <input type="submit" class="answerButton" data-id=${data[picked].solution} value="Submit">
      `;

      document
        .querySelector(".answerButton")
        .addEventListener("click", async function (event) {
          event.preventDefault();


         var radios = document.getElementsByName("choices");

         for (var i = 0, length = radios.length; i < length; i++) {
           if (radios[i].checked) {
             // do whatever you want with the checked radio
           //  alert(radios[i].value);

                const userChoices = radios[i].value;
                const answerID = this.getAttribute("data-id");

                const computerAnswer =
                  data[picked].choices[parseInt(answerID) - 1];
                console.log(
                  "match:",
                  userChoices,
                  computerAnswer,
                  parseInt(answerID) - 1
                );
                if (userChoices === computerAnswer) {
                  alert("Correct! (+ 5 points!)");
                  const scoreObject = await fetch("/api/scores").then(
                    (response) => response.json()
                  );
                  console.log(scoreObject);
                  let newScore = 5;
                  if (scoreObject.score) {
                    newScore = scoreObject.score + 5;
                  }

                 await fetch(`/api/scores`, {
                    method: "PUT",
                    body: JSON.stringify({ score: newScore }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  // if (response.ok) {
                  //   document.location.replace("/scores");
                  // } else {
                  //   alert("Failed to create project");
                  // }
                } else {
                  alert("Wrong answer, try again! (-5 points!)");
                  const scoreObject = await fetch("/api/scores").then(
                    (response) => response.json()
                  );
                  console.log(scoreObject);
                  let newScore = 5;
                  if (scoreObject.score) {
                    newScore = scoreObject.score - 5;
                  }

                  await fetch(`/api/scores`, {
                    method: "PUT",
                    body: JSON.stringify({ score: newScore }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                }
             // only one radio can be logically checked, don't check the rest
             break;
           }
         }



       
        });

      oldrotation = rotation;

      container.on("click", spin);
    });
}

//make arrow
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "white" });

//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });

//spin text
container
  .append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("SPIN")
  .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }

  return array;
}
