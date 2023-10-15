
function createPost() {
    var postTitle = document.getElementById("post-title").value;
    var postContent = document.getElementById("post-content").value;

    var post = {
        title: postTitle,
        content: postContent
    };


    var posts = JSON.parse(localStorage.getItem('posts')) || [];


    posts.push(post);

    
    localStorage.setItem('posts', JSON.stringify(posts));


    displayPosts(posts);

    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}


function displayPosts(posts) {
    var postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ""; 

    posts.forEach(function(post, index) {
        var postRow = document.createElement("div");
        postRow.className = "subforum-row";

        var postIconColumn = document.createElement("div");
        postIconColumn.className = "subforum-icon subforum-column center";
        postIconColumn.innerHTML = '<i class="fa fa-envelope"></i>';
        

        var postDescriptionColumn = document.createElement("div");
        postDescriptionColumn.className = "subforum-description subforum-column";
        postDescriptionColumn.innerHTML = `
            <h4><a href="post.html">${post.title}</a></h4>
            <p>${post.content}</p>
        `;
        
        var postInfoColumn = document.createElement("div");
        var userLink = document.createElement("a");
      
        postInfoColumn.appendChild(userLink);

        postRow.appendChild(postIconColumn);
        postRow.appendChild(postDescriptionColumn);
        
        

    
        postContainer.appendChild(postRow);
    });
}


function handlePostClick(postTitle, postContent) {

    localStorage.setItem('selectedPostTitle', postTitle);
    localStorage.setItem('selectedPostContent', postContent);

 
    window.location.href = 'post.html';
}

window.onload = function() {
    var posts = JSON.parse(localStorage.getItem('posts')) || [];
    displayPosts(posts);
};
