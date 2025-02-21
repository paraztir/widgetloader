<h1>Library loading widgets recursively</h1>
<h3>How to use</h3>

1. Include the library source code in HTML - <p><script src="js/LibraryX.js"></script></p>
2. Call X.init method, passing it the root node where the widgets should be loaded
3. All widgets should be located in folder named widgets and when including it in html,it should be defined as a path, for instance, the location of widget with file name MySuperWidget.js, should be included in HTML like this - <div widget="widgets/MySuperWidget.js"></div>
