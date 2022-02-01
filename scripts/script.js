

window.onload = () => {

    navColor.forEach((color, i) => {
        if (color == true) {
            navUl.children[i].children[0].classList.add("nav-active");
        };
    });

    displayBlocks("daily");
    setTimeout(() => {
      const allBlocks = document.getElementsByClassName("fgdiv");
      for (let block of allBlocks) block.classList.add("fgdiv-anim");
    }, 1);
};

const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
];

const navUl = document.getElementById("nav");
const statsCtn = document.getElementById("stats-ctn");
const navColor = [true, false, false];

for (let i = 0; i < 3; i++) {
    navUl.children[i].children[0].addEventListener("click", () => {
        for (let j = 0; j < 3; j++) {
            if (i !== j && navColor[j] == true) {
                navColor[j] = false;
                navUl.children[j].children[0].classList.remove("nav-active");
            } else if (i == j && navColor[j] == false) {
                navColor[j] = true;
                navUl.children[j].children[0].classList.add("nav-active");
                displayBlocks((navUl.children[j].children[0].textContent).toLowerCase());
                setTimeout(() => {
                  const allBlocks = document.getElementsByClassName("fgdiv");
                  for (let block of allBlocks) block.classList.add("fgdiv-anim");
                }, 1)
            };
        };
    });
}

// console.log(Object.keys(data[0].timeframes).forEach(time => console.log(time.current)));

// console.log(Object.entries(data[0].timeframes));
// for (const [key, value] of Object.entries(data[0].timeframes["daily"])) {
//     console.log(`${key}: ${value}`);
// }
  
// Array.from(navUl.children).forEach((li, i) => {
//     li.children[0].addEventListener("click", () => {
//         navColor.forEach((state, j) => {
//             console.log(state);
//             if (j !== i) {
//                 state = false;
//                 if (navUl.children[j].children[0].classList.contains("nav-active")) {
//                     li.children[0].classList.remove("nav-active");
//                 }
//             } 
//             else if (j == i) {
//                 state = true;
//                 li.children[0].classList.toggle("nav-active");
//             };
//         });
//     });
// });

function displayBlocks(type) {
    while (statsCtn.firstChild && !statsCtn.firstChild.remove());

    for (let i = 0; i < 6; i++) {
        const bgDiv = document.createElement("div");
        bgDiv.classList.add("bgdiv");
        const bgImg = document.createElement("img");
        bgImg.className = "bgimg";
        const bgImgCtn = document.createElement("div");
        bgImgCtn.append(bgImg);
        bgImgCtn.className = "bgimgCtn";

        const fgDiv = document.createElement("div");
        fgDiv.className = "fgdiv";
        const fgHead = document.createElement("h4");
        
        const ellipseCtn = document.createElement("a");
        const ellipse = document.createElement("img");
        ellipse.src = "./images/icon-ellipsis.svg";
        ellipse.alt = "Ellipse Image";
        ellipseCtn.appendChild(ellipse);
        const headEllipse = document.createElement("div");
        headEllipse.append( fgHead, ellipseCtn );
        headEllipse.className = "head-ellipse"

        const time = document.createElement("h1");
        time.id = `time-header${i}`;
        const dayTime = document.createElement("p");
        dayTime.id = `daytime${i}`;

        let headerNo;
        let lastNo;
        let paraText;
        for (const [key, value] of Object.entries(data[i].timeframes[type])) {
            if (key == "current") {
                // if (type)
                // time.textContent = `${value}hrs`;
                headerNo = value;
    
            } else {
                if (type == "daily") lastNo = value, paraText = "Yesterday - "; //dayTime.textContent = `Yesterday - ${value}hrs`
                else if (type == "weekly") lastNo = value, paraText = "Last week - "; //dayTime.textContent = `Last Week - ${value}hrs`
                else if (type == "monthly") lastNo = value, paraText = "Last Month - "; //dayTime.textContent = `Last Month - ${value}hrs`
            }
            // console.log(`${key}: ${value}`);
        }

        if (data[i].title == "Work") {
            fgHead.textContent = "Work";
            bgImg.src = "./images/icon-work.svg";
            bgImg.alt = "Work Icon";
            bgDiv.classList.add("work");
        } else if (data[i].title == "Play") {
            fgHead.textContent = "Play";
            bgImg.src = "./images/icon-play.svg";
            bgImg.alt = "Play Icon";
            bgDiv.classList.add("play");
        } else if (data[i].title == "Study") {
            fgHead.textContent = "Study";
            bgImg.src = "./images/icon-study.svg";
            bgImg.alt = "Study Icon";
            bgDiv.classList.add("study");
        } else if (data[i].title == "Exercise") {
            fgHead.textContent = "Exercise";
            bgImg.src = "./images/icon-exercise.svg";
            bgImg.alt = "Exercise Icon";
            bgDiv.classList.add("exercise");
        } else if (data[i].title == "Social") {
            fgHead.textContent = "Social";
            bgImg.src = "./images/icon-social.svg";
            bgImg.alt = "Social Icon";
            bgDiv.classList.add("social");
        } else if (data[i].title == "Self Care") {
            fgHead.textContent = "Self Care";
            bgImg.src = "./images/icon-self-care.svg";
            bgImg.alt = "Self Care Icon";
            bgDiv.classList.add("self-care");
        }

        const statDiv = document.createElement("div");
        statDiv.append( time, dayTime );
        statDiv.className = "stat-div";

        fgDiv.append( headEllipse, statDiv );

        bgDiv.append( bgImgCtn, fgDiv );

    //     console.log(bgDiv);
        statsCtn.appendChild(bgDiv);

        setTimeout(() => {
          animateValue(`time-header${i}`, 0, headerNo, 900);
        }, 1);
        setTimeout(() => {
          animateValue(`daytime${i}`, 0, lastNo, 900, paraText);
        }, 1);


        // fgDiv.classList.add("fgdiv-anim")
    };

    // const allBlocks = document.getElementsByClassName("fgdiv");
    // for (let block of allBlocks) block.classList.add("fgdiv-anim");
};

// function animateValue(id, start, end, duration, option) {
//   if (start === end) return;
//   let range = end - start;
//   let current = start;
//   let increment = end > start? 1 : -1;
//   let stepTime = Math.abs(Math.floor(duration / range));
//   const obj = document.getElementById(id);
//   let timer = setInterval(function() {
//     current += increment;
//     // console.log(end);
//     if (id.includes("daytime")) obj.textContent = `${option}${current}hrs`
//     else obj.textContent = `${current}hrs`;
//     if (current == end) {
//         clearInterval(timer);
//     }
//   }, stepTime);

  // let timer = setInterval(function() {
  //   current += increment;
  //   console.log(end);
  //   objList.innerHTML = `${current}hrs`;
  //   if (current == end) {
  //       clearInterval(timer);
  //   }
  // }, stepTime);
// }

function animateValue(id, start, end, duration, option) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  console.log(obj)
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      if (id.includes("daytime")) obj.textContent = `${option}${value}hrs`
      else obj.textContent = `${value}hrs`;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}