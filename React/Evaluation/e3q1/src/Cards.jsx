import { useEffect, useState } from "react";


const patients = [
    {
        id: 1,
        name: "Ramesh Kumar",
        age: 45,
        problem: "Fever and cough",
        doctor: "Dr. Sharma"
    },
    {
        id: 2,
        name: "Anita Singh",
        age: 32,
        problem: "Headache",
        doctor: "Dr. Mehta"
    },
    {
        id: 3,
        name: "Rahul Verma",
        age: 28,
        problem: "Back pain",
        doctor: "Dr. Rao"
    },
    {
        id: 4,
        name: "Suman Patel",
        age: 60,
        problem: "Blood pressure",
        doctor: "Dr. Shah"
    }
];


const Storage = {
    INDEX: "currentPatientsIndex",
    TREATED: "treatedPatients",
    NOT_TREATED: "notTreatedPatients",
    STATUS: "patirntStatusMap",
    TIMER: "doctorSessionTimer"
};

function Cards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [treated, setTreated] = useState(0);
    const [notTreated, setNotTreated] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600);
    const [showSummary, setShowSummary] = useState(false);
    const [status, setStatus] = useState({})


    useEffect(()=>{
        const i = localStorage.getItem(Storage.INDEX);
        const t = localStorage.getItem(Storage.TREATED);
        const nt = localStorage.getItem(Storage.NOT_TREATED);
        const s = localStorage.getItem(Storage.STATUS);
        const time = localStorage.getItem(Storage.TIMER);

        if(i)
            setCurrentIndex(Number(i));

        if(t)
            setTreated(Number(t));
        if(nt)
            setNotTreated(Number(nt));
        if(s)
            setStatus(JSON.parse(s))
        if(time)
            setTimeLeft(Number(time))
    },[]);

        useEffect(()=>{
        localStorage.setItem(Storage.INDEX, currentIndex);
        localStorage.setItem(Storage.TREATED, treated)
        localStorage.setItem(Storage.NOT_TREATED, notTreated);
        localStorage.setItem(Storage.STATUS, JSON.stringify(status));
        localStorage.setItem(Storage.TIMER, timeLeft);
    },[currentIndex, treated, notTreated, status, timeLeft])

    useEffect(()=>{
        if(timeLeft<=0){
            setShowSummary(true)
            return;
        }

        const timer = setInterval(()=>{
            setTimeLeft(t=>t-1);
        },1000)

        return ()=> clearInterval(timer);

    },[timeLeft])

    if(showSummary)
    {
        return(
            <div>
                <h2>Session Summary</h2>
                <p>Total Patients:{patients.length}</p>
                <p>Treated: {treated}</p>
                <p>Not Treated: {notTreated}</p>
                <p>Pending: {patients.length - (treated+notTreated)}</p>
            </div>
        );
    }

    function nextPatients()
    {
        if(currentIndex==patients.length-1)
            setShowSummary(true)
        else
            setCurrentIndex(i=>i+1)
    }

    function prevPatients()
    {
        if(currentIndex>=1)
            setCurrentIndex(i=>i-1)
    }

    function markTreated()
    {
        if(status[currentIndex])
            return

        setStatus({...status, [currentIndex]:"treated"})
        setTreated(t=>t+1)
    }

    function markNotTreated()
    {
        if(status[currentIndex])
            return

        setStatus({...status, [currentIndex]:"notTreated"})
        setNotTreated(t=>t+1)
    }

    const patient = patients[currentIndex];

    return (
        <div>
            <h1>Patient Ticket Cards</h1>

            <p>
                Time Left : {Math.floor(timeLeft/60)}:{timeLeft%60}
            </p>

            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Problem: {patient.problem}</p>
            <p>Doctor: {patient.doctor}</p>


            <button onClick={prevPatients}>Previous</button>
            <button onClick={nextPatients}>Next</button>

            <br />
            <br />
            <button disabled={status[currentIndex]} onClick={markTreated}>Treated</button>
            <button disabled={status[currentIndex]} onClick={markNotTreated}>Not Treated</button>

        </div>
        
    )
}

export default Cards