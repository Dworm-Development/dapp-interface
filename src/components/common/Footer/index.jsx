import React from "react";
import styles from "./footer.module.css";
import handBall from "@/assets/images/footer-logo.svg";
import Socials from "../Socials";


const Footer = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.footer_left}`}>
          <a href="#top">
            <img src={handBall.src} alt="handBall" className="w-full" />
          </a>
        </div>
        <div className={styles.footer_center}>
          <span>
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59473 5.90909C2.59473 5.36553 2.7273 4.87003 2.99245 4.42259C3.25761 3.97514 3.6139 3.61884 4.06135 3.35369C4.50879 3.08854 5.00429 2.95597 5.54785 2.95597C6.0185 2.95597 6.45268 3.05705 6.85041 3.25923C7.25145 3.46141 7.58289 3.73816 7.84473 4.08949C8.10656 4.4375 8.26897 4.83191 8.33194 5.27273H7.12882C7.06253 4.93134 6.87858 4.65294 6.57697 4.4375C6.27536 4.21875 5.93232 4.10938 5.54785 4.10938C5.21641 4.10938 4.9148 4.19058 4.64302 4.35298C4.37124 4.51539 4.15415 4.73248 3.99174 5.00426C3.82934 5.27604 3.74814 5.57765 3.74814 5.90909C3.74814 6.24053 3.82934 6.54214 3.99174 6.81392C4.15415 7.0857 4.37124 7.30279 4.64302 7.4652C4.9148 7.6276 5.21641 7.70881 5.54785 7.70881C5.93232 7.70881 6.25713 7.60109 6.52228 7.38565C6.79075 7.1669 6.95978 6.88684 7.02939 6.54545H8.23251C8.16954 6.98627 8.01542 7.38234 7.77015 7.73366C7.52489 8.08168 7.21002 8.35677 6.82555 8.55895C6.4444 8.76113 6.0185 8.86222 5.54785 8.86222C5.00429 8.86222 4.50879 8.72964 4.06135 8.46449C3.6139 8.19934 3.25761 7.84304 2.99245 7.3956C2.7273 6.94815 2.59473 6.45265 2.59473 5.90909ZM5.49814 11.1591C4.7756 11.1591 4.09615 11.0232 3.45978 10.7514C2.82673 10.4796 2.26826 10.1035 1.78436 9.62287C1.30377 9.13897 0.925929 8.58049 0.650835 7.94744C0.379054 7.31439 0.244821 6.63494 0.248136 5.90909C0.25145 5.18324 0.388997 4.50379 0.660778 3.87074C0.935872 3.23769 1.31371 2.68087 1.7943 2.20028C2.27489 1.71638 2.83171 1.33854 3.46476 1.06676C4.0978 0.794981 4.7756 0.659091 5.49814 0.659091C6.22399 0.659091 6.90344 0.794981 7.53649 1.06676C8.17285 1.33854 8.72967 1.71638 9.20694 2.20028C9.68753 2.68087 10.0637 3.23769 10.3355 3.87074C10.6073 4.50379 10.7448 5.18324 10.7481 5.90909C10.7515 6.63494 10.6172 7.31439 10.3454 7.94744C10.0737 8.58049 9.69747 9.13897 9.21689 9.62287C8.7363 10.1035 8.17782 10.4796 7.54146 10.7514C6.9051 11.0232 6.22399 11.1591 5.49814 11.1591ZM5.49814 10.0057C6.0649 10.0057 6.59686 9.89962 7.09402 9.6875C7.59118 9.47538 8.02702 9.18205 8.40155 8.80753C8.77607 8.433 9.0694 7.99882 9.28152 7.50497C9.49364 7.00781 9.59804 6.47751 9.59473 5.91406C9.59141 5.3473 9.48369 4.81534 9.27157 4.31818C9.05945 3.82102 8.76613 3.38518 8.3916 3.01065C8.01708 2.63613 7.58289 2.3428 7.08905 2.13068C6.5952 1.91856 6.0649 1.8125 5.49814 1.8125C4.93469 1.8125 4.40604 1.91856 3.9122 2.13068C3.41835 2.3428 2.98417 2.63778 2.60964 3.01562C2.23511 3.39015 1.94013 3.82599 1.7247 4.32315C1.51258 4.817 1.40486 5.3473 1.40154 5.91406C1.39823 6.47419 1.50263 7.00284 1.71476 7.5C1.92688 7.99384 2.2202 8.42803 2.59473 8.80256C2.97257 9.17708 3.40841 9.47206 3.90226 9.6875C4.39941 9.89962 4.93137 10.0057 5.49814 10.0057Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-white lato-14">2023. All rights reserved.</span>
        </div>
        <div className={styles.footer_right}>
          <Socials />
        </div>
        {/* <div className={styles.main_content}></div> */}
      </div>
    </section>
  );
};

export default Footer;
