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
          "Picture": "https://ibb.co/jbXSxJz",
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
          "Picture": "https://ibb.co/JvCm5wB",
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
          "Picture": "https://ibb.co/MZsGmQP",
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
          "Picture": "yes",
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

// Defining recursive function to print nested values
function printValues(obj) {
  for (var k in obj) {
    if (obj[k] instanceof Object) {
      printValues(obj[k]);
    } else {
      document.write(obj[k] + "<br>");
    }
  }
}

// Printing all the values from the resulting object
// printValues(obj);

var img = document.createElement("img");
img.setAttribute("height", "300");
img.setAttribute("width", "250");

document.getElementById("div-demo").innerHTML = obj["Advisory Team"][0]["name"];
document.getElementById("div-demo1").innerHTML = obj["Advisory Team"][0]["Qualification"];
img.src = obj["Advisory Team"][0]["Picture"];
document.getElementById("div-demo3").innerHTML = obj["Advisory Team"][0]["Linkedin"];

document.getElementById("div-demo2").appendChild(img);

document.getElementById("demo").innerHTML = obj["Advisory Team"][1]["name"];
document.getElementById("demo1").innerHTML = obj["Advisory Team"][1]["Qualification"];
document.getElementById("demo2").innerHTML = obj["Advisory Team"][1]["Picture"];
document.getElementById("demo3").innerHTML = obj["Advisory Team"][1]["Linkedin"];

