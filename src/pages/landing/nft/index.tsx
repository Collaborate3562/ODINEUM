import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import styles from "./NFT.module.scss";

function Nft() {
  return (
    <div className={`${styles.nfts} max-w-1920 mx-auto`}>
      <div className="flex flex-col-reverse md:flex-row justify-between relative items-center px-4 sm:px-8 max-w-1920 mx-auto" id="nft">
        <div className="flex gap-4">
          <div className="bg-gradient-to-b from-app-yellow-light to-app-yellow-dark h-90 w-3">{" "}</div>
          <motion.div
            className="text-white text-left text-xl xl:leading-10 2xl:text-xl 2xl:leading-11 3xl:text-2xl 3xl:leading-12 w-full md:w-2/3  xl:w-1/2"
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h6>BRINGING REAL UTILITY TO OUR NFTS
              EARN PASSIVE INCOME BY HOLDING AND STAKING
              DIFFERENT COMBINATIONS YIELD
              DIFFERENT REWARDS</h6>
          </motion.div>
        </div>
        <motion.div className="relative cursor-pointer"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          id="nfts"
        >

          <img src="/img/brush_nft.png" alt="brash nft" className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 w-4/5" />
          <p className={`${styles.title}`}>NFTS</p>
        </motion.div>
      </div>
      <div className="mt-20 flex flex-col lg:flex-row justify-between lg:pl-20 items-end px-4 sm:px-8 md:px-16">
        <div className="justify-around w-full lg:w-2/3 md:flex hidden">
          <Link to="/nft" className={`${styles.hover} ${styles.nft_1} z-0`}>
            <img src="img/asset/1.jpg" alt="nft1" />
          </Link>
          <Link to="/nft" className={`${styles.hover} ${styles.nft_2} z-10 -ml-36 -mt-12`}>
            <img src="img/asset/2.jpg" alt="nft2" />
          </Link>
          <Link to="/nft" className={`${styles.hover} ${styles.nft_3} z-20 -ml-36 -mt-16`}>
            <img src="img/asset/3.jpg" alt="nft3" />
          </Link>
          <Link to="/nft" className={`${styles.hover} ${styles.nft_4} z-10 -ml-36 -mt-12`}>
            <img src="img/asset/4.jpg" alt="nft4" />
          </Link>
          <Link to="/nft" className={`${styles.hover} ${styles.nft_5} z-0 -ml-36`}>
            <img src="img/asset/5.jpg" alt="nft5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-16 relative md:hidden">
          <Link to="/nft" className="hover:z-50 hover:absolute hover:scale-125 transform duration-150">
            <img src="img/asset/1.jpg" alt="nft1" />
          </Link>
          <Link to="/nft" className="hover:z-50 hover:absolute hover:scale-125 transform duration-150">
            <img src="img/asset/2.jpg" alt="nft2" />
          </Link>
          <Link to="/nft" className="hover:z-50 hover:absolute hover:scale-125 transform duration-150">
            <img src="img/asset/3.jpg" alt="nft1" />
          </Link>
          <Link to="/nft" className="hover:z-50 hover:absolute hover:scale-125 transform duration-150">
            <img src="img/asset/4.jpg" alt="nft2" />
          </Link>
          <Link to="/nft" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hover:scale-125 transform duration-150">
            <img src="img/asset/5.jpg" alt="nft2" />
          </Link>
        </div>
        <div className="uppercase text-center text-white text-xl w-full lg:w-1/4 mt-8">
          <p>View NFT</p>
          <p>Breakdown</p>
          <p>(pdf)</p>
          <motion.button
            className="px-14 py-3 bg-app-cyan rounded-full mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Nft;