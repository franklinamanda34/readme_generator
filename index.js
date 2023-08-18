// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const util = require('util');
const fs = require('fs');



// TODO: Create an array of questions for user input


const questions = [ {
    type: 'input',
message: "What is the title of the project?",
name: 'title',
default: 'README',
validate: function (answer) {
    if (answer.length < 1) {
        return console.log("Title must be submitted");
    }
    return true;
    }
},

{
    type: 'input',
message:"Enter github username.",
name:'username',
default:'franklinamanda34',
validate: function (answer){
    if(answer.length < 1) {
        return console.log("username required."); 

    }
    return true;
}
},

{
    type: 'input',
    message:"Enter email address.",
    name:"email",
    default:'franklinamanda34outlook.com',
    validate: function (answer){
        if(answer.length < 1) {
            return console.log("email required.");
        }
        return true;
    }
},





{
    type:'list',
    message: "What liscense is required?",
    choices: ['MIT', 'None'],
    name:'license'
}

];


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
async function init() {
    console.log("starting application");
    try {
        const answers = await inquirer.prompt(questions);
        const readmeContent = `
        # ${answers.title}
        ## Github Username
        ${answers.username}
        ## Email Address
        ${answers.username}
        ## License
        ${answers.license}
         `
         
        await writeToFile("README.md", readmeContent);
        console.log("README.md created successfully.");
    } catch (error) {
        console.error("error occured..", error);
    }
    }
   
    const writeToFileAsync= util.promisify(fs.writeFile);
    

async function writeToFile(filename,data)
 {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(`Error writing to ${README.md}:`, err);
        } else {
            console.log('README.md confirmed');
        }
    });
}



// Function call to initialize app
init();
