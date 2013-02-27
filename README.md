fromage
=======

A chrome extension which injects information on newegg item pages about the most recent Open Box price

###Installation

I'm really lazy, and I also don't want to get sued, so this extension is not going up on the Chrome web store.
Fortunately, it's relatively easy to load an unpacked extension in Chrome:

1. Pull this repo, or download the zip and extract it somewhere.
2. In Chrome, navigate to Tools -> Extensions
3. Make sure you have Developer Mode enabled (checkbox in the upper right)
4. Click "Load unpacked extension..." and point it to the base directory you just grabbed.

And it should be good to go!

###Usage

Fromage requires no interaction from the user to operate.  It automatically detects newegg pages and inserts
the extra information into the webpage.  Fromage will only show information for items which are currently on
an Open Box deal or have had an OB deal in the past.  If it seems like it's not working, do a Newegg item search
and filter by Open Box for a nice list of test pages.

Please report any problems or bugs you find as issues on this repository.

###Screenshots
-----
![Current openbox price](https://raw.github.com/eogas/fromage/master/img/fromage1.png)
-----
![Previous openbox price](https://raw.github.com/eogas/fromage/master/img/fromage2.png)
-----

###Attribution

Cheese icon created by [Matthieu James](http://tiheum.deviantart.com/)

###License

This project is licensed under the zlib license, the full text of which is provided in the LICENSE file.

