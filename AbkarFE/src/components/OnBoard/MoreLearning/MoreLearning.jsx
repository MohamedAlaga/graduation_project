import style from './MoreLearning.module.css'
import headimage from '../../../assets/Vector 1702.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const MoreLearning = () => {
    // let [setting,setSetting]=useState(`d-none`)

    let navigate = useNavigate()
    function toVideo() {
        navigate('/Video')
    }
    function toCommunity() {
        navigate('/community')
    }
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

       <div className="3bkr  w-100 mb-4">
            <div className={`${style.head} `}>
                <div onClick={toVideo} className={` ${style.pointerIcon} editIcon  `}>
                <svg  width="44" height="33" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.198 19.8524C12.3392 18.382 13.3789 15.3917 15.749 15.3917H29.8887C31.0385 15.3917 31.9707 14.4595 31.9707 13.3096C31.9707 12.1598 31.0385 11.2276 29.8887 11.2276H15.749C13.3789 11.2276 12.3391 8.23724 14.198 6.76687L16.8778 4.64713C18.0242 3.74031 18.0167 1.99872 16.8625 1.10179C16.0437 0.465418 14.8961 0.47035 14.0828 1.11373L2.13502 10.5646C0.363499 11.9659 0.363498 14.6534 2.13502 16.0547L14.0828 25.5055C14.8961 26.1489 16.0437 26.1538 16.8625 25.5175C18.0167 24.6205 18.0242 22.879 16.8778 21.9721L14.198 19.8524Z" fill="#FFD200" stroke="black" />
                    </svg>
                </div>
                <h1 className={`${style.moreLearning} d-block m-auto `}>تعلم اكثر عن الموضوع</h1>
                {/* <div onClick={toCommunity} className={` ${style.pointerIcon} editIcon d-flex flex-column align-items-center`}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00001 11.9988L1.00001 11.9975C1.00057 9.58584 1.79364 7.24121 3.25719 5.32444C4.72074 3.40766 6.77365 2.02497 9.09997 1.38917C11.4263 0.753366 13.8971 0.899684 16.1321 1.80561C18.3671 2.71153 20.2425 4.32685 21.4696 6.40296C22.6967 8.47907 23.2075 10.9009 22.9234 13.2958C22.6393 15.6906 21.5761 17.9257 19.8973 19.6571C18.2186 21.3886 16.0173 22.5203 13.6324 22.8782C11.2475 23.2361 8.81102 22.8003 6.69801 21.6379L6.32832 21.4345L5.92469 21.5574L1.25909 22.9782L1.25902 22.9782C1.22433 22.9888 1.18743 22.9897 1.15225 22.981C1.11708 22.9722 1.08495 22.954 1.05931 22.9283C1.03368 22.9027 1.01549 22.8706 1.0067 22.8354C0.997912 22.8002 0.99885 22.7633 1.00942 22.7286L1.00956 22.7281L2.43036 18.0554L2.55284 17.6525L2.35032 17.2834C1.46174 15.6639 0.997236 13.846 1.00001 11.9988ZM6.20001 10.7973C6.20001 11.3807 6.43179 11.9403 6.84437 12.3529C7.25695 12.7655 7.81653 12.9972 8.40001 12.9972H15.6C16.1835 12.9972 16.7431 12.7655 17.1556 12.3529C17.5682 11.9403 17.8 11.3807 17.8 10.7973C17.8 10.2138 17.5682 9.6542 17.1556 9.24161C16.7431 8.82903 16.1835 8.59725 15.6 8.59725H8.40001C7.81653 8.59725 7.25695 8.82903 6.84437 9.24162C6.43179 9.6542 6.20001 10.2138 6.20001 10.7973ZM8.40001 13.3972C7.81653 13.3972 7.25695 13.629 6.84437 14.0416C6.43179 14.4542 6.20001 15.0138 6.20001 15.5972C6.20001 16.1807 6.43179 16.7403 6.84437 17.1529C7.25695 17.5655 7.81653 17.7972 8.40001 17.7972H13.2C13.7835 17.7972 14.3431 17.5655 14.7556 17.1529C15.1682 16.7403 15.4 16.1807 15.4 15.5972C15.4 15.0138 15.1682 14.4542 14.7556 14.0416C14.3431 13.629 13.7835 13.3972 13.2 13.3972H8.40001Z" fill="#FFD200" stroke="#E99934" stroke-width="2" />
                    </svg>
                    <p className={`${style.editIconP}`}>المجتمع</p>
                </div> */}
            </div>
            <img className={`${style.headimage}`} src={headimage} alt="" />
        </div>


        <div className={`${style.learnContainer} container `}>
            <h1 className={`${style.learnAdress} mb-4`}>رحلة تحويل الأفكار إلى الاختراعات ✨</h1>
            <p className={`${style.abuotLearn}`}>1 . الذكاء الاصطناعي وتعلم الآلة 🤖: تقدمت تقنيات الذكاء الاصطناعي بشكل كبير، حيث يُستخدم التعلم الآلي في تطبيقات متنوعة، من التشخيص الطبي إلى تطوير السيارات الذاتية القيادة.</p>
            <p className={`${style.abuotLearn}`}>2 . الذكاء الاصطناعي وتعلم الآلة 🤖: تقدمت تقنيات الذكاء الاصطناعي بشكل كبير، حيث يُستخدم التعلم الآلي في تطبيقات متنوعة، من التشخيص الطبي إلى تطوير السيارات الذاتية القيادة.</p>
            <p className={`${style.abuotLearn}`}>3 . تكنولوجيا الاتصالات والجيل الخامس 📡: شهدت تكنولوجيا الاتصالات تقدمًا سريعًا، حيث يعد الجيل الخامس من شبكات الجوال خطوة ضخمة نحو سرعات أعلى واتصال أكثر استقرارًا.</p>
            <p className={`${style.abuotLearn}`}>4 . الواقع الافتراضي والواقع المعزز 🕶️: أصبحت تقنيات الواقع الافتراضي والواقع المعزز تحول تجاربنا اليومية، سواء في مجال الترفيه أو التعليم.</p>
            <p className={`${style.abuotLearn}`}>5 . تطور الحوسبة الكمومية 💻🔍: تُعَد الحوسبة الكمومية قفزة هائلة في مجال الحوسبة، حيث تتيح لنا معالجة المعلومات بشكل</p>
            <p className={`${style.abuotLearn}`}>6 . الذكاء الاصطناعي وتعلم الآلة 🤖: تقدمت تقنيات الذكاء الاصطناعي بشكل كبير، حيث يُستخدم التعلم الآلي في تطبيقات متنوعة، من التشخيص الطبي إلى تطوير السيارات الذاتية القيادة.</p>
            <div className="LearnBtn d-flex align-self-baseline mb-2  mt-4">
                <button onClick={toCommunity} className={`${style.learnBtnDirection1}`}>التالي</button>
                <button onClick={toVideo} className={`${style.learnBtnDirection2}`}>السابق</button>

            </div>
        </div>
       </div>
    </>
    )
}

export default MoreLearning