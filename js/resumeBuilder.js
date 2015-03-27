// Patty Heffner
// Project 2 = Javascript Basics Course
// March 23, 2015

var bio = {
        "name" : "Patty Heffner",
        "contacts" :
            {
                "mobile" : "800-555-1234",
                "email" : "pjheffner@gmail.com",
                "github" : "pjheffner",
                "twitter" : "n/a",
                "location" : "Middletown, NJ"
            },
        "welcomeMessage" : "Experienced developer with a diverse background. Works well with others. Committed to client satisfaction, standards, and documentation. Takes pride in being thorough.",
        "skills" : ["HTML/CSS3", "JS/jQuery", "PERL/CGI", "Oracle/MySql", "D3", "Git/GitHub/SVN", "UNIX/Linux"],
        "biopic" : "images/lucy.jpg",
        "display" :
            function () {
                $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
                $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

                $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
                $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
                $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
                $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
                $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

                $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
                $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

                if (bio.skills.length > 0) {
                    $("#header").append(HTMLskillsStart);
					console.log(bio.skills);
                    for (skill in bio.skills) {
                        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
                    }
                }
	        },
        "displayFooter" :
            function() {
                $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
                $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
                $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
                $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
                $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            }
}

var work= {
        "jobs" : [
            {
                "employer" : "AT&T",
                "title" : "Principle Technical Staff Member",
                "location" : "Middletown, NJ",
                "dates" :	"1985-Present",
                "description" : "UNIX/Linux Developer. Design and Implement various Applications in multiple languages. Experienced in Knowledge Management Systems, Customer Service Websites, Mail Systems, and Web-based reporting systems. "
            },
            {
                "employer" : "Alcoa",
                "title" : "Programmer",
                "location" : "Pittsburgh, PA",
                "dates" : "1982-1985",
                "description" : "Implemented In-house Accounts Receivable System with 8 other developers."
            }
        ],
        "display" :
            function() {
                for (job in work.jobs) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
                    var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
                    var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
                    $(".work-entry:last").append(formattedworkEmployerTitle);
                    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
                    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
                    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
                }
            }
}

var projects = {
        "projects": [
            {
                "title" : "Network Topology",
                "dates" : "2015-Present",
                "description" : "Design and Implement a GUI to visualize our Network Topology",
                "images" : ["images/wip.jpg"]
            },
            {
                "title" : "Mobile Security Dashboard",
                "dates" : "2012-2015",
                "description" : "Design and Implement a GUI to show various threats and statistics regarding our Mobility network",
                "images" : ["images/offlimits.jpg"]
            }
        ],
        "display" :
            function () {		// this ADDS the property 'display' to the projects object
                for (proj in projects.projects) {	// proj in an index....
                    $("#projects").append(HTMLprojectStart);
                    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
                    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
                    var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
 
                    $(".project-entry:last").append(formattedprojectTitle);
                    $(".project-entry:last").append(formattedprojectDates);
                    $(".project-entry:last").append(formattedprojectDescription);
		
                    if (projects.projects[proj].images.length > 0) {
                        for (image in projects.projects[proj].images) {
                            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                            $(".project-entry:last").append(formattedprojectImage);
                        }
                    }
                }
            }
}

var education= {
        "schools": [
            {
                "name" : "Duquesne University of Pa",
                "location" : "Pittsburgh, Pa",
                "degree" : "M.B.A.",
                "majors" : ["Economics"],
                "date" : "1983",
                "url" : "https://www.duq.edu"
            },
            {
                "name" : "Indiana University of Pa",
                "location" : "Indiana, Pa",
                "degree" : "B.S.",
                "majors" : ["Business Admin-Mgmt Info Systems"],
                "date" : "1982",
                "url" : "https://www.iup.edu"
            }
        ],
        "onlineCourses": [
            {
                "title" : "Javascript Basics",
                "school" : "Udacity",
                "date" : "2015",
                "url" : "https://www.udacity.com/course/ud804"
            },
            {
                "title" : "How to Use Git and GitHub",
                "school" : "Udacity",
                "date" : "2015",
                "url" : "https://www.udacity.com/course/ud775-nd"
            }
        ],
        "display" 				: 
            function () {
                for (schl in education.schools) {
                    $("#education").append(HTMLschoolStart);
                    var formattededucationName = HTMLschoolName.replace("%data%",education.schools[schl].name);
					var formattededucationDegree = HTMLschoolDegree.replace("%data%",education.schools[schl].degree);
					var formattededucationNameDegree = formattededucationName + formattededucationDegree;
                    var formattededucationDates = HTMLschoolDates.replace("%data%",education.schools[schl].date);
                    $(".education-entry:last").append(formattededucationNameDegree);
                    $(".education-entry:last").append(formattededucationDates);
		
                    if (education.schools[schl].majors.length > 0) {
                        for (major in education.schools[schl].majors) {
                            var formattededucationMajor = HTMLschoolMajor.replace("%data%", education.schools[schl].majors[major]);
                            var formattededucationLocation = HTMLschoolLocation.replace("%data%",education.schools[schl].location);
                            $(".education-entry:last").append(formattededucationMajor);
                            $(".education-entry:last").append(formattededucationLocation);
                        }
                    }
                }
                if (education.onlineCourses.length > 0) {
                    $("#education").append(HTMLonlineClasses);
                    for (onl in education.onlineCourses) {
                        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onl].title);
                        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onl].school);
                        var formattedonlineTitleSchool = formattedonlineTitle + " - " + formattedonlineSchool;
                        var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onl].date);
                        var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onl].url);
                        var formattedonlineTitleSchool = formattedonlineTitle + " - " + formattedonlineSchool;
                        $("#education").append(HTMLschoolStart);
                        $(".education-entry:last").append(formattedonlineTitleSchool);
                        $(".education-entry:last").append(formattedonlineDates);
                        $(".education-entry:last").append(formattedonlineURL);
                    }
                }
            }
}

//Add data from objects to html
bio.display();
work.display();
projects.display();
education.display();
bio.displayFooter();

//Add Google Map
$("#mapDiv").append(googleMap);

//Count clicks and log to console
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
