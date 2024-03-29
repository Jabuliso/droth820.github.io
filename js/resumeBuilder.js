
//Prepend name and role to beginning of header tag
var name = "David Roth"
var formattedName = HTMLheaderName.replace( "%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Create a biography
var skills = [" JS ", " HTML ", " CSS ", " Python "];
var bio = {
	"name": "David Roth",
	"role": "Web Developer",
	"message": "Welcome to my portfolio!",
    "bioPic": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/4/000/131/03a/03a549e.jpg",
	"contacts": {
		"mobile": "999.999.9999",
		"email": "dudeman@google.com",
		"location": "Chandler, Arizona"
	},
	"skills": skills
};
var headShot = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(headShot);

$("#main").append(bio.contacts.location);

//Contact Information.
var contact = {
    "mobile": "480.223.3849",
    "email": "davidroth0820@gmail.com",
    "linkedin": "<a href='www.linkedin.com/in/davidroth3/' target='_blank'>LinkedIn</a>"
}
//Work object
var work = {
    "jobs": [
            {
                "employer": "<a href='https://www.workiva.com/' target='_blank'>Workiva</a>",
                "title": "Instructional Designer",
                "location": "Scottsdale, AZ",
                "dates": "2013 - Current",
                "description": "Working with subject matter experts and other Instructional Designers I build interactive e-learning courses. learning guides, and materials to support instructor led classroom environments."

            },
            {
                "employer": "<a href='http://www.ebayenterprise.com/marketing_solutions/display_retargeting/' target='_blank'>Fetchback (Now Ebay)</a>",
                "title": "Training Manager",
                "location": "Tempe, Arizona",
                "dates": "2012 - 2013",
                "description": "Developed and managed Fetchback's new employee onboarding program. Additionally, I conducted Train the Trainer courses and maintained employee training records on the company LMS."

            },
            {
                "employer": "<a href='http://www.ebayenterprise.com/marketing_solutions/display_retargeting/' target='_blank'>Fetchback (Now Ebay)</a>",
                "title": "Technical Writer",
                "location": "Tempe, Arizona",
                "dates": "2011 - 2012",
                "description": "I started working for Fetchback when they were exiting their start-up phase. Initially, I came on board as a Technical Writer with the purpose of create a knowledge base for the company. Additionally, I designed, developed, and maintained the company CMS (www.fetchback.info) and developed training material for the Account Management team."
            },
            {
                "employer": "<a href='http://www.cusd80.com/site/default.aspx?PageID=1' target='_blank'>Chandler Unified School District #80 (Hamilton High School)</a>",
                "title": "Science Educator",
                "location": "Chandler, Arizona",
                "dates": "2002 - 2011",
                "description": "As a science educator I taught Physical Science and collaborated on the development of the Physical Science curriculum in accordance with Arizona state educational standards. Facing a lack of funcing I created instructional videos using Flash, Final Cut, and Sony Vegas Movie Studio and wrote content manuals covering physical science topics. Additionally, I created several learning applications to help students learn math and science concepts."
            }
    ]
};
var courses = {
    "courses":[
        {
            "title": "Front-End Web Developer",
           "school": "<a href='https://www.udacity.com/' target='_blank'>Udacity</a>",
            "dates": "2014",
            "description": "Currently enrolled in Udacity's front-end developer course. Within this course I am continuing my programming education with an emphasis in creating interactive modern websites using HTML, CSS, and JavaScript."
        },
        {
            "title": "An Introduction to Interactive Programming in Python",
            "school": "<a href='https://www.coursera.org/' target='_blank'>Coursera and Rice University</a>",
            "dates": "2014",
            "description": "Learned the fundamentals of programming using the Python language. During this course I created several interactive games such as card games and asteroids."
        },
        {
            "title": "JavaScript Developer",
            "school": "<a href='http://www.w3schools.com/' target='_blank'>W3Schools</a>",
            "dates": "2013",
            "description": "Completed course on JavaScript development."
        },
        {
            "title": "CSS3",
            "school": "<a href='http://www.w3schools.com/' target='_blank'>W3Schools</a>",
            "dates": "2013",
            "description": "Completed course on CSS3."
        }
    ]
};
//Project object
var projects = {
    "projects": [
        {
            "title": "<a href='http://www.jarheadpros.com/' target='_blank'>Jarhead Professionals</a>",
            "dates": "2014",
            "description": "Jarhead Professionals is an organization allowing former U.S. Marines to socialize, network, and help others transition from military to civilian life. The purpose of this website is to keep members informed of upcoming events as well as advertise to potential members.",
            "images": "#"
        },

        {
            "title": "<a href='http://millenniumendo.com/' target='_blank'>Millenium Edndodontics<a>",
            "dates": "2013",
            "description": "This website was created to showcase Dr. Miller's practice. This website contains a contact form, interactive slide show, video, and Google map.",
            "images": "#"
        }

    ]
}

//Object literal notation using JASON
var education = {
    "education": [
        {
            "school":"<a href='http://nau.edu/' target = '_blank'>NAU</a?",
            "location": "Chandler, Arizona",
            "degree": "MEd",
            "major": "Instructional Design",
            "dates": "2002 - 2004"
        },

        {
            "school": "<a href='https://www.asu.edu/' target='_blank'>ASU</a>",
            "location": "Tempe, Arizona",
            "degree": "Post baccalaureate Teacher Certification",
            "major": "Secondary Education",
            "dates": "2000 - 2001"
        },

        {
            "school": "<a href='https://www.asu.edu/' target='_blank'>ASU</a>",
            "location": "Tempe, Arizona",
            "degree": "BS",
            "major": ["Sociology", "Secondary Ed"],
            "dates": "1994 - 1996"
        }    
    ]
}



$("#main").append(education.name, education.location, education.years);
$("#main").append(work.empolyer, work.position, work.years);

//Display biographical information
if(bio.skills.length >0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

//Display work history.
function displaysWork(){
    //iterate through work object and append to HTMLworkStart
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").append(formattedEmployer);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    
}
}
displaysWork();

//Display list of projects.
projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        /*if(projects.projects[project].images.length > 0) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);

        }*/

    }
}
projects.display();

//Online Courses section.
courses.display = function(){
    for(item in courses.courses){
        $("#onlineCourses").append(HTMLonlineClassesStart);

        var formattedName = HTMLonlineSchool.replace("%data%", courses.courses[item].school);
        $(".course-entry:last").append(formattedName);
        
        var formattedTitle = HTMLonlineTitle.replace("%data%",courses.courses[item].title);
        $(".course-entry:last").append(formattedTitle);

        var formattedDates = HTMLonlineDates.replace("%data%", courses.courses[item].dates);
        $(".course-entry:last").append(formattedDates);

        var formattedDescription = HTMLonlineDescription.replace("%data%", courses.courses[item].description);
        $(".course-entry:last").append(formattedDescription);


    }
}
courses.display();

//Display education history.
education.display = function(){
    for(edu in education.education){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.education[edu].school);
        $(".education-entry:last").append(formattedName);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.education[edu].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.education[edu].degree);
        $(".education-entry:last").append(formattedDegree, " ");

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.education[edu].major);
        $(".education-entry:last").append(formattedMajor);

        var formattedDates = HTMLschoolDates.replace("%data%", education.education[edu].dates);
        $(".education-entry:last").append(formattedDates, "<br>");
    }
}
education.display();



//Allows for user to click on button to change name format.
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$("#main").prepend(internationalizeButton);

//Add Google map to display where I have lived and worked.
$("#mapDiv").append(googleMap);



