<h1>Library loading widgets recursively</h1>
<h3>How to use</h3>

1. Include the library source code in HTML -
> - <script src="js/LibraryX.js"></script>
<br>
2. Call X.init method, passing it the root node where the widgets should be loaded
<br>
3. All widgets should be located in folder named widgets and when including it in html,it should be defined as a path, for instance, the location of widget with file name MySuperWidget.js, should be included in HTML like this -
<br/>
<blockquote>&lt;div widget="widgets/MySuperWidget.js"&gt;&lt;/div&gt;</blockquote>

<h1>Notes</h1>

<h3>I don't have done and fail buttons, and done and fail are states of the library or it's widget, so if I understood the requirements of the library correctly, a button cannot trigger those events</h3>

<h2>P.S.</h2>
<h3>Haven't met all the requirements, because the library itself was complex, and consumed around 20 hours, and I guess this implementation itself demonstrates my skills and there will be no need to implement the rest, as majority of them were met, still if it's needed, I can implement them in the future</h3>
<h2>P.P.S</h2>
<h3>I've added several comments in the code, and didn't write them here in readme as they exist there :))</h3>
