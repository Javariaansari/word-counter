#! /usr/bin/env node
// Import athe 'inquirer' module, which is a commond line interface for node.js
import inquirer from "inquirer"

// Declear a constant 'answers' and assign it to the result of inqurier.prompt function

const answers :{
    sentence:string
}=await inquirer.prompt([
        {
          name:"sentence",
          type:"input",
          message:"Enter your sentence to count the word:"
        }
    ])
    const words= answers.sentence.trim().split(" ");

    // print the array of words to the console
    console.log(words)

    

    // print the words count of the sentence to the console
    console.log(`your sentence word count is ${words.length}`)