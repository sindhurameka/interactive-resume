/*Following are the Json Objects which contain the data about bio,work,education and projects
in the specified format. */
var bio = {
    "name": "Sindhura",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "999-999-9999",
        "email": "examplefname@gmail.com",
        "github": "url",
        "location": "California"
    },
    "welcomeMessage": "Welcome to my interactive resume",
    "skills": ["Javascript", "CSS", "HTML", "Bootstrap"],
    "biopic": "images/female.jpg"

};

var work = {
    "jobs": [{
        "employer": "College",
        "title": "student-worker",
        "location": "New York",
        "dates": "In Progress",
        "description": "Labbie"
    }, {
        "employer": "Icontent",
        "title": "Intern",
        "location": "Hyderabad",
        "dates": "02/01/2013 - 08/01/2013",
        "description": "Web Developer"
    }]
};

var education = {
    "schools": [{
        "name": "N.Y College",
        "location": "New York",
        "degree": "Master of Science",
        "majors": ["Information-Tech"],
        "dates": "08/25/2013 - 05-25-2016",
        "url": "schools/url"
    }, {
        "name": "XYZ College",
        "location": "Hyderabad",
        "degree": "Bachelor of Technology",
        "majors": ["Computer Science"],
        "dates": "08/25/2008 - 05-25-2012",
        "url": "schools/url"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "09-10-2016",
        "url": "https://www.udacity.com/"
    }]
};

var projects = {
    "projects": [{
        "title": "HTML projects",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis mauris a sem eleifend porttitor. Nullam a consequat erat Mauris vel accumsan erat, non fringilla lorem. Mauris sit amet erat rutrum, gravida libero quis, ultricies turpis. Fusce non neque ex.",
        "images": ["http://placehold.it/350x150"]
    }, {
        "title": "Webpage project",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis mauris a sem eleifend porttitor. Nullam a consequat erat Mauris vel accumsan erat, non fringilla lorem. Mauris sit amet erat rutrum, gravida libero quis, ultricies turpis. Fusce non neque ex.",
        "images": ["http://placehold.it/350x150"]
    }]

};

/* As Instructed the display fuction pretaning to each object is encapsulated into the object.
Here dot notation and functions are placed outside the JSON object for code readability */

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcome);
    $("#header").append(formattedPic);

    var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedPhone, formattedEmail, formattedGit, formattedLocation);
    $("#footerContacts").append(formattedPhone, formattedEmail, formattedGit, formattedLocation);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};



work.display = function() {

    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var employer, title, dates, location, desc;
        employer = HTMLworkEmployer.replace("%data%", job.employer);
        title = HTMLworkTitle.replace("%data%", job.title);
        formattedEmpTitle = employer+title;
        dates = HTMLworkDates.replace("%data%", job.dates);
        location = HTMLworkLocation.replace("%data%", job.location);
        desc = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmpTitle, dates, location, desc);
    });

};


projects.display = function() {

    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var title, dates, desc;
        title = HTMLprojectTitle.replace("%data%", project.title);
        dates = HTMLprojectDates.replace("%data%", project.dates);
        desc = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(title, dates, desc);
        for (var i = 0; i < project.images.length; i++) {
            var projectImage = HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(projectImage);
        }

    });
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        var name, degree, dates, location, majors;
        name = HTMLschoolName.replace("%data%", school.name);
        degree = HTMLschoolDegree.replace("%data%", school.degree);
        formattedNameDegree = name+degree;
        location = HTMLschoolLocation.replace("%data%", school.location);
        dates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedNameDegree, location, dates);
        for (var i = 0; i < school.majors.length; i++) {
            var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
            $(".education-entry:last").append(schoolMajor);
        }
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var title, school, dates, url;
        $("#education").append(HTMLschoolStart);
        title = HTMLonlineTitle.replace("%data%", course.title);
        school = HTMLonlineSchool.replace("%data%", course.school);
        formattedTitleSchool = title+school;
        dates = HTMLonlineDates.replace("%data%", course.dates);
        url = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedTitleSchool, dates, url);
    });

};

// All the functions are called

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

/*Addition asthetic changes that are made to the project are : font-family change to 'Lato' and
header background color change to #2f4f4f */


