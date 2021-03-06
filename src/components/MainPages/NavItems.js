import { FaHome, FaMusic, FaUser, FaUserGraduate } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

const navItems = [
    {
        "link": "#home",
        "text": "Home",
        "icon": <FaHome />
    },
    {
        "link": "#about",
        "text": "About",
        "icon": <FaUser />
    },
    {
        "link": "#skills",
        "text": "Skills",
        "icon": <GiProgression />
    },
    {
        "link": "#education",
        "text": "Education",
        "icon": <FaUserGraduate />
    },
    {
        "link": "#music",
        "text": "Music",
        "icon": <FaMusic />
    }
]

export default navItems;