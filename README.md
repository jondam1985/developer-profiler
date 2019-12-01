# developer-profiler

# Description

This project is a command line interface (CLI) app that generates an html file and a pdf file from given a GitHub username and a colour option. The app uses [Inquirer]( https://www.npmjs.com/package/inquirer ) to generate an interface that collects the GitHub username and the user's favourite colour. The username input is used to generate two GET requests using [Axios]( https://www.npmjs.com/package/axios ) to the [GitHub api]( https://api.github.com/users/{username} ). The responses from the API and the favourite colour selection are passed to a function that generates the html file using NodeJS's File System (the filename will be the same as the passed username). Lastly, the html file is converted to PDF using [Puppeteer]( https://www.npmjs.com/package/puppeteer ). The CLI app was coded using HTML5, CSS, JavaScript and NodeJS.

__Sample of generated HTML file__

<img src=" https://content.screencast.com/users/nrt.damian/folders/Snagit/media/6c9106e2-65c6-4970-9bc8-f62e9eb20683/12.01.2019-14.14.png " alt="HTML file using user &quot;jondam1985&quot; and favourite colour &quot;blue&quot;" style="zoom:50%;" />

  __Sample of generated PDF file__

<img src=" https://content.screencast.com/users/nrt.damian/folders/Snagit/media/9fd7ddd9-5f3f-4122-8f2e-23bac40b7868/12.01.2019-14.15.png " alt="PDF file using user &quot;jondam1985&quot; and favourite colour &quot;blue&quot;" style="zoom:50%;" />



# Content

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Collaboration](#Collaboration)

# Installation

To use the app please clone or download this repo: http://github.com/jondam1985/developer-profiler.

Once cloned run `$npm install --save` inside the folder containing the app to install all the dependencies listed in the `package.json`file. As an alternative you can choose to install each dependency separately:

- To install `Inquirer` run `$npm install inquirer --save`
- To install `Axios` run `$npm install axios --save`
- To install `Puppeteer` run `$npm install puppeteer --save`

The app is ready to use.

If you are running `node v5.0.0` or above you can omit the `--save` value.

# Usage

Navigate to the folder containing the app using your favourite shell (e.g. Terminal on Mac, Git Bash on Windows, VS Code Terminal, etc.) and run `node index.js`.

Now you will prompted to enter a username. Enter any GitHub username and press enter. Then you will be asked to choose your favourite colour. Move through the options using the up and down cursor keys and make your selection by pressing enter.

After the information has been entered the HTML file will be generated first and then the PDF file. You will see a message after each file has been created. The files will be stored in the same directory as the app.

![Running the app]( https://content.screencast.com/users/nrt.damian/folders/Snagit/media/2c297c4b-e614-489c-80a4-860653709a8c/12.01.2019-14.25.png )

__Notes:__ 

- The [HTML](./jondam1985.html) and [PDF](./jondam1985.pdf) files in this repo where created with `username = jondam1985` and `favourite colour = blue`.
- The HTML and PDF files will be named after the entered username.
- If you run the app again using a different username a new HTML file and a new PDF file will be created.
- If you run the app again using the same username the existing HTML and PDF file will be overwritten.
- If you use a non-existing username both files will be created but will be populated with _NULL_ or _UNDEFINED_.

# Credits

### Author

This app was developed by [Damian Ruiz](https://github.com/jondam1985) as an assignment project for the [UofT Full Stack Coding Bootcamp]( https://bootcamp.learn.utoronto.ca/coding ).

### Dependencies

- CLI interface created using [Inquirer]( https://www.npmjs.com/package/inquirer ).
- API calls made using [Axios]( https://www.npmjs.com/package/axios ).
- HTML to PDF conversion made using [Puppeteer]( https://www.npmjs.com/package/puppeteer )

### APIs

- GitHub user information provided by [GitHub users API]( https://api.github.com/users/{username}).
- GitHub user stars information provided by [GitHub user stars API](https://api.github.com/users/{username}/starred).

# License

This app is licensed under the MIT License. Please see [LICENSE](./LICENSE) for more information.

# Collaboration

Please free feel to improve and add to this project as you see fit. It'd be awesome to have someone add a web interface or more styling options.

If you want to discuss about this project or any of my other projects please feel free to <a href="mailto:nrt.damian@gmail.com">send me an email</a> or [follow me on GitHub](https://github.com/jondam1985).