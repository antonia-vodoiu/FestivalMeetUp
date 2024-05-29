import "./leftBar.scss"

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://i.pinimg.com/474x/13/e8/8b/13e88b4a07b75328341ef445df26c9a7.jpg" alt=""/>
                        <span>User</span>    
                    </div>
                    <div className="item">
                        <img src="https://img.icons8.com/sf-black-filled/64/FD7E14/groups.png" alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src="https://img.icons8.com/glyph-neue/64/FD7E14/event-accepted.png" alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src="https://img.icons8.com/ios-filled/50/FD7E14/chat.png" alt="" />
                        <span>Messages</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default LeftBar;