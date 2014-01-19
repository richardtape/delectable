 ____    __    __  __  ____  ____  ____  ____  _  _  ____  __   _  _ 
(_  _)  /__\  (  \/  )( ___)(  _ \(_  _)( ___)( \( )(  _ \(  ) ( \/ )
 _)(_  /(__)\  )    (  )__)  )   / _)(_  )__)  )  (  )(_) ))(__ \  / 
(____)(__)(__)(_/\/\_)(__)  (_)\_)(____)(____)(_)\_)(____/(____)(__) 


Hello there, fair citizen of the interwebs.

I've put this little extension together for a couple of reasons: 1) I was annoyed that Yahoo was
probably going to close delicious, 2) I like to own my own data and 3) I love WordPress. I hope you 
enjoy it and get as much use as I do out of it. I've tried to make it as easy to use as possible.
It's also been a great learning experience - I'm pretty rubbish at Javascript, as you'll so 
obviously see if you look at the source, so if you have any changes, please fire them over to me 
at richard@iamfriendly.com

Thanks and enjoy!

Rich




Installation
------------

Basically, as this hasn't been 'released' yet, you need to do a bit of manual labour. But, fear not, 
it's actually dead easy. As you're reading this, you've already unzipped this into a folder somewhere.
In a little while, you'll need to tell Chrome where you want to install this extension from, so I'd
recommend you move this folder to somewhere semi-permanent.

1) Open Chrome and click the 'wrench' icon, normally in the top right.
2) Hover over 'tools' and then press 'Extensions'. This will load chrome://extensions/ in your browser.
3) If, in the top right hand corner of this screen, the 'Developer Mode' text has a 'plus' next to it, 
then you should click on that.
4) Click 'Load unpacked extension'
5) From the file selection box, you'll need to find the folder which you unzipped earlier - you only
need to find the folder, not any particular file.
6) 'Delectable' should now be installed! I am loving your work.


WordPress settings setup
------------------------

XML-RPC functionality is turned on by default since WordPress 3.5. For previous versions, read below:

By default, WordPress disables XML-RPC and atom publishing. This means that, for this extension to work,
we'll need to enable it. To do so:

1) Log in to the back end of your WordPress installation (visit yourdomain.com/wp-admin/)
2) Go to Settings > Writing
3) Check the box next to 'XML-RPC'
4) Press 'Save Changes'
5) Marvel in your own amazingness.


Options
-------

Your first port of call, once you've installed the extension and set up WordPress, is to visit the options 
page. So, from the chrome://extensions/ page (you'll still be on that page if you've just installed) click 
on the 'Options' link under 'Delectable'. This will load the delectable options in a new tab.

1) Enter your WordPress username and password. This user will need to be able to create new posts.
2) Enter your WordPress URL in the XML-RPC Endpoint box. This is very important. Make sure you enter the 
full path to where your xmlrpc.php file is. This is in the root of your WordPress installation. So, if 
you have WordPress installed on http://www.mydomain.com/ then you would enter 
http://www.mydomain.com/xmlrpc.php into that box.

If you have WordPress installed in http://www.mywebsite.com/wordpress/ then you would enter 
http://www.mywebsite.com/wordpress/xmlrpc.php

You can test whether this is right or not by visiting that URL. Your browser should tell you that "XML-RPC 
server accepts POST requests only." -- If that happens, you've got the right URL.

3) If you would like all of your links to go to a category on your blog, then make sure you've already 
created that category - then enter it's name (or slug) in the Category Name box.  If you leave this box 
blank, Delectable will use WordPress 3.1's "Post Formats" to store your links under 'links'. Your theme 
will need to support this type of post format.

If you're unsure, create a category and enter it's name here. (But post formats are cool, you should check 
them out).

4) Press Save. That's it, you're ready to rock! You're awesome. (You can close this options tab now)


Now What?
---------

You will notice that next to your URL bar, somewhere near the 'wrench' icon, there's a new icon - with a 
WordPress logo. Snazzy, huh?  When you find a website you're interested in, go ahead and click that icon.

Bam! Up pops a new window. From here you can set a title for the link and enter any tags you wish - just 
like you can on delicious. Only this time, it's stored on your blog. For you to keep. So, go ahead and 
enter a title (it defaults to "Link - " and the URL). If you wish to tag it (using WordPress' tags) then 
go ahead and enter a comma separated list of them.

Then all you need to do is press 'Save Link' and you're done! Whammy!

Go take a peak at your posts list. There she blows! Your new link. No middle man. No nonsense. Your data.
Pretty cool, huh?


Credits
-------

Well, we wouldn't be anywhere without WordPress, would we? So thanks to Matt and Mike. You're both amazing.

The xmlrpc stuff comes directly from https://github.com/daniloercoli/JS-XML-RPC-lib-for-WordPress. Thanks
Daniloercoli. Awesome!

The icon is from Kevin Anderson (http://www.tabsicons.com/) and was found in http://www.iconfinder.com/.
The clock icon is from http://19eighty7.com/ and again found at iconfinder.

The CSS was basically ripped from the WordPress back end, to try and give it that 'homely' feel.

The idea came from my head.


If you were so inclined, you could follow me on Twitter (@iamfriendly) or have a gander at my website:
http://www.iamfriendly.com/


Thanks!



Changelog
---------


Version: 0.0.76
---------------

First 'initial outing' to a few intrepid folk.


Version 0.1
-----------

Added Scheduling of posts
Added advanced options (post type (post or page ONLY), category name atm.)
Adjusted UI for saving of options (thanks @damiangostomski)

Version 0.1.1
-------------

Added some input validation on the XMLRPC Endpoint


Version 0.2
-----------

Made the title element auto-fill from the tab's HTML Title
Content of post is now a link rather than plain text
The 'that's done' message is now a link to the edit posts screen