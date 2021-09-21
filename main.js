let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    // this.setAttribute("aria-expanded", "false");
    // this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    // this.setAttribute("aria-label", "close menu");
    // this.setAttribute("aria-expanded", "true");
  }
});

// nav bar toggle functionality
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("slider");
let mainmenu = document.getElementById("main");

// document.addEventListener('DOMContentLoaded', function () {
//     navBarToggle.addEventListener('click', function () {
//         mainNav.classList.toggle('active');
//     });
// });
function navbarToggle() {
  mainNav.classList.toggle("closed");
  // mainmenu.classList.toggle('opened');
}
// navv bar toggle functionality ends here

// about us page dom manipulation
/* Storing multi-line JSON string in a JS variable
    using the new ES6 template literals */
var json = `{
      "Advisory Team": [
          {
            "name": "Dr. Malvika Neeraj",
            "Qualification": "MBBS | MBA(Pharmaceutical Management)",
            "Picture": "https://i.ibb.co/Y3N13bq/Dr-Malvika-Neeraj.jpg",
            "Linkedin": "https://www.linkedin.com/in/dr-malvika-neeraj-671967b9/"
          },
          {
            "name": "Dr.Harshvardhan Bansode",
            "Qualification": "MBBS | AFIH",
            "Picture": "https://i.ibb.co/P4G2rmy/Dr-Harshvardhan-Bansode.jpg",
            "Linkedin": "https://www.linkedin.com/in/harshvardhan-bansode-1bb731111/"
          },
          {
            "name": "Dr. Vivek Waghela",
            "Qualification": "MBBS | MD(Medicine)",
            "Picture": "https://i.ibb.co/RQ5kQ74/Dr-Vivek-Waghela.jpg",
            "Linkedin": "https://www.linkedin.com/in/vivek-waghela-a45ab388/"
          },
          {
            "name": "Dr. Dipika Shah",
            "Qualification": "MBBS | MD",
            "Picture": "https://i.ibb.co/XjP27vq/Dr-Dipika-Shah.jpg",
            "Linkedin": "link"
          }
        ],
        "HealthCare Team": [
          {
            "name": "Priyancka Mertia",
            "Qualification": "MSc(Biochemistry) | MBA(Pharmaceutical Management)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Uddhao Zambhare ",
            "Qualification": "MBBS | MD(Skin & VD)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Afreen Mulla",
            "Qualification": "MBBS | MS(OBGY)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Himani Murdeshwar",
            "Qualification": "MBBS",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Pooja Shah",
            "Qualification": "MBBS, MD (Ophthalmology), DNB, FICO(Retina), FAICO(Retina)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Eshan Dabhade",
            "Qualification": "MBBS, MD (Pediatrics)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Vaishal Shah",
            "Qualification": "MBBS,MD(Cardiology),IDCCM",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Salman Patel",
            "Qualification": "MBBS,MD(Ophthalmology)",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Preeti Yadav",
            "Qualification": "MBBS",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Dr Bijal Sangoi",
            "Qualification": "MBBS, MD (Psychiatry)",
            "Picture": "",
            "Linkedin": ""
          }
        ],
        "Tech And Design": [
          {
            "name": "Abhi Saxena",
            "Qualification": "",
            "Picture": "https://i.ibb.co/PFHdbDM/Abhi-Saxena.jpg",
            "Linkedin": "https://www.linkedin.com/in/abhi-saxena-722b0b142/"
          },
          {
            "name": "Manat Singh",
            "Qualification": "",
            "Picture": "",
            "Linkedin": "https://www.linkedin.com/in/manat-singh-7a8420121"
          },
          {
            "name": "Rishi Arya Juturu",
            "Qualification": "M.Eng Internetworking",
            "Picture": "https://i.ibb.co/StJ5R4s/Rishi-Arya-Juturu.jpg",
            "Linkedin": "https://www.linkedin.com/in/jutururishiarya/"
          },
          {
            "name": "Mahika",
            "Qualification": "",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Navyata Neeraj",
            "Qualification": "",
            "Picture": "",
            "Linkedin": "https://www.linkedin.com/in/navyata-neeraj/"
          }
        ],
        "Project Design And Development": [
          {
            "name": "Vaishnavi Kanuganti",
            "Qualification": "",
            "Picture": "https://i.ibb.co/6rm1kLD/Vaishnavi.jpg",
            "Linkedin": "https://www.linkedin.com/in/vaishnavikanuganti"
          },
          {
            "name": "Shubhang Luniya",
            "Qualification": "",
            "Picture": "",
            "Linkedin": "https://www.linkedin.com/in/shubhang-luniya-895a91159/"
          }
        ],
        "Community Engagement": [
          {
            "name": "Dr Rashika Anand",
            "Qualification": "",
            "Picture": "",
            "Linkedin": "https://www.linkedin.com/in/rashika-anand-777853154/"
          },
          {
            "name": "Jennifer Collins",
            "Qualification": "",
            "Picture": "",
            "Linkedin": "https://www.linkedin.com/in/jennifer-collins-a0480a204//"
          },
          {
            "name": "Mahek Shaikh",
            "Qualification": "",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Riya Sharma ",
            "Qualification": "",
            "Picture": "",
            "Linkedin": ""
          },
          {
            "name": "Anjali Ujjainwal ",
            "Qualification": "",
            "Picture": "",
            "Linkedin": ""
          }
        ]
         }`;

// Converting JSON object to JS object

var obj = JSON.parse(json);

var main_div = document.getElementsByClassName("team_listing")[0];
for (var key in obj) {
  var div = document.createElement("div");
  div.className = "departmentName";
  div.id = "departmentName";
  var dept_name = document.createElement("p");
  dept_name.innerHTML = key;
  dept_name.className = "heading__4";
  let hr = document.createElement("hr");
  hr.className = "line";
  var row_div = document.createElement("div");
  row_div.className = "row";
  for (key1 in obj[key]) {
    var our_team = document.createElement("div");
    our_team.className = "our-team";
    // div picture in card
    var div_pic = document.createElement("div");
    div_pic.className = "picture";
    var div_pic_img = document.createElement("IMG");
    div_pic_img.className = "img-fluid";
    if (obj[key][key1]["Picture"].length != 0) {
      div_pic_img.setAttribute("src", obj[key][key1].Picture);
      div_pic_img.setAttribute("alt", obj[key][key1].name);
    } else {
      div_pic_img.setAttribute("src", "./images/dummy-image.jpg");
      div_pic_img.setAttribute("alt", obj[key][key1].name);
    }

    // memeber information in "team-contnet"
    var team_content = document.createElement("div");
    team_content.className = "team-content";
    const name = document.createElement("H2");
    name.className = "name";
    name.innerHTML = obj[key][key1]["name"];
    const qualification = document.createElement("H4");
    qualification.className = "title";
    if (obj[key][key1]["Qualification"].length != 0) {
      qualification.innerHTML = obj[key][key1]["Qualification"];
    }
    team_content.append(name, qualification);
    const ul = document.createElement("UL");
    ul.className = "social";
    const li = document.createElement("LI");
    if (obj[key][key1]["Linkedin"].length != 0) {
      const a = document.createElement("a");
      a.setAttribute("href", obj[key][key1]["Linkedin"]);
      a.setAttribute("class", "fab fa-linkedin");
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("target", "_blank");
      li.appendChild(a);
      ul.appendChild(li);
    }

    div_pic.appendChild(div_pic_img);
    our_team.append(div_pic, team_content, ul);
    our_team.classList.add("our-team");
    row_div.appendChild(our_team);
    div.append(dept_name, hr, row_div);
  }
  main_div.append(div);
}


// ------------------------------------
// ------------------------------------ 
// 
//        Seekh Page Script Starts
// 
// ------------------------------------
// ------------------------------------



// ------------------------------------
// ------------------------------------ 
// 
//         Seekh Page Script Ends
// 
// ------------------------------------
// ------------------------------------

