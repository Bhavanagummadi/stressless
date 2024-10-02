import React from 'react';

const tracks = [
    { id: 1, title: 'Track 1', src: '../assets/audios/track1.mp3' },
    { id: 2, title: 'Track 2', src: '../assets/audios/track2.mp3' },
    { id: 3, title: 'Track 3', src: '../assets/audios/track3.mp3' },
    { id: 4, title: 'Track 4', src: '../assets/audios/track4.mp3' },
    { id: 5, title: 'Track 5', src: '../assets/audios/track5.mp3' },
    { id: 6, title: 'Track 6', src: '../assets/audios/track6.mp3' }
];

const Music = () => {
    return (
        <div style={styles.body}>
            <h1 style={styles.heading}>Listen to the Music and Relax</h1>
            <h2 style={styles.subheading}>Take a moment to enjoy these tracks and unwind.</h2>

            <div style={styles.audioWrapper}>
                {tracks.map((track) => (
                    <div key={track.id} style={styles.audioPlayer}>
                        <h3 style={styles.trackTitle}>{track.title}</h3>
                        <audio controls style={styles.audio}>
                            <source src={track.src} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        padding: '20px',
    },
    heading: {
        color: '#333',
        fontSize: '2.5rem',
        marginBottom: '10px',
        textAlign: 'center',
    },
    subheading: {
        color: '#555',
        fontSize: '1.5rem',
        fontWeight: '300',
        marginBottom: '40px',
        textAlign: 'center',
    },
    audioWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
    },
    audioPlayer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        hover: {
            transform: 'scale(1.05)',
        },
    },
    trackTitle: {
        fontSize: '1.2rem',
        color: '#008000',
        marginBottom: '10px',
    },
    audio: {
        width: '100%',
        marginTop: '10px',
        outline: 'none',
    },
    audioPlayerHover: {
        transform: 'scale(1.05)',
    }
};

export default Music;
