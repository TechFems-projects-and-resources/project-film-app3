## Project Film App

### The goal of this project is to practice working with React, specifically reacting to changes

We will be using HTML, CSS, JavaScript and React.

**Basic functionality:** we want our app to request data from the Studio Ghibli API (https://ghibliapi.herokuapp.com), to show films, locations, film directors etc. 

**Additional functionality:** search function so that the user can search films, locations, and people.

Note: the basic CSS code has been created in the `index.css` file. Don't forget to import the css! This is what the app will look like (left: basic version, right: full version including search functionality):  

<img src="/studio_ghibli_basic.png" width="380" /><img src="/studio_ghibli_with_search.png" width="380" />  

---

### For starters: level 1

**Steps:**  

1. Create a new folder on your local computer with the name: project-react-film-app
1. Track your code with Git by using git init in the terminal
1. Create an index.html file with the general template code (there is a shortcut you can use!)
1. Create a style.css file and add this to your HTML file as `<link>` (check how to add CSS to an HTML file)
1. Make sure you have *Ghibli Film App* as the title in your HTML (this will show in the tab when your app runs in the browser)
1. Build the page according to the example and improve the design any way you want (it is not very attractive as it is now)
1. In the **resources_info** repository you will find links to websites where you can download pictures, images, icons etc. for free if you want to change the layout, font, colours etc.
1. Feel free to use Bootstrap if you also want to practise that 😊

---

### For more advanced students: level 2 (first part)

**Basic project:**  

1. Create a project folder using `npx create-react-app`
1. Delete all unnecessary code
1. Make sure you have *Ghibli Film App* as the title in your HTML (this will show in the tab when your app runs in the browser)
1. Create a header in App.js (see example image above)
1. Create a Films.js component 
1. In Film.js write the code to get all the films from Studio Ghibli when the page loads (use the Ghibli API: https://ghibliapi.herokuapp.com)
1. Create const `films` and `setFilms` to update this; you use React's `useEffect()` method to load the films on the page with a `fetch()` request
1. Show the films on the screen as in the example image above: a header with the film title, and then the film details Director, Producer, Release date and Rotten Tomato Score
1. Add any styling you like to make it look better and more professional

---

### For graduates: level 2 (second part)

**Full project:**

1. Create a Search.js component
1. Add an input field for a search plus a button with *Search*
1. Add search functionality to your app so that when the user types one character in the search box, the results (film titles starting with that character) should show up immediately; each time when more characters are typed, the results that do not match should disappear
1. For this, you have to create a search variable and a function to update the search in the Films component; the initial state is an empty string
1. The Search component gets passed the update function from Films as a prop
1. In the Search component, you create an input field for the search string; use the onChange event to update the search variable every time a character is typed as input
1. The Films component should use the search variable that is updated continuously for a filter across the film titles
1. The search string should return any film title that starts with the string that is typed into the input field; it should show the header with the film name, and the details Director, Producer, Release date and Rotten Tomato Score
1. Add a button to clear the search. When the `Clear search` button is clicked, the filtered films are cleared and instead the full film list shows on the page
1. When the `Clear search` button is clicked, the search input is removed as well

---

### .... and for an extra challenge! level 3

<img src="/extra_filmlist.png" width="380" />       <img src="/extra_filmlist_details.png" width="380" />  

You are going to change the app layout completely (see examples above):  
1. Align the content to the left
1. Show the film title at the top, and the description of the film under the title
1. Create a button under the film description that says 'Show extra info' when the button is not clicked (view is not expanded).
1. When the button is clicked, it should say 'Hide extra info'
1. When the button is clicked, the view should expand to show the following details:
    1. Original title
    1. Original title romanised
    1. Director
    1. Producer
    1. Released in: *this should show the year*
    1. Running time *to be shown as h:m, for example: 1h:15m*

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). We can do this together during a CodeWomen coding session: it is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. You will probably see:  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (fetch)`  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (push)`

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.

PS: if you work for a company that has a corporate social responsibility policy and wants to support women in tech, then here is the link to the [fundraising overview of MigraCode](https://docs.google.com/spreadsheets/d/1Zs-Mmi39bcjVw2U-iEQWSHSjkb-EmET-j1WB2oJF45Q/edit#gid=0).

---