import React from 'react'
import './StoryReel'
import Story from '../Story/Story.js';
import './StoryReel.css'
function StoryReel() {
    return (
        <div className="storyReel">
                <Story className="storyReel__story" image="https://image.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg" profileSrc="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                title="Aman Bharatwaj" />

                <Story className="storyReel__story" image="https://image.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg" profileSrc="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                title="Deependra Kumar" />


                <Story className="storyReel__story" image="https://image.freepik.com/free-photo/beautiful-sunset-mountain-around-beach-sea-ocean-rock_74190-13290.jpg" profileSrc="https://image.flaticon.com/icons/png/512/275/275378.png"
                title="Bharat Sharma" />



                <Story className="storyReel__story" image="https://image.freepik.com/free-vector/green-nature-landscape-background_1308-30205.jpg" profileSrc="https://image.flaticon.com/icons/png/512/306/306114.png"
                title="Vishal" />


                <Story className="storyReel__story" image="https://image.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg" profileSrc="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                title="Aman Bharatwaj" />
        </div>
    )
}

export default StoryReel
