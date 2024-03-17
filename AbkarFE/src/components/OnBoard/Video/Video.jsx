import style from './Vedio.module.css'
import headimage from '../../../assets/Vector 1702.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Video = () => {
    let [setting,setSetting]=useState(`d-none`)
    let navigate = useNavigate()
    function toCourse() {
        navigate('/Course')
    }
    function toMoreLearning() {
        navigate('/MoreLearning')
    }
    // function toCommunity() {
    //     navigate('/community')
    // }
    // function toSetting(){
    //     setSetting(`d-block ${style.setting}`)
    //   }
    //   function removeSetting(){
    //     setSetting(`d-none`)
    //   }

    return (<>
       <div className="layer">
       {/* <div  className={`d-flex justify-content-center align-items-center ${setting} `}>
        <div className=" position-relative d-flex justify-content-center">
        <h1 className={`${style.settingTitle}`}>ادخل كلمة السر</h1>
        <div className={`${style.settingContent}`}>
          <input className={`${style.settingPassword}`} type="password" />
          <button onClick={removeSetting} className={`${style.settingBtn}`}>الدخول الي الاعدادات</button>
        </div>
        </div>
        
      </div> */}

       <div className="3bkr  w-100 mb-5 overflow-hidden fixed-top  ">
            <div className={`${style.head} `}>
                <div  className={` ${style.pointerIcon} editIcon d-flex flex-column align-items-center `}>
                <svg  onClick={toCourse} width="36" height="33" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.198 19.8524C12.3392 18.382 13.3789 15.3917 15.749 15.3917H29.8887C31.0385 15.3917 31.9707 14.4595 31.9707 13.3096C31.9707 12.1598 31.0385 11.2276 29.8887 11.2276H15.749C13.3789 11.2276 12.3391 8.23724 14.198 6.76687L16.8778 4.64713C18.0242 3.74031 18.0167 1.99872 16.8625 1.10179C16.0437 0.465418 14.8961 0.47035 14.0828 1.11373L2.13502 10.5646C0.363499 11.9659 0.363498 14.6534 2.13502 16.0547L14.0828 25.5055C14.8961 26.1489 16.0437 26.1538 16.8625 25.5175C18.0167 24.6205 18.0242 22.879 16.8778 21.9721L14.198 19.8524Z" fill="#FFD200" stroke="black" />
                    </svg>

                    
                </div>
                <h1 className={`${style.watchVideo} d-block m-auto `}>مشاهدة الفيديو</h1>
                {/* <div onClick={toCommunity} className={` ${style.pointerIcon} editIcon d-flex flex-column align-items-center `}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00001 11.9988L1.00001 11.9975C1.00057 9.58584 1.79364 7.24121 3.25719 5.32444C4.72074 3.40766 6.77365 2.02497 9.09997 1.38917C11.4263 0.753366 13.8971 0.899684 16.1321 1.80561C18.3671 2.71153 20.2425 4.32685 21.4696 6.40296C22.6967 8.47907 23.2075 10.9009 22.9234 13.2958C22.6393 15.6906 21.5761 17.9257 19.8973 19.6571C18.2186 21.3886 16.0173 22.5203 13.6324 22.8782C11.2475 23.2361 8.81102 22.8003 6.69801 21.6379L6.32832 21.4345L5.92469 21.5574L1.25909 22.9782L1.25902 22.9782C1.22433 22.9888 1.18743 22.9897 1.15225 22.981C1.11708 22.9722 1.08495 22.954 1.05931 22.9283C1.03368 22.9027 1.01549 22.8706 1.0067 22.8354C0.997912 22.8002 0.99885 22.7633 1.00942 22.7286L1.00956 22.7281L2.43036 18.0554L2.55284 17.6525L2.35032 17.2834C1.46174 15.6639 0.997236 13.846 1.00001 11.9988ZM6.20001 10.7973C6.20001 11.3807 6.43179 11.9403 6.84437 12.3529C7.25695 12.7655 7.81653 12.9972 8.40001 12.9972H15.6C16.1835 12.9972 16.7431 12.7655 17.1556 12.3529C17.5682 11.9403 17.8 11.3807 17.8 10.7973C17.8 10.2138 17.5682 9.6542 17.1556 9.24161C16.7431 8.82903 16.1835 8.59725 15.6 8.59725H8.40001C7.81653 8.59725 7.25695 8.82903 6.84437 9.24162C6.43179 9.6542 6.20001 10.2138 6.20001 10.7973ZM8.40001 13.3972C7.81653 13.3972 7.25695 13.629 6.84437 14.0416C6.43179 14.4542 6.20001 15.0138 6.20001 15.5972C6.20001 16.1807 6.43179 16.7403 6.84437 17.1529C7.25695 17.5655 7.81653 17.7972 8.40001 17.7972H13.2C13.7835 17.7972 14.3431 17.5655 14.7556 17.1529C15.1682 16.7403 15.4 16.1807 15.4 15.5972C15.4 15.0138 15.1682 14.4542 14.7556 14.0416C14.3431 13.629 13.7835 13.3972 13.2 13.3972H8.40001Z" fill="#FFD200" stroke="#E99934" stroke-width="2" />
                    </svg>
                    <p className={`${style.editIconP}`}>المجتمع</p>
                </div> */}
            </div>
            <img className={`${style.headimage}`} src={headimage} alt="" />
        </div>

        <div className={`${style.communityContent}`}>
            <div className={`${style.communitySite}`}>
                <div className={`${style.communityVideo} `}>
                    <iframe className={`${style.iframe} p-5 `} width={`883`} height={`499`} src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" frameborder="0"></iframe>
                    <svg className={`${style.communityFrame}`} width="883" height="499" viewBox="0 0 883 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.9394 491.754C15.8568 493.298 7.16289 483.269 10.0297 473.421C16.9702 449.581 25.8807 412.881 25.7365 381.813C25.6209 356.876 19.6098 339.748 13.7095 322.936L13.6697 322.822C7.77199 306.017 2 289.515 2 265.442C2 241.993 7.82784 225.084 13.7588 207.905L13.7804 207.843C19.7108 190.665 25.7366 173.212 25.7366 149.062C25.7366 115.146 13.8228 54.3826 6.8807 21.8279C4.92489 12.6562 12.9109 4.25098 22.1916 5.70593C51.9888 10.3773 105.47 17.8149 144.787 17.9425C173.799 18.0366 191.964 14.4024 210.554 10.6829L211.954 10.4029C230.964 6.60327 250.767 2.79709 283.652 2.79709C312.608 2.79709 336.073 6.50427 359.868 10.2638L360.385 10.3453C384.354 14.1319 408.69 17.9425 439.126 17.9425C468.408 17.9425 489.875 14.415 512.009 10.7777C512.889 10.6331 513.77 10.4882 514.653 10.3434C537.711 6.56241 561.914 2.79709 596.974 2.79709C630.989 2.79709 654.892 6.56192 676.113 10.3388C678.18 10.7068 680.223 11.0752 682.25 11.4405C701.02 14.8247 718.312 17.9425 739.394 17.9425C771.805 17.9425 828.946 10.1832 860.54 5.49362C869.857 4.11063 877.76 12.7284 875.649 21.9514C868.648 52.5454 857.263 108.283 857.263 147.468C857.263 170.041 863.28 188.66 869.197 206.972L869.229 207.07C875.169 225.456 881 243.54 881 265.442C881 288.426 875.172 305.568 869.239 322.988L869.214 323.059C863.287 340.459 857.263 358.144 857.263 381.823C857.263 411.216 866.55 449.466 873.498 474C876.249 483.713 867.741 493.433 857.812 491.906C829.988 487.625 783.485 481.718 739.388 481.855C709.647 481.947 681.821 485.753 657.542 489.52C653.867 490.09 650.278 490.658 646.779 491.212C627.071 494.333 610.224 497 596.974 497C562.966 497 540.73 493.238 518.384 489.455L518.373 489.453C495.981 485.664 473.476 481.855 439.126 481.855C407.455 481.855 384.219 485.461 361.108 489.048L361.082 489.052C337.982 492.638 315.003 496.203 283.652 496.203C247.598 496.203 231.163 492.647 214.683 489.082L214.645 489.074C197.976 485.468 181.247 481.855 144.793 481.855C99.0682 481.855 53.4853 487.536 25.9394 491.754Z" fill="black" stroke="#FFD200" stroke-width="4" />
                    </svg>
                </div>
                <p className={`${style.videoParagraph}  me-4`}>رحلة تحويل الأفكار إلى الاختراعات ✨ </p>
                <div className={`${style.aboutVideo}`}>
                    <p className={`${style.aboutVideoParagraph}`}>
                        بدأ الإنسان التفكير في التكنولوجيا عندما اكتشف كيفية استخدام الأدوات البسيطة لتلبية احتياجاته اليومية. على مر العصور، تطورت تفكيره ليشمل ابتكار الآلات والأجهزة المتقدمة، حيث اكتسب فهمًا أعمق للطبيعة والعلوم، مما ساهم في تطوير تكنولوجيا تحسن حياته. تمثل التكنولوجيا الحديثة نتاجًا لتفكيره في تحسين الحياة من خلال التقدم العلمي، ومن خلالها يمكن للإنسان الوصول إلى، ومن خلالها يمكن للإنسان الوصول، ومن خلالها يمكن للإنسان الوصول مستويات جديدة من الإنتاجية والفعالية.
                    </p>
                    <svg className={`${style.aboutVideoFrame}`} width="860" height="252" viewBox="0 0 860 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M457.691 15.0939L457.713 15.0944H457.736C465.59 15.0944 473.793 12.6133 482.055 10.114C482.725 9.91153 483.395 9.70893 484.065 9.50752C493.134 6.78143 502.412 4.20782 512.163 4.42133C521.538 4.62658 529.451 6.99965 537.817 9.50832C538.185 9.61869 538.554 9.72933 538.924 9.84005C547.671 12.4575 556.919 15.0944 568.436 15.0944C579.952 15.0944 589.646 12.3453 598.967 9.68109L599.15 9.62871C608.449 6.97064 617.366 4.42181 627.739 4.42181C638.172 4.4218 646.919 7.00157 655.77 9.67279L656.28 9.82677C664.919 12.4353 673.726 15.0944 683.968 15.0944C693.28 15.0944 700.811 12.4286 708.151 9.83044L708.679 9.64362C716.218 6.97681 723.66 4.42181 733.168 4.42181C734.573 4.42181 736.887 5.0025 740.187 6.05142C741.632 6.51051 743.205 7.03823 744.907 7.60905L745.476 7.79992C747.391 8.44188 749.452 9.12938 751.623 9.81465C760.284 12.5482 770.85 15.2996 781.528 15.094C794.279 14.8486 821.032 10.0423 839.942 6.34224C843.284 5.68814 846.42 7.15619 848.466 9.76227C850.519 12.3783 851.315 15.9544 850.092 19.2317C847.417 26.3994 845.077 34.5127 844.943 41.342C844.77 50.1708 848.063 55.7243 851.206 61.0256L851.439 61.4192C854.611 66.7753 857.625 72.0609 857.625 80.9368C857.625 88.8005 854.665 95.1596 851.473 102.017L851.471 102.023C848.313 108.806 844.943 116.058 844.943 125.191C844.943 133.963 848.056 140.442 851.082 146.74C851.215 147.016 851.348 147.292 851.48 147.568C854.629 154.139 857.625 160.764 857.625 170.34C857.625 179.606 854.634 186.145 851.509 192.158C851.202 192.75 850.89 193.34 850.578 193.931C847.77 199.253 844.943 204.611 844.943 211.097C844.943 217.273 847.756 226.096 850.76 233.832C853.269 240.293 847.639 247.322 841.1 246.119C831.283 244.314 819.252 242.201 808.222 240.538C797.239 238.883 787.103 237.65 781.151 237.65C771.946 237.65 765.407 240.588 758.937 243.495C758.579 243.656 758.221 243.816 757.863 243.977C751.063 247.018 743.992 249.954 733.168 249.954C722.318 249.954 714.403 247.003 707.026 243.954C706.422 243.705 705.821 243.454 705.22 243.203C698.526 240.41 691.913 237.65 683.968 237.65C675.818 237.65 666.779 240.558 657.764 243.458C657.308 243.605 656.852 243.751 656.396 243.898C646.768 246.988 637.092 249.954 627.739 249.954C620.36 249.954 614.477 247.697 607.479 245.011C606.209 244.524 604.903 244.023 603.544 243.519C594.744 240.252 584.235 237.095 568.366 237.652C553.935 238.158 546.172 241.108 538.81 243.992L538.426 244.143C531.368 246.909 524.636 249.548 512.142 249.955C501.791 250.292 492.813 247.232 484.048 244.009C483.505 243.809 482.962 243.608 482.419 243.408C474.32 240.415 466.203 237.415 457.68 237.651C445.857 237.979 436.02 241.145 427.984 244.169C426.43 244.754 424.967 245.324 423.574 245.867C421.316 246.746 419.245 247.553 417.281 248.23C414.122 249.319 411.556 249.954 409.414 249.954C401.321 249.954 393.22 247.458 384.002 244.619C383.69 244.522 383.375 244.426 383.06 244.329C373.538 241.398 362.973 238.25 350.647 237.653C338.668 237.072 330.018 240.443 321.572 243.735L321.214 243.875C312.673 247.202 304.239 250.419 292.202 249.955C291.709 249.936 290.534 249.758 288.637 249.401C286.799 249.054 284.427 248.568 281.64 247.987C280.441 247.736 279.165 247.469 277.825 247.187C272.952 246.164 267.224 244.961 261.159 243.763C245.752 240.718 227.929 237.65 216.23 237.65C205.907 237.65 195.231 240.537 184.438 243.454C183.924 243.593 183.41 243.732 182.896 243.871C171.473 246.953 159.828 249.954 147.701 249.954C135.607 249.954 125.453 246.966 115.798 243.896C115.129 243.684 114.461 243.47 113.795 243.257C104.927 240.421 96.263 237.65 87.0798 237.65C80.9924 237.65 70.2844 238.871 58.5628 240.516C46.7938 242.168 33.861 244.27 23.2476 246.073C19.8687 246.647 16.6749 245.034 14.5569 242.212C12.4307 239.378 11.5965 235.577 12.7696 232.203C15.1672 225.306 17.078 217.368 16.9354 209.75C16.7672 200.771 12.801 192.783 9.09602 186.14C8.52885 185.123 7.97234 184.146 7.43484 183.202C6.17882 180.996 5.02659 178.972 4.08458 177.053C2.73389 174.301 2 172.111 2 170.34C2 161.166 5.47163 155.035 9.2048 148.495L9.25734 148.403C12.9769 141.887 16.9357 134.952 16.9357 124.667C16.9357 115.179 13.3481 108.368 9.98103 101.976L9.9251 101.87C6.52807 95.4208 3.3754 89.3822 3.3754 80.9368C3.3754 71.0771 6.58684 64.0404 9.907 58.0183C10.4205 57.0869 10.9491 56.1591 11.473 55.2395C12.6123 53.2395 13.7297 51.2782 14.6228 49.4018C15.9529 46.6072 16.9357 43.7186 16.9357 40.5955C16.9357 37.7967 16.1119 34.056 14.9514 30.1119C13.7758 26.1169 12.197 21.7268 10.5725 17.5562C8.12218 11.2655 13.5889 4.51473 20.0371 5.70626C30.5191 7.64318 43.8018 9.98637 56.1794 11.8461C68.5121 13.699 80.0863 15.0944 87.0798 15.0944C97.652 15.0944 106.925 11.9129 116.109 8.76206C116.423 8.65437 116.737 8.54671 117.05 8.43922C126.609 5.16412 136.209 2.00001 147.701 2.00001C159.242 2.00001 170.952 5.18775 182.575 8.47185C183.017 8.59688 183.46 8.7221 183.902 8.8473C194.954 11.9744 205.98 15.0944 216.23 15.0944C226.309 15.0944 238.522 12.0728 250.981 8.99035C251.656 8.82323 252.333 8.65593 253.009 8.48893C266.314 5.20508 279.889 2.00001 292.125 2.00001C304.269 2.00001 313.432 5.16301 322.294 8.42414C322.745 8.59015 323.196 8.75661 323.647 8.92304C332.015 12.0136 340.357 15.0944 350.55 15.0944C360.85 15.0944 370.151 12.3995 379.23 9.76903C379.544 9.67797 379.858 9.587 380.172 9.49621C389.62 6.76271 398.902 4.18495 409.369 4.4213C419.474 4.64947 425.11 6.91927 431.151 9.35244C431.346 9.43123 431.542 9.51019 431.739 9.58926C438.161 12.1716 445.089 14.8096 457.691 15.0939Z" fill="#FFD200" stroke="black" stroke-width="4" />
                    </svg>
                </div>
                <div className="viedoBtn d-flex align-self-baseline my-5 me-4">
                    <button onClick={toMoreLearning} className={`${style.videoBtn1}`}>التالي</button>
                    <button onClick={toCourse} className={`${style.videoBtn2}`}>السابق</button>

                </div>
            </div>

        </div>
       </div>
    </>

    )
}

export default Video