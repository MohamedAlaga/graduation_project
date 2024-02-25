import React from 'react'
import style from './Course.module.css'
import headimage from '../../../assets/Vector 1702.png'
import video from '../../../assets/videoo.mp4'
import emogi from '../../../assets/Thinkingface.svg'
import { useNavigate } from 'react-router-dom'

const Course = () => {
  
    return (<>
        <div className="3bkr  w-100 mb-5 fixed-top ">
            <div className={`${style.head} `}>
                <div className={` ${style.pointerIcon} editIcon d-flex flex-column `}>
                    <svg className={`${style.computerIcon}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M9.0371 8.91439L9.03705 8.91435L9.03137 8.92006L8.97916 8.97261C8.96614 8.98551 8.95402 8.99803 8.94559 9.00674L8.94542 9.00691L8.92167 9.03118L8.9209 9.03197C7.92172 10.0574 7.39963 10.9676 7.34895 11.9529C7.29939 12.9166 7.71055 13.8438 8.28719 14.8704C8.74045 15.6773 9.57372 16.7364 10.3917 17.7006C10.7477 18.1204 10.4685 18.7945 9.91993 18.8396C8.66055 18.9431 7.32372 19.1027 6.43326 19.3526C5.29963 19.6707 4.35304 20.0356 3.70643 20.752C3.04528 21.4846 2.77055 22.4974 2.752 23.9291H2.75193L2.75196 23.9371L2.75219 24.0112C2.75211 24.0296 2.75239 24.047 2.75259 24.0591L2.75261 24.0608L2.75295 24.0933L2.75297 24.0944C2.77153 25.526 3.04597 26.5388 3.70684 27.2713C4.35322 27.9878 5.29962 28.3527 6.43326 28.6709C7.31104 28.9172 8.62205 29.0757 9.8643 29.1792C10.4122 29.2249 10.6913 29.8979 10.3362 30.318C9.537 31.2636 8.73054 32.2935 8.28719 33.0827C7.71055 34.1093 7.29939 35.0366 7.34895 36.0002C7.39963 36.9855 7.92172 37.8957 8.9209 38.9212L8.92169 38.922L8.94442 38.9452C8.94471 38.9455 8.94501 38.9458 8.94532 38.9461C8.95375 38.9548 8.96596 38.9674 8.97911 38.9805C8.97975 38.9811 8.98039 38.9817 8.98103 38.9824L9.03138 39.0331L9.03133 39.0331L9.0371 39.0387C10.0626 40.038 10.973 40.5599 11.9585 40.6103C12.9223 40.6597 13.8497 40.2484 14.8762 39.6717C15.6846 39.2177 16.7462 38.3821 17.712 37.5626C18.1317 37.2065 18.8059 37.4857 18.8509 38.0343C18.9544 39.2952 19.1141 40.6342 19.3643 41.5257C19.6824 42.6594 20.0474 43.6059 20.7638 44.2526C21.4963 44.9137 22.5091 45.1884 23.9408 45.207V45.2071L23.9488 45.207L24.0229 45.2068C24.0408 45.2069 24.0575 45.2066 24.0694 45.2064L24.0996 45.2061L24.1061 45.206C25.5377 45.1875 26.5505 44.913 27.283 44.2521C27.9995 43.6058 28.3644 42.6594 28.6826 41.5257C28.9262 40.6575 29.0839 39.3659 29.1874 38.1367C29.2336 37.5885 29.9069 37.3102 30.3264 37.6655C31.2814 38.474 32.3257 39.2938 33.1238 39.7421C34.1503 40.3187 35.0777 40.73 36.0415 40.6806C37.027 40.6302 37.9374 40.1083 38.9629 39.109L38.9629 39.1091L38.9686 39.1034L39.0223 39.0493L39.0228 39.0488L39.0407 39.0308L39.0407 39.0308L39.0445 39.0269L39.0537 39.0174L39.0553 39.0158L39.0783 38.9923L39.0791 38.9915C40.0783 37.966 40.6004 37.0558 40.651 36.0705C40.7006 35.1069 40.2895 34.1796 39.7128 33.153C39.2595 32.3461 38.4263 31.287 37.6083 30.3228C37.2523 29.903 37.5315 29.2289 38.0801 29.1838C39.3395 29.0804 40.6763 28.9208 41.5667 28.6709C42.7004 28.3527 43.647 27.9878 44.2936 27.2714C44.9547 26.5389 45.2294 25.5261 45.248 24.0944H45.2481L45.248 24.0863L45.2478 24.0123C45.2479 23.9936 45.2476 23.9758 45.2474 23.9637C45.2474 23.9633 45.2474 23.963 45.2474 23.9627L45.247 23.9302L45.247 23.9291C45.2285 22.4975 44.954 21.4847 44.2932 20.7521C43.6468 20.0357 42.7004 19.6707 41.5667 19.3526C40.689 19.1062 39.378 18.9477 38.1357 18.8442C37.5878 18.7986 37.3087 18.1256 37.6638 17.7055C38.463 16.7598 39.2695 15.73 39.7128 14.9407C40.2895 13.9141 40.7006 12.9869 40.651 12.0232C40.6004 11.0379 40.0783 10.1277 39.0791 9.10228L39.0783 9.10149L39.0556 9.07828C39.0554 9.07807 39.0552 9.07785 39.055 9.07763C39.0465 9.0689 39.0342 9.05613 39.0209 9.04294C39.0202 9.0423 39.0196 9.04166 39.0189 9.04103L38.9686 8.99038L38.9687 8.99033L38.9629 8.98471C37.9374 7.98546 37.027 7.46357 36.0415 7.4131C35.0777 7.36375 34.1503 7.77505 33.1238 8.35169C32.3154 8.80578 31.2538 9.64132 30.288 10.4608C29.8683 10.817 29.1941 10.5378 29.1491 9.9891C29.0456 8.72828 28.8859 7.38924 28.6357 6.49771C28.3176 5.36409 27.9526 4.41749 27.2362 3.77088C26.5037 3.10974 25.4909 2.83501 24.0592 2.81645V2.81638L24.0512 2.81641L23.9771 2.81664C23.9587 2.81656 23.9413 2.81684 23.9291 2.81704L23.9275 2.81707L23.895 2.81741L23.8939 2.81742C22.4623 2.83598 21.4495 3.11043 20.717 3.77129C20.0005 4.41767 19.6356 5.36407 19.3174 6.49771C19.0738 7.36592 18.9161 8.65753 18.8126 9.8867C18.7664 10.435 18.0931 10.7132 17.6736 10.358C16.7186 9.5494 15.6743 8.72966 14.8762 8.28138C13.8497 7.70474 12.9223 7.29343 11.9585 7.34279C10.973 7.39325 10.0626 7.91515 9.0371 8.91439ZM31.6035 24.0117C31.6035 28.2143 28.1967 31.6211 23.9941 31.6211C19.7916 31.6211 16.3848 28.2143 16.3848 24.0117C16.3848 19.8092 19.7916 16.4023 23.9941 16.4023C28.1967 16.4023 31.6035 19.8092 31.6035 24.0117Z" fill="#FFD200" stroke="#E99934" />
                        <path d="M8.57684 8.45532L8.58347 8.44886C9.65697 7.40284 10.7101 6.75586 11.9252 6.69364C13.0905 6.63397 14.1613 7.13428 15.1945 7.71467C16.0522 8.19642 17.1382 9.05293 18.0936 9.86192C18.0972 9.86499 18.0995 9.86644 18.1005 9.867C18.1006 9.86702 18.1007 9.86704 18.1009 9.86706C18.1044 9.86751 18.1171 9.86775 18.1346 9.86052C18.1521 9.85329 18.161 9.84411 18.1632 9.84121C18.1634 9.84103 18.1635 9.84088 18.1635 9.84077C18.1638 9.83972 18.1645 9.83703 18.1649 9.83214C18.2685 8.60191 18.4297 7.25549 18.6916 6.32208C19.0118 5.18106 19.4153 4.07023 20.2816 3.28867C21.1848 2.47379 22.387 2.1869 23.8855 2.16748L23.888 2.16744L23.917 2.16715L23.9193 2.16711C23.9195 2.16711 23.9198 2.16711 23.92 2.1671L23.9232 2.16707L23.9356 3.317C23.9493 3.31678 23.963 3.31656 23.9766 3.31665L8.57684 8.45532ZM8.57684 8.45532L8.57031 8.46189L8.51961 8.51291M8.57684 8.45532L8.47953 8.55365M24.0225 45.8568C24.0469 45.8569 24.0685 45.8565 24.0798 45.8563L24.0951 45.8561C24.0986 45.8561 24.0997 45.8561 24.0996 45.8561H24.1071L24.1145 45.856C25.613 45.8365 26.8152 45.5496 27.7184 44.7348C28.5847 43.9532 28.9882 42.8424 29.3084 41.7014C29.5703 40.7679 29.7315 39.4215 29.8351 38.1913C29.8355 38.1864 29.8362 38.1837 29.8365 38.1826C29.8365 38.1825 29.8366 38.1824 29.8368 38.1822C29.839 38.1793 29.8479 38.1701 29.8654 38.1629C29.8829 38.1557 29.8956 38.1559 29.8991 38.1564C29.8993 38.1564 29.8994 38.1564 29.8995 38.1564C29.9005 38.157 29.9028 38.1585 29.9064 38.1615C30.8618 38.9705 31.9478 39.827 32.8055 40.3088C33.8387 40.8892 34.9095 41.3895 36.0748 41.3298C37.2899 41.2676 38.343 40.6206 39.4165 39.5746L39.4232 39.5681L39.4297 39.5615L39.4834 39.5075L39.4845 39.5064L39.5024 39.4883L39.5025 39.4883L39.5111 39.4794L39.5183 39.472L39.522 39.4682L39.5429 39.4469L39.5446 39.4451C40.5905 38.3718 41.2377 37.3188 41.3002 36.1039C41.3601 34.9387 40.8599 33.868 40.2795 32.8347C39.7926 31.9678 38.9222 30.8668 38.104 29.9023C38.101 29.8988 38.0995 29.8965 38.099 29.8955C38.099 29.8954 38.0989 29.8953 38.0989 29.8952C38.0985 29.8917 38.0982 29.879 38.1055 29.8615C38.1127 29.8441 38.1219 29.8352 38.1246 29.8331C38.1247 29.833 38.1248 29.833 38.1249 29.8329C38.126 29.8326 38.1287 29.832 38.1333 29.8316C39.393 29.7282 40.7857 29.5652 41.7424 29.2967C42.8834 28.9765 43.9943 28.5731 44.7761 27.7069C45.5913 26.8037 45.8785 25.6015 45.8979 24.1028L45.8981 24.0935L45.898 24.0843L45.8978 24.0126L24.0234 44.7068M24.0225 45.8568C24.0204 45.8568 24.0183 45.8568 24.0161 45.8568L24.0234 44.7068M24.0225 45.8568L24.0271 45.8568L24.0234 44.7068M24.0225 45.8568L23.9509 45.857L23.9416 45.8571L23.9324 45.8569C22.4336 45.8375 21.2315 45.5503 20.3283 44.7351C19.4621 43.9533 19.0587 42.8423 18.7385 41.7014C18.4697 40.7436 18.3066 39.3486 18.2031 38.0875C18.2027 38.0829 18.2022 38.0803 18.2019 38.0791M24.0234 44.7068L23.9473 44.707C21.1869 44.6712 20.4788 43.6466 19.8457 41.3906C19.6098 40.5501 19.4527 39.2541 19.3493 37.9935C19.271 37.0391 18.1185 36.5618 17.3885 37.1814C16.4228 38.0007 15.3935 38.8077 14.6313 39.2358C12.5885 40.3833 11.3632 40.6072 9.38604 38.6806L9.33235 38.6266M18.2019 38.0791C18.202 38.0794 18.2021 38.0794 18.2021 38.0794C18.2021 38.0794 18.2019 38.0792 18.2018 38.0788C18.2016 38.0783 18.2017 38.0784 18.2019 38.0791ZM18.2019 38.0791C18.2018 38.0791 18.2018 38.079 18.2017 38.0789C18.1995 38.0761 18.1907 38.0669 18.1732 38.0597C18.1558 38.0525 18.1431 38.0527 18.1396 38.0532C18.1395 38.0532 18.1394 38.0532 18.1393 38.0532M18.1393 38.0532C18.14 38.0528 18.1401 38.0528 18.1396 38.053C18.1392 38.0532 18.1388 38.0533 18.1389 38.0533C18.1389 38.0533 18.1391 38.0532 18.1393 38.0532ZM18.1393 38.0532C18.1383 38.0538 18.136 38.0552 18.1325 38.0582C17.1665 38.8779 16.063 39.7506 15.1945 40.2385C14.1613 40.8188 13.0905 41.3192 11.9252 41.2595C10.7101 41.1973 9.65697 40.5503 8.58347 39.5043L8.57684 39.4978L8.57031 39.4912L8.52433 39.4449L9.33235 38.6266M9.33235 38.6266C9.32266 38.617 9.31316 38.6072 9.30363 38.5974L9.33235 38.6266ZM9.30364 9.35574L9.279 9.38091M9.30364 9.35574L9.30366 9.35572C9.31317 9.3459 9.32268 9.33607 9.33235 9.32653M9.30364 9.35574L8.48178 8.55135L8.47953 8.55365M9.30364 9.35574L8.47747 8.55577L8.47903 8.55416L8.45714 8.57652L8.45536 8.57835C7.4095 9.65168 6.7623 10.7046 6.69981 11.9195C6.63988 13.0847 7.14008 14.1555 7.72048 15.1887C8.20744 16.0556 9.07784 17.1566 9.896 18.1211C9.899 18.1247 9.90045 18.1269 9.90103 18.1279M9.279 9.38091L23.9004 3.31738C21.1401 3.35316 20.4319 4.37688 19.7988 6.63281C19.5693 7.45087 19.4143 8.70032 19.3108 9.92867C19.2305 10.8815 18.0803 11.3575 17.3505 10.7396C16.3959 9.9313 15.3835 9.13984 14.6313 8.71731C12.5885 7.5698 11.3632 7.34596 9.38604 9.2725L9.33235 9.32653M9.279 9.38091C7.35246 11.3581 7.57561 12.5827 8.72313 14.6255M9.279 9.38091L8.72313 14.6255M9.33235 9.32653L8.5243 8.50826C8.52273 8.50982 8.52116 8.51137 8.51961 8.51291M9.33235 9.32653L8.51662 8.51592L8.51961 8.51291M8.51961 8.51291C8.50269 8.52973 8.48761 8.5453 8.47953 8.55365M8.47953 8.55365L2.1027 24.0713L3.25255 24.0527L2.10262 24.0651L2.10265 24.0683C2.10246 24.0566 2.10211 24.0349 2.10219 24.0111M9.90103 18.1279C9.90104 18.128 9.90106 18.1281 9.90107 18.1282C9.90152 18.1317 9.90176 18.1444 9.89453 18.1619C9.88729 18.1794 9.87813 18.1882 9.87536 18.1903C9.87525 18.1904 9.87516 18.1905 9.87509 18.1905M9.90103 18.1279C9.90141 18.1286 9.90141 18.1287 9.90122 18.1283C9.90103 18.1278 9.90096 18.1275 9.90096 18.1275C9.90096 18.1275 9.90099 18.1277 9.90103 18.1279ZM9.87509 18.1905C9.87397 18.1908 9.87135 18.1914 9.86672 18.1918C8.607 18.2953 7.2143 18.4583 6.25763 18.7268C5.11664 19.047 4.00567 19.4504 3.22391 20.3165C2.4087 21.2197 2.12148 22.4219 2.10205 23.9206L2.10193 23.9299L2.10196 23.9392L2.10219 24.0111M9.87509 18.1905C9.87487 18.1907 9.87477 18.1908 9.87477 18.1908C9.87477 18.1908 9.87503 18.1906 9.87546 18.1904C9.8759 18.1903 9.87583 18.1903 9.87509 18.1905ZM2.10219 24.0111L2.1022 24.0153L3.25219 24.0117L2.10222 24.0044C2.1022 24.0067 2.10219 24.0089 2.10219 24.0111ZM8.72313 14.6255C9.15047 15.3863 9.95517 16.4131 10.773 17.3772M8.72313 14.6255L10.773 17.3772M10.773 17.3772C11.3923 18.1073 10.9151 19.2596 9.96086 19.3379M10.773 17.3772L9.96086 19.3379M9.96086 19.3379C8.70174 19.4414 7.40788 19.5984 6.56836 19.834M9.96086 19.3379L6.56836 19.834M6.56836 19.834C4.31243 20.4671 3.28774 21.1752 3.25195 23.9355L6.56836 19.834ZM24.0491 2.16641L23.9772 2.16664L44.7478 24.0117C44.7479 23.9981 44.7477 23.9844 44.7475 23.9707L45.8974 23.9584L45.8974 23.9553C45.8974 23.9549 45.8973 23.9546 45.8973 23.9543L45.8973 23.9522L45.897 23.9232L45.897 23.9206C45.8776 22.4221 45.5907 21.22 44.7758 20.3167C43.9942 19.4504 42.8834 19.047 41.7424 18.7268C40.7989 18.462 39.4327 18.3 38.1897 18.1965C38.1849 18.1961 38.1823 18.1955 38.1812 18.1952C38.1811 18.1951 38.181 18.195 38.1808 18.1949C38.178 18.1927 38.1688 18.1839 38.1616 18.1664C38.1543 18.1489 38.1545 18.1362 38.155 18.1326C38.1552 18.1314 38.1552 18.1316 38.1549 18.1323C38.1545 18.1334 38.1552 18.131 38.1602 18.125C38.9601 17.1787 39.8029 16.1075 40.2795 15.259C40.8599 14.2258 41.3601 13.155 41.3002 11.9898C41.2377 10.7749 40.5905 9.72199 39.5446 8.64866L39.5428 8.64679L39.5226 8.62615L39.5211 8.62458C39.5209 8.62437 39.5206 8.62414 39.5204 8.62392C39.5124 8.61557 39.4972 8.59996 39.4803 8.58311C39.4787 8.58157 39.4772 8.58002 39.4756 8.57846L39.4297 8.53221L39.4232 8.52563L39.4165 8.51917C38.343 7.47315 37.2899 6.82618 36.0748 6.76395C34.9095 6.70428 33.8387 7.2046 32.8055 7.78498C31.937 8.2728 30.8335 9.14554 29.8675 9.96522C29.864 9.96821 29.8617 9.96966 29.8607 9.97024C29.8606 9.97025 29.8605 9.97027 29.8604 9.97028C29.8569 9.97073 29.8442 9.97098 29.8268 9.96374C29.8093 9.9565 29.8005 9.94734 29.7983 9.94457C29.7983 9.94447 29.7982 9.94439 29.7981 9.94431C29.7978 9.94319 29.7973 9.94056 29.7969 9.93595C29.6934 8.67483 29.5303 7.27988 29.2615 6.32208C28.9413 5.1811 28.5379 4.07013 27.6717 3.28836C26.7685 2.47315 25.5664 2.18593 24.0676 2.1665L24.0584 2.16638L24.0491 2.16641ZM9.81883 29.8283C9.81893 29.8283 9.81904 29.8284 9.81919 29.8285C9.82202 29.8307 9.83118 29.8396 9.83842 29.857C9.84566 29.8745 9.84546 29.8873 9.84499 29.8909C9.84484 29.8921 9.84477 29.8918 9.84507 29.8911C9.84552 29.8901 9.84478 29.8925 9.83978 29.8984C9.03994 30.8448 8.19707 31.9159 7.72048 32.7644C7.14008 33.7976 6.63988 34.8684 6.69981 36.0336C6.7623 37.2485 7.4095 38.3014 8.45536 39.3748L8.45716 39.3766L8.47745 39.3973L8.47925 39.3992C8.48723 39.4074 8.50256 39.4233 8.51977 39.4404L9.81883 29.8283ZM30.9535 24.0117C30.9535 27.8553 27.8377 30.9711 23.9941 30.9711C20.1506 30.9711 17.0348 27.8553 17.0348 24.0117C17.0348 20.1682 20.1506 17.0523 23.9941 17.0523C27.8377 17.0523 30.9535 20.1682 30.9535 24.0117Z" stroke="#E99934" stroke-width="2.3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 35.8535C30.54 35.8535 35.8418 30.5518 35.8418 24.0117C35.8418 17.4717 30.54 12.1699 24 12.1699C17.46 12.1699 12.1582 17.4717 12.1582 24.0117C12.1582 30.5518 17.46 35.8535 24 35.8535ZM24 31.2891C28.0192 31.2891 31.2773 28.0309 31.2773 24.0117C31.2773 19.9926 28.0192 16.7344 24 16.7344C19.9808 16.7344 16.7227 19.9926 16.7227 24.0117C16.7227 28.0309 19.9808 31.2891 24 31.2891Z" fill="#E89539" fill-opacity="0.92" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.2148C28.5305 32.2148 32.2031 28.5422 32.2031 24.0117C32.2031 19.4813 28.5305 15.8086 24 15.8086C19.4695 15.8086 15.7969 19.4813 15.7969 24.0117C15.7969 28.5422 19.4695 32.2148 24 32.2148ZM24 30.5039C27.5855 30.5039 30.4922 27.5973 30.4922 24.0117C30.4922 20.4262 27.5855 17.5195 24 17.5195C20.4145 17.5195 17.5078 20.4262 17.5078 24.0117C17.5078 27.5973 20.4145 30.5039 24 30.5039Z" fill="url(#paint0_radial_234_2171)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.2148C28.5305 32.2148 32.2031 28.5422 32.2031 24.0117C32.2031 19.4813 28.5305 15.8086 24 15.8086C19.4695 15.8086 15.7969 19.4813 15.7969 24.0117C15.7969 28.5422 19.4695 32.2148 24 32.2148ZM24 30.5039C27.5855 30.5039 30.4922 27.5973 30.4922 24.0117C30.4922 20.4262 27.5855 17.5195 24 17.5195C20.4145 17.5195 17.5078 20.4262 17.5078 24.0117C17.5078 27.5973 20.4145 30.5039 24 30.5039Z" fill="url(#paint1_radial_234_2171)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 31.418C28.0904 31.418 31.4062 28.1021 31.4062 24.0117C31.4062 19.9214 28.0904 16.6055 24 16.6055C19.9096 16.6055 16.5938 19.9214 16.5938 24.0117C16.5938 28.1021 19.9096 31.418 24 31.418ZM30.4922 24.0117C30.4922 27.5972 27.5856 30.5039 24 30.5039C20.4144 30.5039 17.5078 27.5972 17.5078 24.0117C17.5078 20.4262 20.4144 17.5195 24 17.5195C27.5856 17.5195 30.4922 20.4262 30.4922 24.0117Z" fill="url(#paint2_radial_234_2171)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 31.418C28.0904 31.418 31.4062 28.1021 31.4062 24.0117C31.4062 19.9214 28.0904 16.6055 24 16.6055C19.9096 16.6055 16.5938 19.9214 16.5938 24.0117C16.5938 28.1021 19.9096 31.418 24 31.418ZM30.4922 24.0117C30.4922 27.5972 27.5856 30.5039 24 30.5039C20.4144 30.5039 17.5078 27.5972 17.5078 24.0117C17.5078 20.4262 20.4144 17.5195 24 17.5195C27.5856 17.5195 30.4922 20.4262 30.4922 24.0117Z" fill="url(#paint3_radial_234_2171)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 31.418C28.0904 31.418 31.4062 28.1021 31.4062 24.0117C31.4062 19.9214 28.0904 16.6055 24 16.6055C19.9096 16.6055 16.5938 19.9214 16.5938 24.0117C16.5938 28.1021 19.9096 31.418 24 31.418ZM30.4922 24.0117C30.4922 27.5972 27.5856 30.5039 24 30.5039C20.4144 30.5039 17.5078 27.5972 17.5078 24.0117C17.5078 20.4262 20.4144 17.5195 24 17.5195C27.5856 17.5195 30.4922 20.4262 30.4922 24.0117Z" fill="url(#paint4_radial_234_2171)" />
                        <defs>
                            <radialGradient id="paint0_radial_234_2171" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.6563 19.1719) rotate(128.71) scale(16.7149)">
                                <stop stop-color="#FFD200" />
                                <stop offset="1" stop-color="#F4B61A" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_234_2171" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.7812 19.4531) rotate(32.5741) scale(8.01 16.1473)">
                                <stop stop-color="#FFEE9E" />
                                <stop offset="1" stop-color="white" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_234_2171" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.3906 19.4062) rotate(136.338) scale(14.1902 14.1066)">
                                <stop offset="0.246219" stop-color="#FEA82A" />
                                <stop offset="1" stop-color="#FFD200" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_234_2171" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.0938 29.5313) rotate(-45.5162) scale(7.35863 11.6978)">
                                <stop offset="0.342773" stop-color="#FFD200" />
                                <stop offset="1" stop-color="#BCB6C4" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint4_radial_234_2171" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.1719 17.4844) rotate(49.2589) scale(6.24863 11.0931)">
                                <stop offset="0.193614" stop-color="#FFD200" />
                                <stop offset="1" stop-color="#FBD36E" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <p className={`${style.editIconP}`}>الاعدادات</p>
                </div>
                <h1 className={`${style.computer} `}>أنا  الكمبيوتر</h1>
                <div className={` ${style.pointerIcon} editIcon d-flex flex-column `}>
                    <svg className={`${style.computerIcon}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M6.91178 10.9523C4.0514 14.6985 2.50131 19.2808 2.50002 23.9941C2.49507 27.3928 3.29887 30.7407 4.84107 33.7624L2.65312 40.9583C2.65307 40.9585 2.65302 40.9586 2.65298 40.9588C2.65295 40.9589 2.65292 40.959 2.6529 40.959C2.46821 41.5658 2.45187 42.2113 2.60562 42.8267C2.75944 43.4422 3.07769 44.0044 3.52635 44.4531C3.97502 44.9017 4.5372 45.22 5.15276 45.3738C5.76831 45.5276 6.41408 45.5112 7.021 45.3263C7.02104 45.3263 7.02108 45.3263 7.02111 45.3263L14.2044 43.1388C18.1999 45.1839 22.7412 45.9296 27.1906 45.2619C31.8521 44.5624 36.1545 42.3504 39.4357 38.9662C42.7169 35.5821 44.795 31.2135 45.3503 26.5326C45.9056 21.8518 44.9072 17.1182 42.5087 13.0603C40.1103 9.00247 36.4448 5.84526 32.0764 4.07459C27.7079 2.30393 22.8787 2.01794 18.3318 3.26065C13.7849 4.50336 9.77236 7.20588 6.91178 10.9523ZM17.6465 22.349C17.5527 22.2552 17.5 22.128 17.5 21.9954C17.5 21.8628 17.5527 21.7356 17.6465 21.6419C17.7402 21.5481 17.8674 21.4954 18 21.4954H30C30.1326 21.4954 30.2598 21.5481 30.3536 21.6419C30.4473 21.7356 30.5 21.8628 30.5 21.9954C30.5 22.128 30.4473 22.2552 30.3536 22.349C30.2598 22.4427 30.1326 22.4954 30 22.4954H18C17.8674 22.4954 17.7402 22.4427 17.6465 22.349ZM17.6465 29.6419C17.7402 29.5481 17.8674 29.4954 18 29.4954H26C26.1326 29.4954 26.2598 29.5481 26.3536 29.6419C26.4473 29.7356 26.5 29.8628 26.5 29.9954C26.5 30.128 26.4473 30.2552 26.3536 30.349C26.2598 30.4427 26.1326 30.4954 26 30.4954H18C17.8674 30.4954 17.7402 30.4427 17.6465 30.349C17.5527 30.2552 17.5 30.128 17.5 29.9954C17.5 29.8628 17.5527 29.7356 17.6465 29.6419Z" fill="#FFD200" stroke="#E99934" stroke-width="3" />
                    </svg>
                    <p className={`${style.editIconP}`}>المجتمع</p>
                </div>
            </div>
            <img className={`${style.headimage}`} src={headimage} alt="" />
        </div>
        <div className={`${style.couresConatinar} container`}>
            <div className={`${style.progress}`}>

                <div className={`${style.skillProgress}`} style={{ width: "23px" }}></div>
                <div className={`${style.progressContent}`}>
                    <p className={`${style.progressPragraph}`}>تقدمك </p>
                    <p className={`${style.progressPragraph}`}>0%</p>
                </div>

            </div>


            <div className="row gy-5 my-5">

                <div className="col-lg-4">
                    <div className={`${style.videocontent} rounded-5 mb-3`}>
                        <div className='p-3'> <video className={`${style.video} w-100`} src={video}></video></div>
                        <p className={`${style.videoParagraph} pb-2`}>✨   رحلة تحويل الأفكار إلى الاختراعات  </p>
                        <div className={`${style.videoIcon}`}>1</div>
                    </div>
                    <div className={`${style.note} w-100 p-3 rounded-4`}>
                        <p className={`${style.noteParagraph}`}>💡 تعلم اكثر عن عالم الافكار </p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className={`${style.videocontent} rounded-5 mb-3`}>
                        <div className='p-3'> <video className={`${style.video} w-100`} src={video}></video></div>
                        <p className={`${style.videoParagraph} pb-2`}>✨   رحلة تحويل الأفكار إلى الاختراعات  </p>
                        <div className={`${style.videoIcon}`}>2</div>
                    </div>
                    <div className={`${style.note} w-100 p-3 rounded-4`}>
                        <p className={`${style.noteParagraph}`}>💡 تعلم اكثر عن عالم الافكار </p>
                    </div>
                </div>

                

                <div className="col-lg-4">
                    <div className={`${style.iconContent} rounded-5 mb-3`}>
                            <img height={245} className='w-100' src={emogi} alt="" />
                        <p className={`${style.iconParagraph} mt-3 `}> اختبار بسيط </p>
                    </div>

                </div>
                

            </div>
        </div>



    </>
    )
}

export default Course