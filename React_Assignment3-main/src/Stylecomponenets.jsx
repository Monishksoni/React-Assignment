import React from 'react'
import styled from "styled-components";

function Stylecomponenets() {

    let Team = [
        { id: 1, img: "https://bestlifeonline.com/wp-content/uploads/sites/3/2017/05/shutterstock_529646395.jpg?quality=82&strip=1&resize=400%2C225", "name": "John Abraham", "title": "Frontend Developer passionate about user experiences and modern design trends." },
        { id: 2, img: "https://th.bing.com/th/id/OIP.H-e7MPaVkLEPBXOOBO5ZgAHaFj?w=626&h=470&rs=1&pid=ImgDetMain", "name": "Deniz Rechard", "title": "Frontend Developer passionate about user experiences and modern design trends." },
        { id: 3, img: "https://img.freepik.com/premium-photo/young-businessman-outdoor_53419-3206.jpg", "name": "Sunny Shekhar", "title": "Frontend Developer passionate about user experiences and modern design trends." },
        { id: 4, img: "https://img.freepik.com/premium-photo/young-professional-male-investment-banker-smiling_1157942-173.jpg", "name": "Purv Patel", "title": "Frontend Developer passionate about user experiences and modern design trends." },
        { id: 5, img: "https://img.freepik.com/premium-photo/successful-business-executives-handsome-businessmen-celebrating-success-with-joy_1024025-76.jpg", "name": "Jay Viru", "title": "Frontend Developer passionate about user experiences and modern design trends." },
        { id: 6, img: "https://img.freepik.com/premium-photo/successful-business-executives-handsome-businessmen-celebrating-success-with-joy_1024025-76.jpg", "name": "Dell Housy", "title": "Frontend Developer passionate about user experiences and modern design trends." },
    ]

    const AboutContainer = styled.div`
        width: 100%;
        min-height: 80vh;
        padding: 2rem;
        background: url('https://th.bing.com/th/id/R.d68e3c4d65551a8a20d61bf68b7a6599?rik=AjPoqJy7lnFeOQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f8%2f35%2fWEGgt5.jpeg&ehk=i5r7GsvthzeUlLOKuQXDFJ7ernumJggjvTBCpfEroiA%3d&risl=&pid=ImgRaw&r=0') no-repeat center center/cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 50px;
        text-shadow: 2px 2px 5px black;
    `;

    const Teamcontainer = styled.div`
        padding: 2rem;
        background-color: #f0f0f0;
    `;

    const Teamrow = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
        gap:30px 20px;
        place-items: center;
        place-content: center;
    `;

    const Teamcol = styled.div`
        border: 2px solid black;
        padding: 20px;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        border-radius: 10px;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }

        h3 {
            margin: 15px 0 10px;
            font-size: 1.2rem;
            color: #333;
        }

        p {
            font-size: 0.95rem;
            color: #555;
        }
    `;

    return (
        <div>
            <AboutContainer>About Section</AboutContainer>

            <Teamcontainer>
                <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Meet Our Team</h2>
                <Teamrow>
                    {
                        Team.map((data) => ((
                            <Teamcol>
                                <img src={data.img} alt="Team Member" />
                                <h3>{data.name}</h3>
                                <p>{data.title}</p>
                            </Teamcol>
                        )))
                    }
                
                </Teamrow>
            </Teamcontainer>
        </div>
    );
}

export default Stylecomponenets;
