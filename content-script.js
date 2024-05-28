setInterval(() => {

    const imgUrl = "https://img.icons8.com/bubbles/50/pikachu-pokemon.png";
    const imgAlt = "pikachu-pokemon";

    // All selectors for the profile images
    const selectors = [
        ".update-components-actor__avatar-image",    // profile images of feed users
        ".avatar",                                   // profile img of users who commented on posted
        ".EntityPhoto-circle-0",                     // profile pics of all users who liked the posts (rounded profile img)
        ".EntityPhoto-square-0",                     // profile pics of all users who liked the posts, (square profile img)
        ".feed-identity-module__member-photo",       // feed member sidebar profile pics updations
        ".EntityPhoto-circle-2",                     // feed member profile pics updations
        ".EntityPhoto-circle-3",                     // feed member searchBar profile pics updations
        ".global-nav__me-photo",                     // feed member navBar profile pics updations
        ".da-card-creative__profile-image",          // feed member card profile pics updations
        ".presence-entity__image",                   // feed member msg section profile pics updations
        ".ghost-person",                             // other people suggegations profile pics
        ".msg-facepile-grid__img",                   // message section other user profile pics
        ".update-components-carousel-job__image",    // profile img of carousels
        ".ivm-image-view-model__circle-img",         //group profile images   
        ".ivm-image-view-model__square-img"          //group profile images
    ];

    // Function to update image source and alt text
    const updateImages = (selector) => {
        document.querySelectorAll(selector).forEach(pic => {
            pic.setAttribute("src", imgUrl);
            pic.setAttribute("alt", imgAlt);
        });
    };

    // Update all profile images
    selectors.forEach(updateImages);

},500)



