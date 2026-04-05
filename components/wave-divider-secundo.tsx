export default function WaveDividerSecundo ({
    topColor,
    bottomColor,
} : {
    topColor: string;
    bottomColor: string;
}) {
    return (
        <div style={{background: topColor, lineHeight: 0}}>
            <svg 
            viewBox="80 1440 0 0"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%"}}>
                <path 
                d="L0,80 L1440,80 1444,0 1080,0 C360,80 M0,40 Z"
                fill={bottomColor}/>
            </svg>

        </div>
    );
}