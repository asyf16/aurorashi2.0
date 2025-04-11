'use client';
import Card from 'components/projectCard';

export default function Projects() {
    return (
        <div className="w-screen bg-[#04020e] flex flex-col items-center justify-center" id="projects" >
            <div className="flex sm:flex-row flex-col px-8 py-4 sm:py-8 gap-8">
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2025"
                        title="CrowdFund"
                        description={
                            'Create powerful AI workflows on autopilot from unique AI agents that analyze markets, predict trends, and execute trades. Develop AI agents and secure IP and royalties with Story Protocol.'
                        }
                        image="/Images/CrowdFund.gif"
                        technologies={['Typescript', 'React Flow', 'Python', 'FastAPI', 'KrakenAPI', 'Google Cloud']}
                        link="https://www.youtube.com/watch?si=nO4tCv7REsGhUWYl&v=S20tTL5M9Ig&feature=youtu.be"
                        github="https://github.com/asyf16/crowdfund"
                        website="https://www.youtube.com/watch?si=nO4tCv7REsGhUWYl&v=S20tTL5M9Ig&feature=youtu.be"
                    />
                </div>
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2025"
                        title="Silent Forest"
                        description={
                            'Interactive website for classroom noise control. Track your volume in real time, and be rewarded by cute animals who will come visit you. Animations created using Rive.'
                        }
                        image="/Images/SilentForest.gif"
                        technologies={['React + Vite', 'Javascript', 'Rive', 'Adobe Illustrator']}
                        link="https://silentforest.tech/"
                        github="https://rive.app/community/files/15986-30079-silent-forest/"
                        website="https://silentforest.tech/"
                    />
                </div>
            </div>

            <div className="sm:block hidden">✧ ✦ ✧ ✦ ✧</div>

            <div className="flex sm:flex-row flex-col px-8 py-4 sm:py-8 gap-8">
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2024"
                        title="Intellibin"
                        description={
                            'Smart trashcan with a movable servo arm that automatically sorts your trash from recycling, powered by AI imaging. Second place overall winner at DeltaHacks X.'
                        }
                        image="/Images/Bin.gif"
                        technologies={['MongoDB', 'Firebase', 'React', 'Python', 'Arduino', 'Google Vision API']}
                        link="https://www.youtube.com/watch?v=fziGIb2MTAk"
                        github="https://github.com/asyf16/Intellibin"
                        website="https://devpost.com/software/intellibin-4qu7co"
                    />
                </div>
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2024"
                        title="EyeDentify"
                        description={
                            `Made using Python's face recognition library, EyeDentify is a Raspberry Pi powered headset that allows you to see the world from your normal point of view, but inlaid with real-time facial recognition!`
                        }
                        image="/Images/EyeDentify.gif"
                        technologies={['MongoDB', 'AWS', 'OpenCV', 'Python', 'React', 'Raspberry Pi']}
                        link="https://github.com/asyf16/eyeDentify"
                        github="https://github.com/asyf16/eyeDentify"
                        website="https://www.youtube.com/watch?v=KergMVdy5mk"
                    />
                </div>
            </div>

            <div className="sm:block hidden">✧ ✦ ✧ ✦ ✧</div>

            <div className="flex sm:flex-row flex-col px-8 py-4 sm:py-8 gap-8">
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2025"
                        title="Caltrack"
                        description={
                            'CalTrack is an intuitive application that allows you to detect and track the calories in every meal with AI from a simple photo of your food!'
                        }
                        image="/Images/CalTrack.gif"
                        technologies={['Google Cloud Vision API', 'Python', 'OpenCV', 'Tkinter']}
                        link="https://www.youtube.com/watch?v=YQx1uoPEPR8"
                        github="https://github.com/asyf16/calTrack"
                        website="https://www.youtube.com/watch?v=YQx1uoPEPR8"
                    />
                </div>
                <div className="sm:w-1/2 w-full">
                    <Card
                        year="2025"
                        title="EPSB Awards Calculator"
                        description={
                            `Increased the administration's efficiency by 240%, allowing instant calculation of every student's average based on specific requirements by simply uploading a spreadsheet of the student data.`
                        }
                        image="/Images/Calc.gif"
                        technologies={['Python', 'Tkinter', 'Pandas']}
                        link="https://github.com/asyf16/Average-Calculator"
                        github="https://github.com/asyf16/Average-Calculator"
                    />
                </div>
            </div>
        </div>
    );
}
