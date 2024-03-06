import React from 'react'
import style from './Community.module.css'
import headimage from '../../../assets/Vector 1702.png'
import { Navigate, useNavigate } from 'react-router-dom'


const Community = () => {
    let navigate =useNavigate()
    function toVedio(){
        navigate('/MoreLearning')
    }
    return (<>
        <div className="3bkr w-100 mb-lg-3">
            <div className={`${style.head} `}>
                <div onClick={toVedio} className={` ${style.pointerIcon}  `}>
                    <svg className={`${style.communityIcon} `} width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.198 19.8524C12.3392 18.382 13.3789 15.3917 15.749 15.3917H29.8887C31.0385 15.3917 31.9707 14.4595 31.9707 13.3096C31.9707 12.1598 31.0385 11.2276 29.8887 11.2276H15.749C13.3789 11.2276 12.3391 8.23724 14.198 6.76687L16.8778 4.64713C18.0242 3.74031 18.0167 1.99872 16.8625 1.10179C16.0437 0.465418 14.8961 0.47035 14.0828 1.11373L2.13502 10.5646C0.363499 11.9659 0.363498 14.6534 2.13502 16.0547L14.0828 25.5055C14.8961 26.1489 16.0437 26.1538 16.8625 25.5175C18.0167 24.6205 18.0242 22.879 16.8778 21.9721L14.198 19.8524Z" fill="#FFD200" stroke="black" />
                    </svg>
                </div>
                <p className={`${style.Community} d-block m-auto  `}>المجتمع</p>

            </div>
            <img className={`${style.headimage}`} src={headimage} alt="" />
        </div>
        <div className={`${style.communityContent}`}>
            <div className={`${style.communitySite}`}>
                <div className={`${style.communityVideo} mb-2`}>
                    <iframe className={`${style.iframe} p-4`} width={`642`} height={`363`} src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" frameborder="0"></iframe>
                    <svg className={`${style.communityFrame}`} width="642" height="363" viewBox="0 0 642 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.9866 356.126C15.8793 357.563 7.10248 347.445 9.79398 337.505C14.4027 320.485 19.3499 297.568 19.258 277.75C19.1735 259.517 14.7779 246.986 10.4873 234.753L10.454 234.658C6.16807 222.44 2 210.51 2 193.097C2 176.138 6.20833 163.913 10.5196 151.419L10.5411 151.357C14.852 138.864 19.2581 126.095 19.2581 108.436C19.2581 85.6743 11.9169 46.4133 6.82189 21.8746C4.91309 12.6814 12.927 4.23648 22.223 5.63907C44.543 9.00674 79.1741 13.5127 105.268 13.5974C126.417 13.666 139.668 11.0135 153.192 8.3063L154.212 8.10208C168.019 5.34097 182.377 2.57983 206.234 2.57983C227.244 2.57983 244.268 5.27097 261.574 8.00659L261.938 8.06409C279.366 10.8188 297.098 13.5974 319.274 13.5974C340.609 13.5974 356.255 11.025 372.347 8.37918C372.989 8.27359 373.632 8.16788 374.276 8.06223C391.031 5.31317 408.594 2.57983 434.04 2.57983C458.725 2.57983 476.069 5.31271 491.483 8.05765C492.986 8.32529 494.473 8.59341 495.947 8.85938C509.59 11.3207 522.21 13.5974 537.589 13.5974C559.207 13.5974 595.875 8.86148 619.517 5.44836C628.846 4.10144 636.785 12.7363 634.744 21.9879C629.673 44.9805 622.742 81.149 622.742 107.276C622.742 123.783 627.139 137.397 631.436 150.705L631.468 150.802C635.789 164.182 640 177.261 640 193.097C640 209.718 635.792 222.112 631.478 234.784L631.453 234.855C627.146 247.507 622.742 260.444 622.742 277.759C622.742 296.67 627.996 320.55 632.69 338.14C635.299 347.917 626.716 357.689 616.754 356.256C596.247 353.308 566.224 349.894 537.582 349.982C515.916 350.05 495.651 352.824 477.993 355.565C475.316 355.981 472.703 356.394 470.157 356.798C455.824 359.068 443.627 361 434.04 361C409.362 361 393.232 358.27 376.991 355.519L376.98 355.517C360.693 352.759 344.295 349.982 319.274 349.982C296.205 349.982 279.276 352.611 262.473 355.221L262.447 355.225C245.654 357.833 228.983 360.42 206.234 360.42C180.079 360.42 168.17 357.842 156.215 355.255L156.177 355.247C144.034 352.618 131.83 349.982 105.274 349.982C75.7131 349.982 46.2434 353.246 25.9866 356.126Z" fill="black" stroke="#FFD200" stroke-width="4" />
                    </svg>
                </div>
                <div className="row  mb-4">
                    <div className="col-sm-6">
                        <p className={`${style.CommunityParagraph}`}>1- اتبع الخطوات المشروحة في الفيديو🧐 </p>
                        <p className={`${style.CommunityParagraph}`}>3- شارك رأيك بحرية و تفاعل باستمرار 💭</p>
                    </div>
                    <div className="col-sm-6">
                        <p className={`${style.CommunityParagraph}`}>2- التزم بأداب واخلاقيات المجتمع📃 </p>
                        <p className={`${style.CommunityParagraph}`}>4- كون صداقات وتواصل بدون خوف😊</p>
                    </div>
                </div>
                <button className={`${style.CommunityBtn} d-block m-auto mb-5 mb-lg-0`}>الانضمام الي المجتمع</button>
            </div>

        </div>
    </>
    )
}

export default Community