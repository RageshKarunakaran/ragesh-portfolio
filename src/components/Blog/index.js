import React from 'react'
import commingsoon from "../../lotties/commingsoon";
import Lottie from 'react-lottie';
const commingSoon = {
    loop: true,
    autoplay: true,
    animationData: commingsoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
function Blog() {
    return (
        <>
<div className='blog'>
            <div className="lottie">
                <Lottie options={commingSoon} />
            </div>
            </div>
        </>
    )
}

export default Blog
