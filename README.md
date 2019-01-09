# gatsby-blog
This project is open source and everyone is encouraged to contribute and improve it.


**Gatsby** is a powerful preconfiguration to build a website that uses only static files for incredibly fast page loads, service workers, code splitting, server-side rendering, intelligent image loading, and asset optimization.

**Create your blog in Gatsby.js and Netlify CMS**

1- Clone the repository to your device.

[https://github.com/raoufswe/gatsby-blog](https://github.com/raoufswe/gatsby-blog)

2- Create a new repository in your GitHub account.

3- Run the following git commands one by one in the folder path:

- git init
- giti add .
- git commit -m &quot;initial commit&quot;
- git remote add origin &#39;YOUR REPO URL&#39;
- git push origin master

Now the repository should be pushed into your GitHub account.

5- In your repository, go to **static/admin/config.yml** and change the fourth line to point to your repository URL. It should be something like this &#39;username/YOUR-REPO-NAME&#39;.

6- Go to [https://www.netlify.com](https://www.netlify.com) and log in to deploy your blog.

Choose New site from git and select the blog repository and wait till deployment finishes.

**By now your blog should be up and running!**

7- Go to gatsby-config.js in your GitHub repository and change the **siteURL:** with your blog URL

8- Go to \&lt;https://github.com/settings/applications/new \&gt; and fill up the details with as following:

- Home page as your blog URL
- The call back should be https://api.netlify.com/auth/done

The page will generate a client id and secret key

9- In Netlify.com, go to settings / access control / oauth

And click &quot;install provider&quot; and paste the client ID and secret key.

Yaa! Now you should be able to access your admin panel by simply adding **/admin** at the end of your URL and start publishing your exciting blogs!

