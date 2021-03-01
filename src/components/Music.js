import React from 'react';
import Swal from 'sweetalert2';


function Guitar() {
    Swal.fire({
        imageUrl: '/guitar.jpg',
        imageWidth: 300,
        imageHeight: 300,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        imageAlt: 'Custom image',
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
    })
}

function ForNow() {
    document.getElementById("music-additional").removeAttribute("hidden");
}

function Music() {
    return (
        <div className="container">
            <h1 style={{ paddingBottom: "30px" }}>Music</h1>
            <div className="row" style={{ padding: "15px" }}>
                <div className="col-lg-12">
                    <p>
                        I love going to gigs and playing the guitar! My favorite genre is folk-punk, but I try to listen to a big variety.
                    </p>
                    <p>
                        One reason why I love this genre is because it means I can play some of my favorite songs with my trusty
                        <span onClick={() => Guitar()} style={{ cursor: "pointer" }}><i> acoustic guitar</i></span>,
                        and some of them I can even play decently!
                    </p>
                    <p>
                        As well as enjoying playing covers, I've got a catalogue of my own songs which are mostly unrecorded and unpolished. There are
                        a couple that I have been able to record a little more professionally, and you can listen to one of these below - you deserve it
                        for getting this far down the site!
                    </p>
                    <p>
                        You'll find another one of my songs as the backing to one of my <a href="https://www.youtube.com/channel/UCWL6DjV5c8oMBhOSzpvilmw">Youtube videos</a>,
                         but these are the only ones in the wild, <span onClick={() => ForNow()} style={{ cursor: "pointer" }}><i> for now...</i></span>
                    </p>
                    <p hidden id="music-additional">
                        Writing songs is something I really enjoy doing and I would love to add to the song below if I can record any others to a good quality... stay tuned!
                    </p>
                </div>
                <div className="w-100" style={{ paddingTop: "25px" }}>
                    <iframe width="80%" height="108" scrolling="no" title="Happy Right Now" frameBorder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/996209464&color=%237b26ad&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>
                </div>

            </div>

        </div >
    );
}

export default Music;