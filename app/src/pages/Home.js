
import '../styles/App.css';
import '../styles/pages/Home.css';
import Card from '../components/Card';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { SiAmazon, SiIbm, SiPalantir } from 'react-icons/si';
import { FaFacebookF, FaGraduationCap, FaQuestion, FaUniversity } from 'react-icons/fa';
import 'react-perfect-scrollbar/dist/css/styles.css';
function Home() {

    return (
        <div>
            <h1>Hello World!</h1>
            <Card></Card>
            <div id="timelineDiv">
                <Timeline
                    id="timeline"
                    minEvents={6}
                    // maxEvents={5}
                    placeholder={true}
                    variant="simple"
                >
                    <TimelineEvent
                        icon={FaUniversity}
                        color="#7A003C"
                        title='McMaster University'
                        subtitle='09/17'
                    />

                    <TimelineEvent
                        icon={SiIbm}
                        color="#0043CE"
                        title='IBM'
                        subtitle='05/20-04/21'
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#00A8E1"
                        title='Amazon'
                        subtitle='05/21-08/21'
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#FF9900"
                        title='Amazon'
                        subtitle='01/22-03/22'
                    />
                    <TimelineEvent
                        icon={SiPalantir}
                        color="#000000"
                        title='Palantir Technologies'
                        subtitle='(Incoming) 03/22-06/22'
                    />
                    <TimelineEvent
                        icon={FaFacebookF}
                        color="#4267B2"
                        title='Facebook (Meta)'
                        subtitle='(Incoming) 06/22-09/22'
                    />
                    <TimelineEvent
                        icon={FaGraduationCap}
                        color="#FDBF57"
                        title='Expected Graduation'
                        subtitle='04/23'
                    />
                    <TimelineEvent
                        icon={FaQuestion}
                        color="#DCDCDC"
                        title="What's next?"
                    />
                </Timeline>
            </div>
        </div>
    );
}

export default Home;
