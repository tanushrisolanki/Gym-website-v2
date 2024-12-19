import React from "react";

const WorkoutSessions =() => {
    return (
        <section className="workout_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>
                Discover our Featured Bootcamps for a total body transformation! These intensive sessions are designed to challenge every muscle group, increase endurance, and boost your overall fitness. 
                </p>
                <img src="/img5.jpg" alt="workout" height="750" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>
                Led by top trainers, our bootcamps offer dynamic workouts that keep you motivated and on track towards achieving your fitness goals. Join us and turn your determination into results!
                </p>
                <div className="bootcamps">
                    <div>
                        <h4>Strength & Conditioning Bootcamp</h4>
                        <p>
                        Power up your fitness game with our Strength & Conditioning Bootcamp! Perfect for building muscle and boosting endurance, this bootcamp combines resistance training and cardio for a full-body workout.
                        </p>
                    </div>
                    <div>
                        <h4>High-Intensity Interval Training (HIIT) Bootcamp</h4>
                        <p>
                        Burn calories and elevate your fitness levels with our HIIT Bootcamp! These fast-paced sessions alternate between intense bursts of activity and short recovery periods to keep you in top shape.  
                        </p>
                    </div>
                    <div>
                        <h4>Flexibility & Mobility Bootcamp</h4>
                        <p>
                        Enhance your flexibility and prevent injuries with our Flexibility & Mobility Bootcamp. Focus on stretching, core strength, and balance to improve your overall athletic performance. 
                        </p>
                    </div>
                    <div>
                        <h4>Cardio Bootcamp</h4>
                        <p>
                        Get your heart pumping with our Cardio Bootcamp! This energetic bootcamp is designed to improve cardiovascular health, stamina, and burn calories, keeping you energized and fit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkoutSessions ;