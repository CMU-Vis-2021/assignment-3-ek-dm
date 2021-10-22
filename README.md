# Assignment 3

## Description of the goals
For our project, we decided on utilizing the dataset Darren used from Assignment 2 that analyzed the number of police killings in the US in 2015. While we could have explored how features such as gender or age affected the killings, for this assignment, we decided to focus on the attribute specifically related to race/ethnicity. To compare the count of each ethnicity easily, we decided to create a bar chart to represent this information. 

## Design decisions
The bar graph provides an effective means of comparison between number of killings and race ethnicity, but the explicit count values for the killings cannot easily be determined. To help viewers get a detailed understanding of the differences in number of police killings in relation to race, an interactive tool was implemented. By hovering over the bars on the graph, the user can easily see a tooltip that provides the specific count for each ethnicity. Although this isn't a key feature, we originally wanted to implement several other interactive elements. Notably, we considered having a secondary chart appear when clicking one of the bars that would further breakdown the information and show the split between male and female killings. We also tried to implement a way to sort the bar chart from ascending / descending order. Having said that, we were ultimately unsuccessful in implementing these features, although some attempts can still be seen through the commented sections of main.js.

## Development Process
Overall, we collaboratively worked on the assignment, from researching other D3 examples online, to debugging and testing the code. With the exception of using Darren's data set from the last assignment and using that as a reference to select what kind of interactive graph we wanted to make, we spent almost all of our time working on programming and implementing the code. In total, we spent roughly 15-16 hours on the assignment. A lot of time was spent trying to utilize reference material we found online and tweaking it so that it would work with our data set and code. Having said that, since neither one of us had ever used D3 before this class, this was something we struggled with a lot and failed to implement a lot of the features that we initially had wanted to, such as a creating a secondary stacked graph, or a way to sort the bar chart from ascending / descending order. 

# a3-template

Template for Assignment 3. It comes pre-loaded with D3 and Vega.

## Setup

This template uses the same setup as the D3 crashcourse template.

To run it, use the following commands:

1. Install Node.js and NPM from https://nodejs.org/en/download/.
2. Clone this repository, and cd into the directory.
3. Open VSCode and open the folder you just cloned.
4. In this folder, run `npm i` to install the dependencies.
5. Open the URL displayed in the terminal (usually http://localhost:3000/). If you open the html file directly, your changes will not update the website.
6. Run `npm run dev` to watch for changes and host the web application.

You can add any changes to github using `git add .` and `git commit -m "message"` and `git push origin master`.

Please email [cabrera@cmu.edu](mailto:cabrera@cmu.edu) if you run into any issues, or come to office hours for debugging.
