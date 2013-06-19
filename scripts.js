//The Tasks
var tasks = ['Cleaned Room', 'Swept', 'Made Tiramisu', 'Instagramed Tiramisu', 'Ate Tiramisu'];

document.write("<p>Today's Accomplishments:</p> <br> <ul>");
//The Loop
for(var i = 0; i < tasks.length; i++) {
    document.write('<li>' + tasks[i] + '.</li>');
}

document.write('</ul>');

//Created unordered list