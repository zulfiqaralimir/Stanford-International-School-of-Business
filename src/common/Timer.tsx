"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
	const expiryTimestamp = new Date("2025-12-30");
	const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

	return (
		<> 

			<div className="coming-soon-timer">
				<div className="timer-content wow fadeInUp" data-wow-delay=".2s">
					<h3 id="day">{days}</h3>
					<p>Days</p>
				</div>
				<div className="timer-content wow fadeInUp" data-wow-delay=".4s">
					<h3 className="bg-2" id="hour"> {hours}</h3>
					<p>hrs</p>
				</div>
				<div className="timer-content wow fadeInUp" data-wow-delay=".6s">
					<h3 className="bg-3" id="min">{minutes} </h3>
					<p>mins</p>
				</div>
				<div className="timer-content wow fadeInUp" data-wow-delay=".8s">
					<h3 className="bg-4" id="sec"> {seconds}</h3>
					<p>secs</p>
				</div>
			</div>
		</>
	);
};

export default Timer;
