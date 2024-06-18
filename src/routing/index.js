// Home.js
import React from 'react';

const Index = () => {
    return (
        <div className="dashboard-container" style={styles.dashboardcontainer}>
            <h2>Dashboard</h2>
            <div className="scrollable-content" style={styles.scrollcontent}>
                {/* Example of scrollable content */}
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, tortor non vestibulum luctus, mauris sapien tincidunt purus, nec tempor ipsum lacus in turpis. Quisque vitae elit ut libero tincidunt auctor. Suspendisse potenti. Aliquam erat volutpat. Sed lacinia metus in ligula finibus, at posuere odio ultricies. Donec vel purus nec purus placerat placerat. Nulla vel tellus at velit egestas accumsan sit amet eget metus. Duis at nunc vitae libero tincidunt suscipit at sit amet felis.</p>
                    <p>Nullam fermentum sit amet nisi vitae tincidunt. Nullam dapibus odio quis dolor tincidunt, a bibendum dolor feugiat. Nullam nec sapien scelerisque, volutpat nunc sit amet, malesuada enim. Aenean eu odio sed mi scelerisque venenatis. Sed ullamcorper, lorem ac tempus vehicula, nisl ipsum luctus nisi, sit amet aliquam nisi neque nec tortor. Duis tempus turpis in odio ultrices, vitae auctor dui scelerisque. Proin sed eros in metus molestie cursus eget in justo. Aliquam tincidunt eu elit nec fermentum. Sed ac purus nec metus dignissim tristique sed non risus. Curabitur et malesuada dolor, a convallis risus. Integer ut urna diam. Aenean tincidunt ex non libero iaculis, nec sollicitudin magna lacinia.</p>
                    <p>Phasellus id scelerisque nulla. Nulla ornare diam sed lectus placerat, ac fermentum augue tincidunt. Cras elementum, libero eu molestie efficitur, sapien quam lacinia felis, at tempus lectus risus et lacus. Integer tempus, arcu nec lacinia suscipit, est metus commodo sapien, nec dapibus ipsum justo ac quam. Ut et massa magna. Nunc dignissim metus ac justo condimentum, sed placerat lectus interdum. Sed commodo tincidunt felis, eu tempus velit pellentesque ac.</p>
                    {/* Example content - Replace with your actual content */}
                </div>
            </div>
        </div>
    );
};
const styles = {
    scrollcontent: {
        height: 'calc(100vh - 100px)', /* Adjust as needed to fit your layout */
        overflowY: 'auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
},

dashboardcontainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
}
};
export default Index;
