import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://api.adviceslip.com/" target='_blank' rel="noopener">Api</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1251104.htm#query=nature%20background&position=11&from_view=search&track=ais#position=11&query=nature%20background " target='_blank' rel="noopener">Image by Freepik</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/elie-aouad" target='_blank' rel="noopener">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/ElieA99" target='_blank' rel="noopener">Github</a>
                    </li>
                </ul>
            </>
        );
    }
}

export default Navbar;