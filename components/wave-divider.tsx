export default function WaveDivider ({
    topColor,
    bottomColor,
} : {
    topColor: string;
    bottomColor: string;
}) {
    return (
        <div style={{background: topColor, lineHeight: 0}}>
            <svg 
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%"}}>
                <path 
                d="M0,40 C360,80 1080,0 1444,0 L1440,80 L0,80 Z"
                fill={bottomColor}/>
            </svg>

        </div>
    );
}