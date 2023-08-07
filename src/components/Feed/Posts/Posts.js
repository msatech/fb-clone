import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Posts.css'
import VideoCamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useStateValue } from '../../../ContextApi/StateProvider'
import db from "../../../firebase.js";
import firebase from  'firebase';

function Posts() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        // DB STuff
        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })


        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" placeholder={`What's on your mind.`}></input>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}  placeholder="Image URL (Optional)"></input>
                    <button onClick={handleSubmit} type="submit" >

                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option">
                    <VideoCamIcon style={{ color:"red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color:"green" }} />
                    <h3>Phot/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color:"orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default Posts
