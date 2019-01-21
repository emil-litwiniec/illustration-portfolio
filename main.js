    const infoPosition = document.querySelector("#info").offsetTop;
    const workPosition = document.querySelector("#work").offsetTop;
    const infoLink = document.querySelector("#info-link");
    const workLink = document.querySelector("#work-link");


// Language translation
    const language = {
        en: {
            illustrator: "illustrator",
            figcaptions: {
                1: "English caption",
                2: "frog"
            },
            work: "work",
            info: "about me",
            infoText: "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. ",
            infoContactTouch: "Get in touch",
            infoContactText: "If you'd like to know more about me or talk about working together. "
        },
        pl: {
            illustrator: "ilustrator",
            figcaptions: {
                1: "Polski opis do zdjęcia",
                2: "żabka"
            },
            work: "prace",
            info: "o mnie",
            infoText: "Stąd Niesiołowskiemu mocno ognia mają nisko  Wyżółkłych roskrzyżował imał ubóstwiałbym widne ogona Nawet nocą Przed szczególniéj. Spokojniejszych Dojeżdżaczowi skarb Wilna Kiedy rosciągnionych deski prawy Przedstawiając przejrzystość prawo. Niźli Białopiotrowiczem Topoli blisko dworze naród domów granie mnicha. Żołniersczyzny ncci ludu mury tuż czem najpiękniejszym Mnie buku lata nierostrzygniony. Dwór ochłonął szlacheckim ranne niechętnie serce licem innem nagle deski. Koń szli Plac ruch zastępstwie przeskoczyć niby damy rodu krużgankiem okno. Jaki niecierpliwa zwierciadeł wozy owoc dojeżdżacz głębokiém krew przedmiotach Nieszanując. Zaś wyciągniętą Gors susy ubóstwiałbym nieuszanowanie buku zaczerwienione Prześladując woń mój rostrzygnienie. Romansową młodziana przestanku taka Pana Dóm Syna lisa dano Roznoszono Zaszumiał młodzież. ",
            infoContactTouch: "Kontakt",
            infoContactText: "Jeśli chciałbyś dowiedzieć się o mnie więcej i porozmawiać o współpracy, daj mi znać!"
            }
    };

    const ids = document.querySelectorAll("[data-id]");
    const imgs = document.querySelectorAll("[data-nr]");
    // let arr = Array.from(imgs);
    
    // console.log(arr);

    // let changeIdToPl = () =>  {
    //     ids.forEach((el) => {
    //         let dataId = el.dataset.id;
        
    //         el.innerText = language.pl[dataId];
    //     })
    // };

    // changeIdToPl();

    let translateToPl = () =>  {
        imgs.forEach((fig) => {
            let dataNr = fig.dataset.nr;
            fig.innerText = language.pl.figcaptions[dataNr];
        })

        ids.forEach((el) => {
            let dataId = el.dataset.id;
            el.innerText = language.pl[dataId];
        })
    };
    let translateToEn  = () =>   {
        imgs.forEach((fig) => {
            let dataNr = fig.dataset.nr;
            fig.innerText = language.en.figcaptions[dataNr];
        })

        ids.forEach((el) => {
            let dataId = el.dataset.id;
        
            el.innerText = language.en[dataId];
        })
    };


//     // Define language via window hash
    // const chicken = document.getElementById("chicken");
    const pl = document.querySelector("[data-pl]");
    const en = document.querySelector("[data-en]");

    if(window.location.hash) {
        if (window.location.hash === "#pl") {
            translateToPl();
        } else if (window.location.hash === "#en") {
            translateToEn();
        }
    }
pl.onclick = function() {
    if(window.location.hash) {
        if (window.location.hash === "#pl") {
            translateToPl();
            
        } else if (window.location.hash === "#en") {
            translateToEn();
        }
    }
    location.reload();
}
en.onclick = function() {
    if(window.location.hash) {
        if (window.location.hash === "#pl") {
            translateToPl();
        } else if (window.location.hash === "#en") {
            translateToEn();
        }
    }
    location.reload();
}
    

const addClassOnScroll = window.addEventListener("scroll", () => {
    let windowPosition = window.scrollY;
    let threshold = 100;

    
      if (windowPosition > workPosition && windowPosition  < infoPosition) {
          workLink.classList.add("active");
          infoLink.classList.remove("active");
    }

    if(windowPosition >= infoPosition - threshold) {
        workLink.classList.remove("active");
        infoLink.classList.add("active");
    }
}, false)

const showOnScroll = window.addEventListener("scroll",function(){
    var h = window.innerHeight - 20;
    var target = document.querySelectorAll('.showOnScroll');


    target.forEach((item) => {
        if(window.pageYOffset > h){
            item.style.opacity = "1"; 
           }
           else if(window.pageYOffset < h){
             item.style.opacity = "0";
           }
       
           if(window.pageYOffset > h - 25) {
               item.style.display = ""
           } else if (window.pageYOffset < h - 25) {
               item.style.display = "none";
           }
    })
    // target.forEach((h) => {

    // })
    // if(window.pageYOffset > h){
    //  target.style.opacity = "1"; 
    // }
    // else if(window.pageYOffset < h){
    //   target.style.opacity = "0";
    // }

    // if(window.pageYOffset > h - 25) {
    //     target.style.display = ""
    // } else if (window.pageYOffset < h - 25) {
    //     target.style.display = "none";
    // }
  }, false);

  var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');