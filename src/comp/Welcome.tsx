interface WelcomeProps {
    name: string;
    age: number;
    isStudent: boolean;
    isVerified: boolean;
}

const Welcome = ({name,age,isStudent,isVerified }: WelcomeProps) => {
    return (
        <div>
            <h1>Welcome {name}</h1>
            <h1>Age: {age}</h1>
            <h1>{isStudent? "student":"notStudent"}</h1>
            {isVerified && <h1>✅️</h1>}
        </div>
    );
}

export default Welcome;