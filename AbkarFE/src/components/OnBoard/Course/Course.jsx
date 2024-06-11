import style from "./Course.module.css";
import headimage from "../../../assets/Vector 1702.png";
import emogi from "../../../assets/Thinkingface.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../../../src/AuthContext";
import axios from "axios";
import { useFormik } from "formik";
import { SettingContext } from "../../../../src/SettingContext";

const Course = () => {
  let [setting, setSetting] = useState(`d-none`);
  let [allVideos, setAllVideos] = useState([]);
  const { token } = useAuth();

  let navigate = useNavigate();
  function toCommunity() {
    navigate("/community");
  }

  function toSetting() {
    setSetting(`d-block ${style.setting}`);
  }
  function removeSetting() {
    setSetting(`d-none`);
  }




  // this function to call and contact settinContext to make user go to setting page
  let { goToSetting } = useContext(SettingContext);
  // this function there in settingContext.jsx 
  // i`m distract it to use it here 

  async function addPassword(password, token) {
    let { data } = await goToSetting(password, token).catch((err) => err.data);
    console.log(data, `helooo`);
    if (data == undefined) {
      alert("your password is false");
      removeSetting();
    } else if (data.success === true) {
      navigate("/Setting");
    }
  }
  // this function take valus and call api with send values
  // api is there in settingContext.jsx so this function send values and token as parameter

  const checkPassword = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (values) => {
      addPassword(values.password, token);
    },
  });
  // is library => take values from form and handel errors and form refresh




  // this function to get all video
  async function getAllVideos() {
    let { data } = await axios.get(
      "http://127.0.0.1:8000/api/courses/1/videos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAllVideos(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    getAllVideos();
  }, []);







  // this function to mark video is watch
  async function WatchedVideo(id) {
    let { data } = await axios.post(
      `http://127.0.0.1:8000/api/videos/${id}/mark-as-watched`,
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data);
  }






  //  this function to get value of progress bar
  const [progressValue, setProgressValue] = useState();
  async function getPrgressValue() {
    let { data } = await axios.get("http://127.0.0.1:8000/api/progress/1", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProgressValue(data.data.progress);
  }
  useEffect(() => {
    getPrgressValue();
  }, []);






  return (
    <>
      <div className="layer">
        <div
          className={`d-flex justify-content-center align-items-center ${setting} `}
        >
          <div className=" position-relative d-flex justify-content-center">
            <h1 className={`${style.settingTitle}`}>ادخل كلمة السر</h1>
            <div className={`${style.settingContent}`}>
              <form onSubmit={checkPassword.handleSubmit}>
                <div className="form-group">
                  <input className={`${style.settingPassword}`}
                   type="password"
                    name="password"
                    value={checkPassword.values.password}
                    onChange={checkPassword.handleChange} />
                </div>
                <button className={`${style.settingBtn}`}>
                  الدخول الي الاعدادات
                </button>
              </form>

            </div>
          </div>
        </div>

        <div className="3bkr  w-100 mb-5 fixed-top ">
          <div className={`${style.head} `}>
            <div
              onClick={toSetting}
              className={` ${style.pointerIcon} editIcon d-flex flex-column align-items-center `}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3808 1.6504C15.4852 1.8532 15.5116 2.1136 15.5632 2.6344C15.6616 3.6184 15.7108 4.1104 15.9172 4.3816C16.0458 4.54999 16.2167 4.68132 16.4125 4.76226C16.6083 4.8432 16.822 4.87085 17.032 4.8424C17.368 4.798 17.752 4.4848 18.5176 3.8584C18.922 3.526 19.1248 3.3604 19.342 3.2908C19.6186 3.2024 19.9179 3.21733 20.1844 3.3328C20.3944 3.424 20.5804 3.6088 20.9488 3.9784L22.0216 5.0512C22.3912 5.4208 22.576 5.6056 22.6672 5.8156C22.7827 6.08207 22.7976 6.38137 22.7092 6.658C22.6396 6.8752 22.474 7.078 22.1428 7.4824C21.5152 8.2492 21.202 8.632 21.1564 8.9692C21.1283 9.17908 21.1563 9.39265 21.2374 9.58823C21.3185 9.78382 21.45 9.95445 21.6184 10.0828C21.8884 10.2892 22.3816 10.3384 23.3668 10.4368C23.8864 10.4884 24.1468 10.5148 24.3508 10.6192C24.6081 10.7526 24.8085 10.9747 24.9148 11.2444C25 11.4568 25 11.7184 25 12.2416V13.7584C25 14.2816 25 14.5432 24.916 14.7544C24.8093 15.0249 24.6081 15.2475 24.3496 15.3808C24.1468 15.4852 23.8864 15.5116 23.3656 15.5632C22.3816 15.6616 21.8896 15.7108 21.6184 15.9172C21.45 16.0458 21.3187 16.2167 21.2377 16.4125C21.1568 16.6083 21.1292 16.822 21.1576 17.032C21.2032 17.368 21.5164 17.752 22.1428 18.5176C22.474 18.922 22.6396 19.1236 22.7092 19.342C22.7976 19.6186 22.7827 19.9179 22.6672 20.1844C22.576 20.3944 22.3912 20.5792 22.0216 20.9488L20.9488 22.0204C20.5792 22.3912 20.3944 22.576 20.1844 22.666C19.9179 22.7815 19.6186 22.7964 19.342 22.708C19.1248 22.6384 18.922 22.4728 18.5176 22.1416C17.7508 21.5152 17.368 21.202 17.032 21.1576C16.822 21.1292 16.6083 21.1568 16.4125 21.2377C16.2167 21.3187 16.0458 21.45 15.9172 21.6184C15.7108 21.8884 15.6616 22.3804 15.5632 23.3656C15.5116 23.8864 15.4852 24.1468 15.3808 24.3496C15.2478 24.6078 15.0257 24.8091 14.7556 24.916C14.5432 25 14.2816 25 13.7584 25H12.2416C11.7184 25 11.4568 25 11.2456 24.916C10.9751 24.8093 10.7525 24.6081 10.6192 24.3496C10.5148 24.1468 10.4884 23.8864 10.4368 23.3656C10.3384 22.3816 10.2892 21.8896 10.0828 21.6184C9.95431 21.4502 9.78362 21.319 9.58804 21.2381C9.39247 21.1571 9.17897 21.1294 8.9692 21.1576C8.632 21.202 8.2492 21.5152 7.4824 22.1416C7.078 22.474 6.8752 22.6396 6.658 22.7092C6.38137 22.7976 6.08207 22.7827 5.8156 22.6672C5.6056 22.576 5.4196 22.3912 5.0512 22.0216L3.9784 20.9488C3.6088 20.5792 3.424 20.3944 3.3328 20.1844C3.21733 19.9179 3.2024 19.6186 3.2908 19.342C3.3604 19.1248 3.526 18.922 3.8572 18.5176C4.4848 17.7508 4.798 17.368 4.8424 17.0308C4.87063 16.821 4.84287 16.6075 4.76194 16.412C4.68101 16.2164 4.54979 16.0457 4.3816 15.9172C4.1116 15.7108 3.6184 15.6616 2.6332 15.5632C2.1136 15.5116 1.8532 15.4852 1.6492 15.3808C1.39186 15.2474 1.19152 15.0253 1.0852 14.7556C1 14.5432 1 14.2816 1 13.7584V12.2416C1 11.7184 1 11.4568 1.084 11.2456C1.19066 10.9751 1.39194 10.7525 1.6504 10.6192C1.8532 10.5148 2.1136 10.4884 2.6344 10.4368C3.6184 10.3384 4.1116 10.2892 4.3816 10.0828C4.55001 9.95445 4.68146 9.78382 4.7626 9.58823C4.84375 9.39265 4.87169 9.17908 4.8436 8.9692C4.798 8.632 4.4836 8.2492 3.8572 7.4812C3.526 7.0768 3.3604 6.8752 3.2908 6.6568C3.2024 6.38017 3.21733 6.08087 3.3328 5.8144C3.424 5.6056 3.6088 5.4196 3.9784 5.05L5.0512 3.9784C5.4208 3.6088 5.6056 3.4228 5.8156 3.3328C6.08207 3.21733 6.38137 3.2024 6.658 3.2908C6.8752 3.3604 7.078 3.526 7.4824 3.8572C8.2492 4.4836 8.632 4.7968 8.968 4.8424C9.17826 4.87093 9.39232 4.84321 9.58836 4.76205C9.78441 4.68089 9.95543 4.5492 10.084 4.3804C10.288 4.1104 10.3384 3.6184 10.4368 2.6332C10.4884 2.1136 10.5148 1.8532 10.6192 1.6492C10.7524 1.39141 10.9745 1.19061 11.2444 1.084C11.4568 1 11.7184 1 12.2416 1H13.7584C14.2816 1 14.5432 1 14.7544 1.084C15.0249 1.19066 15.2475 1.39194 15.3808 1.6504ZM13 17.8C14.273 17.8 15.4939 17.2943 16.3941 16.3941C17.2943 15.4939 17.8 14.273 17.8 13C17.8 11.727 17.2943 10.5061 16.3941 9.60589C15.4939 8.70571 14.273 8.2 13 8.2C11.727 8.2 10.5061 8.70571 9.60589 9.60589C8.70571 10.5061 8.2 11.727 8.2 13C8.2 14.273 8.70571 15.4939 9.60589 16.3941C10.5061 17.2943 11.727 17.8 13 17.8Z"
                  fill="#FFD200"
                  stroke="#E99934"
                  strokeWidth="2"
                />
              </svg>

              <p className={`${style.editIconP}`}>الاعدادات</p>
            </div>
            <h1 className={`${style.computer} `}>أنا الكمبيوتر</h1>
            <div
              onClick={toCommunity}
              className={` ${style.pointerIcon} editIcon d-flex flex-column align-items-center `}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00001 11.9988L1.00001 11.9975C1.00057 9.58584 1.79364 7.24121 3.25719 5.32444C4.72074 3.40766 6.77365 2.02497 9.09997 1.38917C11.4263 0.753366 13.8971 0.899684 16.1321 1.80561C18.3671 2.71153 20.2425 4.32685 21.4696 6.40296C22.6967 8.47907 23.2075 10.9009 22.9234 13.2958C22.6393 15.6906 21.5761 17.9257 19.8973 19.6571C18.2186 21.3886 16.0173 22.5203 13.6324 22.8782C11.2475 23.2361 8.81102 22.8003 6.69801 21.6379L6.32832 21.4345L5.92469 21.5574L1.25909 22.9782L1.25902 22.9782C1.22433 22.9888 1.18743 22.9897 1.15225 22.981C1.11708 22.9722 1.08495 22.954 1.05931 22.9283C1.03368 22.9027 1.01549 22.8706 1.0067 22.8354C0.997912 22.8002 0.99885 22.7633 1.00942 22.7286L1.00956 22.7281L2.43036 18.0554L2.55284 17.6525L2.35032 17.2834C1.46174 15.6639 0.997236 13.846 1.00001 11.9988ZM6.20001 10.7973C6.20001 11.3807 6.43179 11.9403 6.84437 12.3529C7.25695 12.7655 7.81653 12.9972 8.40001 12.9972H15.6C16.1835 12.9972 16.7431 12.7655 17.1556 12.3529C17.5682 11.9403 17.8 11.3807 17.8 10.7973C17.8 10.2138 17.5682 9.6542 17.1556 9.24161C16.7431 8.82903 16.1835 8.59725 15.6 8.59725H8.40001C7.81653 8.59725 7.25695 8.82903 6.84437 9.24162C6.43179 9.6542 6.20001 10.2138 6.20001 10.7973ZM8.40001 13.3972C7.81653 13.3972 7.25695 13.629 6.84437 14.0416C6.43179 14.4542 6.20001 15.0138 6.20001 15.5972C6.20001 16.1807 6.43179 16.7403 6.84437 17.1529C7.25695 17.5655 7.81653 17.7972 8.40001 17.7972H13.2C13.7835 17.7972 14.3431 17.5655 14.7556 17.1529C15.1682 16.7403 15.4 16.1807 15.4 15.5972C15.4 15.0138 15.1682 14.4542 14.7556 14.0416C14.3431 13.629 13.7835 13.3972 13.2 13.3972H8.40001Z"
                  fill="#FFD200"
                  stroke="#E99934"
                  strokeWidth="2"
                />
              </svg>
              <p className={`${style.editIconP}`}>المجتمع</p>
            </div>
          </div>
          <img className={`${style.headimage}`} src={headimage} alt="" />
        </div>

        <div className={`${style.couresConatinar} container `}>
          <div className={`${style.progress}`}>
            <div
              className={`${style.skillProgress}`}
              style={{ width: `${progressValue}%` }}
            ></div>
            <div className={`${style.progressContent}`}>
              <p className={`${style.progressPragraph}`}>{progressValue}%</p>
              <p className={`${style.progressPragraph}`}>تقدمك </p>
            </div>
          </div>

          <div className="row gy-5 mt-4">
            {/* <div className="col-lg-4">
              <div className={`${style.videocontent} rounded-5 mb-3`}>
                <div className=" p-3 d-flex justify-content-center">
                  <iframe
                    className={`${style.video} w-100`}
                    src="https://www.youtube.com/embed/Z6ytvzNlmRo?modestbranding=0"
                  ></iframe>
                </div>
                <p className={`${style.videoParagraph} p-2`}>
                  رحلة تحويل الأفكار إلى الاختراعات ✨{" "}
                </p>
                <div className={`${style.videoIcon}`}>
                  <p className={`${style.videoNumber}`}>1</p>
                </div>
              </div>
              <div className={`${style.note} w-100 p-3 `}>
                <p className={`${style.noteParagraph}`}>
                  تعلم اكثر عن عالم الافكار 💡
                </p>
              </div>
            </div> */}
            {allVideos[0]?.map((ele) => (
              <div key={ele.id} className="col-lg-4">
                <div className={`${style.videocontent} rounded-5 mb-3`}>
                  {allVideos[1]?.map(ele => ele.video_id).includes(ele.id-1)||ele.id==1 ?<Link  to={"/video/" + ele.id}>
                    <div className="p-3 d-flex justify-content-center position-relative">
                      <iframe
                        className={`${style.video} w-100`}
                        src={ele.url}
                      ></iframe>
                      <div
                        onClick={() => WatchedVideo(ele.id)}
                        className=" position-absolute top-0 bottom-0 end-0 start-0  z-3 rounded-5"
                      ></div>
                    </div>
                  </Link>: <div className="p-3 d-flex justify-content-center position-relative">
                      <iframe
                        className={`${style.video} w-100`}
                        src={ele.url}
                      ></iframe>
                      <div
                        // onClick={() => WatchedVideo(ele.id)}
                        className=" position-absolute top-0 bottom-0 end-0 start-0  z-3 rounded-5"
                      ></div>
                    </div>}
                  

                  <p className={`${style.videoParagraph} p-2`}> {ele.title} </p>
                  <div className={`${style.videoIcon}`}>
                    {allVideos[1]?.map(ele => ele.video_id).includes(ele.id) ? <div className={`${style.videoLayer} videoLayer`}></div> : null}
                    <p className={`${style.videoNumber}`}>{ele.id}</p>
                  </div>
                </div>

                <div className={`${style.note} w-100 p-3  `}>
                  <p className={`${style.noteParagraph}`}>
                    تعلم اكثر عن عالم الافكار 💡
                  </p>
                </div>
              </div>
            ))}

            <div className="col-lg-4">
              {progressValue===100?<Link to={"/hello"} className=" text-decoration-none"><div className={`${style.iconContent} rounded-5 mb-3 p-4`}>
                <img height={248} className="w-100" src={emogi} alt="" />
                <p className={`${style.iconParagraph} mt-3 `}>
                  الاختبار النهائي
                </p>
                <div className={`${style.videoIcon}`}>
                  <div className={`${style.videoLayer}`}></div>
                </div>
              </div></Link>:<div className={`${style.iconContent} rounded-5 mb-3 p-4`}>
                <img height={248} className="w-100" src={emogi} alt="" />
                <p className={`${style.iconParagraph} mt-3 `}>
                  الاختبار النهائي
                </p>
                <div className={`${style.videoIcon}`}>
                  <div className={`${style.videoLayer}`}></div>
                </div>
              </div>}
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
