# Ronin Sverige #

Presentation av den svenska versionen av Ronin projektet.


This is a static site using only html5 and css3 with some assets. In order to deploy any changes the code needs to be pushed up to GitHub and pulled down to the server. Currently the best workflow to do that is actually to use SVN. ;-)
```
ssh root@makersacademy.se
cd /var/www/html/ronin/
svn export https://github.com/tochman/ronin-gbg/trunk/ . --force
````

