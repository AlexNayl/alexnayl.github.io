import './Passions.css'

function Passions(){
    return <div>
        <div className='passion'>
            <img src='passion_aviation.png'/>
            <div>
                <h1>Aviation</h1>
                <p>I used to be a student pilot pursuing a recreational license back in highschool. Life got in the way, but now that im entering the workforce I think I can get back into flying. One of my dreams is to build myself a kitplane and use it to take friends and family on adventures.</p>
            </div>
        </div>
        <div className='passion'>
            <img src='passion_space.jpg'/>
            <div>
                <h1>Space Exploration & Rocketry</h1>
                <p>Since I was a kid I was fascinated with spacecraft, not so much in the adventures they can bring (although thats cool as well I guess), but in the immense engineering complexity needed to make them work. Space travel is the ultimate test for all fields of our engineering, and in the past few decades has contributed to advances in all of our civilizations skills.</p>
            </div>
        </div>
    </div>
}

export default Passions