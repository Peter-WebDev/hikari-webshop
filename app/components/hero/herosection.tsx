"use client";
import { useEffect, useState } from "react";

 //säger till nextjs att rendera slumpfunktionen i useEffect på klientsidan och inte rendera på servern per default

const videos = [
    "/assets/herovideos/redflower-video.mp4",
    "/assets/herovideos/spring-video.mp4",
];

//videoSrc, state variabel som håller reda på vilken video som ska visas, genom att lagra sökvägen till den slumpade videon. 
//setVideoSrc, funktion som uppdaterar videoSrc. useState kmr hantera tillståndet och uppdatera statet med setVideoSrc så att komponenten uppdateras automatiskt. 
//Math.random() genererar ett slumptal mellan 0 och 1 och multiplicerar med videos.length för att få en slumpmässig indexplats i arrayen. Math.floor() ger en giltlig indexplats.
//Math.floor() rundar av till närmaste heltal så att vi får en giltig indexplats.
export default function HeroSection() {
    [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        const randomVideo = videos[Math.floor(Math.random() * videos.lenght)];
        setVideoSrc(randomVideo); //uppdaterar videoSrc så att videon byts ut.
    })
}

