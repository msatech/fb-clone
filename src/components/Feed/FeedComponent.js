import React, { useState, useEffect } from 'react'
import './FeedComponent.css'
import StoryReel from './StoryReel/StoryReel.js';
import Posts from './Posts/Posts.js';
import DisplayPost from './DisplayPost.js'
import db from '../../firebase.js';


function FeedComponent() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id, 
                data: doc.data()
            })))
        ))
    }, [])

    return (
        <div className="feed">
            {/* Story Reel */}
            <StoryReel />
            <Posts />
            { posts.map(post => (
                <DisplayPost
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}

                >

                </DisplayPost>
            )) }
            {/* POsts */}
        </div>
    )
}

export default FeedComponent
