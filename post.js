document.addEventListener("DOMContentLoaded", function () {

    var posts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log(posts);

    function displayPost() {
        var postTitleElement = document.getElementById('post-title');
        var postContentElement = document.getElementById('post-content');


        for (var post of posts) {
            console.log(post.title);
            console.log(post.content);
            if (postTitleElement && postContentElement) {
                postTitleElement.textContent = post.title;
                postContentElement.textContent = post.content;
            } else {
                console.error("Elements not found on the page.");
            }
        }

    }

    window.onload = function () {
        displayPost();
    };

})

// Function to submit a comment
function submitComment() {
    var commentUser = document.getElementById("comment-user").value;
    var commentContent = document.getElementById("comment-content").value;

    if (commentUser && commentContent) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        var commentUserSpan = document.createElement("span");
        commentUserSpan.className = "comment-user";
        commentUserSpan.textContent = commentUser + ":";
        var commentTextSpan = document.createElement("span");
        commentTextSpan.className = "comment-text";
        commentTextSpan.textContent = commentContent;

        commentDiv.appendChild(commentUserSpan);
        commentDiv.appendChild(commentTextSpan);

        var commentsSection = document.querySelector(".comments");
        commentsSection.appendChild(commentDiv);

        // Clear the input fields after posting comment
        document.getElementById("comment-user").value = "";
        document.getElementById("comment-content").value = "";
    }
}
